
import React from 'react';
import TextCaseConverter from '@/components/tools/TextCaseConverter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const TextCaseConverterPage = () => {
  const toolData = {
    title: "Free Text Case Converter Online",
    description: "Convert text between different cases: uppercase, lowercase, title case, sentence case, and more. Free online text case conversion tool with multiple formatting options.",
    category: "Text Tools",
    
    howToUse: [
      "Paste or type your text in the input area",
      "Choose the desired case conversion option",
      "View the converted text instantly",
      "Copy the result to your clipboard",
      "Use the converted text in your projects"
    ],
    
    features: [
      "Multiple case conversion options",
      "Uppercase and lowercase conversion",
      "Title case and sentence case formatting",
      "Camel case and snake case conversion",
      "Instant text transformation",
      "Copy to clipboard functionality"
    ],
    
    faqs: [
      {
        question: "What case conversion options are available?",
        answer: "Our tool supports uppercase, lowercase, title case, sentence case, camel case, snake case, and other common text formatting options."
      },
      {
        question: "Can I convert large amounts of text?",
        answer: "Yes, there's no limit on the amount of text you can convert. The tool handles both short phrases and long documents efficiently."
      },
      {
        question: "Is the conversion instant?",
        answer: "Yes, all case conversions happen instantly as you select different options. No waiting time required."
      },
      {
        question: "Can I convert text in different languages?",
        answer: "Yes, the tool works with text in multiple languages and character sets, including special characters and accented letters."
      }
    ],
    
    relatedTools: [
      { name: "Word Counter", href: "/word-counter", description: "Count words and characters" },
      { name: "Text Reverser", href: "/text-reverser", description: "Reverse text strings" },
      { name: "Lorem Ipsum Generator", href: "/lorem-ipsum-generator", description: "Generate placeholder text" },
      { name: "Whitespace Remover", href: "/whitespace-remover", description: "Remove extra spaces" }
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
