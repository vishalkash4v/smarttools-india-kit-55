
import React from 'react';
import QRCodeGenerator from '@/components/tools/QRCodeGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const QRCodeGeneratorPage = () => {
  const toolData = {
    title: "QR Code Generator - Create QR Codes Online Free",
    description: "Generate QR codes for text, URLs, WiFi passwords, contact info, and more. Create custom QR codes with logos, colors, and different sizes for print and digital use.",
    category: "Utility Tools",
    
    howToUse: [
      "Enter the text, URL, or data you want to encode",
      "Choose QR code size and error correction level",
      "Customize colors and add a logo if desired",
      "Click 'Generate QR Code' to create your code",
      "Download the QR code as PNG, SVG, or PDF"
    ],
    
    features: [
      "Generate QR codes for text, URLs, WiFi, contacts, and more",
      "Customizable size and error correction levels",
      "Add custom colors and logos to QR codes",
      "Download in multiple formats (PNG, SVG, PDF)",
      "Batch QR code generation",
      "High-resolution output for print",
      "Mobile-optimized scanning",
      "No registration required"
    ],
    
    faqs: [
      {
        question: "What types of data can I encode in QR codes?",
        answer: "You can encode text, URLs, WiFi credentials, contact information (vCard), email addresses, phone numbers, SMS messages, geographic coordinates, and more. Our generator supports all standard QR code data types."
      },
      {
        question: "What's the difference between error correction levels?",
        answer: "Error correction allows QR codes to be readable even when partially damaged. Low (7% recovery), Medium (15%), Quartile (25%), and High (30%). Higher levels create more complex codes but are more resilient to damage."
      },
      {
        question: "Can I add my logo to the QR code?",
        answer: "Yes, you can add a logo or image to the center of your QR code. The error correction feature ensures the code remains scannable even with a logo overlay, though we recommend keeping logos small."
      },
      {
        question: "What size should I make my QR code for printing?",
        answer: "For print, ensure your QR code is at least 2x2 cm (0.8x0.8 inches) for reliable scanning. Larger codes are generally better, especially for viewing from a distance. Our generator provides high-resolution options suitable for print."
      }
    ],
    
    relatedTools: [
      { name: "QR Scanner", href: "/qr-scanner", description: "Scan and decode QR codes" },
      { name: "Barcode Generator", href: "/barcode-generator", description: "Generate various barcode formats" },
      { name: "URL Shortener", href: "/url-shortener", description: "Create short URLs for QR codes" },
      { name: "Password Generator", href: "/password-generator", description: "Generate secure passwords" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<QRCodeGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default QRCodeGeneratorPage;
