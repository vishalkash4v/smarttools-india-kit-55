
import React from 'react';
import JsonValidator from '@/components/tools/JsonValidator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const JsonValidatorPage = () => {
  const toolData = {
    title: "JSON Validator & Formatter Online",
    description: "Validate, format, and beautify JSON data online. Free JSON validator with error detection, syntax highlighting, and formatting options. Perfect for developers and API testing.",
    keywords: "JSON validator, JSON formatter, validate JSON, format JSON, JSON syntax checker, JSON prettifier",
    
    howToUse: [
      "Paste your JSON data in the input area",
      "Click 'Validate JSON' to check for syntax errors",
      "View formatted JSON with proper indentation",
      "See detailed error messages if validation fails",
      "Copy the formatted JSON for use in your projects"
    ],
    
    features: [
      "Real-time JSON validation",
      "Syntax error detection and reporting",
      "Automatic JSON formatting and beautification",
      "Syntax highlighting for better readability",
      "Minify JSON to reduce file size",
      "Support for large JSON files"
    ],
    
    faqs: [
      {
        question: "What makes JSON invalid?",
        answer: "Common JSON errors include missing quotes around keys, trailing commas, unescaped characters, mismatched brackets, and incorrect data types. Our validator identifies these issues."
      },
      {
        question: "Can I validate large JSON files?",
        answer: "Yes, our validator can handle large JSON files. However, very large files may take longer to process and might be limited by your browser's memory."
      },
      {
        question: "What's the difference between formatting and minifying?",
        answer: "Formatting adds proper indentation and line breaks for readability, while minifying removes all unnecessary whitespace to reduce file size for production use."
      },
      {
        question: "Does the tool support JSON with comments?",
        answer: "Standard JSON doesn't support comments, but our tool can detect and highlight comment-like syntax that might cause validation errors in strict JSON parsers."
      },
      {
        question: "Is my JSON data secure when using this tool?",
        answer: "Yes, all JSON processing happens locally in your browser. Your data is never sent to our servers or stored anywhere. Your JSON remains completely private."
      }
    ],
    
    relatedTools: [
      { name: "JSON Formatter", href: "/json-formatter" },
      { name: "XML Validator", href: "/xml-validator" },
      { name: "API Tester", href: "/api-tester" },
      { name: "Code Formatter", href: "/code-formatter" }
    ]
  };

  return (
    <ToolPageLayout {...toolData}>
      <JsonValidator />
    </ToolPageLayout>
  );
};

export default JsonValidatorPage;
