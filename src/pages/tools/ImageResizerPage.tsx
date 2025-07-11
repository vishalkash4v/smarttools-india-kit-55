
import React from 'react';
import ImageResizer from '@/components/tools/ImageResizer';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ImageResizerPage = () => {
  const toolData = {
    title: "Free Image Resizer Tool Online",
    description: "Resize images to any dimension while maintaining quality. Batch resize multiple images, maintain aspect ratios, and optimize for web, print, or social media use.",
    category: "Image Tools",
    
    howToUse: [
      "Upload one or more images to resize",
      "Enter desired width and height dimensions",
      "Choose to maintain aspect ratio or stretch to fit",
      "Select output quality and format if needed",
      "Download resized images individually or as a batch"
    ],
    
    features: [
      "Batch image resizing capability",
      "Maintain or ignore aspect ratios",
      "Preset sizes for common uses",
      "Quality control for output images",
      "Support for all major image formats",
      "Real-time preview of changes"
    ],
    
    faqs: [
      {
        question: "Can I resize multiple images at once?",
        answer: "Yes, our batch processing feature allows you to upload and resize multiple images simultaneously with the same settings."
      },
      {
        question: "Will resizing affect image quality?",
        answer: "Enlarging images may reduce quality, while reducing size typically maintains good quality. We use high-quality algorithms to minimize quality loss."
      },
      {
        question: "What are the preset size options?",
        answer: "We offer presets for social media (Instagram, Facebook, Twitter), web thumbnails, print sizes, and common screen resolutions."
      },
      {
        question: "Can I maintain the original aspect ratio?",
        answer: "Yes, you can choose to maintain aspect ratios to prevent image distortion, or disable it to fit exact dimensions."
      }
    ],
    
    relatedTools: [
      { name: "Image Cropper", href: "/image-cropper", description: "Crop images to specific areas" },
      { name: "Image Compressor", href: "/image-compressor", description: "Reduce image file sizes" },
      { name: "Image Format Converter", href: "/image-format-converter", description: "Convert image formats" },
      { name: "Background Remover", href: "/background-remover", description: "Remove image backgrounds" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<ImageResizer />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default ImageResizerPage;
