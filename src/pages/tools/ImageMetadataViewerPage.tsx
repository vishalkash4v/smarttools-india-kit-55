
import React from 'react';
import ImageMetadataViewer from '@/components/tools/ImageMetadataViewer';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ImageMetadataViewerPage = () => {
  const toolData = {
    title: "Free Image Metadata Viewer Online",
    description: "View and analyze image metadata including EXIF data, camera settings, GPS location, creation date, and technical specifications. Perfect for photographers and digital forensics.",
    category: "Image Tools",
    
    howToUse: [
      "Upload an image file to analyze",
      "View comprehensive metadata information",
      "Explore EXIF data including camera settings",
      "Check GPS coordinates if available",
      "Copy specific metadata values as needed"
    ],
    
    features: [
      "Complete EXIF data extraction",
      "Camera and lens information",
      "GPS location data (if available)",
      "Image technical specifications",
      "Creation and modification dates",
      "Privacy-focused local processing"
    ],
    
    faqs: [
      {
        question: "What is image metadata?",
        answer: "Image metadata includes EXIF data with camera settings, GPS coordinates, timestamps, and technical information embedded in image files by cameras and editing software."
      },
      {
        question: "Which image formats contain metadata?",
        answer: "JPEG files typically contain the most metadata. TIFF, RAW, and some PNG files also contain metadata, while formats like GIF usually have minimal metadata."
      },
      {
        question: "Can I see GPS location from photos?",
        answer: "Yes, if the camera or phone had GPS enabled when the photo was taken, you can view the exact coordinates and location information."
      },
      {
        question: "Is my image data kept private?",
        answer: "Yes, all metadata extraction happens locally in your browser. Your images and their metadata are never uploaded to our servers."
      }
    ],
    
    relatedTools: [
      { name: "Image Compressor", href: "/image-compressor", description: "Reduce image file sizes" },
      { name: "Background Remover", href: "/background-remover", description: "Remove image backgrounds" },
      { name: "Image Format Converter", href: "/image-format-converter", description: "Convert image formats" },
      { name: "Image Resizer", href: "/image-resizer", description: "Resize images" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<ImageMetadataViewer />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default ImageMetadataViewerPage;
