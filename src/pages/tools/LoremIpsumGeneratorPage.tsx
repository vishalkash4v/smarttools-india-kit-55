
import React from 'react';
import LoremIpsumGenerator from '@/components/tools/LoremIpsumGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const LoremIpsumGeneratorPage = () => {
  const toolData = {
    title: "Free Lorem Ipsum Generator Online",
    description: "Generate Lorem Ipsum placeholder text for your designs and mockups. Choose from words, sentences, or paragraphs. Perfect for web design, print layouts, and content templates.",
    category: "Text Tools",
    
    howToUse: [
      "Select the type of Lorem Ipsum (words, sentences, or paragraphs)",
      "Choose the quantity you need",
      "Click 'Generate' to create placeholder text",
      "Copy the generated text to your clipboard",
      "Use in your designs, mockups, or templates"
    ],
    
    features: [
      "Generate words, sentences, or paragraphs",
      "Customizable quantity options",
      "Classic Lorem Ipsum text",
      "Instant generation and copying",
      "Perfect for design mockups",
      "No character or length limits"
    ],
    
    faqs: [
      {
        question: "What is Lorem Ipsum text?",
        answer: "Lorem Ipsum is standard placeholder text used in the printing and typesetting industry since the 1500s. It's pseudo-Latin text that doesn't distract from design layouts."
      },
      {
        question: "Why use Lorem Ipsum instead of regular text?",
        answer: "Lorem Ipsum prevents viewers from being distracted by readable content, allowing them to focus on design elements, layout, and visual aspects."
      },
      {
        question: "Can I generate different amounts of text?",
        answer: "Yes, you can generate anywhere from a few words to multiple paragraphs, depending on your design needs."
      },
      {
        question: "Is Lorem Ipsum text meaningful?",
        answer: "No, Lorem Ipsum is scrambled Latin text that has no meaningful content. It's purely used as a visual placeholder."
      }
    ],
    
    relatedTools: [
      { name: "Word Counter", href: "/word-counter", description: "Count words and characters" },
      { name: "Text Case Converter", href: "/text-case-converter", description: "Convert text case" },
      { name: "Random Name Generator", href: "/name-generator", description: "Generate random names" },
      { name: "Text Reverser", href: "/text-reverser", description: "Reverse text strings" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<LoremIpsumGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default LoremIpsumGeneratorPage;
