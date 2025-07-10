
import React from 'react';
import TextCaseConverter from '@/components/tools/TextCaseConverter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const TextCaseConverterPage = () => {
  const toolData = {
    title: "Free Text Case Converter Online",
    description: "Convert text to uppercase, lowercase, title case, sentence case, and more. Free online text case converter with multiple formatting options for all your text transformation needs.",
    category: "Text Tools",
    
    howToUse: [
      "Paste or type your text in the input area",
      "Choose the desired case conversion option",
      "View the converted text in the output area",
      "Copy the transformed text with one click",
      "Use different case styles for various purposes"
    ],
    
    features: [
      "Convert to uppercase, lowercase, title case",
      "Sentence case and alternating case options",
      "camelCase and PascalCase for programming",
      "snake_case and kebab-case conversions",
      "Real-time text transformation",
      "One-click copy functionality"
    ],
    
    faqs: [
      {
        question: "What case conversion options are available?",
        answer: "We offer uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case, kebab-case, and alternating case conversions."
      },
      {
        question: "What's the difference between title case and sentence case?",
        answer: "Title case capitalizes the first letter of each major word, while sentence case only capitalizes the first letter of each sentence and proper nouns."
      },
      {
        question: "Can I convert programming variable names?",
        answer: "Yes! We support camelCase, PascalCase, snake_case, and kebab-case conversions, which are commonly used in programming for variable and function names."
      },
      {
        question: "Is there a limit on text length?",
        answer: "No, there's no limit on the amount of text you can convert. You can process large documents, articles, or any amount of text."
      },
      {
        question: "Does the tool preserve formatting?",
        answer: "The tool focuses on case conversion and may not preserve complex formatting. It's designed to transform the case of plain text content."
      }
    ],
    
    relatedTools: [
      { name: "Text Reverser", href: "/text-reverser", description: "Reverse your text content" },
      { name: "Word Counter", href: "/word-counter", description: "Count words and characters" },
      { name: "Text Font Changer", href: "/text-font-changer", description: "Change text fonts and styles" },
      { name: "Lorem Ipsum Generator", href: "/lorem-ipsum-generator", description: "Generate placeholder text" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<TextCaseConverter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default TextCaseConverterPage;
