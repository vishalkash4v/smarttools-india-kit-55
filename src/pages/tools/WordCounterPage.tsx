
import React from 'react';
import EnhancedToolPageLayout from '@/components/tools/EnhancedToolPageLayout';
import WordCounter from '@/components/tools/WordCounter';

const WordCounterPage: React.FC = () => {
  const howToUse = [
    "Type or paste your text into the text area",
    "View real-time statistics: words, characters, sentences, and paragraphs",
    "See additional metrics like reading time and average word length",
    "Use the statistics for writing optimization and analysis"
  ];

  const features = [
    "Real-time word and character counting",
    "Sentence and paragraph counting",
    "Reading time estimation",
    "Character count with and without spaces",
    "Average word length calculation",
    "No text storage - complete privacy"
  ];

  const faqs = [
    {
      question: "How accurate is the word count?",
      answer: "Our word counter uses standard algorithms to accurately count words, excluding extra spaces and considering punctuation properly. It's highly accurate for most text types."
    },
    {
      question: "What is the reading time based on?",
      answer: "Reading time is calculated based on an average reading speed of 200-250 words per minute, which is the typical reading speed for adults."
    },
    {
      question: "Does this tool store my text?",
      answer: "No, your text is processed locally in your browser and is never stored on our servers. Your privacy and content security are completely protected."
    },
    {
      question: "Can I use this for SEO content optimization?",
      answer: "Yes! The word count, character count, and reading time metrics are perfect for optimizing content length for SEO and readability standards."
    }
  ];

  const relatedTools = [
    {
      name: "Text Case Converter",
      href: "/tools/text-case-converter",
      description: "Convert text to uppercase, lowercase, or title case"
    },
    {
      name: "Lorem Ipsum Generator",
      href: "/tools/lorem-ipsum-generator",
      description: "Generate placeholder text for your projects"
    },
    {
      name: "Text Reverser",
      href: "/tools/text-reverser",
      description: "Reverse your text characters or words"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Liu",
      rating: 5,
      text: "Perfect for my blog writing. The reading time feature helps me optimize post length!",
      title: "Content Writer"
    },
    {
      name: "David Park",
      rating: 5,
      text: "Simple, accurate, and fast. Use it daily for checking essay word counts.",
      title: "Student"
    }
  ];

  return (
    <EnhancedToolPageLayout
      title="Word Counter"
      description="Free online word counter tool to count words, characters, sentences, and paragraphs in real-time. Get reading time estimates and text statistics instantly."
      shortIntro="Count words, characters, sentences, and paragraphs instantly with our free online word counter tool."
      toolInterface={<WordCounter />}
      howToUse={howToUse}
      features={features}
      faqs={faqs}
      relatedTools={relatedTools}
      testimonials={testimonials}
      category="Text Tools"
      rating={4.8}
      userCount="45,000+"
      canonicalUrl="https://fyntools.com/tools/word-counter"
      keywords="word counter, character counter, text counter, word count tool, text statistics, reading time calculator"
    />
  );
};

export default WordCounterPage;
