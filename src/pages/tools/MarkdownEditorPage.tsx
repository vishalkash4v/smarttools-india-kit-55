
import React from 'react';
import MarkdownEditor from '@/components/tools/MarkdownEditor';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const MarkdownEditorPage = () => {
  const toolData = {
    title: "Online Markdown Editor & Previewer",
    description: "Write and preview Markdown with our free online editor. Real-time preview, syntax highlighting, and export options. Perfect for documentation, README files, and content creation.",
    category: "Text Tools",
    
    howToUse: [
      "Type your Markdown text in the left editor panel",
      "See the live preview on the right panel",
      "Use the toolbar for common formatting options",
      "Export your content as HTML or plain text",
      "Save your work locally or copy the output"
    ],
    
    features: [
      "Real-time Markdown preview",
      "Syntax highlighting for code blocks",
      "Split-screen editor and preview",
      "Support for tables, lists, and links",
      "Export to HTML format",
      "Mobile-friendly responsive design"
    ],
    
    faqs: [
      {
        question: "What Markdown features are supported?",
        answer: "We support standard Markdown syntax including headers, bold/italic text, links, images, code blocks, tables, lists, and blockquotes. GitHub-flavored Markdown features are also included."
      },
      {
        question: "Can I export my Markdown as HTML?",
        answer: "Yes, you can export your Markdown content as clean HTML code that you can use in websites, documentation, or other applications."
      },
      {
        question: "Does the editor work offline?",
        answer: "The editor works in your browser and doesn't require an internet connection once loaded. Your content is processed locally for privacy and speed."
      },
      {
        question: "Can I import existing Markdown files?",
        answer: "Yes, you can copy and paste existing Markdown content into the editor, or use the file import feature to load .md files from your computer."
      },
      {
        question: "Is my content saved automatically?",
        answer: "The editor saves your work in your browser's local storage, so you won't lose your content if you accidentally close the tab. For permanent storage, export your files."
      }
    ],
    
    relatedTools: [
      { name: "HTML to Markdown", href: "/html-to-markdown", description: "Convert HTML to Markdown" },
      { name: "Text Editor", href: "/text-editor", description: "Simple text editor" },
      { name: "Code Formatter", href: "/code-formatter", description: "Format code snippets" },
      { name: "Documentation Generator", href: "/documentation-generator", description: "Generate documentation" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<MarkdownEditor />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default MarkdownEditorPage;
