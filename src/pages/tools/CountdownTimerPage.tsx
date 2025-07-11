
import React from 'react';
import CountdownTimer from '@/components/tools/CountdownTimer';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const CountdownTimerPage = () => {
  const toolData = {
    title: "Countdown Timer - Online Event & Deadline Counter",
    description: "Create custom countdown timers for events, deadlines, and special occasions. Track time remaining with our free online countdown timer tool.",
    category: "Utility Tools",
    
    howToUse: [
      "Set your target date and time for the countdown",
      "Customize the timer display and appearance",
      "Add a title or description for your event",
      "Start the countdown timer",
      "Share the timer link with others if needed"
    ],
    
    features: [
      "Custom date and time selection",
      "Real-time countdown display",
      "Multiple time unit display (days, hours, minutes, seconds)",
      "Customizable timer appearance and colors",
      "Sound alerts when countdown reaches zero",
      "Shareable countdown timer links"
    ],
    
    faqs: [
      {
        question: "Can I create multiple countdown timers?",
        answer: "Yes, you can create as many countdown timers as needed for different events, deadlines, or occasions. Each timer can have its own settings and appearance."
      },
      {
        question: "What happens when the countdown reaches zero?",
        answer: "When the timer reaches zero, it will display a completion message and can play an alert sound (if enabled) to notify you that the time has elapsed."
      },
      {
        question: "Can I share my countdown timer?",
        answer: "Yes, you can generate a shareable link for your countdown timer that others can view in their browsers, perfect for events and group deadlines."
      },
      {
        question: "Does the timer work if I close the browser?",
        answer: "The countdown is based on your target date/time, so it will show the correct remaining time when you return, regardless of when you closed the browser."
      }
    ],
    
    relatedTools: [
      { name: "Stopwatch", href: "/stopwatch", description: "Measure elapsed time" },
      { name: "World Clock", href: "/world-clock", description: "View time zones worldwide" },
      { name: "Event Planner", href: "/event-planner", description: "Plan and organize events" },
      { name: "Reminder Tool", href: "/reminder-tool", description: "Set reminders and alerts" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<CountdownTimer />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default CountdownTimerPage;
