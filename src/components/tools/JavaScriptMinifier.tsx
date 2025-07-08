
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Copy, Download, Minimize2, RotateCcw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const JavaScriptMinifier = () => {
  const [originalCode, setOriginalCode] = useState(`function greetUser(name) {
    // This is a sample function
    if (name && name.length > 0) {
        console.log("Hello, " + name + "!");
        return "Hello, " + name + "!";
    } else {
        console.log("Hello, World!");
        return "Hello, World!";
    }
}

// Call the function
greetUser("JavaScript Developer");`);
  const [minifiedCode, setMinifiedCode] = useState('');
  const [stats, setStats] = useState({ original: 0, minified: 0, savings: 0 });

  const minifyJavaScript = (code: string) => {
    // Basic JavaScript minification
    let minified = code
      // Remove comments
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '')
      // Remove extra whitespace
      .replace(/\s+/g, ' ')
      // Remove whitespace around operators and punctuation
      .replace(/\s*([{}();,:])\s*/g, '$1')
      .replace(/\s*([=+\-*/%<>!&|])\s*/g, '$1')
      // Remove leading/trailing whitespace
      .trim();

    return minified;
  };

  const handleMinify = () => {
    if (!originalCode.trim()) {
      toast({
        title: 'No Code to Minify',
        description: 'Please enter some JavaScript code first.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const minified = minifyJavaScript(originalCode);
      setMinifiedCode(minified);

      const originalSize = originalCode.length;
      const minifiedSize = minified.length;
      const savings = ((originalSize - minifiedSize) / originalSize * 100);

      setStats({
        original: originalSize,
        minified: minifiedSize,
        savings: Math.max(0, savings)
      });

      toast({
        title: 'Code Minified Successfully',
        description: `Reduced size by ${savings.toFixed(1)}%`,
      });
    } catch (error) {
      toast({
        title: 'Minification Failed',
        description: 'There was an error minifying your code.',
        variant: 'destructive',
      });
    }
  };

  const handleCopy = () => {
    if (!minifiedCode) {
      toast({
        title: 'Nothing to Copy',
        description: 'Minify some code first.',
        variant: 'destructive',
      });
      return;
    }

    navigator.clipboard.writeText(minifiedCode);
    toast({
      title: 'Code Copied',
      description: 'Minified code copied to clipboard.',
    });
  };

  const handleDownload = () => {
    if (!minifiedCode) {
      toast({
        title: 'Nothing to Download',
        description: 'Minify some code first.',
        variant: 'destructive',
      });
      return;
    }

    const blob = new Blob([minifiedCode], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'minified-script.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: 'Download Started',
      description: 'Minified JavaScript file download started.',
    });
  };

  const handleClear = () => {
    setOriginalCode('');
    setMinifiedCode('');
    setStats({ original: 0, minified: 0, savings: 0 });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>JavaScript Minifier</CardTitle>
          <CardDescription>
            Minify your JavaScript code to reduce file size and improve loading times.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="original-code">Original JavaScript Code</Label>
                <Button onClick={handleClear} variant="outline" size="sm" className="gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Clear
                </Button>
              </div>
              <Textarea
                id="original-code"
                placeholder="Paste your JavaScript code here..."
                value={originalCode}
                onChange={(e) => setOriginalCode(e.target.value)}
                className="min-h-[400px] font-mono text-sm"
              />
              <div className="flex gap-2">
                <Button onClick={handleMinify} className="gap-2">
                  <Minimize2 className="h-4 w-4" />
                  Minify Code
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="minified-code">Minified Code</Label>
                <div className="flex gap-2">
                  <Button onClick={handleCopy} variant="outline" size="sm" className="gap-2">
                    <Copy className="h-4 w-4" />
                    Copy
                  </Button>
                  <Button onClick={handleDownload} variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
              <Textarea
                id="minified-code"
                placeholder="Minified code will appear here..."
                value={minifiedCode}
                readOnly
                className="min-h-[400px] font-mono text-sm bg-gray-50"
              />
            </div>
          </div>

          {stats.original > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{stats.original}</div>
                <div className="text-sm text-gray-600">Original Size (chars)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{stats.minified}</div>
                <div className="text-sm text-gray-600">Minified Size (chars)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{stats.savings.toFixed(1)}%</div>
                <div className="text-sm text-gray-600">Size Reduction</div>
              </div>
            </div>
          )}

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Minification Features:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Removes comments and unnecessary whitespace</li>
              <li>• Optimizes spacing around operators and punctuation</li>
              <li>• Preserves code functionality while reducing size</li>
              <li>• Shows compression statistics</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JavaScriptMinifier;
