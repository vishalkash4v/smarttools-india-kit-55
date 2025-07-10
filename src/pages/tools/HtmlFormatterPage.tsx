
import React from 'react';
import HtmlFormatter from '@/components/tools/HtmlFormatter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const HtmlFormatterPage = () => {
  const toolData = {
    title: "Free HTML Formatter & Beautifier Online",
    description: "Format and beautify HTML code with proper indentation and structure. Free online HTML formatter tool for clean, readable code.",
    category: "Developer Tools",
    
    howToUse: [
      "Paste your HTML code in the input area",
      "Click 'Format HTML' to beautify the code",
      "View the formatted HTML with proper indentation",
      "Copy the beautified code to your clipboard",
      "Use the clean code in your web projects"
    ],
    
    features: [
      "Proper HTML indentation and formatting",
      "Syntax highlighting for better readability",
      "Handles nested HTML elements correctly",
      "Preserves HTML structure and attributes",
      "Copy formatted code to clipboard",
      "Support for all HTML5 elements"
    ],
    
    faqs: [
      {
        question: "Will formatting change my HTML functionality?",
        answer: "No, HTML formatting only changes whitespace and indentation for better readability. It doesn't alter the structure or functionality of your HTML code."
      },
      {
        question: "Can I format minified HTML?",
        answer: "Yes, the tool can take compressed or minified HTML and expand it with proper formatting and indentation for easier reading and editing."
      },
      {
        question: "Does it work with HTML attributes and inline styles?",
        answer: "Yes, the formatter preserves all HTML attributes, inline styles, and JavaScript while organizing the code structure for better readability."
      },
      {
        question: "Can I format HTML with embedded CSS and JavaScript?",
        answer: "Yes, the tool handles HTML documents with embedded CSS in <style> tags and JavaScript in <script> tags while maintaining proper formatting."
      }
    ],
    
    relatedTools: [
      { name: "CSS Minifier", href: "/css-minifier", description: "Minify CSS code" },
      { name: "JavaScript Minifier", href: "/javascript-minifier", description: "Minify JavaScript code" },
      { name: "JSON Validator", href: "/json-validator", description: "Validate JSON syntax" },
      { name: "Markdown Editor", href: "/markdown-editor", description: "Edit Markdown content" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<HtmlFormatter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default HtmlFormatterPage;
