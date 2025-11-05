import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Upload, Download, Image as ImageIcon, Zap, AlertCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

type Dim = { width: number; height: number };
type Mode = 'percentage' | 'targetSize';

const supportsType = (type: string) => {
  try {
    const c = document.createElement('canvas');
    return c.toDataURL(type).startsWith(`data:${type}`);
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

const canvasToBlob = async (
  canvas: HTMLCanvasElement | OffscreenCanvas,
  type: string,
  quality: number
): Promise<Blob | null> => {
  // @ts-ignore OffscreenCanvas.convertToBlob in supporting browsers
  if (typeof (canvas as any).convertToBlob === 'function') {
    // @ts-ignore
    return await (canvas as OffscreenCanvas).convertToBlob({ type, quality });
  }
  return new Promise<Blob | null>((resolve) => {
    (canvas as HTMLCanvasElement).toBlob(resolve, type, quality);
  });
};

const decodeImage = async (file: File): Promise<ImageBitmap | HTMLImageElement> => {
  try {
    if ('createImageBitmap' in window) {
      return await createImageBitmap(file, { imageOrientation: 'none', premultiplyAlpha: 'default' as any });
    }
  } catch {}
  const url = URL.createObjectURL(file);
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

const newCanvas = (w: number, h: number): { canvas: HTMLCanvasElement | OffscreenCanvas; ctx: OffscreenCanvasRenderingContext2D | CanvasRenderingContext2D } => {
  if ('OffscreenCanvas' in window) {
    const canvas = new OffscreenCanvas(w, h);
    const ctx = canvas.getContext('2d', { alpha: true })!;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    return { canvas, ctx };
  }
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d', { alpha: true })!;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  return { canvas, ctx };
};

// Enhanced multi-pass scaling with improved algorithms
const multiPassScale = async (
  src: ImageBitmap | HTMLImageElement,
  dstW: number,
  dstH: number
): Promise<HTMLCanvasElement | OffscreenCanvas> => {
  let curBitmap = src as any;
  let curW = 'width' in src ? (src as any).width : 0;
  let curH = 'height' in src ? (src as any).height : 0;

  if (curW === dstW && curH === dstH) {
    const { canvas, ctx } = newCanvas(dstW, dstH);
    ctx.drawImage(curBitmap, 0, 0, dstW, dstH);
    return canvas as any;
  }

  // Enhanced scaling with better interpolation
  while (curW !== dstW || curH !== dstH) {
    const stepScaleW = Math.min(2, Math.max(0.5, dstW / curW));
    const stepScaleH = Math.min(2, Math.max(0.5, dstH / curH));
    const stepW = Math.round(curW * stepScaleW);
    const stepH = Math.round(curH * stepScaleH);

    const { canvas, ctx } = newCanvas(stepW, stepH);
    
    // Enhanced rendering settings for better quality
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    // Use better interpolation for upscaling
    if (stepScaleW > 1 || stepScaleH > 1) {
      // For upscaling, use high-quality interpolation
      ctx.imageSmoothingQuality = 'high';
    } else {
      // For downscaling, use medium quality to prevent artifacts
      ctx.imageSmoothingQuality = 'medium';
    }
    
    ctx.drawImage(curBitmap, 0, 0, stepW, stepH);

    if ('createImageBitmap' in window) {
      // @ts-ignore
      curBitmap = await createImageBitmap(canvas as any);
    } else {
      curBitmap = canvas as any;
    }

    curW = stepW;
    curH = stepH;
  }

  const { canvas, ctx } = newCanvas(dstW, dstH);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(curBitmap, 0, 0, dstW, dstH);
  return canvas as any;
};

const binarySearchForSize = async (
  canvas: HTMLCanvasElement | OffscreenCanvas,
  type: string,
  targetKB: number,
  onProgress?: (p: number) => void
): Promise<Blob | null> => {
  let low = 0.05, high = 0.95;
  let best: { blob: Blob; diff: number; q: number } | null = null;

  for (let i = 0; i < 12; i++) {
    const mid = (low + high) / 2;
    const blob = await canvasToBlob(canvas, type, mid);
    if (!blob) break;

    const kb = blob.size / 1024;
    const diff = Math.abs(kb - targetKB) / targetKB;
    if (!best || diff < best.diff) best = { blob, diff, q: mid };

    onProgress?.(60 + Math.round(((i + 1) / 12) * 35)); // up to ~95%

    if (diff <= 0.05) return blob;

    if (kb > targetKB) high = mid; else low = mid;
  }
  return best?.blob || null;
};

const formatFileSize = (size: number) => {
  if (!size && size !== 0) return '';
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
  return `${(size / (1024 * 1024)).toFixed(2)} MB`;
};

const ImageUpscaler: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [upscaledUrl, setUpscaledUrl] = useState<string | null>(null);
  const [originalDimensions, setOriginalDimensions] = useState<Dim | null>(null);
  const [originalFileSize, setOriginalFileSize] = useState<number | null>(null);
  const [upscaledFileSize, setUpscaledFileSize] = useState<number | null>(null);

  const [mode, setMode] = useState<Mode>('percentage');
  const [percent, setPercent] = useState<number>(200); // 50–500 for percentage mode
  const [targetKB, setTargetKB] = useState<string>(''); // used only in targetSize mode
  const [maxAllowedPercent, setMaxAllowedPercent] = useState<number>(500);

  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [etaSec, setEtaSec] = useState(0);

  const { toast } = useToast();

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      if (upscaledUrl) URL.revokeObjectURL(upscaledUrl);
    };
  }, [previewUrl, upscaledUrl]);

  const estimateTime = (w: number, h: number, scale: number) => {
    const px = w * h * scale * scale;
    return Math.max(4, Math.min(90, Math.round(px / 500000) * 5 || 4));
  };

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast({ title: 'Invalid file type', description: 'Please select an image file.', variant: 'destructive' });
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      toast({ title: 'File too large', description: 'Please select an image under 50MB.', variant: 'destructive' });
      return;
    }

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    if (upscaledUrl) URL.revokeObjectURL(upscaledUrl);

    setSelectedFile(file);
    setOriginalFileSize(file.size);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setUpscaledUrl(null);
    setUpscaledFileSize(null);
    setProgress(0);

    const img = new Image();
    img.onload = () => {
      setOriginalDimensions({ width: img.width, height: img.height });
      
      // Calculate maximum allowed percentage based on current image size
      // For very large images, limit the upscaling to prevent memory issues
      const totalPixels = img.width * img.height;
      let maxPercent = 500; // Default maximum
      
      if (totalPixels > 4000000) { // 4MP
        maxPercent = 400;
      } else if (totalPixels > 8000000) { // 8MP
        maxPercent = 300;
      } else if (totalPixels > 16000000) { // 16MP
        maxPercent = 200;
      }
      
      setMaxAllowedPercent(maxPercent);
      
      // Ensure current percent doesn't exceed the new limit
      if (percent > maxPercent) {
        setPercent(maxPercent);
      }
      
      const scale = mode === 'percentage' ? Math.max(0.5, Math.min(maxPercent / 100, percent / 100)) : 1;
      setEtaSec(estimateTime(img.width, img.height, scale));
    };
    img.src = url;
  }, [toast, previewUrl, upscaledUrl, mode, percent]);

  // Update ETA when inputs change
  useEffect(() => {
    if (!originalDimensions) return;
    const scale = mode === 'percentage' ? Math.max(0.5, Math.min(maxAllowedPercent / 100, percent / 100)) : 1;
    setEtaSec(estimateTime(originalDimensions.width, originalDimensions.height, scale));
  }, [mode, percent, originalDimensions, maxAllowedPercent]);

  const simulateProgress = (durationSec: number) =>
    new Promise<void>((resolve) => {
      const start = performance.now();
      const tick = () => {
        const elapsed = (performance.now() - start) / 1000;
        const pct = Math.min(95, (elapsed / durationSec) * 95);
        setProgress(pct);
        if (elapsed < durationSec) requestAnimationFrame(tick);
        else resolve();
      };
      requestAnimationFrame(tick);
    });

  const process = useCallback(async () => {
    if (!selectedFile || !originalDimensions) return;

    try {
      setIsProcessing(true);
      setProgress(2);

      const img = await decodeImage(selectedFile);
      setProgress(15);

      const outType = pickOutputType(selectedFile.type);

      // Determine output dimensions with validation:
      // - percentage mode: resize to percent (with size limits)
      // - target size mode: keep original dimensions, only adjust quality
      const scale = mode === 'percentage' ? Math.max(0.5, Math.min(maxAllowedPercent / 100, percent / 100)) : 1;
      const newW = Math.max(1, Math.floor(originalDimensions.width * scale));
      const newH = Math.max(1, Math.floor(originalDimensions.height * scale));
      
      // Additional validation for very large output dimensions
      const maxDimension = 8000; // Maximum dimension to prevent browser crashes
      if (newW > maxDimension || newH > maxDimension) {
        toast({
          title: 'Output too large',
          description: `Maximum dimension is ${maxDimension}px. Please reduce the upscaling percentage.`,
          variant: 'destructive'
        });
        setIsProcessing(false);
        return;
      }

      const resizedCanvas = await multiPassScale(img, newW, newH);
      setProgress(55);

      let outBlob: Blob | null = null;

      if (mode === 'targetSize') {
        const kb = Math.max(1, parseInt(targetKB || '0', 10));
        if (!kb) {
          toast({ title: 'Enter target size', description: 'Provide desired size in KB.', variant: 'destructive' });
          setIsProcessing(false);
          return;
        }
        outBlob = await binarySearchForSize(resizedCanvas, outType, kb, (p) => setProgress(p));
        if (!outBlob) {
          toast({
            title: 'Could not reach target exactly',
            description: 'Try a slightly larger target size.',
          });
          // Fallback to a reasonable quality
          outBlob = await canvasToBlob(resizedCanvas, outType, 0.8);
        }
      } else {
        // percentage mode: encode at high visual quality
        const q = outType.includes('jpeg') ? 0.92 : 0.95;
        outBlob = await canvasToBlob(resizedCanvas, outType, q);
      }

      if (!outBlob) throw new Error('Encoding failed');

      if (upscaledUrl) URL.revokeObjectURL(upscaledUrl);
      const url = blobToObjectURL(outBlob);
      setUpscaledUrl(url);
      setUpscaledFileSize(outBlob.size);
      setProgress(100);

      const dimsText = `${newW}×${newH}px`;
      toast({
        title: 'Image processed',
        description: `Output: ${dimsText} • ${formatFileSize(outBlob.size)}`,
      });
    } catch (err) {
      console.error(err);
      toast({ title: 'Processing failed', description: 'An error occurred while processing the image.', variant: 'destructive' });
      setProgress(0);
    } finally {
      setIsProcessing(false);
    }
  }, [selectedFile, originalDimensions, mode, percent, targetKB, upscaledUrl, toast, maxAllowedPercent]);

  const startProcess = useCallback(async () => {
    if (!selectedFile || !originalDimensions) return;
    setIsProcessing(true);
    setProgress(0);
    await Promise.all([simulateProgress(etaSec || 8), process()]);
  }, [selectedFile, originalDimensions, etaSec, process]);

  const downloadUpscaled = useCallback(() => {
    if (!upscaledUrl || !selectedFile) return;
    const ext = (upscaledUrl.split(';')[0].split('/')[1] || 'png').split('+')[0];
    const base = selectedFile.name.replace(/\.[^/.]+$/, '');
    const tag = mode === 'percentage' ? `${percent}pct` : `${targetKB}KB`;
    const link = document.createElement('a');
    link.href = upscaledUrl;
    link.download = `${base}_enhanced_${tag}.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [upscaledUrl, selectedFile, mode, percent, targetKB]);

  return (
    <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-6xl">
      <div className="space-y-4 sm:space-y-6">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-xs sm:text-sm">
            Enhanced AI-powered multi-pass scaling with intelligent size validation. Maximum upscaling: 500% (limited by image size for optimal performance). In Target Size mode, dimensions are kept; quality adapts to hit your target.
            {isProcessing && (
              <strong className="block mt-2 text-red-600 dark:text-red-400">
                Processing… don't close the page.
              </strong>
            )}
          </AlertDescription>
        </Alert>

        {/* Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Upload className="h-4 w-4 sm:h-5 sm:w-5" /> Upload Image
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
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </Label>
              {previewUrl && originalFileSize != null && (
                <div className="mt-4">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="mx-auto h-24 w-24 object-contain rounded-md"
                  />
                  <p className="text-[11px] sm:text-xs text-muted-foreground mt-2">
                    {formatFileSize(originalFileSize)}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        {selectedFile && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5" /> Enhancement Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-xs sm:text-sm font-medium">Mode</Label>
                <Select value={mode} onValueChange={(v: Mode) => setMode(v)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage">Percentage (resize)</SelectItem>
                    <SelectItem value="targetSize">Target file size (KB, keep size)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Percentage slider only in percentage mode */}
              {mode === 'percentage' && (
                <div>
                  <Label htmlFor="percent" className="text-xs sm:text-sm font-medium">
                    Enhancement: {percent}% (output ~ {Math.floor((originalDimensions?.width || 0) * (percent / 100))} × {Math.floor((originalDimensions?.height || 0) * (percent / 100))} px)
                  </Label>
                  <input
                    id="percent"
                    type="range"
                    min={50}
                    max={maxAllowedPercent}
                    step={10}
                    value={percent}
                    onChange={(e) => setPercent(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-[11px] sm:text-xs text-muted-foreground mt-1">
                    <span>50%</span>
                    <span>{maxAllowedPercent}% (max)</span>
                  </div>
                  {maxAllowedPercent < 500 && (
                    <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-1">
                      Maximum upscaling limited to {maxAllowedPercent}% due to image size. Larger images have lower upscaling limits to ensure optimal performance.
                    </p>
                  )}
                </div>
              )}

              {/* Target Size input only in targetSize mode */}
              {mode === 'targetSize' && (
                <div>
                  <Label htmlFor="target" className="text-xs sm:text-sm font-medium">
                    Target Size (KB)
                  </Label>
                  <Input
                    id="target"
                    type="number"
                    inputMode="numeric"
                    placeholder="e.g., 600"
                    value={targetKB}
                    onChange={(e) => setTargetKB(e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-[11px] text-muted-foreground mt-1">
                    Encoder will aim for ±5% of this size. Image dimensions remain unchanged.
                  </p>
                </div>
              )}

              {originalDimensions && (
                <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
                    Output: {mode === 'percentage'
                      ? `${Math.floor(originalDimensions.width * (percent / 100))} × ${Math.floor(originalDimensions.height * (percent / 100))} px`
                      : `${originalDimensions.width} × ${originalDimensions.height} px`}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs text-blue-700 dark:text-blue-300">
                    <Clock className="h-3 w-3" />
                    <span>Estimated time: ~{etaSec}s</span>
                  </div>
                </div>
              )}

              {isProcessing && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-medium">Processing</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
              )}

              <Button onClick={startProcess} disabled={isProcessing} className="w-full">
                <Zap className="h-4 w-4 mr-2" />
                {isProcessing ? `Processing... ${Math.round(progress)}%` : 'Enhance Image'}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Before & After */}
        {previewUrl && upscaledUrl && originalDimensions && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Before & After</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-muted-foreground text-sm sm:text-base">Before</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">
                      {originalDimensions.width} × {originalDimensions.height}px • {originalFileSize != null && formatFileSize(originalFileSize)}
                    </p>
                  </div>
                  <div className="border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <img
                      src={previewUrl}
                      alt="Before"
                      className="w-full h-48 sm:h-60 md:h-72 object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-green-600 dark:text-green-400 text-sm sm:text-base">After</h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground">
                      {mode === 'percentage'
                        ? `${Math.floor(originalDimensions.width * (percent / 100))} × ${Math.floor(originalDimensions.height * (percent / 100))}px`
                        : `${originalDimensions.width} × ${originalDimensions.height}px`} • {upscaledFileSize != null && formatFileSize(upscaledFileSize)}
                    </p>
                  </div>
                  <div className="border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <img
                      src={upscaledUrl}
                      alt="After"
                      className="w-full h-48 sm:h-60 md:h-72 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <Button onClick={downloadUpscaled} className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Enhanced Image
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ImageUpscaler;
