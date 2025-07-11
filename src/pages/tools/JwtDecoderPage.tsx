
import React from 'react';
import JwtDecoder from '@/components/tools/JwtDecoder';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const JwtDecoderPage = () => {
  const toolData = {
    title: "Free JWT Decoder & Debugger Online",
    description: "Decode and debug JSON Web Tokens (JWT) instantly. View header, payload, and signature information. Validate JWT structure and inspect claims safely.",
    category: "Development Tools",
    
    howToUse: [
      "Paste your JWT token into the input field",
      "View the decoded header information",
      "Examine the payload and claims data",
      "Check token expiration and validity",
      "Copy decoded sections as needed"
    ],
    
    features: [
      "Complete JWT token decoding",
      "Header, payload, and signature inspection",
      "Token expiration time display",
      "Claims and metadata extraction",
      "Client-side processing for security",
      "Support for all JWT algorithms"
    ],
    
    faqs: [
      {
        question: "What is a JWT token?",
        answer: "JWT (JSON Web Token) is a secure way to transmit information between parties as a JSON object. It's commonly used for authentication and information exchange."
      },
      {
        question: "Is it safe to decode JWT tokens here?",
        answer: "Yes, all JWT decoding happens locally in your browser. Your tokens are never sent to our servers, ensuring complete privacy and security."
      },
      {
        question: "Can I verify JWT signatures?",
        answer: "Our tool decodes and displays JWT information but doesn't verify signatures, as that requires the secret key which should never be shared publicly."
      },
      {
        question: "What information can I see in a JWT?",
        answer: "You can see the header (algorithm and token type), payload (claims and data), and signature. Common claims include expiration time, issuer, and user information."
      }
    ],
    
    relatedTools: [
      { name: "Base64 Converter", href: "/base64-converter", description: "Encode and decode Base64" },
      { name: "Hash Generator", href: "/hash-generator", description: "Generate hash values" },
      { name: "JSON Formatter", href: "/json-formatter", description: "Format and validate JSON" },
      { name: "Password Generator", href: "/password-generator", description: "Generate secure passwords" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<JwtDecoder />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default JwtDecoderPage;
