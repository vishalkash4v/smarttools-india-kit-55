
import React from 'react';
import JsonValidator from '@/components/tools/JsonValidator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const JsonValidatorPage = () => {
  const toolData = {
    title: "Free JSON Validator & Formatter Online",
    description: "Validate and format JSON data instantly. Check JSON syntax, fix errors, and beautify JSON with our free online JSON validator and formatter tool.",
    category: "Developer Tools",
    
    howToUse: [
      "Paste your JSON data in the input area",
      "Click 'Validate & Format' to check the JSON",
      "View validation results and error messages",
      "Copy the formatted JSON from the output area",
      "Use the clean JSON in your applications"
    ],
    
    features: [
      "Real-time JSON validation",
      "Automatic JSON formatting and beautification",
      "Clear error messages with line numbers",
      "Syntax highlighting for better readability",
      "Copy formatted JSON to clipboard",
      "Handles large JSON files efficiently"
    ],
    
    faqs: [
      {
        question: "What is JSON validation?",
        answer: "JSON validation checks if your JSON data follows the correct syntax rules. Valid JSON must have proper structure with matching brackets, quotes around strings, and correct comma placement."
      },
      {
        question: "What are common JSON errors?",
        answer: "Common JSON errors include missing quotes around strings, trailing commas, unmatched brackets or braces, and incorrect data types. Our validator identifies and explains these errors."
      },
      {
        question: "Can I format minified JSON?",
        answer: "Yes, our tool can take minified (compressed) JSON and format it with proper indentation and line breaks, making it much easier to read and debug."
      },
      {
        question: "Is my JSON data secure?",
        answer: "Yes, all JSON processing happens locally in your browser. Your data is never sent to our servers or stored anywhere, ensuring complete privacy and security."
      },
      {
        question: "Can I validate large JSON files?",
        answer: "Yes, our validator can handle large JSON files efficiently. However, very large files might take a moment to process depending on your browser and device performance."
      }
    ],
    
    relatedTools: [
      { name: "JSON Minifier", href: "/json-minifier", description: "Minify JSON data" },
      { name: "JSON to CSV", href: "/json-to-csv", description: "Convert JSON to CSV" },
      { name: "XML Validator", href: "/xml-validator", description: "Validate XML data" },
      { name: "YAML Validator", href: "/yaml-validator", description: "Validate YAML data" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<JsonValidator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default JsonValidatorPage;
