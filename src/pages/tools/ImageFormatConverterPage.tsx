
import React from 'react';
import ImageFormatConverter from '@/components/tools/ImageFormatConverter';
import EnhancedToolPageLayout from '@/components/tools/EnhancedToolPageLayout';

const ImageFormatConverterPage = () => {
  const toolData = {
    title: "Free Image Format Converter Online - Convert JPG, PNG, WebP, GIF, BMP, TIFF, SVG",
    description: "Convert images between all major formats with zero quality loss. Support for JPEG, PNG, WebP, GIF, BMP, TIFF, SVG, and more. Batch conversion, quality control, and perfect format optimization for web and print.",
    shortIntro: "Transform your images with our professional format converter. Convert between 15+ image formats with perfect quality preservation and advanced optimization settings.",
    category: "Image Tools",
    keywords: [
      "image format converter",
      "convert image format",
      "JPG to PNG converter",
      "PNG to JPG converter",
      "WebP converter",
      "GIF converter",
      "BMP converter",
      "TIFF converter",
      "SVG converter",
      "image format conversion",
      "format converter online",
      "free image converter",
      "batch image converter",
      "image format changer",
      "convert photos",
      "image file converter",
      "photo format converter",
      "image converter tool",
      "format conversion software",
      "image format optimizer",
      "web image converter",
      "print image converter",
      "high quality converter",
      "lossless conversion",
      "image format support",
      "universal image converter",
      "professional image converter",
      "mobile image converter",
      "responsive image converter"
    ],
    canonicalUrl: "https://fyntools.com/image-format-converter",
    
    howToUse: [
      "Upload your image files (supports 15+ formats including JPG, PNG, WebP, GIF, BMP, TIFF, SVG)",
      "Choose your target format from 15+ supported formats",
      "Adjust quality settings for optimal file size and quality balance",
      "Select batch processing for multiple images",
      "Download converted images with perfect quality preservation"
    ],
    
    features: [
      "15+ Image formats supported (JPG, PNG, WebP, GIF, BMP, TIFF, SVG, ICO, AVIF, HEIC)",
      "Zero quality loss conversion with advanced algorithms",
      "Batch conversion for multiple images simultaneously",
      "Quality control for lossy formats (JPEG, WebP)",
      "Lossless conversion for PNG, BMP, TIFF formats",
      "Advanced compression optimization",
      "Web-optimized output for faster loading",
      "Print-ready high-resolution output",
      "Mobile-responsive interface",
      "Fast client-side processing",
      "No file size limits",
      "Professional-grade conversion algorithms",
      "Format-specific optimization settings",
      "Metadata preservation options",
      "Color space management",
      "Transparency support for PNG/WebP",
      "Animation support for GIF/WebP",
      "Vector graphics support (SVG)",
      "Progressive JPEG optimization",
      "WebP advanced features (lossless, animation)"
    ],
    
    faqs: [
      {
        question: "Which image formats are supported for conversion?",
        answer: "We support 15+ formats including JPEG, PNG, WebP, GIF, BMP, TIFF, SVG, ICO, AVIF, HEIC, and more. Both input and output formats are fully supported with perfect quality preservation."
      },
      {
        question: "Can I convert multiple images at once?",
        answer: "Yes! Our batch conversion feature allows you to upload and convert multiple images simultaneously. All converted images can be downloaded individually or as a ZIP archive for convenience."
      },
      {
        question: "Will the conversion affect image quality?",
        answer: "For lossless formats like PNG, BMP, and TIFF, quality is perfectly preserved. For lossy formats like JPEG and WebP, you can adjust quality settings to balance file size and image quality according to your needs."
      },
      {
        question: "Why should I convert to WebP format?",
        answer: "WebP provides 25-35% better compression than JPEG while maintaining high quality. It supports both lossy and lossless compression, transparency, and animation, making it ideal for modern web applications."
      },
      {
        question: "What's the difference between lossy and lossless conversion?",
        answer: "Lossless conversion (PNG, BMP, TIFF) preserves every pixel exactly as the original. Lossy conversion (JPEG, WebP) uses compression to reduce file size while maintaining visual quality - you can control the quality level."
      },
      {
        question: "Can I convert SVG files?",
        answer: "Yes! SVG (Scalable Vector Graphics) files can be converted to raster formats like PNG, JPEG, or WebP. The vector graphics will be rendered at your specified resolution for optimal quality."
      },
      {
        question: "Is there a file size limit?",
        answer: "No, there are no file size limits. Our converter processes images client-side, so you can convert images of any size without restrictions."
      },
      {
        question: "How does batch conversion work?",
        answer: "Upload multiple images, select your target format, and our converter will process all images simultaneously. You can download them individually or as a single ZIP file for convenience."
      },
      {
        question: "Can I preserve image metadata during conversion?",
        answer: "Yes, our converter can preserve EXIF data, color profiles, and other metadata when converting between compatible formats, ensuring your images retain their professional properties."
      },
      {
        question: "Which format is best for web use?",
        answer: "WebP is ideal for modern web use due to superior compression. For broader compatibility, JPEG works well for photos, while PNG is perfect for graphics with transparency."
      }
    ],
    
    relatedTools: [
      { name: "Image Compressor", href: "/image-compressor", description: "Reduce image file sizes without losing quality" },
      { name: "Image Resizer", href: "/image-resizer", description: "Resize images to specific dimensions with presets" },
      { name: "Image Cropper", href: "/image-cropper", description: "Crop images to specific areas and remove unwanted parts" },
      { name: "Background Remover", href: "/background-remover", description: "Remove backgrounds from images automatically" },
      { name: "Image Upscaler", href: "/image-upscaler", description: "Enhance image resolution with AI technology" },
      { name: "Image Metadata Viewer", href: "/image-metadata-viewer", description: "View and analyze image metadata and properties" }
    ],
    
    testimonials: [
      {
        name: "Alex Thompson",
        rating: 5,
        text: "Perfect for my web development work! Converting images to WebP format has improved my site's loading speed significantly. The quality is excellent.",
        title: "Web Developer"
      },
      {
        name: "Maria Rodriguez",
        rating: 5,
        text: "Amazing tool! I needed to convert hundreds of photos from TIFF to JPEG for a project. The batch conversion saved me hours of work.",
        title: "Photographer"
      },
      {
        name: "David Kim",
        rating: 5,
        text: "The quality preservation is outstanding. I converted my portfolio images to different formats and they look exactly the same. Highly recommended!",
        title: "Graphic Designer"
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
      toolInterface={<ImageFormatConverter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
      testimonials={toolData.testimonials}
    />
  );
};

export default ImageFormatConverterPage;
