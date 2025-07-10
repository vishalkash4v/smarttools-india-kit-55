
import React from 'react';
import TextReverser from '@/components/tools/TextReverser';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const TextReverserPage = () => {
  const toolData = {
    title: "Free Text Reverser Online",
    description: "Reverse text, words, or lines instantly with our free online text reverser tool. Perfect for creating mirror text, solving puzzles, or fun text transformations.",
    category: "Text Tools",
    
    howToUse: [
      "Enter or paste your text in the input field",
      "Choose reversal type: characters, words, or lines",
      "Click 'Reverse Text' to transform your text",
      "View the reversed result instantly",
      "Copy the reversed text to your clipboard"
    ],
    
    features: [
      "Reverse characters in text",
      "Reverse word order in sentences",
      "Reverse line order in paragraphs",
      "Multiple reversal options",
      "Instant text transformation",
      "Copy to clipboard functionality"
    ],
    
    faqs: [
      {
        question: "What types of text reversal are available?",
        answer: "You can reverse individual characters, reverse the order of words in sentences, or reverse the order of lines in multi-line text."
      },
      {
        question: "Can I reverse special characters and symbols?",
        answer: "Yes, the tool works with all text characters including letters, numbers, symbols, and special characters from various languages."
      },
      {
        question: "Is there a limit on text length?",
        answer: "No, you can reverse text of any length, from single words to entire documents. The tool handles large amounts of text efficiently."
      },
      {
        question: "Can I reverse text in different languages?",
        answer: "Yes, the text reverser works with text in any language and character set, including Unicode characters and emojis."
      }
    ],
    
    relatedTools: [
      { name: "Text Case Converter", href: "/text-case-converter", description: "Convert text case" },
      { name: "Word Counter", href: "/word-counter", description: "Count words and characters" },
      { name: "Lorem Ipsum Generator", href: "/lorem-ipsum-generator", description: "Generate placeholder text" },
      { name: "Base64 Converter", href: "/base64-converter", description: "Encode and decode Base64" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<TextReverser />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default TextReverserPage;
