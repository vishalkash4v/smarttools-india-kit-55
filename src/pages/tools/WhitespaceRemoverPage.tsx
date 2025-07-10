
import React from 'react';
import WhitespaceRemover from '@/components/tools/WhitespaceRemover';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const WhitespaceRemoverPage = () => {
  const toolData = {
    title: "Free Whitespace Remover Tool Online",
    description: "Remove extra spaces, tabs, and line breaks from your text instantly. Clean up messy text formatting with our free online whitespace remover tool.",
    category: "Text Tools",
    
    howToUse: [
      "Paste or type your text with extra whitespace",
      "Click 'Remove Extra Spaces' to process the text",
      "View the cleaned text in the output area",
      "Copy the processed text using the copy button",
      "Use the cleaned text in your projects"
    ],
    
    features: [
      "Removes multiple consecutive spaces",
      "Trims leading and trailing whitespace",
      "Cleans up tab characters and line breaks",
      "Preserves single spaces between words",
      "Real-time text processing",
      "One-click copy functionality"
    ],
    
    faqs: [
      {
        question: "What types of whitespace does this tool remove?",
        answer: "The tool removes extra spaces, tabs, multiple line breaks, and leading/trailing whitespace while preserving single spaces between words and proper text structure."
      },
      {
        question: "Will this tool affect my text formatting?",
        answer: "The tool preserves the essential structure of your text while removing unnecessary whitespace. It maintains single spaces between words and proper line breaks where needed."
      },
      {
        question: "Can I process large amounts of text?",
        answer: "Yes, our tool can handle large text documents efficiently. There's no strict limit on the amount of text you can process."
      },
      {
        question: "Is my text data secure?",
        answer: "Yes, all text processing happens locally in your browser. Your text is never sent to our servers or stored anywhere, ensuring complete privacy."
      },
      {
        question: "Does this work with different languages?",
        answer: "Yes, the whitespace remover works with text in any language and character set, including special characters and Unicode text."
      }
    ],
    
    relatedTools: [
      { name: "Text Case Converter", href: "/text-case-converter", description: "Convert text between different cases" },
      { name: "Word Counter", href: "/word-counter", description: "Count words and characters" },
      { name: "Text Reverser", href: "/text-reverser", description: "Reverse your text" },
      { name: "Text Formatter", href: "/text-formatter", description: "Format and style text" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<WhitespaceRemover />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default WhitespaceRemoverPage;
