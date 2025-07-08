
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3, Download, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BarcodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [barcodeType, setBarcodeType] = useState('code128');
  const [generatedBarcode, setGeneratedBarcode] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const generateBarcode = () => {
    if (!inputText.trim()) {
      toast({
        title: "Error",
        description: "Please enter text to generate barcode.",
        variant: "destructive",
      });
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 400;
    canvas.height = 120;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Generate barcode pattern
    ctx.fillStyle = 'black';
    const text = inputText.slice(0, 20);
    const barWidth = 2;
    const barHeight = 60;
    const startX = 40;
    const startY = 20;

    // Create barcode pattern based on text
    let x = startX;
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      
      // Create varying bar widths and spacing based on character
      for (let j = 0; j < 8; j++) {
        if ((charCode + j) % 2 === 0) {
          const width = barWidth + (charCode % 3);
          ctx.fillRect(x, startY, width, barHeight);
          x += width + 1;
        } else {
          x += barWidth;
        }
      }
      x += 2; // Space between character groups
    }

    // Add start and end markers
    ctx.fillRect(startX - 10, startY, 3, barHeight);
    ctx.fillRect(startX - 5, startY, 1, barHeight);
    ctx.fillRect(x + 5, startY, 1, barHeight);
    ctx.fillRect(x + 10, startY, 3, barHeight);

    // Add text below barcode
    ctx.fillStyle = 'black';
    ctx.font = '14px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, startY + barHeight + 25);

    // Add barcode type label
    ctx.font = '10px sans-serif';
    ctx.fillText(barcodeType.toUpperCase(), canvas.width / 2, startY + barHeight + 40);

    setGeneratedBarcode(canvas.toDataURL());
    
    toast({
      title: "Success",
      description: "Barcode generated successfully!",
    });
  };

  const downloadBarcode = () => {
    if (!generatedBarcode) {
      toast({
        title: "Error",
        description: "Please generate a barcode first.",
        variant: "destructive",
      });
      return;
    }
    
    const link = document.createElement('a');
    link.download = `barcode-${inputText}.png`;
    link.href = generatedBarcode;
    link.click();
    
    toast({
      title: "Downloaded!",
      description: "Barcode image has been downloaded.",
    });
  };

  const copyImage = async () => {
    if (!generatedBarcode) {
      toast({
        title: "Error",
        description: "Please generate a barcode first.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch(generatedBarcode);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      toast({
        title: "Copied!",
        description: "Barcode image copied to clipboard.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy image to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-full space-y-6">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            Barcode Generator
          </CardTitle>
          <CardDescription>
            Generate barcodes from text for various applications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="input-text" className="block text-sm font-medium mb-2">
                Text to Encode
              </label>
              <Input
                id="input-text"
                placeholder="Enter text for barcode..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                maxLength={20}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">Maximum 20 characters</p>
            </div>
            <div>
              <label htmlFor="barcode-type" className="block text-sm font-medium mb-2">
                Barcode Type
              </label>
              <Select value={barcodeType} onValueChange={setBarcodeType}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="code128">Code 128</SelectItem>
                  <SelectItem value="code39">Code 39</SelectItem>
                  <SelectItem value="ean13">EAN-13</SelectItem>
                  <SelectItem value="upc">UPC</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={generateBarcode} className="w-full flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Generate Barcode
          </Button>

          <canvas 
            ref={canvasRef} 
            style={{ display: 'none' }}
          />

          {generatedBarcode && (
            <Card className="bg-muted/50 w-full">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Generated Barcode</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center w-full">
                  <div className="bg-white p-4 rounded border max-w-full overflow-auto">
                    <img 
                      src={generatedBarcode} 
                      alt="Generated Barcode"
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>
                <div className="flex gap-3 justify-center flex-wrap">
                  <Button onClick={downloadBarcode} variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download PNG
                  </Button>
                  <Button onClick={copyImage} variant="outline" className="flex items-center gap-2">
                    <Copy className="h-4 w-4" />
                    Copy Image
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 w-full">
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-2">About Barcodes</h4>
              <p className="text-sm text-muted-foreground">
                Barcodes are machine-readable optical labels that contain information about the item to which they are attached. 
                They are widely used in retail, inventory management, and logistics for quick and accurate data capture.
              </p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default BarcodeGenerator;
