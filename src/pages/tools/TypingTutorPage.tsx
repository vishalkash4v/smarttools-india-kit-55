
import React from 'react';
import TypingTutor from '@/components/tools/TypingTutor';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const TypingTutorPage = () => {
  const toolData = {
    title: "Typing Tutor - Learn Touch Typing & Improve Speed",
    description: "Learn touch typing with our comprehensive typing tutor. Master proper finger placement, improve typing speed and accuracy through structured lessons and exercises.",
    category: "Typing Tools",
    
    howToUse: [
      "Start with basic finger placement lessons",
      "Practice individual keys and finger movements",
      "Progress through structured typing exercises",
      "Focus on accuracy before increasing speed",
      "Complete regular practice sessions for muscle memory"
    ],
    
    features: [
      "Structured touch typing curriculum",
      "Proper finger placement guidance",
      "Progressive difficulty levels",
      "Real-time typing feedback",
      "Customizable practice sessions",
      "Keyboard layout visualization",
      "Progress tracking and statistics",
      "Suitable for all skill levels"
    ],
    
    faqs: [
      {
        question: "How long does it take to learn touch typing?",
        answer: "Most people can learn basic touch typing in 2-4 weeks with daily practice. Reaching good speed (40+ WPM) typically takes 2-3 months of consistent practice. The key is regular, focused practice sessions."
      },
      {
        question: "What's the proper finger placement for typing?",
        answer: "Place your fingers on the home row: left hand on ASDF, right hand on JKL;. Your thumbs rest on the spacebar. Each finger is responsible for specific keys - our tutor shows you the correct assignments."
      },
      {
        question: "Should I look at the keyboard while learning?",
        answer: "No, avoid looking at the keyboard. This is the core principle of touch typing. Start slowly and focus on muscle memory rather than speed. Use our on-screen keyboard guide instead of looking down."
      },
      {
        question: "How much should I practice daily?",
        answer: "Practice for 15-30 minutes daily for best results. Consistent short sessions are more effective than long, infrequent practice. Focus on accuracy and proper technique rather than speed initially."
      }
    ],
    
    relatedTools: [
      { name: "Typing Test", href: "/typing-test", description: "Test your typing speed and accuracy" },
      { name: "Typing Games", href: "/typing-games", description: "Fun typing practice games" },
      { name: "Typing Competition", href: "/typing-competition", description: "Compete with other typists" },
      { name: "Word Counter", href: "/word-counter", description: "Count words in text" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<TypingTutor />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default TypingTutorPage;
