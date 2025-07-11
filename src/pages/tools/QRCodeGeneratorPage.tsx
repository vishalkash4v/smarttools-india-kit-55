
import React from 'react';
import QRCodeGenerator from '@/components/tools/QRCodeGenerator';
import EnhancedToolPageLayout from '@/components/tools/EnhancedToolPageLayout';

const QRCodeGeneratorPage = () => {
  const toolData = {
    title: "QR Code Generator",
    description: "Generate QR codes instantly for free using our online QR Code Generator. Create QR codes for URLs, text, WiFi passwords, contact info, and more with customizable colors, logos, and high-resolution output.",
    shortIntro: "Generate QR codes for URLs, text, emails, and more instantly with our free online QR Code Generator.",
    category: "Utility Tools",
    canonicalUrl: "https://fyntools.com/qr-code-generator",
    keywords: "QR code generator, free QR code, QR code maker, generate QR code online, QR code creator, custom QR code",
    
    howToUse: [
      "Choose your QR code type (URL, text, email, phone, social media, etc.)",
      "Enter your data in the input field or form",
      "Customize colors, size, and add a logo if desired",
      "Click 'Generate QR Code' to create your code",
      "Download the high-quality QR code as PNG image"
    ],
    
    features: [
      "Multiple QR code types: URL, text, email, phone, social media",
      "Customizable colors and branding options",
      "Logo embedding with adjustable size",
      "High-resolution output up to 1024px",
      "Built-in QR code scanner functionality",
      "Instant generation with real-time preview",
      "Free unlimited usage with no watermarks",
      "Mobile-responsive design for all devices"
    ],
    
    faqs: [
      {
        question: "What is a QR Code?",
        answer: "A QR Code is a two-dimensional barcode that stores information such as URLs, text, or contact details, scannable by smartphones and QR readers. QR stands for 'Quick Response' and can hold much more data than traditional barcodes."
      },
      {
        question: "Is this QR Code Generator free to use?",
        answer: "Yes, our QR Code Generator is completely free with no usage limits, no watermarks, and no registration required. You can generate unlimited QR codes for personal and commercial use."
      },
      {
        question: "Can I use these QR codes for commercial purposes?",
        answer: "Yes, you can use the generated QR codes for personal or commercial projects without restrictions. All QR codes created with our tool are royalty-free and can be used in marketing materials, business cards, websites, and more."
      },
      {
        question: "What types of data can I encode in QR codes?",
        answer: "Our generator supports URLs, plain text, email addresses, phone numbers, SMS messages, WiFi credentials, and social media profiles (WhatsApp, Instagram, Facebook, YouTube, X/Twitter). You can also create contact information QR codes."
      },
      {
        question: "Can I customize the appearance of my QR code?",
        answer: "Yes! You can customize foreground and background colors, add your company logo or brand image, adjust the QR code size from 64px to 1024px, and control logo size for optimal scanning while maintaining brand visibility."
      },
      {
        question: "Do QR codes expire or have size limits?",
        answer: "QR codes themselves don't expire and can store up to 4,296 alphanumeric characters. However, if your QR code links to a URL, ensure that webpage remains accessible. Our generator creates static QR codes that work indefinitely."
      }
    ],
    
    relatedTools: [
      { 
        name: "QR Code Scanner", 
        href: "/qr-scanner", 
        description: "Scan and decode QR codes instantly with camera or image upload" 
      },
      { 
        name: "Barcode Generator", 
        href: "/barcode-generator", 
        description: "Create various barcode formats for products and inventory" 
      },
      { 
        name: "URL Shortener", 
        href: "/url-shortener", 
        description: "Create compact URLs perfect for QR codes and social sharing" 
      },
      { 
        name: "Logo to Favicon", 
        href: "/logo-to-favicon", 
        description: "Convert your logo to website favicon in multiple sizes" 
      }
    ]
  };

  return (
    <EnhancedToolPageLayout
      title={toolData.title}
      description={toolData.description}
      shortIntro={toolData.shortIntro}
      category={toolData.category}
      canonicalUrl={toolData.canonicalUrl}
      keywords={toolData.keywords}
      toolInterface={<QRCodeGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default QRCodeGeneratorPage;
