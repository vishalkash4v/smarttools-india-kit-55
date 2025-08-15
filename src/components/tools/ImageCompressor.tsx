import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Download, Image as ImageIcon, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Mode = 'quality' | 'size';

const supportsType = (type: string) => {
  try {
    const c = document.createElement('canvas');
    const data = c.toDataURL(type);
    return data.startsWith(`data:${type}`);
  } catch {
    return false;
  }
};

const pickOutputType = (srcType: string) => {
  if (supportsType('image/webp')) return 'image/webp';
  if (supportsType(srcType)) return srcType;
  return 'image/jpeg';
};

const blobToObjectURL = (b: Blob) => URL.createObjectURL(b);

const toBlob = (canvas: HTMLCanvasElement, type: string, quality: number) =>
  new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, type, quality);
  });

const decodeImage = async (file: File): Promise<ImageBitmap | HTMLImageElement> => {
  const url = URL.createObjectURL(file);
  try {
    if ('createImageBitmap' in window) {
      const bmp = await createImageBitmap(file);
      URL.revokeObjectURL(url);
      return bmp;
    }
  } catch {}
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = reject;
    img.src = url;
  });
};

const getCanvas = (w: number, h: number) => {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) throw new Error('Canvas not supported');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  return { canvas, ctx };
};

const binarySearchToTarget = async (
  canvas: HTMLCanvasElement,
  type: string,
  targetSizeKB: number,
  {
    minQ = 0.05,
    maxQ = 0.95,
    tolerance = 0.05,
    maxIter = 12,
    onProgress,
  }: {
    minQ?: number;
    maxQ?: number;
    tolerance?: number;
    maxIter?: number;
    onProgress?: (p: number) => void;
  }
): Promise<Blob | null> => {
  let low = minQ;
  let high = maxQ;
  let best: { blob: Blob; diff: number; q: number } | null = null;

  for (let i = 0; i < maxIter; i++) {
    const mid = (low + high) / 2;
    const blob = await toBlob(canvas, type, mid);
    if (!blob) break;

    const kb = blob.size / 1024;
    const diff = Math.abs(kb - targetSizeKB) / targetSizeKB;

    if (!best || diff < best.diff) best = { blob, diff, q: mid };

    onProgress?.(50 + Math.round(((i + 1) / maxIter) * 40));

    if (diff <= tolerance) return blob;

    if (kb > targetSizeKB) high = mid;
    else low = mid;
  }
  return best?.blob || null;
};

const nameWithExt = (file: File, ext: string) => {
  const base = file.name.replace(/\.[^/.]+$/, '');
  return `${base}.${ext}`;
};

