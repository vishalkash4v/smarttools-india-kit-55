
import React from 'react';
import QrGenerator from '@/components/tools/QrGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const QrGeneratorPage = () => {
  const toolData = {
    title: "Free QR Code Generator Online",
    description: "Generate QR codes instantly for URLs, text, WiFi, and more. Create custom QR codes with logo, colors, and different formats. Free, fast, and secure QR code generator tool.",
    keywords: "QR code generator, create QR code, QR generator, free QR code, custom QR code, QR code maker",
    
    howToUse: [
      "Enter your text, URL, or data in the input field",
      "Choose QR code size and error correction level",
      "Customize colors and add logo if needed",
      "Click 'Generate QR Code' to create your code",
      "Download your QR code in PNG or SVG format"
    ],
    
    features: [
      "Generate QR codes for URLs, text, WiFi, and contact info",
      "Customizable size and error correction levels",
      "Add custom colors and logos to your QR codes",
      "Download in multiple formats (PNG, SVG, PDF)",
      "High-resolution output for print and digital use",
      "No registration required - completely free"
    ],
    
    faqs: [
      {
        question: "What types of data can I encode in a QR code?",
        answer: "You can encode URLs, plain text, WiFi credentials, contact information, email addresses, phone numbers, and more. Our generator supports all standard QR code data types."
      },
      {
        question: "Can I customize the appearance of my QR code?",
        answer: "Yes! You can change colors, add your logo, adjust the size, and choose different error correction levels to customize your QR code's appearance and functionality."
      },
      {
        question: "What's the maximum amount of data I can encode?",
        answer: "QR codes can store up to 4,296 alphanumeric characters or 7,089 numeric characters. The exact limit depends on the data type and error correction level you choose."
      },
      {
        question: "Are the QR codes I generate free to use commercially?",
        answer: "Yes, all QR codes generated with our tool are free to use for personal and commercial purposes. There are no licensing fees or restrictions."
      },
      {
        question: "Do QR codes expire?",
        answer: "No, QR codes themselves don't expire. However, if your QR code links to a URL, that webpage might become unavailable over time. Static QR codes (like text) never expire."
      }
    ],
    
    relatedTools: [
      { name: "QR Code Scanner", href: "/qr-scanner" },
      { name: "Barcode Generator", href: "/barcode-generator" },
      { name: "URL Shortener", href: "/url-shortener" },
      { name: "Logo to Favicon", href: "/logo-to-favicon" }
    ]
  };

  return (
    <ToolPageLayout {...toolData}>
      <QrGenerator />
    </ToolPageLayout>
  );
};

export default QrGeneratorPage;
