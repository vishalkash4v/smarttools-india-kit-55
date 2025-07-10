
import React from 'react';
import JavaScriptMinifier from '@/components/tools/JavaScriptMinifier';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const JavaScriptMinifierPage = () => {
  const toolData = {
    title: "Free JavaScript Minifier Online",
    description: "Minify JavaScript code to reduce file size and improve website loading speed. Free online JS minifier with compression statistics and download options.",
    category: "Developer Tools",
    
    howToUse: [
      "Paste your JavaScript code in the input area",
      "Click 'Minify Code' to compress the JavaScript",
      "View the minified code and compression statistics",
      "Copy the minified code or download as a file",
      "Use the compressed code in your web projects"
    ],
    
    features: [
      "Removes comments and unnecessary whitespace",
      "Compresses JavaScript code efficiently",
      "Shows compression statistics and file size reduction",
      "Download minified code as .js file",
      "Copy to clipboard functionality",
      "Preserves code functionality while reducing size"
    ],
    
    faqs: [
      {
        question: "What does JavaScript minification do?",
        answer: "JavaScript minification removes unnecessary characters like whitespace, comments, and line breaks from your code, reducing file size while preserving functionality. This improves website loading speed."
      },
      {
        question: "Will minification break my JavaScript code?",
        answer: "Our minifier preserves code functionality by only removing unnecessary whitespace and comments. However, always test your minified code to ensure it works as expected."
      },
      {
        question: "How much can I reduce file size?",
        answer: "File size reduction varies depending on your code structure and comments. Typically, you can expect 20-50% reduction in file size, with well-commented code seeing larger reductions."
      },
      {
        question: "Should I minify all JavaScript files?",
        answer: "It's recommended to minify JavaScript files for production websites to improve loading speed. Keep original files for development and use minified versions for deployment."
      },
      {
        question: "Can I minify ES6+ JavaScript code?",
        answer: "Yes, our minifier works with modern JavaScript including ES6+ syntax. However, for complex applications, consider using build tools like Webpack or Babel for more advanced optimization."
      }
    ],
    
    relatedTools: [
      { name: "CSS Minifier", href: "/css-minifier", description: "Minify CSS code" },
      { name: "HTML Minifier", href: "/html-minifier", description: "Minify HTML code" },
      { name: "JSON Formatter", href: "/json-formatter", description: "Format and validate JSON" },
      { name: "Code Beautifier", href: "/code-beautifier", description: "Format and beautify code" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<JavaScriptMinifier />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default JavaScriptMinifierPage;