const ImageCompressor = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string | null>(null);
  const [compressedFile, setCompressedFile] = useState<string | null>(null);
  const [compressedBlob, setCompressedBlob] = useState<Blob | null>(null);
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [compressedSize, setCompressedSize] = useState<number>(0);

  const [quality, setQuality] = useState<number>(80);
  const [targetSize, setTargetSize] = useState<string>('');
  const [compressionMode, setCompressionMode] = useState<Mode>('quality');
  const [maxWidth, setMaxWidth] = useState<string>('1920');
  const [maxHeight, setMaxHeight] = useState<string>('1080');

  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [compressionProgress, setCompressionProgress] = useState<number>(0);
  const { toast } = useToast();

  // Clean up object URLs
  useEffect(() => {
    return () => {
      if (originalPreview) URL.revokeObjectURL(originalPreview);
      if (compressedFile) URL.revokeObjectURL(compressedFile);
    };
  }, [originalPreview, compressedFile]);

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({ title: 'Invalid file type', description: 'Please select an image file.', variant: 'destructive' });
      return;
    }
    if (originalPreview) URL.revokeObjectURL(originalPreview);
    if (compressedFile) URL.revokeObjectURL(compressedFile);

    setSelectedFile(file);
    setOriginalSize(file.size);
    const previewUrl = URL.createObjectURL(file);
    setOriginalPreview(previewUrl);
    setCompressedFile(null);
    setCompressedBlob(null);
    setCompressedSize(0);
  }, [toast, originalPreview, compressedFile]);

  const compressImage = useCallback(async () => {
    if (!selectedFile) return;

    setIsCompressing(true);
    setCompressionProgress(5);

    try {
      const img = await decodeImage(selectedFile);
      setCompressionProgress(20);

      const maxW = parseInt(maxWidth) || 1920;
      const maxH = parseInt(maxHeight) || 1080;
      const srcW = 'width' in img ? (img as any).width : 0;
      const srcH = 'height' in img ? (img as any).height : 0;

      let width = srcW;
      let height = srcH;
      if (width > maxW || height > maxH) {
        const ratio = Math.min(maxW / width, maxH / height);
        width = Math.max(1, Math.floor(width * ratio));
        height = Math.max(1, Math.floor(height * ratio));
      }

      const { canvas, ctx } = getCanvas(width, height);
      ctx.drawImage(img as any, 0, 0, width, height);
      setCompressionProgress(40);

      const outType = pickOutputType(selectedFile.type);

      let outBlob: Blob | null = null;

      if (compressionMode === 'size') {
        const targetKB = Math.max(1, parseInt(targetSize || '0'));
        if (!targetKB) {
          toast({ title: 'Enter a target size', description: 'Provide size in KB.', variant: 'destructive' });
          setIsCompressing(false);
          return;
        }
        outBlob = await binarySearchToTarget(canvas, outType, targetKB, {
          onProgress: (p) => setCompressionProgress(Math.min(95, p)),
        });

        if (!outBlob || outBlob.size / 1024 > targetKB * 1.25) {
          toast({
            title: 'Could not reach target exactly',
            description: 'Try a slightly larger target or reduce max width/height.',
          });
        }
      } else {
        const q = Math.max(5, Math.min(95, quality)) / 100;
        outBlob = await toBlob(canvas, outType, q);
      }

      if (!outBlob) throw new Error('Encoding failed');

      if (compressionMode === 'quality' && outBlob.size >= selectedFile.size) {
        setCompressionProgress(100);
        toast({
          title: 'Compression not beneficial',
          description: 'Output would be larger than original. Lower quality or dimensions.',
          variant: 'destructive',
        });
        setIsCompressing(false);
        return;
      }

      const url = blobToObjectURL(outBlob);
      if (compressedFile) URL.revokeObjectURL(compressedFile);

      setCompressedFile(url);
      setCompressedBlob(outBlob);
      setCompressedSize(outBlob.size);
      setCompressionProgress(100);

      const reductionPercent = ((1 - outBlob.size / selectedFile.size) * 100).toFixed(1);
      toast({
        title: 'Image compressed',
        description: `Size reduced by ${reductionPercent}% (${(selectedFile.size / 1024 / 1024).toFixed(2)}MB → ${(outBlob.size / 1024 / 1024).toFixed(2)}MB)`,
      });
    } catch (error) {
      console.error('Compression error:', error);
      toast({ title: 'Compression failed', description: 'An error occurred while compressing the image.', variant: 'destructive' });
    } finally {
      setIsCompressing(false);
    }
  }, [selectedFile, quality, targetSize, compressionMode, maxWidth, maxHeight, toast, compressedFile]);

  const downloadCompressed = useCallback(() => {
    if (compressedFile && selectedFile && compressedBlob) {
      const outExt = compressedBlob.type.split('/')[1] || 'bin';
      const link = document.createElement('a');
      link.href = compressedFile;
      link.download = `compressed_${nameWithExt(selectedFile, outExt)}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [compressedFile, selectedFile, compressedBlob]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-6xl">
      <div className="text-center mb-4 sm:mb-6">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground mb-2">
          Image Compressor
        </h1>
        <p className="text-muted-foreground text-xs sm:text-sm md:text-base px-2 sm:px-4">
          Compress images by percentage quality or to a target size (KB)
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 md:gap-8">
        {/* Upload */}
        <Card>
          <CardHeader className="pb-3 sm:pb-4">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Upload className="h-4 w-4 sm:h-5 sm:w-5" />
              Upload Image
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 sm:p-6 text-center">
              <ImageIcon className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground mb-2 sm:mb-4" />
              <Label htmlFor="image-upload" className="cursor-pointer">
                <span className="text-xs sm:text-sm font-medium text-primary hover:text-primary/80">
                  Tap to upload an image
                </span>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </Label>
              <p className="text-[11px] sm:text-xs text-muted-foreground mt-2">
                Supports JPG, PNG, WebP, etc.
              </p>
            </div>

            {selectedFile && (
              <div className="bg-muted/50 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm font-medium truncate">Selected: {selectedFile.name}</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground">
                  Original size: {formatFileSize(originalSize)}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* NEW: Selected Image Preview (before compression) */}
        {originalPreview && !compressedFile && (
          <Card>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg">Selected Image Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg overflow-hidden">
                <img
                  src={originalPreview}
                  alt="Selected"
                  className="w-full h-40 sm:h-56 md:h-72 object-contain bg-gray-50"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Settings */}
        {selectedFile && (
          <Card>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
                Compression Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-xs sm:text-sm font-medium">Mode</Label>
                <Select value={compressionMode} onValueChange={(value: Mode) => setCompressionMode(value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quality">Percentage quality</SelectItem>
                    <SelectItem value="size">Target size (KB)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {compressionMode === 'quality' ? (
                <div>
                  <Label htmlFor="quality" className="text-xs sm:text-sm font-medium">
                    Quality: {quality}%
                  </Label>
                  <input
                    id="quality"
                    type="range"
                    min="5"
                    max="95"
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-[11px] sm:text-xs text-muted-foreground mt-1">
                    <span>Smaller</span>
                    <span>Better</span>
                  </div>
                </div>
              ) : (
                <div>
                  <Label htmlFor="targetSize" className="text-xs sm:text-sm font-medium">
                    Target Size (KB)
                  </Label>
                  <Input
                    id="targetSize"
                    type="number"
                    inputMode="numeric"
                    placeholder="e.g., 350"
                    value={targetSize}
                    onChange={(e) => setTargetSize(e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-[11px] text-muted-foreground mt-1">
                    Tries to hit ±5%. If not reachable, lower dimensions or raise target.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="maxWidth" className="text-xs sm:text-sm font-medium">
                    Max Width (px)
                  </Label>
                  <Input
                    id="maxWidth"
                    type="number"
                    inputMode="numeric"
                    value={maxWidth}
                    onChange={(e) => setMaxWidth(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="maxHeight" className="text-xs sm:text-sm font-medium">
                    Max Height (px)
                  </Label>
                  <Input
                    id="maxHeight"
                    type="number"
                    inputMode="numeric"
                    value={maxHeight}
                    onChange={(e) => setMaxHeight(e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <Button onClick={compressImage} disabled={isCompressing} className="w-full">
                {isCompressing ? 'Compressing...' : 'Compress Image'}
              </Button>

              {isCompressing && (
                <div className="space-y-2">
                  <Progress value={compressionProgress} className="w-full" />
                  <p className="text-xs text-center text-muted-foreground">
                    {compressionProgress}% complete
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Before & After */}
        {originalPreview && compressedFile && (
          <Card>
            <CardHeader className="pb-3 sm:pb-4">
              <CardTitle className="text-base sm:text-lg">Before & After</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-destructive text-sm sm:text-base">Original</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">
                      Size: {formatFileSize(originalSize)}
                    </p>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <img
                      src={originalPreview}
                      alt="Original"
                      className="w-full h-40 sm:h-56 md:h-72 object-contain bg-gray-50"
                    />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-green-600 text-sm sm:text-base">Compressed</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">
                      Size: {formatFileSize(compressedSize)}
                    </p>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <img
                      src={compressedFile}
                      alt="Compressed"
                      className="w-full h-40 sm:h-56 md:h-72 object-contain bg-gray-50"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                <div className="bg-green-50 dark:bg-green-950 rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm font-medium text-green-800 dark:text-green-200">
                    Size reduction: {((1 - compressedSize / originalSize) * 100).toFixed(1)}%
                  </p>
                </div>

                <Button onClick={downloadCompressed} className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Compressed Image
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ImageCompressor;
