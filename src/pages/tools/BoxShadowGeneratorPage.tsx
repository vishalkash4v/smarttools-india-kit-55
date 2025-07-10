
import React from 'react';
import BoxShadowGenerator from '@/components/tools/BoxShadowGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const BoxShadowGeneratorPage = () => {
  const toolData = {
    title: "CSS Box Shadow Generator - Create Beautiful Shadows",
    description: "Generate CSS box-shadow effects with our free online tool. Create custom shadows with adjustable blur, spread, color, and positioning for web design.",
    category: "Design Tools",
    
    howToUse: [
      "Adjust the horizontal and vertical shadow offset",
      "Set the blur radius for shadow softness",
      "Control spread radius for shadow size",
      "Choose shadow color and transparency",
      "Preview the shadow effect in real-time",
      "Copy the generated CSS code"
    ],
    
    features: [
      "Real-time shadow preview",
      "Adjustable offset, blur, and spread values",
      "Custom shadow colors with transparency",
      "Inset shadow support",
      "Multiple shadow layers",
      "Copy CSS code to clipboard"
    ],
    
    faqs: [
      {
        question: "What is the difference between blur and spread?",
        answer: "Blur radius controls how soft/sharp the shadow edges are, while spread radius controls how much the shadow expands or contracts from the element."
      },
      {
        question: "Can I create multiple shadows on one element?",
        answer: "Yes, you can add multiple box-shadow effects by separating them with commas in the CSS, creating layered shadow effects."
      },
      {
        question: "What are inset shadows?",
        answer: "Inset shadows appear inside the element instead of outside, creating effects like pressed buttons or inner glows."
      },
      {
        question: "Will these shadows work in all browsers?",
        answer: "Yes, box-shadow is well-supported in all modern browsers. The generated CSS will work across all current web browsers."
      }
    ],
    
    relatedTools: [
      { name: "Gradient Generator", href: "/gradient-generator", description: "Create CSS gradients" },
      { name: "Border Radius Generator", href: "/border-radius-generator", description: "Create rounded corners" },
      { name: "CSS Minifier", href: "/css-minifier", description: "Minify CSS code" },
      { name: "Color Converter", href: "/color-converter", description: "Convert color formats" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<BoxShadowGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default BoxShadowGeneratorPage;
