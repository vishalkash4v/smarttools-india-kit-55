
import React from 'react';
import ColorConverter from '@/components/tools/ColorConverter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ColorConverterPage = () => {
  const toolData = {
    title: "Free Color Converter - HEX, RGB, HSL, HSV",
    description: "Convert colors between different formats: HEX, RGB, HSL, HSV, and CMYK. Free online color converter with live preview and precise conversions.",
    category: "Design Tools",
    
    howToUse: [
      "Enter a color value in any supported format",
      "View automatic conversions to all other formats",
      "Use the color picker to select colors visually",
      "Copy any converted color value to clipboard",
      "Use the converted colors in your design projects"
    ],
    
    features: [
      "Convert between HEX, RGB, HSL, HSV, and CMYK",
      "Visual color picker interface",
      "Live preview of selected colors",
      "Copy color values to clipboard",
      "Support for alpha/transparency values",
      "Precise mathematical conversions"
    ],
    
    faqs: [
      {
        question: "What color formats are supported?",
        answer: "We support HEX (#FF0000), RGB (255,0,0), HSL (0,100%,50%), HSV (0,100%,100%), and CMYK color formats for comprehensive color conversion."
      },
      {
        question: "Can I convert colors with transparency?",
        answer: "Yes, the tool supports alpha channels and transparency values in formats like RGBA and HSLA for web design applications."
      },
      {
        question: "Are the color conversions accurate?",
        answer: "Yes, all conversions use precise mathematical formulas to ensure accurate color representation across different formats."
      },
      {
        question: "Can I use this for print design?",
        answer: "Yes, the CMYK conversion feature makes this tool useful for both digital and print design projects where different color spaces are required."
      }
    ],
    
    relatedTools: [
      { name: "Color Palette Generator", href: "/color-palette-generator", description: "Generate color schemes" },
      { name: "Gradient Generator", href: "/gradient-generator", description: "Create CSS gradients" },
      { name: "Image Color Picker", href: "/image-color-picker", description: "Pick colors from images" },
      { name: "Contrast Checker", href: "/contrast-checker", description: "Check color accessibility" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<ColorConverter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default ColorConverterPage;
