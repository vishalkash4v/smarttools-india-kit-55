
import React from 'react';
import BarcodeGenerator from '@/components/tools/BarcodeGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const BarcodeGeneratorPage = () => {
  const toolData = {
    title: "Barcode Generator - Create Custom Barcodes Online",
    description: "Generate various types of barcodes including Code 128, EAN-13, UPC-A, and more. Create printable barcodes for products, inventory, and business use.",
    category: "Generator Tools",
    
    howToUse: [
      "Enter the data you want to encode in the barcode",
      "Select the barcode type (Code 128, EAN-13, UPC-A, etc.)",
      "Customize the barcode size and appearance",
      "Preview the generated barcode",
      "Download the barcode as PNG or SVG format"
    ],
    
    features: [
      "Multiple barcode formats supported",
      "Customizable size and appearance options",
      "High-quality PNG and SVG output",
      "Real-time barcode preview",
      "Batch barcode generation",
      "Print-ready barcode quality"
    ],
    
    faqs: [
      {
        question: "What barcode formats are supported?",
        answer: "We support Code 128, Code 39, EAN-13, EAN-8, UPC-A, UPC-E, Codabar, ITF-14, and other popular barcode formats commonly used in retail and inventory management."
      },
      {
        question: "Can I customize the barcode appearance?",
        answer: "Yes, you can adjust the barcode width, height, font size, and include or exclude the text below the barcode according to your needs."
      },
      {
        question: "What data can I encode in barcodes?",
        answer: "You can encode numbers, letters, and special characters depending on the barcode format. Each format has specific character limitations and requirements."
      },
      {
        question: "Are the generated barcodes scannable?",
        answer: "Yes, all generated barcodes follow international standards and are scannable by any standard barcode scanner or smartphone app."
      }
    ],
    
    relatedTools: [
      { name: "QR Code Generator", href: "/qr-code-generator", description: "Generate QR codes" },
      { name: "Label Maker", href: "/label-maker", description: "Create custom labels" },
      { name: "Inventory Manager", href: "/inventory-manager", description: "Manage product inventory" },
      { name: "Product Catalog", href: "/product-catalog", description: "Create product catalogs" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<BarcodeGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default BarcodeGeneratorPage;
