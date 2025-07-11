
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Copy, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

const ButtonGenerator = () => {
  const [buttonText, setButtonText] = useState('Click Me');
  const [backgroundColor, setBackgroundColor] = useState('#3b82f6');
  const [textColor, setTextColor] = useState('#ffffff');
  const [borderRadius, setBorderRadius] = useState([8]);
  const [padding, setPadding] = useState([12]);
  const [fontSize, setFontSize] = useState([16]);

  const buttonStyle = {
    backgroundColor,
    color: textColor,
    borderRadius: `${borderRadius[0]}px`,
    padding: `${padding[0]}px ${padding[0] * 1.5}px`,
    fontSize: `${fontSize[0]}px`,
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500'
  };

  const cssCode = `
.custom-button {
  background-color: ${backgroundColor};
  color: ${textColor};
  border-radius: ${borderRadius[0]}px;
  padding: ${padding[0]}px ${padding[0] * 1.5}px;
  font-size: ${fontSize[0]}px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.custom-button:hover {
  opacity: 0.8;
}`;

  const htmlCode = `<button class="custom-button">${buttonText}</button>`;

  const copyCSS = () => {
    navigator.clipboard.writeText(cssCode);
    toast.success('CSS code copied to clipboard!');
  };

  const copyHTML = () => {
    navigator.clipboard.writeText(htmlCode);
    toast.success('HTML code copied to clipboard!');
  };

  const reset = () => {
    setButtonText('Click Me');
    setBackgroundColor('#3b82f6');
    setTextColor('#ffffff');
    setBorderRadius([8]);
    setPadding([12]);
    setFontSize([16]);
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Button Customization</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>Button Text</Label>
                <Input
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
                  placeholder="Enter button text"
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Background Color</Label>
                <Input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="mt-2 h-12"
                />
              </div>

              <div>
                <Label>Text Color</Label>
                <Input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="mt-2 h-12"
                />
              </div>

              <div>
                <Label>Border Radius: {borderRadius[0]}px</Label>
                <Slider
                  value={borderRadius}
                  onValueChange={setBorderRadius}
                  max={50}
                  min={0}
                  step={1}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Padding: {padding[0]}px</Label>
                <Slider
                  value={padding}
                  onValueChange={setPadding}
                  max={30}
                  min={5}
                  step={1}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Font Size: {fontSize[0]}px</Label>
                <Slider
                  value={fontSize}
                  onValueChange={setFontSize}
                  max={24}
                  min={12}
                  step={1}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={reset} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preview & Code</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Button Preview:</Label>
              <div className="mt-2 p-4 bg-muted rounded-lg flex justify-center">
                <button style={buttonStyle}>
                  {buttonText}
                </button>
              </div>
            </div>

            <div>
              <Label>HTML Code:</Label>
              <div className="mt-2 p-3 bg-muted rounded-md font-mono text-sm">
                {htmlCode}
              </div>
              <Button onClick={copyHTML} size="sm" className="mt-2">
                <Copy className="h-4 w-4 mr-2" />
                Copy HTML
              </Button>
            </div>

            <div>
              <Label>CSS Code:</Label>
              <div className="mt-2 p-3 bg-muted rounded-md font-mono text-sm max-h-40 overflow-y-auto">
                <pre>{cssCode}</pre>
              </div>
              <Button onClick={copyCSS} size="sm" className="mt-2">
                <Copy className="h-4 w-4 mr-2" />
                Copy CSS
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ButtonGenerator;
