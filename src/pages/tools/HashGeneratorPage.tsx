
import React from 'react';
import HashGenerator from '@/components/tools/HashGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const HashGeneratorPage = () => {
  const toolData = {
    title: "Free Hash Generator Online",
    description: "Generate MD5, SHA-1, SHA-256, and other hash values from text or files. Free online hash generator for data integrity verification, password hashing, and security purposes.",
    category: "Security Tools",
    
    howToUse: [
      "Enter your text in the input field or upload a file",
      "Select the hash algorithm (MD5, SHA-1, SHA-256, etc.)",
      "Click 'Generate Hash' to create the hash value",
      "Copy the generated hash for your use",
      "Compare hashes to verify data integrity"
    ],
    
    features: [
      "Support for multiple hash algorithms",
      "Text and file hash generation",
      "Instant hash computation",
      "Copy hash values with one click",
      "Hash comparison tools",
      "Secure client-side processing"
    ],
    
    faqs: [
      {
        question: "What is a hash function?",
        answer: "A hash function is a mathematical algorithm that converts input data into a fixed-size string of characters. It's used for data integrity, password storage, and digital signatures."
      },
      {
        question: "Which hash algorithm should I use?",
        answer: "For security purposes, use SHA-256 or higher. MD5 and SHA-1 are considered weak for security but still useful for data integrity checks."
      },
      {
        question: "Can I reverse a hash to get the original data?",
        answer: "No, hash functions are one-way. You cannot reverse a hash to get the original data. This is why they're secure for password storage."
      },
      {
        question: "Are the hash calculations secure?",
        answer: "Yes, all hash calculations are performed locally in your browser. Your data never leaves your device, ensuring complete privacy."
      },
      {
        question: "What's the difference between MD5 and SHA-256?",
        answer: "SHA-256 is more secure and produces longer hashes (256 bits vs 128 bits for MD5). MD5 is faster but has known vulnerabilities for security applications."
      }
    ],
    
    relatedTools: [
      { name: "Password Generator", href: "/password-generator", description: "Generate secure passwords" },
      { name: "Base64 Converter", href: "/base64-converter", description: "Encode and decode Base64 data" },
      { name: "Text Encryptor", href: "/text-encryptor", description: "Encrypt and decrypt text" },
      { name: "JWT Decoder", href: "/jwt-decoder", description: "Decode JSON Web Tokens" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<HashGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default HashGeneratorPage;
