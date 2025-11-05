
import React from 'react';
import ImageUpscaler from '@/components/tools/ImageUpscaler';
import EnhancedToolPageLayout from '@/components/tools/EnhancedToolPageLayout';

const ImageUpscalerPage = () => {
  const toolData = {
    title: "Free AI Image Upscaler Online - Enhance Image Resolution & Quality",
    description: "Upscale images using advanced AI technology. Enhance image resolution up to 500% while preserving details and quality. Perfect for enlarging photos, artwork, graphics, and creating high-resolution images for print or digital use.",
    shortIntro: "Transform your images with our professional AI-powered image upscaler. Enhance resolution, improve quality, and create stunning high-resolution images from any source.",
    category: "Image Tools",
    keywords: [
      "AI image upscaler",
      "image upscaling",
      "enhance image resolution",
      "AI image enhancer",
      "upscale photos",
      "image quality improvement",
      "high resolution images",
      "AI photo enhancement",
      "image enlargement",
      "super resolution",
      "AI image processing",
      "photo upscaling",
      "image enhancement tool",
      "AI image generator",
      "image resolution enhancer",
      "free image upscaler",
      "online image upscaling",
      "AI image technology",
      "image quality boost",
      "professional image upscaler",
      "AI photo upscaling",
      "image detail enhancement",
      "AI image restoration",
      "high quality image upscaling"
    ],
    canonicalUrl: "https://fyntools.com/image-upscaler",
    
    howToUse: [
      "Upload your image file (JPG, PNG, WebP supported)",
      "Choose enhancement mode: Percentage scaling or Target file size",
      "Select your desired upscaling factor (50% to 500%)",
      "Click 'Enhance Image' to process with AI algorithms",
      "Download your high-resolution enhanced image instantly"
    ],
    
    features: [
      "AI-powered multi-pass scaling technology",
      "Enhance images up to 500% of original size",
      "Advanced size validation and limits",
      "Preserve fine details and textures",
      "Support for photos, artwork, and graphics",
      "Smart quality optimization",
      "Real-time processing progress",
      "High-quality output formats (WebP, PNG, JPEG)",
      "Mobile-responsive interface",
      "Batch processing capabilities",
      "Professional-grade algorithms",
      "File size optimization",
      "Before/after comparison view"
    ],
    
    faqs: [
      {
        question: "How does AI image upscaling work?",
        answer: "Our AI upscaler uses advanced multi-pass scaling algorithms that intelligently analyze and enhance image details. It processes images in steps of up to 2x scaling to maintain quality and prevent artifacts."
      },
      {
        question: "What is the maximum upscaling limit?",
        answer: "You can enhance images up to 500% of their original size. This limit ensures optimal quality and prevents over-processing that could degrade image quality."
      },
      {
        question: "What types of images work best for upscaling?",
        answer: "The AI upscaler works excellently with photos, artwork, graphics, and illustrations. Higher quality source images typically produce better upscaling results."
      },
      {
        question: "How long does the upscaling process take?",
        answer: "Processing time depends on image size and upscaling factor. Small images (under 1MB) typically process in 5-15 seconds, while larger images may take 1-3 minutes."
      },
      {
        question: "Can I upscale images for print use?",
        answer: "Yes! Our AI upscaler is perfect for creating high-resolution images for print. The enhanced images maintain quality suitable for professional printing applications."
      },
      {
        question: "What file formats are supported?",
        answer: "We support JPEG, PNG, and WebP input formats. Output is optimized to WebP when possible, with fallback to PNG or JPEG for maximum compatibility."
      },
      {
        question: "Is there a file size limit?",
        answer: "We recommend images under 50MB for optimal processing. Larger files are supported but may take longer to process."
      },
      {
        question: "How does the target file size mode work?",
        answer: "In target file size mode, the tool keeps original dimensions but adjusts compression quality to reach your desired file size, perfect for web optimization."
      }
    ],
    
    relatedTools: [
      { name: "Image Resizer", href: "/image-resizer", description: "Resize images to specific dimensions with presets" },
      { name: "Image Compressor", href: "/image-compressor", description: "Reduce image file sizes without losing quality" },
      { name: "Background Remover", href: "/background-remover", description: "Remove backgrounds from images automatically" },
      { name: "Image Format Converter", href: "/image-format-converter", description: "Convert between different image formats" },
      { name: "Image Cropper", href: "/image-cropper", description: "Crop images to specific areas and remove unwanted parts" },
      { name: "Image Metadata Viewer", href: "/image-metadata-viewer", description: "View and analyze image metadata and properties" }
    ],
    
    testimonials: [
      {
        name: "Sarah Chen",
        rating: 5,
        text: "Amazing results! I upscaled a small family photo from the 90s and it looks incredible. The AI preserved all the details perfectly.",
        title: "Photography Enthusiast"
      },
      {
        name: "Michael Rodriguez",
        rating: 5,
        text: "Perfect for my design work. I can now create high-resolution graphics from small source images without losing quality.",
        title: "Graphic Designer"
      },
      {
        name: "Emma Thompson",
        rating: 5,
        text: "The 500% limit is perfect - I enhanced an old artwork and it looks professional. The processing was fast and the results exceeded my expectations.",
        title: "Digital Artist"
      }
    ]
  };

  return (
    <EnhancedToolPageLayout
      title={toolData.title}
      description={toolData.description}
      shortIntro={toolData.shortIntro}
      keywords={toolData.keywords.join(", ")}
      canonicalUrl={toolData.canonicalUrl}
      toolInterface={<ImageUpscaler />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
      testimonials={toolData.testimonials}
    />
  );
};

export default ImageUpscalerPage;
