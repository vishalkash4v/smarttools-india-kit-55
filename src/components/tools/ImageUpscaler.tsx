import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Upload, Download, Image as ImageIcon, Zap, AlertCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ImageUpscaler = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [upscaledUrl, setUpscaledUrl] = useState(null);
  const [scaleFactor, setScaleFactor] = useState('2');
  const [isUpscaling, setIsUpscaling] = useState(false);
  const [progress, setProgress] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(0);
  const [originalDimensions, setOriginalDimensions] = useState(null);
  const [originalFileSize, setOriginalFileSize] = useState(null);
  const [upscaledFileSize, setUpscaledFileSize] = useState(null);
  const { toast } = useToast();

  const scaleOptions = [
    { value: '0.5', label: '0.5x' },
    { value: '1', label: '1x' },
    { value: '1.5', label: '1.5x' },
    { value: '2', label: '2x' },
  ];

  const formatFileSize = (size) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleFileSelect = useCallback((event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please select an image file.",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

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
      const pixelCount = img.width * img.height;
      const scale = parseFloat(scaleFactor);
      const newPixelCount = pixelCount * scale * scale;
      const timeEstimate = Math.max(5, Math.min(60, Math.round(newPixelCount / 500000)));
      setEstimatedTime(timeEstimate);
    };
    img.src = url;
  }, [toast, scaleFactor]);

  const simulateProgress = (duration) => {
    const steps = 100;
    const interval = duration * 1000 / steps;
    let currentStep = 0;

    return new Promise<void>((resolve) => {
      const progressInterval = setInterval(() => {
        currentStep++;
        const progressValue = Math.min(99, (currentStep / steps) * 100);
        setProgress(progressValue);

        if (currentStep >= steps) {
          clearInterval(progressInterval);
          resolve();
        }
      }, interval);
    });
  };

  const upscaleImage = useCallback(async () => {
    if (!selectedFile || !originalDimensions) return;

    setIsUpscaling(true);
    setProgress(0);

    try {
      const scale = parseFloat(scaleFactor);
      const newWidth = Math.floor(originalDimensions.width * scale);
      const newHeight = Math.floor(originalDimensions.height * scale);

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      const processImage = () => {
        return new Promise<void>((resolve, reject) => {
          img.onload = async () => {
            if (!ctx) {
              reject(new Error('Canvas context not available'));
              return;
            }

            canvas.width = newWidth;
            canvas.height = newHeight;

            if (scale === 1) {
              ctx.drawImage(img, 0, 0, newWidth, newHeight);
            } else {
              const tempCanvas = document.createElement('canvas');
              const tempCtx = tempCanvas.getContext('2d');
              
              if (!tempCtx) {
                reject(new Error('Temporary canvas context not available'));
                return;
              }

              let currentWidth = originalDimensions.width;
              let currentHeight = originalDimensions.height;
              let currentImage = img;

              const qualitySettings = {
                '0.5': { smoothing: true, quality: 'high', filter: 'contrast(1.0) brightness(1.0) saturate(1.0)' },
                '1': { smoothing: false, quality: 'medium', filter: 'none' },
                '1.5': { smoothing: true, quality: 'high', filter: 'contrast(1.1) brightness(1.02) saturate(1.05)' },
                '2': { smoothing: true, quality: 'high', filter: 'contrast(1.15) brightness(1.03) saturate(1.1)' },
              };

              const settings = qualitySettings[scaleFactor] || qualitySettings['2'];

              if (scale > 1) {
                while (currentWidth < newWidth || currentHeight < newHeight) {
                  const stepScale = Math.min(2, Math.min(newWidth / currentWidth, newHeight / currentHeight));
                  const stepWidth = Math.floor(currentWidth * stepScale);
                  const stepHeight = Math.floor(currentHeight * stepScale);
                  
                  tempCanvas.width = stepWidth;
                  tempCanvas.height = stepHeight;
                  tempCtx.imageSmoothingEnabled = settings.smoothing;
                  tempCtx.imageSmoothingQuality = settings.quality;
                  tempCtx.filter = settings.filter;
                  tempCtx.drawImage(currentImage, 0, 0, stepWidth, stepHeight);

                  const newImg = new Image();
                  newImg.src = tempCanvas.toDataURL();
                  await new Promise<void>((imgResolve) => {
                    newImg.onload = () => imgResolve();
                  });
                  currentImage = newImg;
                  currentWidth = stepWidth;
                  currentHeight = stepHeight;
                  if (stepWidth >= newWidth && stepHeight >= newHeight) break;
                }
              } else {
                tempCanvas.width = newWidth;
                tempCanvas.height = newHeight;
                tempCtx.imageSmoothingEnabled = settings.smoothing;
                tempCtx.imageSmoothingQuality = settings.quality;
                tempCtx.filter = settings.filter;
                tempCtx.drawImage(img, 0, 0, newWidth, newHeight);
                currentImage = new Image();
                currentImage.src = tempCanvas.toDataURL();
                await new Promise<void>((imgResolve) => {
                  currentImage.onload = () => imgResolve();
                });
              }

              ctx.imageSmoothingEnabled = settings.smoothing;
              ctx.imageSmoothingQuality = settings.quality;
              ctx.filter = settings.filter;
              ctx.drawImage(currentImage, 0, 0, newWidth, newHeight);
            }

            // Determine the output format based on the original file's MIME type
            const originalMimeType = selectedFile.type;
            const supportedMimeTypes = ['image/png', 'image/jpeg', 'image/webp'];
            const outputMimeType = supportedMimeTypes.includes(originalMimeType) ? originalMimeType : 'image/png';
            const quality = outputMimeType === 'image/jpeg' ? 0.92 : 1.0; // Use high quality for JPEG

            canvas.toBlob((blob) => {
              if (blob) {
                const upscaledUrl = URL.createObjectURL(blob);
                setUpscaledUrl(upscaledUrl);
                setUpscaledFileSize(blob.size);
                setProgress(100);
                toast({
                  title: "Image processed successfully!",
                  description: `Enhanced from ${originalDimensions.width}×${originalDimensions.height} to ${newWidth}×${newHeight}`,
                });
              }
              resolve();
            }, outputMimeType, quality);
          };
          img.onerror = () => reject(new Error('Image loading failed'));
          img.src = URL.createObjectURL(selectedFile);
        });
      };

      await Promise.all([simulateProgress(estimatedTime), processImage()]);
      setIsUpscaling(false);
    } catch (error) {
      console.error('Processing error:', error);
      toast({
        title: "Processing failed",
        description: "An error occurred while processing the image.",
        variant: "destructive",
      });
      setProgress(0);
      setIsUpscaling(false);
    }
  }, [selectedFile, scaleFactor, originalDimensions, estimatedTime, toast]);

  const downloadUpscaled = useCallback(() => {
    if (upscaledUrl && selectedFile) {
      const link = document.createElement('a');
      link.href = upscaledUrl;
      const name = selectedFile.name.replace(/\.[^/.]+$/, '');
      const ext = selectedFile.name.split('.').pop();
      link.download = `${name}_upscaled_${scaleFactor}x.${ext}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [upscaledUrl, selectedFile, scaleFactor]);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 max-w-6xl">
      <div className="space-y-4 sm:space-y-6">
        <Alert className="mb-4 sm:mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            This tool uses advanced multi-pass processing with scale-specific quality enhancements.
            {isUpscaling && (
              <strong className="block mt-2 text-red-600 dark:text-red-400">
                ⚠️ Processing in progress - Do not close this page or navigate away until complete!
              </strong>
            )}
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Upload className="h-5 w-5" />
              Upload Image
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 sm:p-6 text-center">
              <ImageIcon className="mx-auto h-8 sm:h-12 w-8 sm:w-12 text-muted-foreground mb-2 sm:mb-4" />
              <Label htmlFor="image-upload" className="cursor-pointer">
                <span className="text-sm font-medium text-primary hover:text-primary/80">
                  Click to upload an image
                </span>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </Label>
              {previewUrl && (
                <div className="mt-4">
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="mx-auto h-24 w-24 object-contain rounded-md"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    {selectedFile && `Uploaded File Size: ${formatFileSize(originalFileSize || 0)}`}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {selectedFile && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5" />
                Processing Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="scale-factor" className="text-sm font-medium">
                  Scale Factor
                </Label>
                <Select value={scaleFactor} onValueChange={(value) => {
                  setScaleFactor(value);
                  if (originalDimensions) {
                    const scale = parseFloat(value);
                    const pixelCount = originalDimensions.width * originalDimensions.height;
                    const newPixelCount = pixelCount * scale * scale;
                    const timeEstimate = Math.max(5, Math.min(60, Math.round(newPixelCount / 500000)));
                    setEstimatedTime(timeEstimate);
                  }
                }}>
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="Select scale factor" />
                  </SelectTrigger>
                  <SelectContent>
                    {scaleOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {originalDimensions && (
                <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
                    Output size: {Math.floor(originalDimensions.width * parseFloat(scaleFactor))} × {Math.floor(originalDimensions.height * parseFloat(scaleFactor))}px
                  </p>
                  <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-300">
                    <Clock className="h-3 w-3" />
                    <span>Estimated time: ~{estimatedTime} seconds</span>
                  </div>
                </div>
              )}

              {isUpscaling && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Processing Progress</span>
                    <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="w-full" />
                  <div className="bg-red-50 dark:bg-red-950 p-3 rounded-lg">
                    <p className="text-sm text-red-800 dark:text-red-200 font-medium">
                      ⚠️ Please do not close this page or navigate away during processing!
                    </p>
                  </div>
                </div>
              )}

              <Button 
                onClick={upscaleImage} 
                disabled={isUpscaling}
                className="w-full"
              >
                <Zap className="h-4 w-4 mr-2" />
                {isUpscaling ? `Processing... ${Math.round(progress)}%` : 'Enhance & Process'}
              </Button>
            </CardContent>
          </Card>
        )}

        {previewUrl && upscaledUrl && originalDimensions && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Before & After Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-muted-foreground">Before</h3>
                    <p className="text-sm text-muted-foreground">
                      {originalDimensions.width} × {originalDimensions.height}px
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {originalFileSize && `Size: ${formatFileSize(originalFileSize)}`}
                    </p>
                  </div>
                  <div className="border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <img 
                      src={previewUrl} 
                      alt="Before" 
                      className="w-full h-60 sm:h-80 object-contain"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="font-semibold text-green-600 dark:text-green-400">After</h3>
                    <p className="text-sm text-muted-foreground">
                      {Math.floor(originalDimensions.width * parseFloat(scaleFactor))} × {Math.floor(originalDimensions.height * parseFloat(scaleFactor))}px
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {upscaledFileSize && `Size: ${formatFileSize(upscaledFileSize)}`}
                    </p>
                  </div>
                  <div className="border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <img 
                      src={upscaledUrl} 
                      alt="After" 
                      className="w-full h-60 sm:h-80 object-contain"
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