
import React from 'react';
import TextToHandwriting from '@/components/tools/TextToHandwriting';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const TextToHandwritingPage = () => {
  const toolData = {
    title: "Text to Handwriting Converter - Generate Handwritten Text",
    description: "Convert typed text into realistic handwriting fonts and styles. Create handwritten notes, assignments, letters, and documents with customizable pen styles and paper formats.",
    category: "Text Tools",
    
    howToUse: [
      "Type or paste your text in the input field",
      "Choose from various handwriting styles and fonts",
      "Select pen color and paper background",
      "Adjust text size and line spacing",
      "Download your handwritten text as an image or PDF"
    ],
    
    features: [
      "Multiple realistic handwriting fonts",
      "Customizable pen colors and ink styles",
      "Various paper backgrounds (lined, blank, grid)",
      "Adjustable text size and spacing",
      "Download as high-quality image or PDF",
      "Supports multiple languages",
      "Batch text conversion",
      "Mobile-friendly interface"
    ],
    
    faqs: [
      {
        question: "Can I use this for school assignments?",
        answer: "While our tool creates realistic handwritten text, please check your school's policies regarding digital submissions. Many institutions prefer authentic handwritten work for specific assignments."
      },
      {
        question: "What file formats can I download?",
        answer: "You can download your handwritten text as PNG, JPEG images, or PDF documents. High-resolution options are available for printing purposes."
      },
      {
        question: "How realistic does the handwriting look?",
        answer: "Our fonts are designed to closely mimic natural handwriting with variations in letter spacing, slight irregularities, and realistic pen strokes. The result looks very similar to actual handwritten text."
      },
      {
        question: "Can I create multiple pages of handwritten text?",
        answer: "Yes, our tool can handle long texts and automatically format them across multiple pages with consistent styling and spacing."
      }
    ],
    
    relatedTools: [
      { name: "Text Font Changer", href: "/text-font-changer", description: "Convert text to fancy fonts" },
      { name: "PDF Text Extractor", href: "/pdf-text-extractor", description: "Extract text from PDF files" },
      { name: "Word Counter", href: "/word-counter", description: "Count words and characters" },
      { name: "Text Case Converter", href: "/text-case-converter", description: "Convert text cases" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<TextToHandwriting />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default TextToHandwritingPage;
