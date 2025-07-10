import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Copy, Check } from 'lucide-react';

const WhitespaceRemover: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const { toast } = useToast();

  const handleRemoveWhitespace = () => {
    if (!inputText) {
      setOutputText('');
      setCopied(false); // Reset copied state when processing new text
      return;
    }
    // Remove leading/trailing whitespace from each line and replace multiple spaces with a single space.
    const lines = inputText.split('\n');
    const processedLines = lines.map(line => line.trim().replace(/\s+/g, ' '));
    // Remove empty lines except if the original text was just newlines
    const result = processedLines
      .filter((line, index, arr) => {
        if (line.length > 0) return true;
        // Keep a single empty line if it's between non-empty lines or was intentional
        if (index > 0 && index < arr.length - 1 && arr[index - 1].length > 0 && arr[index + 1].length > 0)
          return true;
        return false;
      })
      .join('\n');
    
    setOutputText(result);
    setCopied(false); // Reset copied state when new text is processed
  };

  const handleCopyToClipboard = (textToCopy: string) => {
    if (!textToCopy && inputText.trim().length > 0) {
      // Allow copying empty string if it's the result of processing
      navigator.clipboard.writeText('')
        .then(() => {
          setCopied(true);
          toast({
            title: "Copied to clipboard!",
            description: "The processed text has been copied.",
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
    } else if (!textToCopy) {
      toast({
        title: "Nothing to copy",
        description: "The output is empty.",
        variant: "destructive",
      });
      return;
    }
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        toast({
          title: "Copied to clipboard!",
          description: "The processed text has been copied.",
        });
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        toast({
          title: "Error",
          description: "Failed to copy cr to clipboard.",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="space-y-6 p-4 max-w-4xl mx-auto">
      <Textarea
        placeholder="Enter text with extra spaces..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="min-h-[150px] text-base p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
      />
      
      <Button 
        onClick={handleRemoveWhitespace} 
        className="w-full sm:w-auto bg-primary text-primary-foreground dark:bg-blue-600 dark:text-white hover:bg-primary/90 dark:hover:bg-blue-700"
      >
        Remove Extra Spaces
      </Button>
      
      {outputText !== null && inputText.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Processed Text:
          </h3>
          <div className="relative">
            <Textarea
              value={outputText}
              readOnly
              className="min-h-[150px] text-base p-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
            />
            <Button
              variant={copied ? "default" : "ghost"}
              size="icon"
              onClick={() => handleCopyToClipboard(outputText)}
              className="absolute top-2 right-2 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label={copied ? "Copied" : "Copy output text"}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhitespaceRemover;
