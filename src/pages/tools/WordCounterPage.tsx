
import React from 'react';
import WordCounter from '@/components/tools/WordCounter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const WordCounterPage = () => {
  const toolData = {
    title: "Word Counter - Count Words, Characters & Text Statistics",
    description: "Count words, characters, sentences, and paragraphs in your text. Get detailed text statistics including reading time, keyword density, and character frequency analysis.",
    category: "Text Tools",
    
    howToUse: [
      "Type or paste your text into the input area",
      "View real-time word and character counts",
      "Check additional statistics like sentences and paragraphs",
      "Analyze reading time and keyword density",
      "Export statistics or copy counts to clipboard"
    ],
    
    features: [
      "Real-time word and character counting",
      "Sentence and paragraph counting",
      "Reading time estimation",
      "Keyword density analysis",
      "Character frequency statistics",
      "With and without spaces character count",
      "Average words per sentence calculation",
      "Export results in multiple formats"
    ],
    
    faqs: [
      {
        question: "How accurate is the word counting?",
        answer: "Our word counter uses advanced algorithms to accurately identify words, handling various languages, punctuation, and formatting. It follows standard word counting rules used by most text editors and writing software."
      },
      {
        question: "Does it count hyphenated words correctly?",
        answer: "Yes, hyphenated words are counted as single words (e.g., 'twenty-one' counts as one word). Compound words with hyphens follow standard grammatical rules for word counting."
      },
      {
        question: "What's the difference between characters with and without spaces?",
        answer: "Characters with spaces includes all characters including spaces, tabs, and line breaks. Characters without spaces counts only letters, numbers, and punctuation marks, excluding whitespace."
      },
      {
        question: "How is reading time calculated?",
        answer: "Reading time is estimated based on average reading speeds: 200-250 words per minute for adults. The calculation considers text complexity and provides estimates for different reading levels."
      }
    ],
    
    relatedTools: [
      { name: "Text Case Converter", href: "/text-case-converter", description: "Convert text between different cases" },
      { name: "Duplicate Line Remover", href: "/duplicate-line-remover", description: "Remove duplicate lines from text" },
      { name: "Whitespace Remover", href: "/whitespace-remover", description: "Clean up text spacing" },
      { name: "Text Reverser", href: "/text-reverser", description: "Reverse text and strings" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<WordCounter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default WordCounterPage;
