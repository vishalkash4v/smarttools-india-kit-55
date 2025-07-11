
import React from 'react';
import ImageUpscaler from '@/components/tools/ImageUpscaler';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ImageUpscalerPage = () => {
  const toolData = {
    title: "Free AI Image Upscaler Online",
    description: "Upscale images using AI technology. Enhance image resolution and quality without losing details. Perfect for enlarging photos, artwork, and graphics for print or high-resolution displays.",
    category: "Image Tools",
    
    howToUse: [
      "Upload the image you want to upscale",
      "Select the upscaling factor (2x, 4x, etc.)",
      "Choose the AI enhancement model",
      "Click 'Upscale' to process your image",
      "Download the enhanced high-resolution image"
    ],
    
    features: [
      "AI-powered image enhancement",
      "Multiple upscaling factors available",
      "Preserve fine details and textures",
      "Support for photos and artwork",
      "Batch processing capabilities",
      "High-quality output formats"
    ],
    
    faqs: [
      {
        question: "How does AI image upscaling work?",
        answer: "AI upscaling uses machine learning algorithms to intelligently add pixels and enhance details, creating larger images with better quality than traditional interpolation methods."
      },
      {
        question: "What upscaling factors are available?",
        answer: "We typically offer 2x, 4x, and sometimes 8x upscaling factors, depending on the original image size and quality requirements."
      },
      {
        question: "What types of images work best?",
        answer: "The AI upscaler works well with photos, artwork, graphics, and illustrations. Results may vary based on the original image quality and content type."
      },
      {
        question: "How long does upscaling take?",
        answer: "Processing time depends on image size and upscaling factor. Small images typically process in seconds, while larger images may take a few minutes."
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
      toolInterface={<ImageUpscaler />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default ImageUpscalerPage;
