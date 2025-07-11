
import React from 'react';
import Stopwatch from '@/components/tools/Stopwatch';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const StopwatchPage = () => {
  const toolData = {
    title: "Online Stopwatch - Precise Time Measurement Tool",
    description: "Accurate online stopwatch with lap timing, split times, and millisecond precision. Perfect for sports, workouts, cooking, study sessions, and any time measurement needs.",
    category: "Timer Tools",
    
    howToUse: [
      "Click 'Start' to begin timing",
      "Use 'Stop' to pause the stopwatch",
      "Click 'Lap' to record intermediate times",
      "Press 'Reset' to clear all times",
      "View lap times and total elapsed time"
    ],
    
    features: [
      "Millisecond precision timing",
      "Lap time recording and display",
      "Large, easy-to-read display",
      "Keyboard shortcuts for quick control",
      "Sound notifications for alerts",
      "Full-screen mode available",
      "Export timing results",
      "Works offline in your browser"
    ],
    
    faqs: [
      {
        question: "How accurate is this online stopwatch?",
        answer: "Our stopwatch provides millisecond accuracy using JavaScript's high-precision timing functions. While browser limitations may introduce minor variances, it's suitable for most timing needs including sports and scientific measurements."
      },
      {
        question: "Can I use keyboard shortcuts?",
        answer: "Yes! Use Spacebar to start/stop, 'L' for lap times, and 'R' to reset. These shortcuts make it easy to control the stopwatch without taking your eyes off what you're timing."
      },
      {
        question: "What's the difference between lap and split times?",
        answer: "Lap times show the duration of each individual segment, while split times show cumulative time from start. Our stopwatch displays both to give you complete timing information."
      },
      {
        question: "Can I run multiple stopwatches simultaneously?",
        answer: "This tool runs one stopwatch at a time. For multiple timers, open the tool in different browser tabs or use our Countdown Timer tool for additional timing needs."
      }
    ],
    
    relatedTools: [
      { name: "Countdown Timer", href: "/countdown-timer", description: "Set countdown timers with alerts" },
      { name: "Age Calculator", href: "/age-calculator", description: "Calculate age and time differences" },
      { name: "Date Difference Calculator", href: "/date-difference-calculator", description: "Calculate time between dates" },
      { name: "Future Date Calculator", href: "/future-date-calculator", description: "Calculate future dates" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<Stopwatch />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default StopwatchPage;
