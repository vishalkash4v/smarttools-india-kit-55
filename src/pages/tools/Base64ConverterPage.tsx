
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Base64Converter from '@/components/tools/Base64Converter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const Base64ConverterPage = () => {
  const howToUse = [
    "Enter your text in the input field or paste text you want to encode/decode",
    "Choose whether you want to encode text to Base64 or decode Base64 to text",
    "Click the 'Encode' or 'Decode' button to process your text",
    "Copy the result from the output field for use in your projects"
  ];

  const features = [
    "Free Base64 encoding and decoding",
    "Instant results with real-time processing",
    "No file size limits or registration required",
    "Secure processing - all data stays in your browser",
    "Mobile-friendly responsive design",
    "Copy results with one click",
    "Supports all text formats and special characters",
    "Clean, easy-to-use interface"
  ];

  const faqs = [
    {
      question: "What is Base64 encoding?",
      answer: "Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It's commonly used to encode data for transmission over media designed to handle textual data, such as email or HTML."
    },
    {
      question: "Is this Base64 converter free to use?",
      answer: "Yes, our Base64 encoder and decoder is completely free to use with no limitations on usage, file size, or number of conversions."
    },
    {
      question: "Is my data secure when using this tool?",
      answer: "Absolutely! All encoding and decoding happens directly in your browser. Your data never leaves your device or gets sent to our servers, ensuring complete privacy and security."
    },
    {
      question: "Can I encode special characters and non-English text?",
      answer: "Yes, our Base64 converter supports all Unicode characters, including special symbols, emojis, and text in any language."
    },
    {
      question: "What are common uses for Base64 encoding?",
      answer: "Base64 encoding is commonly used for embedding images in HTML/CSS, encoding data for APIs, email attachments, storing binary data in JSON, and ensuring data integrity during transmission."
    }
  ];

  const relatedTools = [
    {
      name: "Hash Generator",
      href: "/hash-generator",
      description: "Generate MD5, SHA-1, SHA-256 hashes for security"
    },
    {
      name: "JWT Decoder",
      href: "/jwt-decoder",
      description: "Decode and inspect JWT tokens"
    },
    {
      name: "Text Reverser",
      href: "/text-reverser",
      description: "Reverse text characters, words, or lines"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Base64 Encoder & Decoder Online - FYN Tools</title>
        <meta name="description" content="Free online Base64 encoder and decoder. Convert text to Base64 or decode Base64 strings instantly. No registration required, secure browser-based processing." />
        <meta name="keywords" content="base64 encoder, base64 decoder, base64 converter, encode decode, text encoding, data encoding, free base64 tool" />
        <link rel="canonical" href="https://fyntools.com/base64-converter" />
        <meta property="og:title" content="Free Base64 Encoder & Decoder Online" />
        <meta property="og:description" content="Convert text to Base64 or decode Base64 strings instantly with our free online tool. Secure, fast, and no registration required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fyntools.com/base64-converter" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Base64 Encoder & Decoder Online" />
        <meta name="twitter:description" content="Convert text to Base64 or decode Base64 strings instantly. Free, secure, and browser-based processing." />
      </Helmet>
      
      <ToolPageLayout
        title="Free Base64 Encoder & Decoder"
        description="Convert text to Base64 encoding or decode Base64 strings back to readable text instantly. Our free online Base64 converter processes everything securely in your browser with no registration required."
        toolInterface={<Base64Converter />}
        howToUse={howToUse}
        features={features}
        faqs={faqs}
        relatedTools={relatedTools}
        category="Text Tools"
        rating={4.9}
        userCount="50,000+"
      />
    </>
  );
};

export default Base64ConverterPage;
