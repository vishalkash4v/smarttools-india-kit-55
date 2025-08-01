
import React from 'react';
import PasswordGenerator from '@/components/tools/PasswordGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const PasswordGeneratorPage = () => {
  const toolData = {
    title: "Password Generator - Create Strong & Secure Passwords Online",
    description: "Generate strong, secure passwords with customizable length and character sets. Create unique passwords with uppercase, lowercase, numbers, and special characters for maximum security.",
    category: "Security Tools",
    
    howToUse: [
      "Set your desired password length using the slider",
      "Choose which character types to include (uppercase, lowercase, numbers, symbols)",
      "Click 'Generate Password' to create a new secure password",
      "Copy the generated password to your clipboard",
      "Use the password for your accounts and save it securely"
    ],
    
    features: [
      "Customizable password length (4-128 characters)",
      "Include/exclude uppercase letters, lowercase letters, numbers, and symbols",
      "Instant password generation with one click",
      "Copy to clipboard functionality",
      "Password strength indicator",
      "Generate multiple passwords at once",
      "No passwords stored or transmitted",
      "Works offline for maximum security"
    ],
    
    faqs: [
      {
        question: "How secure are the generated passwords?",
        answer: "Our password generator uses cryptographically secure random number generation to create truly random passwords. The passwords are generated locally in your browser and never transmitted or stored anywhere."
      },
      {
        question: "What makes a password strong?",
        answer: "Strong passwords are long (12+ characters), contain a mix of uppercase and lowercase letters, numbers, and special characters, and are unique for each account. Our generator creates passwords that meet all these criteria."
      },
      {
        question: "Should I use symbols in my passwords?",
        answer: "Yes, including symbols significantly increases password strength by expanding the character set. However, some websites have restrictions on special characters, so you can disable symbols if needed."
      },
      {
        question: "How often should I change my passwords?",
        answer: "Change passwords immediately if there's a security breach, every 90 days for critical accounts, and whenever you suspect compromise. Use unique passwords for each account and consider using a password manager."
      }
    ],
    
    relatedTools: [
      { name: "Hash Generator", href: "/hash-generator", description: "Generate MD5, SHA1, SHA256 hashes" },
      { name: "QR Code Generator", href: "/qr-code-generator", description: "Create QR codes for text and URLs" },
      { name: "Base64 Converter", href: "/base64-converter", description: "Encode and decode Base64 data" },
      { name: "JWT Decoder", href: "/jwt-decoder", description: "Decode and verify JWT tokens" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<PasswordGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default PasswordGeneratorPage;
