
import React from 'react';
import JsonFormatter from '@/components/tools/JsonFormatter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const JsonFormatterPage = () => {
  const toolData = {
    title: "Free JSON Formatter & Validator Online",
    description: "Format, validate, and beautify JSON data instantly. Pretty print JSON with proper indentation, validate syntax, and minify JSON for production use.",
    category: "Development Tools",
    
    howToUse: [
      "Paste your JSON data into the input area",
      "Click 'Format' to beautify and indent the JSON",
      "Use 'Validate' to check for syntax errors",
      "Click 'Minify' to compress JSON for production",
      "Copy the formatted result to your clipboard"
    ],
    
    features: [
      "JSON formatting with proper indentation",
      "Syntax validation and error detection",
      "JSON minification for production",
      "Real-time syntax highlighting",
      "Error highlighting with line numbers",
      "One-click copy functionality"
    ],
    
    faqs: [
      {
        question: "What is JSON formatting?",
        answer: "JSON formatting (pretty printing) adds proper indentation, line breaks, and spacing to make JSON data more readable and easier to debug."
      },
      {
        question: "How does JSON validation work?",
        answer: "Our validator checks JSON syntax according to the official JSON specification, highlighting errors with specific line numbers and descriptions."
      },
      {
        question: "When should I minify JSON?",
        answer: "Minify JSON for production use, APIs, or when file size matters. Minified JSON removes unnecessary whitespace to reduce file size."
      },
      {
        question: "Can I format large JSON files?",
        answer: "Yes, our tool can handle large JSON files efficiently. However, very large files may take longer to process in the browser."
      }
    ],
    
    relatedTools: [
      { name: "JSON Validator", href: "/json-validator", description: "Validate JSON syntax" },
      { name: "HTML Formatter", href: "/html-formatter", description: "Format HTML code" },
      { name: "CSS Minifier", href: "/css-minifier", description: "Minify CSS code" },
      { name: "JavaScript Minifier", href: "/javascript-minifier", description: "Minify JavaScript" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<JsonFormatter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default JsonFormatterPage;
