
import React from 'react';
import ImageCropper from '@/components/tools/ImageCropper';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ImageCropperPage = () => {
  const toolData = {
    title: "Free Image Cropper Tool Online",
    description: "Crop images online with precision. Select custom areas, maintain aspect ratios, and download cropped images instantly. Perfect for profile pictures, thumbnails, and social media posts.",
    category: "Image Tools",
    
    howToUse: [
      "Upload your image by clicking or dragging to the upload area",
      "Select the crop area by dragging on the image",
      "Adjust the crop selection using corner handles",
      "Choose aspect ratio presets or use custom dimensions",
      "Click 'Crop' to process your image and download"
    ],
    
    features: [
      "Drag-and-drop image upload",
      "Interactive crop selection tool",
      "Aspect ratio presets (1:1, 16:9, 4:3, etc.)",
      "Custom crop dimensions",
      "Real-time preview",
      "High-quality output"
    ],
    
    faqs: [
      {
        question: "What image formats are supported?",
        answer: "We support all common image formats including JPEG, PNG, WebP, and GIF. The output will maintain the original format or convert to your preferred format."
      },
      {
        question: "Can I maintain specific aspect ratios?",
        answer: "Yes, we provide common aspect ratio presets like 1:1 (square), 16:9 (widescreen), 4:3 (standard), and you can also set custom ratios."
      },
      {
        question: "Will cropping reduce image quality?",
        answer: "No, cropping only removes parts of the image without compression. The remaining area maintains its original quality."
      },
      {
        question: "Is there a file size limit?",
        answer: "We support images up to 10MB in size. For larger files, consider compressing your image first."
      }
    ],
    
    relatedTools: [
      { name: "Image Resizer", href: "/image-resizer", description: "Resize images to specific dimensions" },
      { name: "Image Compressor", href: "/image-compressor", description: "Reduce image file sizes" },
      { name: "Background Remover", href: "/background-remover", description: "Remove image backgrounds" },
      { name: "Image Format Converter", href: "/image-format-converter", description: "Convert image formats" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<ImageCropper />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default ImageCropperPage;
