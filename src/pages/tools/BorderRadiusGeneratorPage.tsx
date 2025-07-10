
import React from 'react';
import BorderRadiusGenerator from '@/components/tools/BorderRadiusGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const BorderRadiusGeneratorPage = () => {
  const toolData = {
    title: "CSS Border Radius Generator - Rounded Corners Tool",
    description: "Generate CSS border-radius code for rounded corners. Create custom border radius effects with individual corner control and live preview.",
    category: "Design Tools",
    
    howToUse: [
      "Adjust each corner radius individually using sliders",
      "Use the preset buttons for common shapes",
      "Preview the border radius effect in real-time",
      "Fine-tune the values for perfect curves",
      "Copy the generated CSS border-radius code"
    ],
    
    features: [
      "Individual corner radius control",
      "Real-time visual preview",
      "Preset shapes and styles",
      "Percentage and pixel value support",
      "Symmetric and asymmetric options",
      "Copy CSS code to clipboard"
    ],
    
    faqs: [
      {
        question: "Can I set different radius values for each corner?",
        answer: "Yes, you can set individual border-radius values for each corner (top-left, top-right, bottom-right, bottom-left) to create unique shapes."
      },
      {
        question: "What's the difference between pixels and percentages?",
        answer: "Pixel values create fixed radius sizes, while percentage values create responsive curves that scale with the element size. Use percentages for perfect circles and ovals."
      },
      {
        question: "Can I create perfect circles with this tool?",
        answer: "Yes, set the border-radius to 50% on a square element to create a perfect circle, or use different percentages for oval shapes."
      },
      {
        question: "Will the generated CSS work in older browsers?",
        answer: "Border-radius is well-supported in all modern browsers. For very old browsers, consider adding vendor prefixes if needed."
      }
    ],
    
    relatedTools: [
      { name: "Box Shadow Generator", href: "/box-shadow-generator", description: "Create CSS shadows" },
      { name: "Gradient Generator", href: "/gradient-generator", description: "Create CSS gradients" },
      { name: "CSS Minifier", href: "/css-minifier", description: "Minify CSS code" },
      { name: "Button Generator", href: "/button-generator", description: "Design CSS buttons" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<BorderRadiusGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default BorderRadiusGeneratorPage;
