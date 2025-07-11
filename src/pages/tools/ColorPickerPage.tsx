
import React from 'react';
import ColorPickerTool from '@/components/tools/ColorPickerTool';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ColorPickerPage = () => {
  const toolData = {
    title: "Free Color Picker Tool Online",
    description: "Pick colors with our advanced color picker tool. Get HEX, RGB, HSL, and HSV color codes. Perfect for web design, graphic design, and digital art projects.",
    category: "Design Tools",
    
    howToUse: [
      "Click on the color wheel to select your desired color",
      "Adjust brightness and saturation using the sliders",
      "View color values in HEX, RGB, HSL, and HSV formats",
      "Copy color codes with one click",
      "Save colors to your palette for later use"
    ],
    
    features: [
      "Interactive color wheel and sliders",
      "Multiple color format outputs (HEX, RGB, HSL, HSV)",
      "One-click color code copying",
      "Color palette saving and management",
      "Real-time color preview",
      "Accessibility-friendly interface"
    ],
    
    faqs: [
      {
        question: "What color formats are supported?",
        answer: "Our color picker supports HEX, RGB, HSL, and HSV color formats, covering all common web and design color standards."
      },
      {
        question: "Can I save colors for later use?",
        answer: "Yes, you can save colors to your palette and manage them for future projects. Colors are stored locally in your browser."
      },
      {
        question: "How do I copy color codes?",
        answer: "Simply click on any color code (HEX, RGB, HSL, or HSV) to copy it to your clipboard instantly."
      },
      {
        question: "Is this tool suitable for web design?",
        answer: "Absolutely! The tool provides all color formats commonly used in web development, including HEX codes for CSS and RGB values for various applications."
      }
    ],
    
    relatedTools: [
      { name: "Color Converter", href: "/color-converter", description: "Convert between color formats" },
      { name: "Color Palette Generator", href: "/color-palette-generator", description: "Generate color palettes" },
      { name: "Gradient Generator", href: "/gradient-generator", description: "Create CSS gradients" },
      { name: "Image Color Extractor", href: "/image-color-extractor", description: "Extract colors from images" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<ColorPickerTool />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default ColorPickerPage;
