
import React from 'react';
import ImageFormatConverter from '@/components/tools/ImageFormatConverter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ImageFormatConverterPage = () => {
  const toolData = {
    title: "Free Image Format Converter Online",
    description: "Convert images between formats: JPEG, PNG, WebP, GIF, BMP, and more. Batch conversion supported. Maintain quality while optimizing for web or print use.",
    category: "Image Tools",
    
    howToUse: [
      "Upload one or more images to convert",
      "Select the target format (JPEG, PNG, WebP, etc.)",
      "Adjust quality settings if needed",
      "Click 'Convert' to process your images",
      "Download converted images individually or as a ZIP"
    ],
    
    features: [
      "Support for all major image formats",
      "Batch conversion of multiple images",
      "Quality adjustment for lossy formats",
      "Maintain or modify image dimensions",
      "Fast client-side processing",
      "No upload limits"
    ],
    
    faqs: [
      {
        question: "Which image formats are supported?",
        answer: "We support JPEG, PNG, WebP, GIF, BMP, TIFF, and SVG formats for both input and output, covering all common image types."
      },
      {
        question: "Can I convert multiple images at once?",
        answer: "Yes, you can upload and convert multiple images simultaneously. All converted images can be downloaded as individual files or in a ZIP archive."
      },
      {
        question: "Will conversion affect image quality?",
        answer: "For lossless formats like PNG, quality is preserved. For lossy formats like JPEG, you can adjust the quality setting to balance file size and image quality."
      },
      {
        question: "Why convert to WebP format?",
        answer: "WebP provides better compression than JPEG and PNG while maintaining high quality, making it ideal for web use to improve page loading speed."
      }
    ],
    
    relatedTools: [
      { name: "Image Compressor", href: "/image-compressor", description: "Reduce image file sizes" },
      { name: "Image Resizer", href: "/image-resizer", description: "Change image dimensions" },
      { name: "Image Cropper", href: "/image-cropper", description: "Crop images to specific areas" },
      { name: "Background Remover", href: "/background-remover", description: "Remove image backgrounds" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<ImageFormatConverter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default ImageFormatConverterPage;
