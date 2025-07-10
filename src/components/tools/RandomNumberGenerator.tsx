
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { RefreshCw, Copy } from 'lucide-react';

const RandomNumberGenerator: React.FC = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(1);
  const [numbers, setNumbers] = useState<number[]>([]);
  const { toast } = useToast();

  const generateNumbers = () => {
    if (min >= max) {
      toast({
        title: 'Invalid Range',
        description: 'Minimum value must be less than maximum value.',
        variant: 'destructive',
      });
      return;
    }

    const generatedNumbers = [];
    for (let i = 0; i < count; i++) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      generatedNumbers.push(randomNum);
    }
    setNumbers(generatedNumbers);
  };

  const copyNumbers = () => {
    const numbersText = numbers.join(', ');
    navigator.clipboard.writeText(numbersText).then(() => {
      toast({
        title: 'Copied!',
        description: 'Random numbers copied to clipboard.',
      });
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="min">Minimum Value</Label>
          <Input
            id="min"
            type="number"
            value={min}
            onChange={(e) => setMin(parseInt(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="max">Maximum Value</Label>
          <Input
            id="max"
            type="number"
            value={max}
            onChange={(e) => setMax(parseInt(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="count">Count</Label>
          <Input
            id="count"
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
          />
        </div>
      </div>

      <Button onClick={generateNumbers} className="w-full">
        <RefreshCw className="mr-2 h-4 w-4" /> Generate Random Numbers
      </Button>

      {numbers.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Generated Numbers</h3>
            <Button variant="outline" size="sm" onClick={copyNumbers}>
              <Copy className="mr-2 h-4 w-4" /> Copy
            </Button>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-lg font-mono">{numbers.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomNumberGenerator;
