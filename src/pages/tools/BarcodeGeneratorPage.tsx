
import React from 'react';
import BarcodeGenerator from '@/components/tools/BarcodeGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const BarcodeGeneratorPage = () => {
  const toolData = {
    title: "Free Barcode Generator Online",
    description: "Generate barcodes in multiple formats including Code 128, EAN-13, UPC-A, and more. Create high-quality barcodes for products, inventory, and business use. Free online barcode generator tool.",
    category: "Business Tools",
    
    howToUse: [
      "Enter your data or product number in the input field",
      "Select the barcode format (Code 128, EAN-13, UPC-A, etc.)",
      "Adjust the barcode size and display options",
      "Click 'Generate Barcode' to create your barcode",
      "Download your barcode as PNG or SVG file"
    ],
    
    features: [
      "Support for multiple barcode formats (Code 128, EAN-13, UPC-A, Code 39)",
      "High-resolution output suitable for printing",
      "Customizable size and display options",
      "Download in PNG and SVG formats",
      "Real-time barcode preview",
      "No registration required - completely free"
    ],
    
    faqs: [
      {
        question: "What barcode formats are supported?",
        answer: "We support Code 128, EAN-13, UPC-A, Code 39, Code 93, and several other popular barcode formats. Each format has specific use cases and data requirements."
      },
      {
        question: "Can I use generated barcodes for commercial products?",
        answer: "Yes, but for commercial products, you may need to register with GS1 to get official product codes (like UPC or EAN codes). Our generator creates the visual barcode from your data."
      },
      {
        question: "What's the difference between barcode formats?",
        answer: "Different formats serve different purposes: Code 128 is versatile for general use, EAN-13 is for retail products, UPC-A is common in North America, and Code 39 is often used in logistics."
      },
      {
        question: "Can I customize the barcode appearance?",
        answer: "Yes, you can adjust the size, add text labels, and choose different output formats. The barcode itself must follow format standards, but display options are customizable."
      },
      {
        question: "Are the generated barcodes scannable?",
        answer: "Yes, all barcodes generated follow industry standards and are fully scannable with standard barcode readers and smartphone apps."
      }
    ],
    
    relatedTools: [
      { name: "QR Code Generator", href: "/qr-generator", description: "Create QR codes for various purposes" },
      { name: "QR Code Scanner", href: "/qr-scanner", description: "Scan and decode QR codes" },
      { name: "Image Resizer", href: "/image-resizer", description: "Resize images for different uses" },
      { name: "Logo to Favicon", href: "/logo-to-favicon", description: "Convert logos to favicons" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<BarcodeGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default BarcodeGeneratorPage;
