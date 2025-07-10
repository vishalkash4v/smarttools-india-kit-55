import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRightLeft, Copy, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const TextReverser = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copied, setCopied] = useState<boolean>(false);
  const { toast } = useToast();

  const handleReverse = () => {
    setOutputText(inputText.split('').reverse().join(''));
    setCopied(false); // Reset copied state when new text is processed
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleCopyToClipboard = () => {
    if (!outputText && inputText.trim().length > 0) {
      // Allow copying empty string if it's the result of processing
      navigator.clipboard.writeText('')
        .then(() => {
          setCopied(true);
          toast({
            title: "Copied to clipboard!",
            description: "The reversed text has been copied.",
          });
          setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
          toast({
            title: "Error",
            description: "Failed to copy text to clipboard.",
            variant: "destructive",
          });
        });
      return;
    } else if (!outputText) {
      toast({
        title: "Nothing to copy",
        description: "The output is empty.",
        variant: "destructive",
      });
      return;
    }
    navigator.clipboard.writeText(outputText)
      .then(() => {
        setCopied(true);
        toast({
          title: "Copied to clipboard!",
          description: "The reversed text has been copied.",
        });
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        toast({
          title: "Error",
          description: "Failed to copy text to clipboard.",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="space-y-4 p-4 max-w-4xl mx-auto">
      <div>
        <Label htmlFor="inputText" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Enter Text
        </Label>
        <Textarea
          id="inputText"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type or paste your text here..."
          className="min-h-[100px] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
        />
      </div>
      <Button 
        onClick={handleReverse} 
        className="w-full sm:w-auto bg-primary text-primary-foreground dark:bg-blue-600 dark:text-white hover:bg-primary/90 dark:hover:bg-blue-700"
      >
        <ArrowRightLeft className="mr-2 h-4 w-4" /> 
        Reverse Text
      </Button>
      <div>
        <Label htmlFor="outputText" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          Reversed Text
        </Label>
        <div className="relative">
          <Textarea
            id="outputText"
            value={outputText}
            readOnly
            placeholder="Reversed text will appear here..."
            className="min-h-[100px] bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
          />
          <Button
            variant={copied ? "default" : "ghost"}
            size="icon"
            onClick={handleCopyToClipboard}
            className="absolute top-2 right-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={copied ? "Copied" : "Copy output text"}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextReverser;