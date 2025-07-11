
import React from 'react';
import BackgroundRemover from '@/components/tools/BackgroundRemover';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const BackgroundRemoverPage = () => {
  const toolData = {
    title: "AI Background Remover - Remove Image Backgrounds Online",
    description: "Remove backgrounds from images instantly using AI technology. Create transparent PNGs, professional headshots, and clean product photos. Free online background remover.",
    category: "Image Tools",
    
    howToUse: [
      "Upload your image by clicking or dragging it to the upload area",
      "Wait for AI to automatically detect and remove the background",
      "Preview the result with transparent background",
      "Fine-tune edges if needed using the editing tools",
      "Download your image as PNG with transparent background"
    ],
    
    features: [
      "AI-powered automatic background removal",
      "Support for JPG, PNG, and WebP formats",
      "High-quality edge detection and preservation",
      "Batch processing for multiple images",
      "Manual editing tools for fine-tuning",
      "Download as transparent PNG"
    ],
    
    faqs: [
      {
        question: "How accurate is the background removal?",
        answer: "Our AI uses advanced machine learning models trained on millions of images to achieve high accuracy, especially with clear subjects like people, products, and objects."
      },
      {
        question: "What image formats are supported?",
        answer: "You can upload JPG, JPEG, PNG, and WebP images. The output is always a PNG file with transparent background for maximum compatibility."
      },
      {
        question: "Can I edit the results manually?",
        answer: "Yes, after AI processing, you can use manual editing tools to refine edges, add back parts of the background, or remove additional elements."
      },
      {
        question: "Is there a file size limit?",
        answer: "We support images up to 10MB in size. For larger files, consider compressing your image first or contact us for enterprise solutions."
      }
    ],
    
    relatedTools: [
      { name: "Image Resizer", href: "/image-resizer", description: "Resize images to any dimension" },
      { name: "Image Compressor", href: "/image-compressor", description: "Reduce image file sizes" },
      { name: "Image Format Converter", href: "/image-format-converter", description: "Convert between image formats" },
      { name: "Photo Editor", href: "/photo-editor", description: "Edit photos online" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<BackgroundRemover />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default BackgroundRemoverPage;
