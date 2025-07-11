
import React from 'react';
import TypingCompetition from '@/components/tools/TypingCompetition';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const TypingCompetitionPage = () => {
  const toolData = {
    title: "Typing Competition - Compete in Online Typing Contests",
    description: "Join competitive typing races and contests to test your typing speed and accuracy against other users. Improve your WPM through friendly competition and challenges.",
    category: "Typing Tools",
    
    howToUse: [
      "Join an existing typing competition or create a new one",
      "Wait for the competition to start or reach minimum participants",
      "Type the given text as quickly and accurately as possible",
      "Watch your real-time ranking against other competitors",
      "View final results including WPM, accuracy, and placement"
    ],
    
    features: [
      "Real-time multiplayer typing competitions",
      "Live leaderboards and rankings",
      "Various text difficulty levels",
      "Accuracy and speed tracking",
      "Competition history and statistics",
      "Private rooms for teams or classes",
      "Achievement badges and milestones",
      "Mobile-friendly competitive interface"
    ],
    
    faqs: [
      {
        question: "How do typing competitions work?",
        answer: "Competitions start when enough participants join or at scheduled times. All participants type the same text simultaneously, and rankings are updated in real-time based on speed and accuracy. The winner is typically determined by the highest WPM with good accuracy."
      },
      {
        question: "What's a good WPM for competitions?",
        answer: "Beginner competitions: 20-40 WPM, Intermediate: 40-60 WPM, Advanced: 60+ WPM. Professional typists often exceed 80 WPM. Focus on accuracy first, then build speed - most competitions penalize errors."
      },
      {
        question: "Can I create private competitions?",
        answer: "Yes, you can create private typing rooms for your team, classroom, or friends. Share the room code with participants to join your exclusive competition."
      },
      {
        question: "How is accuracy calculated in competitions?",
        answer: "Accuracy is calculated as (correct characters / total characters typed) × 100. Most competitions require minimum accuracy (usually 85-95%) to qualify for rankings, encouraging quality over pure speed."
      }
    ],
    
    relatedTools: [
      { name: "Typing Test", href: "/typing-test", description: "Test your typing speed and accuracy" },
      { name: "Typing Tutor", href: "/typing-tutor", description: "Learn proper typing techniques" },
      { name: "Typing Games", href: "/typing-games", description: "Fun typing games and exercises" },
      { name: "Stopwatch", href: "/stopwatch", description: "Time your typing practice" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<TypingCompetition />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default TypingCompetitionPage;
