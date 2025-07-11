
import React from 'react';
import TypingTest from '@/components/tools/TypingTest';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const TypingTestPage = () => {
  const toolData = {
    title: "Typing Test - Check Your Typing Speed & Accuracy Online",
    description: "Test your typing speed and accuracy with our online typing test. Measure WPM (Words Per Minute), track improvement, and compare with average typing speeds worldwide.",
    category: "Typing Tools",
    
    howToUse: [
      "Choose test duration (1, 3, or 5 minutes)",
      "Click 'Start Test' to begin typing",
      "Type the displayed text as accurately and quickly as possible",
      "Don't worry about mistakes - keep typing naturally",
      "View your results including WPM, accuracy, and areas for improvement"
    ],
    
    features: [
      "Accurate WPM and CPM calculations",
      "Real-time accuracy tracking",
      "Multiple test durations (1-5 minutes)",
      "Detailed performance analytics",
      "Progress tracking over time",
      "Common mistake identification",
      "Typing speed benchmarks and comparisons",
      "Mobile-friendly testing interface"
    ],
    
    faqs: [
      {
        question: "What's considered a good typing speed?",
        answer: "Average typing speed is 35-40 WPM. Good typists achieve 50-70 WPM, while professional typists often exceed 80 WPM. Focus on accuracy first - it's better to type 40 WPM accurately than 60 WPM with many errors."
      },
      {
        question: "How is WPM calculated?",
        answer: "WPM (Words Per Minute) is calculated as (characters typed ÷ 5) ÷ minutes. We use the standard formula where 5 characters (including spaces) equal one word, providing consistent measurements across different texts."
      },
      {
        question: "Should I focus on speed or accuracy?",
        answer: "Always prioritize accuracy over speed. Typing fast with errors is counterproductive as you'll need to spend time correcting mistakes. Build accuracy first, then gradually increase speed - this approach leads to better long-term results."
      },
      {
        question: "How often should I take typing tests?",
        answer: "Take typing tests weekly to track progress, but don't test daily as it can become discouraging. Spend most of your time practicing proper technique and building muscle memory through consistent typing exercises."
      }
    ],
    
    relatedTools: [
      { name: "Typing Tutor", href: "/typing-tutor", description: "Learn proper typing techniques" },
      { name: "Typing Games", href: "/typing-games", description: "Fun typing practice games" },
      { name: "Typing Competition", href: "/typing-competition", description: "Compete with other typists" },
      { name: "Word Counter", href: "/word-counter", description: "Count words and characters" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<TypingTest />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default TypingTestPage;
