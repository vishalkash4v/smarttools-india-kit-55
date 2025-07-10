
import React from 'react';
import LoremIpsumGenerator from '@/components/tools/LoremIpsumGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const LoremIpsumGeneratorPage = () => {
  const toolData = {
    title: "Free Lorem Ipsum Generator Online",
    description: "Generate Lorem Ipsum placeholder text for your designs and layouts. Create custom amounts of Lorem Ipsum text with paragraphs, sentences, and words. Free Lorem Ipsum generator tool.",
    category: "Text Tools",
    
    howToUse: [
      "Select the type of Lorem Ipsum text (paragraphs, sentences, or words)",
      "Enter the number of units you want to generate",
      "Choose whether to start with 'Lorem ipsum dolor sit amet'",
      "Click 'Generate Lorem Ipsum' to create your text",
      "Copy the generated text for use in your projects"
    ],
    
    features: [
      "Generate paragraphs, sentences, or individual words",
      "Customizable quantity for any project size",
      "Option to start with traditional Lorem Ipsum opening",
      "Clean, properly formatted output",
      "One-click copy to clipboard",
      "Mobile-friendly interface"
    ],
    
    faqs: [
      {
        question: "What is Lorem Ipsum text?",
        answer: "Lorem Ipsum is scrambled Latin text that has been used as placeholder text in the printing and typesetting industry since the 1500s. It's used because it has a normal distribution of letters."
      },
      {
        question: "Why use Lorem Ipsum instead of regular text?",
        answer: "Lorem Ipsum prevents viewers from being distracted by readable content, allowing them to focus on the design, layout, and visual elements rather than the text content."
      },
      {
        question: "Is Lorem Ipsum text copyrighted?",
        answer: "No, Lorem Ipsum text is not copyrighted and is free to use for any purpose, including commercial projects. It's essentially nonsensical scrambled Latin text."
      },
      {
        question: "Can I customize the length of generated text?",
        answer: "Yes, you can generate any amount of Lorem Ipsum text by specifying the number of paragraphs, sentences, or words you need for your project."
      },
      {
        question: "Is this the same Lorem Ipsum used everywhere?",
        answer: "Yes, we use the standard Lorem Ipsum text that has been the industry standard since the 1960s, ensuring consistency with other design tools and templates."
      }
    ],
    
    relatedTools: [
      { name: "Word Counter", href: "/word-counter", description: "Count words in your text" },
      { name: "Text Case Converter", href: "/text-case-converter", description: "Convert text case" },
      { name: "Text Reverser", href: "/text-reverser", description: "Reverse your text" },
      { name: "Random Password Generator", href: "/password-generator", description: "Generate random passwords" }
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
