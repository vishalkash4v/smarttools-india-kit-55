
import React from 'react';
import WordCounter from '@/components/tools/WordCounter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const WordCounterPage = () => {
  const toolData = {
    title: "Free Word Counter Tool Online",
    description: "Count words, characters, paragraphs, and sentences in your text instantly. Free online word counter with real-time statistics, reading time estimation, and character analysis.",
    keywords: "word counter, character counter, text analysis, word count tool, sentence counter, paragraph counter",
    
    howToUse: [
      "Paste or type your text in the input area",
      "View real-time word and character counts",
      "See detailed statistics including sentences and paragraphs",
      "Check reading time and keyword density",
      "Use the clear button to reset and start over"
    ],
    
    features: [
      "Real-time word and character counting",
      "Sentence and paragraph counting",
      "Reading time estimation",
      "Character count with and without spaces",
      "Keyword density analysis",
      "No character limits - handle large documents"
    ],
    
    faqs: [
      {
        question: "How accurate is the word count?",
        answer: "Our word counter uses advanced algorithms to accurately count words, handling various text formats and languages. It follows standard word counting conventions used by most text editors."
      },
      {
        question: "Does the tool work with different languages?",
        answer: "Yes, our word counter works with all languages and character sets, including non-Latin scripts like Chinese, Arabic, Hebrew, and more."
      },
      {
        question: "Can I count words in large documents?",
        answer: "Yes, there's no limit on text length. You can analyze entire documents, books, or articles. The counting happens instantly in your browser."
      },
      {
        question: "How is reading time calculated?",
        answer: "Reading time is estimated based on average reading speeds (200-250 words per minute for adults). This gives you a rough estimate of how long it takes to read your text."
      },
      {
        question: "Is my text data private?",
        answer: "Yes, all text analysis happens locally in your browser. Your text is never sent to our servers or stored anywhere. Your content remains completely private."
      }
    ],
    
    relatedTools: [
      { name: "Text Reverser", href: "/text-reverser" },
      { name: "Lorem Ipsum Generator", href: "/lorem-ipsum-generator" },
      { name: "Text Font Changer", href: "/text-font-changer" },
      { name: "AI Text Rewriter", href: "/ai-text-rewriter" }
    ]
  };

  return (
    <ToolPageLayout {...toolData}>
      <WordCounter />
    </ToolPageLayout>
  );
};

export default WordCounterPage;
