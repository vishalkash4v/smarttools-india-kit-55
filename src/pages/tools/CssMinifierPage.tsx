
import React from 'react';
import CssMinifier from '@/components/tools/CssMinifier';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const CssMinifierPage = () => {
  const toolData = {
    title: "Free CSS Minifier Online",
    description: "Minify CSS code to reduce file size and improve website performance. Free online CSS minifier with compression statistics and optimization features.",
    category: "Developer Tools",
    
    howToUse: [
      "Paste your CSS code in the input area",
      "Click 'Minify CSS' to compress the stylesheet",
      "View the minified CSS and file size reduction",
      "Copy the optimized CSS code to clipboard",
      "Use the minified CSS in your web projects"
    ],
    
    features: [
      "Removes comments and unnecessary whitespace",
      "Optimizes CSS properties and values",
      "Shows compression statistics",
      "One-click copy functionality",
      "Preserves CSS functionality",
      "Reduces file size significantly"
    ],
    
    faqs: [
      {
        question: "What does CSS minification do?",
        answer: "CSS minification removes unnecessary characters like whitespace, comments, and line breaks from your stylesheets, reducing file size and improving website loading speed without affecting functionality."
      },
      {
        question: "How much can I reduce my CSS file size?",
        answer: "File size reduction varies depending on your CSS structure and comments. Typically, you can expect 20-60% reduction, with well-commented and formatted CSS seeing larger reductions."
      },
      {
        question: "Will minification affect my CSS functionality?",
        answer: "No, our CSS minifier only removes unnecessary characters and whitespace while preserving all CSS rules and properties. Your styles will work exactly the same."
      },
      {
        question: "Should I minify CSS for production websites?",
        answer: "Yes, minifying CSS for production is a best practice for web performance. It reduces bandwidth usage and improves page loading speed, especially important for mobile users."
      },
      {
        question: "Can I minify CSS with media queries and animations?",
        answer: "Yes, our minifier handles all CSS features including media queries, animations, keyframes, and modern CSS properties while maintaining their functionality."
      }
    ],
    
    relatedTools: [
      { name: "JavaScript Minifier", href: "/javascript-minifier", description: "Minify JavaScript code" },
      { name: "HTML Minifier", href: "/html-minifier", description: "Minify HTML code" },
      { name: "CSS Formatter", href: "/css-formatter", description: "Format and beautify CSS" },
      { name: "CSS Validator", href: "/css-validator", description: "Validate CSS code" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<CssMinifier />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default CssMinifierPage;
