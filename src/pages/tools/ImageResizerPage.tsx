
import React from 'react';
import ImageResizer from '@/components/tools/ImageResizer';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ImageResizerPage = () => {
  const toolData = {
    title: "Free Image Resizer Online",
    description: "Resize images online for free. Reduce or increase image dimensions while maintaining quality. Perfect for social media, websites, and print. Supports JPEG, PNG, WebP formats.",
    category: "Image Tools",
    
    howToUse: [
      "Upload your image by clicking or dragging it to the upload area",
      "Enter the desired width and height dimensions",
      "Choose to maintain aspect ratio or stretch the image",
      "Select the output format (JPEG, PNG, WebP)",
      "Click 'Resize Image' and download the result"
    ],
    
    features: [
      "Resize images to exact dimensions",
      "Maintain aspect ratio automatically",
      "Support for JPEG, PNG, WebP formats",
      "High-quality resizing algorithms",
      "Batch image resizing capability",
      "No file size or quantity limits"
    ],
    
    faqs: [
      {
        question: "What image formats are supported?",
        answer: "We support JPEG, PNG, WebP, and GIF formats for both input and output. You can also convert between formats while resizing."
      },
      {
        question: "Will resizing affect image quality?",
        answer: "Our advanced algorithms minimize quality loss during resizing. However, enlarging images beyond their original size may result in some quality reduction."
      },
      {
        question: "Can I resize multiple images at once?",
        answer: "Yes, you can upload and resize multiple images simultaneously. This is perfect for batch processing large numbers of images."
      },
      {
        question: "What's the maximum file size I can resize?",
        answer: "There's no strict file size limit, but very large images may take longer to process. For best performance, we recommend images under 50MB."
      },
      {
        question: "Are my images stored on your servers?",
        answer: "No, all image processing happens locally in your browser. Your images are never uploaded to our servers, ensuring complete privacy."
      }
    ],
    
    relatedTools: [
      { name: "Image Compressor", href: "/image-compressor", description: "Reduce image file sizes" },
      { name: "Image Cropper", href: "/image-cropper", description: "Crop images to specific dimensions" },
      { name: "Image Format Converter", href: "/image-format-converter", description: "Convert between image formats" },
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
