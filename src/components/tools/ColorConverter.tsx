
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Copy, Palette } from 'lucide-react';
import { toast } from 'sonner';

const ColorConverter = () => {
  const [hex, setHex] = useState('#3b82f6');
  const [rgb, setRgb] = useState({ r: 59, g: 130, b: 246 });
  const [hsl, setHsl] = useState({ h: 217, s: 91, l: 60 });

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };

  const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  };

  const hslToRgb = (h: number, s: number, l: number) => {
    h /= 360;
    s /= 100;
    l /= 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
      const k = (n + h / (1/12)) % 12;
      return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    };
    return {
      r: Math.round(f(0) * 255),
      g: Math.round(f(8) * 255),
      b: Math.round(f(4) * 255)
    };
  };

  const updateFromHex = (newHex: string) => {
    if (/^#[0-9A-F]{6}$/i.test(newHex)) {
      setHex(newHex);
      const newRgb = hexToRgb(newHex);
      setRgb(newRgb);
      setHsl(rgbToHsl(newRgb.r, newRgb.g, newRgb.b));
    }
  };

  const updateFromRgb = (newRgb: { r: number, g: number, b: number }) => {
    setRgb(newRgb);
    setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
    setHsl(rgbToHsl(newRgb.r, newRgb.g, newRgb.b));
  };

  const updateFromHsl = (newHsl: { h: number, s: number, l: number }) => {
    setHsl(newHsl);
    const newRgb = hslToRgb(newHsl.h, newHsl.s, newHsl.l);
    setRgb(newRgb);
    setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  };

  const copyToClipboard = (value: string, format: string) => {
    navigator.clipboard.writeText(value);
    toast.success(`${format} color copied to clipboard!`);
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Color Input
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>Color Picker</Label>
                <Input
                  type="color"
                  value={hex}
                  onChange={(e) => updateFromHex(e.target.value)}
                  className="mt-2 h-16"
                />
              </div>

              <div>
                <Label>HEX Value</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    value={hex}
                    onChange={(e) => updateFromHex(e.target.value)}
                    placeholder="#000000"
                  />
                  <Button onClick={() => copyToClipboard(hex, 'HEX')} size="icon">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <Label>RGB Values</Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <Input
                    type="number"
                    value={rgb.r}
                    onChange={(e) => updateFromRgb({ ...rgb, r: Number(e.target.value) })}
                    min="0"
                    max="255"
                    placeholder="R"
                  />
                  <Input
                    type="number"
                    value={rgb.g}
                    onChange={(e) => updateFromRgb({ ...rgb, g: Number(e.target.value) })}
                    min="0"
                    max="255"
                    placeholder="G"
                  />
                  <Input
                    type="number"
                    value={rgb.b}
                    onChange={(e) => updateFromRgb({ ...rgb, b: Number(e.target.value) })}
                    min="0"
                    max="255"
                    placeholder="B"
                  />
                </div>
                <Button 
                  onClick={() => copyToClipboard(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, 'RGB')} 
                  size="sm" 
                  className="mt-2 w-full"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy RGB
                </Button>
              </div>

              <div>
                <Label>HSL Values</Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <Input
                    type="number"
                    value={hsl.h}
                    onChange={(e) => updateFromHsl({ ...hsl, h: Number(e.target.value) })}
                    min="0"
                    max="360"
                    placeholder="H"
                  />
                  <Input
                    type="number"
                    value={hsl.s}
                    onChange={(e) => updateFromHsl({ ...hsl, s: Number(e.target.value) })}
                    min="0"
                    max="100"
                    placeholder="S%"
                  />
                  <Input
                    type="number"
                    value={hsl.l}
                    onChange={(e) => updateFromHsl({ ...hsl, l: Number(e.target.value) })}
                    min="0"
                    max="100"
                    placeholder="L%"
                  />
                </div>
                <Button 
                  onClick={() => copyToClipboard(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`, 'HSL')} 
                  size="sm" 
                  className="mt-2 w-full"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy HSL
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Color Preview & Values</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Color Preview</Label>
              <div 
                className="mt-2 w-full h-32 rounded-lg border"
                style={{ backgroundColor: hex }}
              />
            </div>

            <div className="space-y-3">
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-sm font-medium">HEX</div>
                <div className="font-mono text-lg">{hex}</div>
              </div>

              <div className="p-3 bg-muted rounded-lg">
                <div className="text-sm font-medium">RGB</div>
                <div className="font-mono text-lg">rgb({rgb.r}, {rgb.g}, {rgb.b})</div>
              </div>

              <div className="p-3 bg-muted rounded-lg">
                <div className="text-sm font-medium">HSL</div>
                <div className="font-mono text-lg">hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ColorConverter;
