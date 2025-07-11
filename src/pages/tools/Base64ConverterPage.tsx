
import React from 'react';
import Base64Converter from '@/components/tools/Base64Converter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const Base64ConverterPage = () => {
  const toolData = {
    title: "Base64 Encoder Decoder - Text & File Conversion Tool",
    description: "Encode and decode Base64 data online. Convert text, images, and files to Base64 format and vice versa. Free Base64 converter with file support.",
    category: "Developer Tools",
    
    howToUse: [
      "Choose to encode or decode Base64 data",
      "For encoding: paste text or upload a file",
      "For decoding: paste Base64 encoded string",
      "Click 'Encode' or 'Decode' to process the data",
      "Copy the result or download decoded files"
    ],
    
    features: [
      "Encode text and files to Base64 format",
      "Decode Base64 strings back to original format",
      "Support for images, documents, and binary files",
      "Real-time encoding and decoding",
      "Copy results to clipboard",
      "Download decoded files directly"
    ],
    
    faqs: [
      {
        question: "What is Base64 encoding?",
        answer: "Base64 is a encoding scheme that converts binary data into ASCII text format using 64 printable characters. It's commonly used for transmitting data over text-based protocols."
      },
      {
        question: "When should I use Base64 encoding?",
        answer: "Use Base64 for embedding images in HTML/CSS, sending binary data via email, storing binary data in JSON/XML, or transmitting files through text-only channels."
      },
      {
        question: "Can I encode any type of file?",
        answer: "Yes, you can encode any file type including images, documents, videos, and executables. However, Base64 increases file size by approximately 33%."
      },
      {
        question: "Is Base64 encryption or security?",
        answer: "No, Base64 is encoding, not encryption. It's easily reversible and provides no security. Use proper encryption methods for securing sensitive data."
      }
    ],
    
    relatedTools: [
      { name: "URL Encoder Decoder", href: "/url-encoder-decoder", description: "Encode and decode URLs" },
      { name: "Hash Generator", href: "/hash-generator", description: "Generate MD5, SHA hashes" },
      { name: "Text Encoder", href: "/text-encoder", description: "Encode text in various formats" },
      { name: "JWT Decoder", href: "/jwt-decoder", description: "Decode JSON Web Tokens" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<Base64Converter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default Base64ConverterPage;
