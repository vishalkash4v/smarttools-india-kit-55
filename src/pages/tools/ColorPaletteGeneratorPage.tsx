
import React from 'react';
import ColorPaletteGenerator from '@/components/tools/ColorPaletteGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ColorPaletteGeneratorPage = () => {
  const toolData = {
    title: "Color Palette Generator Tool",
    description: "Generate beautiful color palettes for your designs. Create harmonious color schemes, extract colors from images, and find perfect color combinations. Free online color palette generator.",
    keywords: "color palette generator, color scheme, color combinations, design colors, color picker, hex colors",
    
    howToUse: [
      "Choose a base color using the color picker",
      "Select a color harmony type (complementary, triadic, etc.)",
      "Click 'Generate Palette' to create your color scheme",
      "Copy hex codes by clicking on any color",
      "Save or export your favorite palettes"
    ],
    
    features: [
      "Multiple color harmony algorithms",
      "Random palette generation",
      "Extract colors from uploaded images",
      "Copy hex, RGB, and HSL values",
      "Export palettes in various formats",
      "Mobile-friendly color picker interface"
    ],
    
    faqs: [
      {
        question: "What color harmony types are available?",
        answer: "We offer complementary, triadic, tetradic, analogous, monochromatic, and split-complementary color harmonies. Each creates different visual effects and moods."
      },
      {
        question: "Can I extract colors from my own images?",
        answer: "Yes, you can upload an image and our tool will automatically extract the dominant colors to create a palette based on your image."
      },
      {
        question: "What color formats are supported?",
        answer: "We support HEX, RGB, HSL, and HSV color formats. You can copy colors in any of these formats for use in your design tools."
      },
      {
        question: "How do I use these palettes in my designs?",
        answer: "Copy the hex codes and use them in any design software like Photoshop, Illustrator, Figma, or CSS for web development. The colors are ready to use in any application."
      },
      {
        question: "Are the generated palettes copyright-free?",
        answer: "Yes, color palettes cannot be copyrighted. All generated palettes are free to use for personal and commercial projects without any restrictions."
      }
    ],
    
    relatedTools: [
      { name: "Image Color Picker", href: "/image-color-picker" },
      { name: "Gradient Generator", href: "/gradient-generator" },
      { name: "Logo Designer", href: "/logo-designer" },
      { name: "CSS Generator", href: "/css-generator" }
    ]
  };

  return (
    <ToolPageLayout {...toolData}>
      <ColorPaletteGenerator />
    </ToolPageLayout>
  );
};

export default ColorPaletteGeneratorPage;
