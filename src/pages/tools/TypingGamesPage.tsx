
import React from 'react';
import TypingGames from '@/components/tools/TypingGames';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const TypingGamesPage = () => {
  const toolData = {
    title: "Typing Games - Fun Typing Practice & Speed Improvement",
    description: "Improve your typing skills with engaging games and interactive exercises. Practice typing through word races, typing adventures, and skill-building mini-games for all levels.",
    category: "Typing Tools",
    
    howToUse: [
      "Choose a typing game that matches your skill level",
      "Follow the game instructions and objectives",
      "Type accurately and quickly to score points",
      "Complete levels to unlock new challenges",
      "Track your progress and improvements"
    ],
    
    features: [
      "Multiple typing game genres and styles",
      "Progressive difficulty levels",
      "Real-time feedback and scoring",
      "Achievement system and badges",
      "Skill tracking and progress reports",
      "Customizable difficulty settings",
      "Kid-friendly and adult games",
      "Offline play capability"
    ],
    
    faqs: [
      {
        question: "Are typing games effective for learning?",
        answer: "Yes! Typing games make learning more engaging and help develop muscle memory through repetitive, enjoyable practice. They're particularly effective for maintaining motivation during skill development."
      },
      {
        question: "What age groups are these games suitable for?",
        answer: "Our typing games cater to all ages, from children learning their first typing skills to adults looking to improve speed and accuracy. Different games have age-appropriate themes and difficulty levels."
      },
      {
        question: "How do typing games compare to traditional practice?",
        answer: "Typing games provide instant feedback, gamification elements, and varied challenges that can be more engaging than repetitive drills. However, they work best when combined with structured typing lessons and tests."
      },
      {
        question: "Can I track my improvement through games?",
        answer: "Yes, our games track your WPM, accuracy, and other metrics over time. You can see your progress through statistics, achievements, and unlocked difficulty levels."
      }
    ],
    
    relatedTools: [
      { name: "Typing Test", href: "/typing-test", description: "Measure your typing speed and accuracy" },
      { name: "Typing Tutor", href: "/typing-tutor", description: "Learn proper typing techniques" },
      { name: "Typing Competition", href: "/typing-competition", description: "Compete with other typists" },
      { name: "Word Counter", href: "/word-counter", description: "Count words in your text" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<TypingGames />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default TypingGamesPage;
