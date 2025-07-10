
import React from 'react';
import ColorPaletteGenerator from '@/components/tools/ColorPaletteGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ColorPaletteGeneratorPage = () => {
  const toolData = {
    title: "Free Color Palette Generator Online",
    description: "Generate beautiful color palettes and schemes for your designs. Create harmonious color combinations with our free online color palette generator tool.",
    category: "Design Tools",
    
    howToUse: [
      "Select or enter a base color using the color picker",
      "Click 'Generate Palette' to create color combinations",
      "View the generated palette with color codes",
      "Click on any color to copy its hex code",
      "Use the colors in your design projects"
    ],
    
    features: [
      "Generate complementary and analogous colors",
      "Color picker and hex code input",
      "One-click color code copying",
      "Visual color palette display",
      "Harmonious color combinations",
      "Perfect for web and graphic design"
    ],
    
    faqs: [
      {
        question: "What types of color palettes can I generate?",
        answer: "Our generator creates complementary, analogous, and triadic color schemes based on your base color, providing harmonious combinations perfect for design projects."
      },
      {
        question: "How do I use the generated colors in my designs?",
        answer: "Click on any color in the palette to copy its hex code to your clipboard. You can then paste these codes into your design software, CSS, or any application that accepts hex colors."
      },
      {
        question: "What's the difference between color harmony types?",
        answer: "Complementary colors are opposite on the color wheel and create contrast. Analogous colors are adjacent and create harmony. Our generator provides balanced combinations for various design needs."
      },
      {
        question: "Can I start with any base color?",
        answer: "Yes, you can use the color picker to select any color or enter a specific hex code. The generator will create a palette based on your chosen base color."
      },
      {
        question: "Are these colors suitable for web design?",
        answer: "Absolutely! All generated colors are web-safe and provided in hex format, making them perfect for websites, apps, and digital designs."
      }
    ],
    
    relatedTools: [
      { name: "Color Converter", href: "/color-converter", description: "Convert between color formats" },
      { name: "Gradient Generator", href: "/gradient-generator", description: "Create CSS gradients" },
      { name: "Color Picker", href: "/color-picker", description: "Pick colors from images" },
      { name: "Contrast Checker", href: "/contrast-checker", description: "Check color contrast ratios" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<ColorPaletteGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default ColorPaletteGeneratorPage;
