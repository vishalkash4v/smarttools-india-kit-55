
import React, { useState, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProgressWithTime from '@/components/ui/progress-with-time';
import { Upload, Download, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

const BackgroundRemover = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please select a valid image file');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setOriginalImage(e.target?.result as string);
        setProcessedImage(null);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const removeBackground = useCallback(async () => {
    if (!originalImage) return;

    setIsProcessing(true);
    setProgress(0);

    try {
      // Simulate processing progress with more realistic timing
      const progressSteps = [10, 25, 40, 55, 70, 85, 95];
      let currentStep = 0;

      const progressInterval = setInterval(() => {
        if (currentStep < progressSteps.length) {
          setProgress(progressSteps[currentStep]);
          currentStep++;
        } else {
          clearInterval(progressInterval);
        }
      }, 300);

      // Create a canvas to process the image
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setIsProcessing(false);
          toast.error('Failed to process image');
          return;
        }

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Simple background removal algorithm (edge detection + color similarity)
        const threshold = 30;
        const backgroundColor = detectBackgroundColor(data, canvas.width, canvas.height);

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Calculate color difference from background
          const colorDiff = Math.sqrt(
            Math.pow(r - backgroundColor.r, 2) +
            Math.pow(g - backgroundColor.g, 2) +
            Math.pow(b - backgroundColor.b, 2)
          );

          // If color is similar to background, make it transparent
          if (colorDiff < threshold) {
            data[i + 3] = 0; // Set alpha to 0 (transparent)
          }
        }

        // Apply processed image data
        ctx.putImageData(imageData, 0, 0);
        const processedDataUrl = canvas.toDataURL('image/png');
        
        clearInterval(progressInterval);
        setProgress(100);
        setProcessedImage(processedDataUrl);
        
        // Complete processing after a short delay
        setTimeout(() => {
          setIsProcessing(false);
          toast.success('Background removed successfully!');
        }, 500);
      };

      img.src = originalImage;
    } catch (error) {
      setIsProcessing(false);
      setProgress(0);
      toast.error('Failed to remove background');
      console.error('Background removal error:', error);
    }
  }, [originalImage]);

  const detectBackgroundColor = (data: Uint8ClampedArray, width: number, height: number) => {
    // Sample colors from the corners to detect background color
    const corners = [
      { x: 0, y: 0 }, // Top-left
      { x: width - 1, y: 0 }, // Top-right
      { x: 0, y: height - 1 }, // Bottom-left
      { x: width - 1, y: height - 1 } // Bottom-right
    ];

    let totalR = 0, totalG = 0, totalB = 0;
    let sampleCount = 0;

    corners.forEach(corner => {
      for (let dx = 0; dx < 5 && corner.x + dx < width; dx++) {
        for (let dy = 0; dy < 5 && corner.y + dy < height; dy++) {
          const index = ((corner.y + dy) * width + (corner.x + dx)) * 4;
          totalR += data[index];
          totalG += data[index + 1];
          totalB += data[index + 2];
          sampleCount++;
        }
      }
    });

    return {
      r: Math.round(totalR / sampleCount),
      g: Math.round(totalG / sampleCount),
      b: Math.round(totalB / sampleCount)
    };
  };

  const downloadImage = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.download = 'background-removed.png';
    link.href = processedImage;
    link.click();
    toast.success('Image downloaded successfully!');
  };

  const resetImage = () => {
    setProcessedImage(null);
    setProgress(0);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Background Remover</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Remove background from your photos automatically
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {/* Upload Section */}
          <div>
            <Button
              onClick={() => fileInputRef.current?.click()}
              className="w-full"
              variant="outline"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload Image
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* Processing Progress */}
          {isProcessing && (
            <ProgressWithTime
              progress={progress}
              estimatedTime={8} // 8 seconds estimated
              label="Removing background"
            />
          )}

          {/* Image Preview */}
          {originalImage && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-center text-sm sm:text-base">Original Image</h3>
                <div className="flex justify-center">
                  <img
                    src={originalImage}
                    alt="Original"
                    className="max-w-full max-h-48 sm:max-h-64 object-contain border border-border rounded-lg"
                  />
                </div>
              </div>
              
              {processedImage && (
                <div className="space-y-2">
                  <h3 className="font-semibold text-center text-sm sm:text-base">Background Removed</h3>
                  <div className="flex justify-center">
                    <div 
                      className="border border-border rounded-lg p-2"
                      style={{
                        background: 'linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)',
                        backgroundSize: '20px 20px',
                        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                      }}
                    >
                      <img
                        src={processedImage}
                        alt="Background Removed"
                        className="max-w-full max-h-48 sm:max-h-64 object-contain"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          {originalImage && (
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button 
                onClick={removeBackground} 
                disabled={isProcessing}
                className="w-full sm:w-auto"
              >
                {isProcessing ? 'Processing...' : 'Remove Background'}
              </Button>
              
              {processedImage && (
                <>
                  <Button onClick={resetImage} variant="outline" className="w-full sm:w-auto">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                  <Button onClick={downloadImage} className="w-full sm:w-auto">
                    <Download className="mr-2 h-4 w-4" />
                    Download PNG
                  </Button>
                </>
              )}
            </div>
          )}

          {/* Tips */}
          <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-sm sm:text-base">Tips for best results:</h4>
            <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
              <li>• Use images with clear contrast between subject and background</li>
              <li>• Solid or simple backgrounds work best</li>
              <li>• High resolution images produce better results</li>
              <li>• The algorithm works best with photos taken against white/light backgrounds</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BackgroundRemover;
