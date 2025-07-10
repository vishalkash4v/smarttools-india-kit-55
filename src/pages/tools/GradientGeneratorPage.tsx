
import React from 'react';
import GradientGenerator from '@/components/tools/GradientGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const GradientGeneratorPage = () => {
  const toolData = {
    title: "CSS Gradient Generator - Linear & Radial Gradients",
    description: "Create beautiful CSS gradients with our free online gradient generator. Generate linear, radial, and conic gradients with custom colors and directions.",
    category: "Design Tools",
    
    howToUse: [
      "Choose gradient type: linear, radial, or conic",
      "Select colors for your gradient stops",
      "Adjust gradient direction and angle",
      "Preview your gradient in real-time",
      "Copy the generated CSS code to clipboard"
    ],
    
    features: [
      "Linear, radial, and conic gradient types",
      "Multiple color stops support",
      "Customizable gradient directions",
      "Real-time gradient preview",
      "Copy CSS code to clipboard",
      "Preset gradient templates"
    ],
    
    faqs: [
      {
        question: "What types of gradients can I create?",
        answer: "You can create linear gradients (straight lines), radial gradients (circular), and conic gradients (angular) with multiple color stops and custom directions."
      },
      {
        question: "Can I add multiple colors to a gradient?",
        answer: "Yes, you can add as many color stops as needed to create complex, multi-color gradients with smooth transitions between colors."
      },
      {
        question: "Will the CSS work in all browsers?",
        answer: "Yes, the generated CSS includes modern gradient syntax that works in all current browsers, with fallbacks for older browser support when needed."
      },
      {
        question: "Can I save or share my gradients?",
        answer: "You can copy the CSS code to save in your projects. The gradient preview lets you see exactly how it will look on your website."
      }
    ],
    
    relatedTools: [
      { name: "Color Converter", href: "/color-converter", description: "Convert color formats" },
      { name: "Color Palette Generator", href: "/color-palette-generator", description: "Generate color schemes" },
      { name: "CSS Minifier", href: "/css-minifier", description: "Minify CSS code" },
      { name: "Box Shadow Generator", href: "/box-shadow-generator", description: "Create CSS shadows" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<GradientGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default GradientGeneratorPage;
