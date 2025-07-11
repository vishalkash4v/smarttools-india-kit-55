
import React from 'react';
import LogoToFavicon from '@/components/tools/LogoToFavicon';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const LogoToFaviconPage = () => {
  const toolData = {
    title: "Free Logo to Favicon Converter Online",
    description: "Convert your logo to favicon format instantly. Generate multiple favicon sizes (16x16, 32x32, 48x48) and ICO files for websites and web applications.",
    category: "Web Tools",
    
    howToUse: [
      "Upload your logo image file",
      "Preview how it will look as a favicon",
      "Select desired favicon sizes to generate",
      "Click 'Generate Favicon' to create files",
      "Download individual sizes or complete favicon package"
    ],
    
    features: [
      "Multiple favicon sizes generation",
      "ICO file format support",
      "PNG favicon options",
      "Real-time preview at different sizes",
      "Batch download of all sizes",
      "Optimized for web browsers"
    ],
    
    faqs: [
      {
        question: "What favicon sizes should I generate?",
        answer: "Common sizes are 16x16, 32x32, and 48x48 pixels. We recommend generating all standard sizes for maximum browser compatibility."
      },
      {
        question: "What image formats work best for logos?",
        answer: "PNG images with transparent backgrounds work best. JPEG, GIF, and SVG formats are also supported for conversion to favicon."
      },
      {
        question: "How do I add favicons to my website?",
        answer: "Add favicon files to your website root directory and include appropriate link tags in your HTML head section. We provide the necessary HTML code."
      },
      {
        question: "Why do I need multiple favicon sizes?",
        answer: "Different browsers and contexts use different favicon sizes. Having multiple sizes ensures your favicon looks good everywhere it's displayed."
      }
    ],
    
    relatedTools: [
      { name: "Image Resizer", href: "/image-resizer", description: "Resize images to any dimension" },
      { name: "Image Format Converter", href: "/image-format-converter", description: "Convert image formats" },
      { name: "Image Compressor", href: "/image-compressor", description: "Compress images for web" },
      { name: "QR Code Generator", href: "/qr-generator", description: "Generate QR codes" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<LogoToFavicon />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default LogoToFaviconPage;
