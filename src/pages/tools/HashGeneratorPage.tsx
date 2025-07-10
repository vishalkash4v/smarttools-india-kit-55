
import React from 'react';
import HashGenerator from '@/components/tools/HashGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const HashGeneratorPage = () => {
  const toolData = {
    title: "Free Hash Generator Online",
    description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hash values from any text. Free online hash generator for password hashing, data integrity, and security applications.",
    category: "Security Tools",
    
    howToUse: [
      "Enter your text in the input field",
      "Select the hash algorithm (MD5, SHA-1, SHA-256, SHA-512)",
      "Click 'Generate Hash' to create the hash value",
      "Copy the generated hash using the copy button",
      "Use the hash for your security or verification needs"
    ],
    
    features: [
      "Multiple hash algorithms supported",
      "Instant hash generation",
      "Copy hash values to clipboard",
      "Secure client-side processing",
      "Support for any text input",
      "Hash length information display"
    ],
    
    faqs: [
      {
        question: "What is a hash function?",
        answer: "A hash function is a mathematical algorithm that converts input data of any size into a fixed-size string of characters. It's commonly used for data integrity verification and password storage."
      },
      {
        question: "Which hash algorithm should I use?",
        answer: "For security purposes, use SHA-256 or SHA-512. MD5 and SHA-1 are faster but less secure. SHA-256 is widely adopted and offers good security for most applications."
      },
      {
        question: "Can I reverse a hash to get the original text?",
        answer: "No, hash functions are one-way operations. You cannot reverse a hash to get the original input. This is what makes them suitable for password storage and data integrity checks."
      },
      {
        question: "Are identical inputs guaranteed to produce identical hashes?",
        answer: "Yes, the same input will always produce the same hash value with the same algorithm. This property makes hashes useful for data verification and duplicate detection."
      },
      {
        question: "Is my data secure when generating hashes?",
        answer: "Yes, all hash generation happens locally in your browser. Your input data is never transmitted to our servers, ensuring complete privacy and security."
      }
    ],
    
    relatedTools: [
      { name: "Password Generator", href: "/password-generator", description: "Generate secure passwords" },
      { name: "Base64 Converter", href: "/base64-converter", description: "Encode and decode Base64" },
      { name: "Text Encryptor", href: "/text-encryptor", description: "Encrypt and decrypt text" },
      { name: "Checksum Generator", href: "/checksum-generator", description: "Generate file checksums" }
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
