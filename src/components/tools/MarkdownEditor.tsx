
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Copy, Download } from 'lucide-react';
import { Label } from '@/components/ui/label';

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState('# Hello World\n\nThis is a **markdown** editor.\n\n- Item 1\n- Item 2\n- Item 3');
  const { toast } = useToast();

  const convertToHtml = (text: string) => {
    return text
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      .replace(/\n/gim, '<br>');
  };

  const copyHtml = () => {
    const html = convertToHtml(markdown);
    navigator.clipboard.writeText(html).then(() => {
      toast({
        title: 'Copied!',
        description: 'HTML copied to clipboard.',
      });
    });
  };

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.download = 'document.md';
    a.href = url;
    a.click();
    URL.revokeObjectURL(url);
    toast({
      title: 'Downloaded!',
      description: 'Markdown file downloaded.',
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Markdown Editor</Label>
          <Textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="min-h-[300px] font-mono text-sm"
            placeholder="Enter your markdown here..."
          />
        </div>
        <div className="space-y-2">
          <Label>Preview</Label>
          <div 
            className="min-h-[300px] p-4 border rounded-md prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: convertToHtml(markdown) }}
          />
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button onClick={copyHtml}>
          <Copy className="mr-2 h-4 w-4" /> Copy HTML
        </Button>
        <Button variant="outline" onClick={downloadMarkdown}>
          <Download className="mr-2 h-4 w-4" /> Download MD
        </Button>
      </div>
    </div>
  );
};

export default MarkdownEditor;
