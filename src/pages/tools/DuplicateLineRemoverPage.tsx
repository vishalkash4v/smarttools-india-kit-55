
import React from 'react';
import DuplicateLineRemover from '@/components/tools/DuplicateLineRemover';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const DuplicateLineRemoverPage = () => {
  const toolData = {
    title: "Duplicate Line Remover - Clean Text & Remove Duplicates",
    description: "Remove duplicate lines from text instantly. Clean up lists, data, and text files by eliminating repeated entries. Free online duplicate line remover tool.",
    category: "Text Tools",
    
    howToUse: [
      "Paste your text with potential duplicate lines",
      "Choose to keep first or last occurrence of duplicates",
      "Select whether to ignore case sensitivity",
      "Click 'Remove Duplicates' to process the text",
      "Copy the cleaned text without duplicate lines"
    ],
    
    features: [
      "Remove duplicate lines instantly",
      "Case-sensitive and case-insensitive options",
      "Keep first or last occurrence settings",
      "Preserve original line order option",
      "Show count of removed duplicates",
      "Handle large text files efficiently"
    ],
    
    faqs: [
      {
        question: "How does the duplicate detection work?",
        answer: "The tool compares each line with others to identify exact matches. You can choose case-sensitive matching or ignore case differences for more flexible duplicate detection."
      },
      {
        question: "What happens to the original line order?",
        answer: "By default, the tool preserves the order of unique lines as they appeared in the original text. You can also sort the results alphabetically if preferred."
      },
      {
        question: "Can I process large files?",
        answer: "Yes, the tool can handle large text files with thousands of lines efficiently. Processing happens locally in your browser for privacy and speed."
      },
      {
        question: "Are blank lines considered duplicates?",
        answer: "Yes, multiple blank lines are treated as duplicates. You can choose to keep one blank line or remove all blank lines entirely."
      }
    ],
    
    relatedTools: [
      { name: "Line Sorter", href: "/line-sorter", description: "Sort text lines alphabetically" },
      { name: "Text Cleaner", href: "/text-cleaner", description: "Clean and format text" },
      { name: "List Randomizer", href: "/list-randomizer", description: "Randomize list items" },
      { name: "Text Splitter", href: "/text-splitter", description: "Split text into parts" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<DuplicateLineRemover />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default DuplicateLineRemoverPage;
