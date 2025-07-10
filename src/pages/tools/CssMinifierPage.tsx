
import React from 'react';
import CssMinifier from '@/components/tools/CssMinifier';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const CssMinifierPage = () => {
  const toolData = {
    title: "CSS Minifier & Compressor Online",
    description: "Minify and compress CSS files to reduce file size and improve website performance. Free online CSS minifier with formatting options and error detection.",
    keywords: "CSS minifier, CSS compressor, minify CSS, compress CSS, CSS optimizer, reduce CSS size",
    
    howToUse: [
      "Paste your CSS code in the input area",
      "Choose minification options (comments, whitespace, etc.)",
      "Click 'Minify CSS' to compress your code",
      "Copy the minified CSS from the output area",
      "Save bandwidth and improve page load times"
    ],
    
    features: [
      "Remove unnecessary whitespace and comments",
      "Compress CSS properties and values",
      "Preserve important comments with /*! */",
      "Error detection and syntax validation",
      "Before/after size comparison",
      "One-click copy to clipboard"
    ],
    
    faqs: [
      {
        question: "How much can CSS minification reduce file size?",
        answer: "CSS minification typically reduces file size by 20-40%, depending on your coding style and the amount of whitespace and comments in your original CSS."
      },
      {
        question: "Will minification break my CSS?",
        answer: "No, our minifier preserves all CSS functionality while only removing unnecessary characters. The minified CSS will work exactly the same as the original."
      },
      {
        question: "Should I minify CSS for production?",
        answer: "Yes, minifying CSS is a best practice for production websites. It reduces file size, improves load times, and decreases bandwidth usage without affecting functionality."
      },
      {
        question: "Can I preserve certain comments?",
        answer: "Yes, comments that start with /*! will be preserved during minification. This is useful for copyright notices or important documentation."
      },
      {
        question: "Does the tool validate CSS syntax?",
        answer: "Our minifier includes basic syntax validation and will highlight potential errors in your CSS code before minification."
      }
    ],
    
    relatedTools: [
      { name: "JavaScript Minifier", href: "/javascript-minifier" },
      { name: "HTML Minifier", href: "/html-minifier" },
      { name: "CSS Formatter", href: "/css-formatter" },
      { name: "Code Beautifier", href: "/code-beautifier" }
    ]
  };

  return (
    <ToolPageLayout {...toolData}>
      <CssMinifier />
    </ToolPageLayout>
  );
};

export default CssMinifierPage;
