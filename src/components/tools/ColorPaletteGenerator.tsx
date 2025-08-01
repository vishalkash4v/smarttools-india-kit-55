import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Copy, RefreshCw } from 'lucide-react';

const ColorPaletteGenerator: React.FC = () => {
  const [baseColor, setBaseColor] = useState('#3b82f6');
  const [palette, setPalette] = useState<string[]>([]);
  const { toast } = useToast();

  const generatePalette = () => {
    const colors = [];
    const baseHex = baseColor.replace('#', '');
    const r = parseInt(baseHex.substr(0, 2), 16);
    const g = parseInt(baseHex.substr(2, 2), 16);
    const b = parseInt(baseHex.substr(4, 2), 16);

    // Generate complementary color
    colors.push(baseColor);
    colors.push(`#${(255 - r).toString(16).padStart(2, '0')}${(255 - g).toString(16).padStart(2, '0')}${(255 - b).toString(16).padStart(2, '0')}`);

    // Generate analogous colors
    for (let i = 1; i <= 3; i++) {
      const factor = 0.3 * i;
      const newR = Math.min(255, Math.max(0, Math.round(r + (255 - r) * factor)));
      const newG = Math.min(255, Math.max(0, Math.round(g + (255 - g) * factor)));
      const newB = Math.min(255, Math.max(0, Math.round(b + (255 - b) * factor)));
      colors.push(`#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`);
    }

    setPalette(colors);
  };

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color).then(() => {
      toast({
        title: 'Copied!',
        description: `Color ${color} copied to clipboard.`,
      });
    });
  };

  const copyPaletteAsJSON = () => {
    const json = JSON.stringify(palette, null, 2);
    navigator.clipboard.writeText(json).then(() => {
      toast({
        title: 'Palette Copied!',
        description: 'Entire palette copied as JSON array.',
      });
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="baseColor">Base Color</Label>
          <div className="flex gap-4">
            <Input
              id="baseColor"
              type="color"
              value={baseColor}
              onChange={(e) => setBaseColor(e.target.value)}
              className="w-20 h-10"
            />
            <Input
              type="text"
              value={baseColor}
              onChange={(e) => setBaseColor(e.target.value)}
              placeholder="#3b82f6"
              className="flex-1"
            />
          </div>
        </div>
        <Button onClick={generatePalette} className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" /> Generate Palette
        </Button>
      </div>

      {palette.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Generated Palette</h3>
            <Button variant="outline" size="sm" onClick={copyPaletteAsJSON}>
              <Copy className="h-4 w-4 mr-2" /> Copy All as JSON
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {palette.map((color, index) => (
              <div key={index} className="space-y-2">
                <div
                  className="h-20 rounded-lg cursor-pointer flex items-center justify-center group"
                  style={{ backgroundColor: color }}
                  onClick={() => copyColor(color)}
                >
                  <Copy className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-center font-mono">{color}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPaletteGenerator;
