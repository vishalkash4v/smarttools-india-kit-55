
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Copy, Minimize } from 'lucide-react';
import { Label } from '@/components/ui/label';

const CssMinifier: React.FC = () => {
  const [inputCss, setInputCss] = useState('');
  const [outputCss, setOutputCss] = useState('');
  const { toast } = useToast();

  const minifyCss = () => {
    if (!inputCss.trim()) {
      toast({
        title: 'No CSS',
        description: 'Please enter CSS code to minify.',
        variant: 'destructive',
      });
      return;
    }

    const minified = inputCss
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .replace(/;\s*}/g, '}') // Remove semicolon before closing brace
      .replace(/\s*{\s*/g, '{') // Remove spaces around opening brace
      .replace(/\s*}\s*/g, '}') // Remove spaces around closing brace
      .replace(/\s*,\s*/g, ',') // Remove spaces around commas
      .replace(/\s*:\s*/g, ':') // Remove spaces around colons
      .replace(/\s*;\s*/g, ';') // Remove spaces around semicolons
      .trim();

    setOutputCss(minified);
    
    const originalSize = new Blob([inputCss]).size;
    const minifiedSize = new Blob([minified]).size;
    const savings = ((originalSize - minifiedSize) / originalSize * 100).toFixed(1);
    
    toast({
      title: 'CSS Minified!',
      description: `Reduced size by ${savings}% (${originalSize} → ${minifiedSize} bytes)`,
    });
  };

  const copyOutput = () => {
    if (!outputCss) {
      toast({
        title: 'No Output',
        description: 'Please minify CSS first.',
        variant: 'destructive',
      });
      return;
    }

    navigator.clipboard.writeText(outputCss).then(() => {
      toast({
        title: 'Copied!',
        description: 'Minified CSS copied to clipboard.',
      });
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Input CSS</Label>
          <Textarea
            placeholder="Paste your CSS code here..."
            value={inputCss}
            onChange={(e) => setInputCss(e.target.value)}
            className="min-h-[300px] font-mono text-sm"
          />
        </div>
        <div className="space-y-2">
          <Label>Minified CSS</Label>
          <Textarea
            value={outputCss}
            readOnly
            placeholder="Minified CSS will appear here..."
            className="min-h-[300px] font-mono text-sm bg-muted"
          />
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button onClick={minifyCss}>
          <Minimize className="mr-2 h-4 w-4" /> Minify CSS
        </Button>
        <Button variant="outline" onClick={copyOutput}>
          <Copy className="mr-2 h-4 w-4" /> Copy Output
        </Button>
      </div>
    </div>
  );
};

export default CssMinifier;
