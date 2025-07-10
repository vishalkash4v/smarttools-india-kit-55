
import React from 'react';
import PasswordGenerator from '@/components/tools/PasswordGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const PasswordGeneratorPage = () => {
  const toolData = {
    title: "Secure Password Generator Online",
    description: "Generate strong, secure passwords with customizable length and character sets. Create random passwords with uppercase, lowercase, numbers, and special characters. Free password generator tool.",
    keywords: "password generator, secure password, random password, strong password generator, password maker",
    
    howToUse: [
      "Set your desired password length (8-128 characters)",
      "Choose character types: uppercase, lowercase, numbers, symbols",
      "Click 'Generate Password' to create a secure password",
      "Copy your password using the copy button",
      "Generate multiple passwords if needed"
    ],
    
    features: [
      "Generate passwords up to 128 characters long",
      "Customizable character sets (uppercase, lowercase, numbers, symbols)",
      "Cryptographically secure random generation",
      "One-click copy to clipboard",
      "Password strength indicator",
      "No data stored or transmitted - completely secure"
    ],
    
    faqs: [
      {
        question: "How secure are the generated passwords?",
        answer: "Our passwords are generated using cryptographically secure random number generation, ensuring maximum security. The entropy depends on length and character variety."
      },
      {
        question: "What makes a strong password?",
        answer: "Strong passwords are long (12+ characters), use mixed character types (uppercase, lowercase, numbers, symbols), and avoid common words or patterns."
      },
      {
        question: "Are my generated passwords stored anywhere?",
        answer: "No, passwords are generated entirely in your browser and are never stored, logged, or transmitted to our servers. Your passwords remain completely private."
      },
      {
        question: "How long should my password be?",
        answer: "We recommend at least 12-16 characters for most accounts. For highly sensitive accounts, consider 20+ characters. Longer passwords are exponentially more secure."
      },
      {
        question: "Can I exclude certain characters?",
        answer: "Yes, you can customize which character types to include or exclude. This is useful for systems that don't allow certain special characters."
      }
    ],
    
    relatedTools: [
      { name: "Hash Generator", href: "/hash-generator" },
      { name: "Base64 Converter", href: "/base64-converter" },
      { name: "Text Encryptor", href: "/text-encryptor" },
      { name: "Random Number Generator", href: "/random-number-generator" }
    ]
  };

  return (
    <ToolPageLayout {...toolData}>
      <PasswordGenerator />
    </ToolPageLayout>
  );
};

export default PasswordGeneratorPage;
