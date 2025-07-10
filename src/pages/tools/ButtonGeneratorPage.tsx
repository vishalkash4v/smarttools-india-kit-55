
import React from 'react';
import ButtonGenerator from '@/components/tools/ButtonGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ButtonGeneratorPage = () => {
  const toolData = {
    title: "CSS Button Generator - Create Beautiful Buttons",
    description: "Generate CSS buttons with custom styles, colors, shadows, and effects. Create beautiful, responsive buttons with our free online button generator tool.",
    category: "Design Tools",
    
    howToUse: [
      "Enter your button text content",
      "Choose background and text colors",
      "Adjust border radius for rounded corners",
      "Add shadows and hover effects",
      "Preview your button design",
      "Copy the generated HTML and CSS code"
    ],
    
    features: [
      "Custom button text and styling",
      "Color customization for background and text",
      "Border radius and shadow effects",
      "Hover state animations",
      "Responsive button designs",
      "Copy HTML and CSS code"
    ],
    
    faqs: [
      {
        question: "Can I customize hover effects?",
        answer: "Yes, the button generator includes hover effects like color changes, shadows, and transitions to make your buttons more interactive."
      },
      {
        question: "Are the generated buttons responsive?",
        answer: "Yes, the buttons are designed to be responsive and work well on different screen sizes and devices."
      },
      {
        question: "Can I use custom fonts?",
        answer: "The generator provides standard web fonts, but you can modify the CSS to include custom fonts from Google Fonts or other sources."
      },
      {
        question: "Will the buttons work with my framework?",
        answer: "Yes, the generated CSS works with any HTML/CSS framework including Bootstrap, Tailwind CSS, or plain HTML."
      }
    ],
    
    relatedTools: [
      { name: "Border Radius Generator", href: "/border-radius-generator", description: "Create rounded corners" },
      { name: "Box Shadow Generator", href: "/box-shadow-generator", description: "Create CSS shadows" },
      { name: "Color Converter", href: "/color-converter", description: "Convert color formats" },
      { name: "Gradient Generator", href: "/gradient-generator", description: "Create CSS gradients" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<ButtonGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default ButtonGeneratorPage;
