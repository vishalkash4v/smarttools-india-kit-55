
import React from 'react';
import ImageResizer from '@/components/tools/ImageResizer';
import EnhancedToolPageLayout from '@/components/tools/EnhancedToolPageLayout';

const ImageResizerPage = () => {
  const toolData = {
    title: "Free Image Resizer Tool Online - Resize Photos & Images Instantly",
    description: "Resize images to any dimension while maintaining quality. Free online image resizer with preset sizes for social media, government portals (GATE, NEET, UPSC, SSC), print, and web use. Batch resize multiple images instantly.",
    shortIntro: "Transform your images with our professional-grade image resizer. Perfect for social media posts, government exam applications, print materials, and web optimization.",
    category: "Image Tools",
    keywords: [
      "image resizer",
      "resize images online",
      "photo resizer",
      "image size converter",
      "social media image resizer",
      "government exam photo resizer",
      "GATE photo resize",
      "NEET photo resize",
      "UPSC photo resize",
      "SSC photo resize",
      "Instagram image resizer",
      "Facebook photo resizer",
      "LinkedIn image resizer",
      "Twitter image resizer",
      "batch image resize",
      "free image resizer",
      "online photo editor",
      "image dimension changer",
      "aspect ratio maintainer",
      "DPI converter",
      "image quality optimizer",
      "print image resizer",
      "web image optimizer"
    ],
    canonicalUrl: "https://fyntools.com/tools/image-resizer",
    
    howToUse: [
      "Upload your image file (JPG, PNG, WebP supported)",
      "Choose your purpose: Education/Government, Social Media, or Manual resize",
      "Select specific preset for your needs (GATE, NEET, Instagram, etc.)",
      "Fine-tune dimensions, quality, and format if needed",
      "Download your perfectly resized image instantly"
    ],
    
    features: [
      "Step-by-step guided resizing process",
      "Education & Government portal presets (GATE, NEET, UPSC, SSC, IBPS, HPPSC, HPSSC)",
      "Social media presets (Instagram, Facebook, LinkedIn, Twitter, TikTok)",
      "Manual resize with custom dimensions and DPI settings",
      "Maintain aspect ratios automatically",
      "Quality control for optimal file sizes",
      "Support for JPEG, PNG, and WebP formats",
      "Real-time preview and comparison",
      "Mobile-responsive design",
      "Batch processing capabilities",
      "File size optimization",
      "Professional-grade algorithms"
    ],
    
    faqs: [
      {
        question: "What image formats are supported?",
        answer: "Our image resizer supports JPEG, PNG, and WebP formats. You can also convert between these formats during the resize process."
      },
      {
        question: "Can I resize images for government exam applications?",
        answer: "Yes! We have specific presets for GATE, NEET, UPSC, SSC, IBPS, HPPSC, HPSSC, and other government exams with exact size and format requirements."
      },
      {
        question: "Will resizing affect image quality?",
        answer: "Our advanced algorithms minimize quality loss. Enlarging images may reduce quality slightly, but reducing size typically maintains excellent quality. We use high-quality interpolation methods."
      },
      {
        question: "Can I resize images for social media platforms?",
        answer: "Absolutely! We have presets for Instagram (profile, posts, stories), Facebook (cover, posts), LinkedIn (profile, posts), Twitter (profile, headers), and other platforms with exact dimensions."
      },
      {
        question: "What is DPI and how does it affect my images?",
        answer: "DPI (Dots Per Inch) determines print quality. Higher DPI (300+) is for print, while lower DPI (72-150) is for web. Our tool lets you adjust DPI for your specific needs."
      },
      {
        question: "Can I maintain the original aspect ratio?",
        answer: "Yes, our tool automatically maintains aspect ratios to prevent distortion. You can also choose custom dimensions if needed."
      },
      {
        question: "Is there a file size limit?",
        answer: "Our tool can handle large images efficiently. For best performance, we recommend images under 50MB, though larger files are supported."
      },
      {
        question: "Can I batch resize multiple images?",
        answer: "Yes, you can process multiple images with the same settings. This is perfect for creating consistent image sets for websites or social media campaigns."
      }
    ],
    
    relatedTools: [
      { name: "Image Cropper", href: "/tools/image-cropper", description: "Crop images to specific areas and remove unwanted parts" },
      { name: "Image Compressor", href: "/tools/image-compressor", description: "Reduce image file sizes without losing quality" },
      { name: "Image Format Converter", href: "/tools/image-format-converter", description: "Convert between JPEG, PNG, WebP, and other formats" },
      { name: "Background Remover", href: "/tools/background-remover", description: "Remove backgrounds from images automatically" },
      { name: "Image Upscaler", href: "/tools/image-upscaler", description: "Enhance image resolution using AI technology" },
      { name: "QR Code Generator", href: "/tools/qr-generator", description: "Create QR codes for websites and information" }
    ],
    
    testimonials: [
      {
        name: "Priya Sharma",
        rating: 5,
        text: "Perfect for my GATE application photos! The preset made it so easy to get the exact dimensions required.",
        title: "GATE Aspirant"
      },
      {
        name: "Rajesh Kumar",
        rating: 5,
        text: "Excellent tool for social media content. The Instagram presets saved me so much time.",
        title: "Social Media Manager"
      },
      {
        name: "Anita Patel",
        rating: 5,
        text: "Love how it maintains aspect ratios automatically. No more distorted images!",
        title: "Website Developer"
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
      toolInterface={<ImageResizer />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
      testimonials={toolData.testimonials}
    />
  );
};

export default ImageResizerPage;
