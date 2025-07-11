
import React from 'react';
import RegexTester from '@/components/tools/RegexTester';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const RegexTesterPage = () => {
  const toolData = {
    title: "Regex Tester - Test Regular Expressions Online",
    description: "Test and debug regular expressions with real-time matching, explanation, and common regex patterns. Perfect for developers, data analysts, and anyone working with pattern matching.",
    category: "Developer Tools",
    
    howToUse: [
      "Enter your regular expression pattern in the regex field",
      "Add the text you want to test against in the test string area",
      "See real-time matches highlighted in the text",
      "Use flags (g, i, m, s) to modify regex behavior",
      "View match groups and capture details"
    ],
    
    features: [
      "Real-time regex testing and matching",
      "Support for all regex flags (global, case-insensitive, multiline, etc.)",
      "Match highlighting and group visualization",
      "Regex explanation and breakdown",
      "Common regex patterns library",
      "Match count and position details",
      "Error detection and debugging help",
      "Export matches and results"
    ],
    
    faqs: [
      {
        question: "What regex flags are supported?",
        answer: "We support all standard regex flags: g (global), i (case-insensitive), m (multiline), s (dotall), u (unicode), and y (sticky). These flags modify how the regex pattern matches text."
      },
      {
        question: "How do I test regex for email validation?",
        answer: "Use patterns like ^[\\w\\.-]+@[\\w\\.-]+\\.[a-zA-Z]{2,}$ for basic email validation. Our tool helps you test and refine email regex patterns with real examples."
      },
      {
        question: "Can I save my regex patterns?",
        answer: "While we don't store patterns on our servers, you can bookmark the page with your pattern in the URL or copy the regex to save locally. Consider using a password manager or note-taking app for important patterns."
      },
      {
        question: "What's the difference between capturing and non-capturing groups?",
        answer: "Capturing groups () store matched text for later use, while non-capturing groups (?:) group elements without storing. Our tool shows both types and their matches clearly."
      }
    ],
    
    relatedTools: [
      { name: "Text Case Converter", href: "/text-case-converter", description: "Convert text between different cases" },
      { name: "Text Reverser", href: "/text-reverser", description: "Reverse text and strings" },
      { name: "Word Counter", href: "/word-counter", description: "Count words, characters, and lines" },
      { name: "JSON Formatter", href: "/json-formatter", description: "Format and validate JSON data" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<RegexTester />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default RegexTesterPage;
