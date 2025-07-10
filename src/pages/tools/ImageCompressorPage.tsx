
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ImageCompressor from '@/components/tools/ImageCompressor';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ImageCompressorPage = () => {
  const howToUse = [
    "Click 'Choose Files' or drag and drop your images into the upload area",
    "Select your desired compression quality (higher quality = larger file size)",
    "Choose the output format (JPEG, PNG, or WebP)",
    "Click 'Compress Images' to start the optimization process",
    "Download your compressed images individually or as a ZIP file"
  ];

  const features = [
    "Compress multiple images simultaneously",
    "Support for JPEG, PNG, WebP, and GIF formats",
    "Adjustable compression quality settings",
    "Batch processing for multiple files",
    "No file size limits or upload restrictions",
    "Secure browser-based processing",
    "Instant download of compressed images",
    "Preview original vs compressed file sizes",
    "Mobile-friendly drag-and-drop interface",
    "No watermarks or registration required"
  ];

  const faqs = [
    {
      question: "How much can I reduce my image file size?",
      answer: "Typically, you can reduce image file sizes by 60-80% while maintaining good visual quality. The exact compression depends on your quality settings and the original image content."
    },
    {
      question: "Does image compression affect image quality?",
      answer: "Some quality loss is normal with compression, but our tool allows you to control the quality level. Higher quality settings preserve more detail but result in larger file sizes."
    },
    {
      question: "What image formats are supported?",
      answer: "We support JPEG, PNG, WebP, and GIF formats for input. You can convert between formats and choose the best output format for your needs."
    },
    {
      question: "Is there a limit on file size or number of images?",
      answer: "No, there are no limits on file size or the number of images you can compress. Process as many images as you need, completely free."
    },
    {
      question: "Are my images stored on your servers?",
      answer: "No, all image compression happens locally in your browser. Your images never leave your device, ensuring complete privacy and security."
    }
  ];

  const relatedTools = [
    {
      name: "Image Resizer",
      href: "/image-resizer",
      description: "Resize images to specific dimensions"
    },
    {
      name: "Image Format Converter",
      href: "/image-format-converter",
      description: "Convert between different image formats"
    },
    {
      name: "Image Cropper",
      href: "/image-cropper",
      description: "Crop images for social media and web"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Image Compressor - Reduce Image File Size Online</title>
        <meta name="description" content="Free online image compressor. Reduce JPEG, PNG, WebP image file sizes by up to 80% while maintaining quality. No registration required, secure browser processing." />
        <meta name="keywords" content="image compressor, reduce image size, compress photos, optimize images, image optimization, reduce file size, free image compressor" />
        <link rel="canonical" href="https://fyntools.com/image-compressor" />
        <meta property="og:title" content="Free Image Compressor - Reduce File Size Online" />
        <meta property="og:description" content="Compress images and reduce file sizes by up to 80% while maintaining quality. Free, secure, and no registration required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fyntools.com/image-compressor" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Image Compressor - Reduce File Size" />
        <meta name="twitter:description" content="Compress images and reduce file sizes instantly. Free online tool with no registration required." />
      </Helmet>
      
      <ToolPageLayout
        title="Free Image Compressor"
        description="Reduce image file sizes by up to 80% while maintaining visual quality. Our free online image compressor supports JPEG, PNG, WebP formats with adjustable quality settings and batch processing capabilities."
        toolInterface={<ImageCompressor />}
        howToUse={howToUse}
        features={features}
        faqs={faqs}
        relatedTools={relatedTools}
        category="Image Tools"
        rating={4.8}
        userCount="100,000+"
      />
    </>
  );
};

export default ImageCompressorPage;
