
import React from 'react';
import EnhancedToolPageLayout from '@/components/tools/EnhancedToolPageLayout';
import ColorPickerTool from '@/components/tools/ColorPickerTool';

const ColorPickerToolPage: React.FC = () => {
  const howToUse = [
    "Click on the color picker or drag to select your desired color",
    "View the color in different formats: HEX, RGB, HSL, and HSV",
    "Copy any color format by clicking the copy button next to it",
    "Use the color values in your designs, websites, or applications"
  ];

  const features = [
    "Real-time color picker with smooth selection",
    "Multiple color format outputs (HEX, RGB, HSL, HSV)",
    "One-click copy to clipboard",
    "Live color preview",
    "Precise color value display",
    "Mobile-friendly interface"
  ];

  const faqs = [
    {
      question: "What color formats are supported?",
      answer: "Our color picker supports HEX (#ffffff), RGB (255, 255, 255), HSL (360°, 100%, 100%), and HSV (360°, 100%, 100%) formats."
    },
    {
      question: "Can I input a specific color value?",
      answer: "Yes, you can input specific HEX values or use the color picker to visually select colors. The tool will automatically convert between all supported formats."
    },
    {
      question: "What's the difference between RGB and HSL?",
      answer: "RGB uses Red, Green, Blue values (0-255), while HSL uses Hue (0-360°), Saturation (0-100%), and Lightness (0-100%). HSL is often more intuitive for color adjustments."
    },
    {
      question: "Is this tool free to use?",
      answer: "Yes, our color picker tool is completely free with no limitations on usage. Perfect for designers, developers, and anyone working with colors."
    }
  ];

  const relatedTools = [
    {
      name: "Color Palette Generator",
      href: "/tools/color-palette-generator",
      description: "Generate beautiful color palettes for your projects"
    },
    {
      name: "Gradient Generator",
      href: "/tools/gradient-generator",
      description: "Create CSS gradients with live preview"
    },
    {
      name: "Color Converter",
      href: "/tools/color-converter",
      description: "Convert between different color formats"
    }
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      rating: 5,
      text: "Essential tool for my daily design work. The multiple format support is fantastic!",
      title: "UI/UX Designer"
    },
    {
      name: "Emma Watson",
      rating: 5,
      text: "Clean interface and accurate colors. Exactly what I needed for my web projects.",
      title: "Frontend Developer"
    }
  ];

  return (
    <EnhancedToolPageLayout
      title="Color Picker Tool"
      description="Professional color picker tool with support for HEX, RGB, HSL, and HSV formats. Pick colors visually and get instant format conversions. Free and easy to use."
      shortIntro="Pick any color and get instant values in HEX, RGB, HSL, and HSV formats with our professional color picker tool."
      toolInterface={<ColorPickerTool />}
      howToUse={howToUse}
      features={features}
      faqs={faqs}
      relatedTools={relatedTools}
      testimonials={testimonials}
      category="Design Tools"
      rating={4.8}
      userCount="35,000+"
      canonicalUrl="https://fyntools.com/tools/color-picker-tool"
      keywords="color picker, hex color, rgb color, hsl color, color selector, design tool, color converter"
    />
  );
};

export default ColorPickerToolPage;
