
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RotateCcw, Coins } from 'lucide-react';

const CoinFlip = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [stats, setStats] = useState({ heads: 0, tails: 0 });

  const flipCoin = async () => {
    setIsFlipping(true);
    setResult(null);

    // Simulate coin flip animation delay
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setResult(outcome);
      setHistory(prev => [outcome, ...prev.slice(0, 9)]); // Keep last 10 flips
      setStats(prev => ({
        ...prev,
        [outcome.toLowerCase() as 'heads' | 'tails']: prev[outcome.toLowerCase() as 'heads' | 'tails'] + 1
      }));
      setIsFlipping(false);
    }, 1000);
  };

  const reset = () => {
    setResult(null);
    setHistory([]);
    setStats({ heads: 0, tails: 0 });
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="h-5 w-5" />
              Coin Flip
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold relative overflow-hidden">
                <div className={`transition-transform duration-1000 ${isFlipping ? 'animate-spin' : ''}`}>
                  {isFlipping ? '?' : result ? (result === 'Heads' ? 'H' : 'T') : '?'}
                </div>
              </div>

              {result && !isFlipping && (
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">{result}!</h3>
                  <Badge variant={result === 'Heads' ? 'default' : 'secondary'}>
                    {result}
                  </Badge>
                </div>
              )}

              {isFlipping && (
                <div className="text-lg text-muted-foreground">
                  Flipping...
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Button 
                onClick={flipCoin} 
                disabled={isFlipping}
                className="flex-1"
              >
                {isFlipping ? 'Flipping...' : 'Flip Coin'}
              </Button>
              <Button onClick={reset} variant="outline">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Statistics & History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-primary">{stats.heads}</div>
                <div className="text-sm text-muted-foreground">Heads</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-secondary">{stats.tails}</div>
                <div className="text-sm text-muted-foreground">Tails</div>
              </div>
            </div>

            {history.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Recent Flips:</h4>
                <div className="flex flex-wrap gap-2">
                  {history.map((flip, index) => (
                    <Badge 
                      key={index}
                      variant={flip === 'Heads' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {flip}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {stats.heads + stats.tails > 0 && (
              <div className="text-sm text-muted-foreground">
                Total flips: {stats.heads + stats.tails}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CoinFlip;
