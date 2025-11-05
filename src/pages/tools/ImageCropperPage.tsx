
import React from 'react';
import ImageCropper from '@/components/tools/ImageCropper';
import EnhancedToolPageLayout from '@/components/tools/EnhancedToolPageLayout';

const ImageCropperPage = () => {
  const toolData = {
    title: "Free Image Cropper Tool Online - Crop Images for Social Media & Web",
    description: "Crop images with precision using our professional image cropper. Perfect for social media posts, profile pictures, thumbnails, and web content. Upload high-quality images and crop them to exact social media dimensions without compression.",
    shortIntro: "Transform your images with our professional image cropper. Create perfect crops for social media, web, and print with exact dimensions and zero quality loss.",
    category: "Image Tools",
    keywords: [
      "image cropper",
      "crop images online",
      "social media image cropper",
      "Instagram image cropper",
      "Facebook photo cropper",
      "Twitter image cropper",
      "LinkedIn image cropper",
      "YouTube thumbnail cropper",
      "profile picture cropper",
      "image crop tool",
      "photo cropper",
      "crop photos online",
      "image crop editor",
      "free image cropper",
      "online photo cropper",
      "crop image tool",
      "image cropping software",
      "photo crop editor",
      "crop images for social media",
      "Instagram post cropper",
      "Facebook cover cropper",
      "Twitter header cropper",
      "LinkedIn post cropper",
      "YouTube thumbnail cropper",
      "high quality image cropper",
      "precise image cropping",
      "mobile image cropper",
      "responsive image cropper"
    ],
    canonicalUrl: "https://fyntools.com/image-cropper",
    
    howToUse: [
      "Upload your high-quality image file (JPG, PNG, WebP supported)",
      "Choose from 20+ social media presets or custom dimensions",
      "Drag to adjust crop area or use arrow controls for precision",
      "Preview your cropped image in real-time",
      "Download your perfectly cropped image with zero quality loss"
    ],
    
    features: [
      "20+ Social media presets (Instagram, Facebook, Twitter, LinkedIn, YouTube)",
      "Exact platform dimensions for perfect social media posts",
      "Mobile-responsive touch-friendly interface",
      "Real-time crop preview with high accuracy",
      "Zero quality loss - maintain original image quality",
      "Support for all major image formats (JPG, PNG, WebP, GIF)",
      "Precise crop positioning with arrow controls",
      "Custom dimension support for any size",
      "High-quality output suitable for print and web",
      "Instant download with optimized file names",
      "Professional-grade cropping algorithms",
      "Touch and drag support for mobile devices"
    ],
    
    faqs: [
      {
        question: "What social media platforms are supported?",
        answer: "We support all major platforms including Instagram (posts, stories, reels), Facebook (posts, cover photos, stories), Twitter (posts, headers), LinkedIn (posts, cover), YouTube (thumbnails, channel art), and more with exact dimensions."
      },
      {
        question: "Will cropping reduce my image quality?",
        answer: "No! Our cropper maintains 100% original quality. We use lossless cropping that preserves every pixel without compression or quality degradation."
      },
      {
        question: "Can I crop images on mobile devices?",
        answer: "Absolutely! Our cropper is fully mobile-responsive with touch-friendly controls, drag gestures, and optimized interface for smartphones and tablets."
      },
      {
        question: "What image formats are supported?",
        answer: "We support all common formats including JPEG, PNG, WebP, GIF, and more. Output maintains original format or converts to your preferred format."
      },
      {
        question: "Are the social media dimensions accurate?",
        answer: "Yes! All our presets use the exact current dimensions from each platform's official guidelines, ensuring your images display perfectly on social media."
      },
      {
        question: "Can I set custom crop dimensions?",
        answer: "Yes! You can set any custom width and height for your specific needs, perfect for web design, print materials, or unique requirements."
      },
      {
        question: "Is there a file size limit?",
        answer: "We support images up to 50MB for optimal performance. For larger files, we recommend compressing first with our image compressor tool."
      },
      {
        question: "How precise is the cropping?",
        answer: "Our cropper offers pixel-perfect precision with drag controls, arrow buttons, and real-time preview to ensure exactly the crop you want."
      }
    ],
    
    relatedTools: [
      { name: "Image Resizer", href: "/image-resizer", description: "Resize images to specific dimensions with presets" },
      { name: "Image Compressor", href: "/image-compressor", description: "Reduce image file sizes without losing quality" },
      { name: "Background Remover", href: "/background-remover", description: "Remove backgrounds from images automatically" },
      { name: "Image Format Converter", href: "/image-format-converter", description: "Convert between different image formats" },
      { name: "Image Upscaler", href: "/image-upscaler", description: "Enhance image resolution with AI technology" },
      { name: "Image Metadata Viewer", href: "/image-metadata-viewer", description: "View and analyze image metadata and properties" }
    ],
    
    testimonials: [
      {
        name: "Jessica Martinez",
        rating: 5,
        text: "Perfect for my Instagram posts! The exact dimensions make my feed look professional. The mobile interface is so easy to use.",
        title: "Social Media Manager"
      },
      {
        name: "David Chen",
        rating: 5,
        text: "Amazing tool! I use it for all my YouTube thumbnails. The quality is perfect and the presets save me so much time.",
        title: "Content Creator"
      },
      {
        name: "Sarah Johnson",
        rating: 5,
        text: "The LinkedIn post cropper is exactly what I needed for my business content. Zero quality loss and perfect dimensions every time.",
        title: "Business Owner"
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
      toolInterface={<ImageCropper />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
      testimonials={toolData.testimonials}
    />
  );
};

export default ImageCropperPage;
