import React, { useState } from 'react';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select';
import {
  PenTool, Copy, RefreshCw, Wand2, Settings
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

const API_ENDPOINT = 'https://api.apilayer.com/paraphraser';
// ⚠️ Don’t ship secrets to the browser in production.
// Use a server-side proxy (e.g., /api/rewrite) and read the key on the server.
const API_KEY = 'fgnxIASyJnX54qj14E0KqifxUNDjW639';

const AiTextRewriter = () => {
  const [inputText, setInputText] = useState('');
  const [rewrittenText, setRewrittenText] = useState('');
  const [rewriteStyle, setRewriteStyle] = useState('professional');
  const [isRewriting, setIsRewriting] = useState(false);
  const [creativityLevel, setCreativityLevel] = useState([7]);
  const [useContractions, setUseContractions] = useState(true);
  const [addFillers, setAddFillers] = useState(false);
  const [useIdioms, setUseIdioms] = useState(true);
  const { toast } = useToast();

  const wordCount = (t: string) => (t.trim() ? t.trim().split(/\s+/).length : 0);

  const rewriteText = async () => {
    const text = inputText.trim();
    if (!text) {
      toast({
        title: 'No Text Provided',
        description: 'Please enter some text to rewrite.',
        variant: 'destructive',
      });
      return;
    }

    setIsRewriting(true);
    setRewrittenText('');

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain', // <-- must be plain text
          apikey: API_KEY,              // <-- your APILayer key
        },
        body: text,                      // <-- send raw text (no JSON.stringify)
      });

      // Handle non-2xx
      if (!res.ok) {
        const msg = `API error ${res.status}`;
        throw new Error(msg);
      }

      const data = await res.json();
      const paraphrased =
        typeof data?.paraphrased === 'string' ? data.paraphrased.trim() : '';

      if (!paraphrased) {
        // Common reasons: input too short/simple, or wrong content-type
        throw new Error('No paraphrase returned. Try a longer sentence.');
      }

      setRewrittenText(paraphrased);

      toast({
        title: 'Text Rewritten',
        description: 'Paraphrase generated successfully.',
      });
    } catch (err: any) {
      console.error('API Rewrite error:', err);
      toast({
        title: 'Rewrite Failed',
        description:
          err?.message ||
          'There was an error rewriting your text. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsRewriting(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rewrittenText);
    toast({
      title: 'Copied!',
      description: 'Rewritten text copied to clipboard.',
    });
  };

  const clearText = () => {
    setInputText('');
    setRewrittenText('');
  };

  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, idx) => (
      <p key={idx} className="mb-2 leading-relaxed">
        {line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={i}>{part.replace(/\*\*/g, '')}</strong>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PenTool className="h-6 w-6" />
            Advanced AI Text Rewriter
          </CardTitle>
          <CardDescription>
            Transform your content using an AI paraphraser API.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Settings */}
          <Card className="bg-muted/30">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Settings className="h-5 w-5" />
                Advanced Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Writing Style</Label>
                  <Select value={rewriteStyle} onValueChange={setRewriteStyle}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                      <SelectItem value="academic">Academic</SelectItem>
                      <SelectItem value="simple">Simple</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Creativity Level: {creativityLevel[0]}/10</Label>
                  <Slider
                    value={creativityLevel}
                    onValueChange={setCreativityLevel}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-xs text-muted-foreground">
                    Higher = more unique, less predictable
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Switch id="contractions" checked={useContractions} onCheckedChange={setUseContractions} />
                  <Label htmlFor="contractions" className="text-sm">Use Contractions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="fillers" checked={addFillers} onCheckedChange={setAddFillers} />
                  <Label htmlFor="fillers" className="text-sm">Add Filler Phrases</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="idioms" checked={useIdioms} onCheckedChange={setUseIdioms} />
                  <Label htmlFor="idioms" className="text-sm">Use Idioms</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Input */}
          <div className="space-y-2">
            <Label htmlFor="inputText">Original Text</Label>
            <Textarea
              id="inputText"
              placeholder="Paste your text here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[200px]"
            />
            <div className="text-sm text-muted-foreground">
              Characters: {inputText.length} | Words: {wordCount(inputText)}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Button
              onClick={rewriteText}
              disabled={!inputText.trim() || isRewriting}
              className="flex-1 min-h-[48px] text-sm sm:text-base"
            >
              {isRewriting ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Rewriting...
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4 mr-2" />
                  Rewrite with AI
                </>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={clearText}
              className="min-h-[48px] text-sm sm:text-base"
            >
              Clear All
            </Button>
          </div>

          {/* Output */}
          {rewrittenText && (
            <Card className="bg-green-50 dark:bg-green-950/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-green-700 dark:text-green-300">
                    Rewritten Output
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={copyToClipboard}>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="min-h-[200px] bg-white dark:bg-gray-900 p-4 rounded-md text-sm">
                {renderFormattedText(rewrittenText)}
                <div className="mt-4 text-sm text-muted-foreground">
                  Characters: {rewrittenText.length} | Words: {wordCount(rewrittenText)}
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-blue-50 dark:bg-blue-950/20">
            <CardContent className="pt-6 text-sm text-blue-700 dark:text-blue-300">
              <strong>⚙️ Note:</strong> For production, proxy this request through your server to keep your API key private.
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default AiTextRewriter;
