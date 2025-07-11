
import React from 'react';
import ImageCompressor from '@/components/tools/ImageCompressor';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ImageCompressorPage = () => {
  const toolData = {
    title: "Image Compressor - Reduce Image Size Online Free",
    description: "Compress JPEG, PNG, and WebP images online while maintaining quality. Reduce image file sizes for faster website loading and storage savings.",
    category: "Image Tools",
    
    howToUse: [
      "Upload your image by clicking or dragging to the upload area",
      "Choose compression level (low, medium, high)",
      "Preview the compressed image and file size reduction",
      "Adjust quality settings if needed",
      "Download the compressed image"
    ],
    
    features: [
      "Compress JPEG, PNG, and WebP images",
      "Maintain image quality while reducing size",
      "Batch image compression support",
      "Preview before and after compression",
      "Adjustable compression levels",
      "No file size or quantity limits"
    ],
    
    faqs: [
      {
        question: "How much can I compress an image?",
        answer: "Compression rates vary by image type and content. JPEG images can typically be compressed by 50-80% while maintaining good quality. PNG compression is usually lower but still significant."
      },
      {
        question: "Will compression affect image quality?",
        answer: "Our smart compression algorithms minimize quality loss. You can preview the result and adjust settings to find the perfect balance between file size and quality."
      },
      {
        question: "What image formats are supported?",
        answer: "We support JPEG, PNG, and WebP formats for both input and output. You can also convert between formats during compression for additional optimization."
      },
      {
        question: "Can I compress multiple images at once?",
        answer: "Yes, you can upload and compress multiple images simultaneously. This batch processing feature saves time when optimizing many images."
      }
    ],
    
    relatedTools: [
      { name: "Image Resizer", href: "/image-resizer", description: "Resize images to any dimension" },
      { name: "Image Format Converter", href: "/image-format-converter", description: "Convert between image formats" },
      { name: "Image Cropper", href: "/image-cropper", description: "Crop images to specific dimensions" },
      { name: "Background Remover", href: "/background-remover", description: "Remove image backgrounds" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<ImageCompressor />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default ImageCompressorPage;
