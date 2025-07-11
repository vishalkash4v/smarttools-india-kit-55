
import React from 'react';
import WhitespaceRemover from '@/components/tools/WhitespaceRemover';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const WhitespaceRemoverPage = () => {
  const toolData = {
    title: "Whitespace Remover - Remove Extra Spaces Online",
    description: "Remove extra whitespace, multiple spaces, tabs, and line breaks from text. Clean up messy text formatting with options to remove leading, trailing, and duplicate spaces.",
    category: "Text Tools",
    
    howToUse: [
      "Paste or type text with unwanted whitespace in the input area",
      "Choose whitespace removal options (extra spaces, tabs, line breaks)",
      "Click 'Remove Whitespace' to clean your text",
      "Copy the cleaned text from the output area",
      "Use additional options for specific formatting needs"
    ],
    
    features: [
      "Remove multiple consecutive spaces",
      "Eliminate leading and trailing whitespace",
      "Remove tabs and replace with spaces",
      "Delete empty lines and line breaks",
      "Preserve paragraph structure option",
      "Batch text processing",
      "Real-time text cleaning preview",
      "Undo functionality available"
    ],
    
    faqs: [
      {
        question: "What types of whitespace can be removed?",
        answer: "Our tool removes spaces, tabs, line breaks, carriage returns, and other Unicode whitespace characters. You can choose which types to remove based on your specific needs."
      },
      {
        question: "Will this affect my text's paragraph structure?",
        answer: "You can choose to preserve paragraph structure by keeping single line breaks while removing excessive spacing. This maintains readability while cleaning up formatting issues."
      },
      {
        question: "Can I remove whitespace from code or structured text?",
        answer: "Yes, but be careful with code as whitespace can be meaningful in some programming languages. Use the preview feature to ensure the cleaned text maintains its intended structure."
      },
      {
        question: "How do I clean text copied from PDFs?",
        answer: "PDF text often contains irregular spacing and line breaks. Use our comprehensive cleaning options to remove extra spaces, fix line breaks, and normalize the text formatting."
      }
    ],
    
    relatedTools: [
      { name: "Duplicate Line Remover", href: "/duplicate-line-remover", description: "Remove duplicate lines from text" },
      { name: "Text Case Converter", href: "/text-case-converter", description: "Convert text between different cases" },
      { name: "Word Counter", href: "/word-counter", description: "Count words, characters, and lines" },
      { name: "Text Reverser", href: "/text-reverser", description: "Reverse text and strings" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<WhitespaceRemover />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default WhitespaceRemoverPage;
