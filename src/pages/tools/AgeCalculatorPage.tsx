
import React from 'react';
import AgeCalculator from '@/components/tools/AgeCalculator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const AgeCalculatorPage = () => {
  const toolData = {
    title: "Free Age Calculator Online",
    description: "Calculate your exact age in years, months, days, hours, minutes, and seconds. Find age difference between dates and get detailed age statistics instantly.",
    category: "Calculator Tools",
    
    howToUse: [
      "Enter your birth date using the date picker",
      "Optionally select a specific date to calculate age up to",
      "Click 'Calculate Age' to get detailed results",
      "View your age in various units (years, months, days, etc.)",
      "See additional statistics like days until next birthday"
    ],
    
    features: [
      "Accurate age calculation to the second",
      "Multiple time units display",
      "Age difference between two dates",
      "Days until next birthday",
      "Leap year considerations",
      "Zodiac sign information"
    ],
    
    faqs: [
      {
        question: "How accurate is the age calculation?",
        answer: "Our calculator provides precise age calculations accounting for leap years, different month lengths, and time zones for maximum accuracy."
      },
      {
        question: "Can I calculate age between any two dates?",
        answer: "Yes, you can calculate the time difference between any two dates, not just from birth to today."
      },
      {
        question: "Does it account for leap years?",
        answer: "Yes, the calculator automatically accounts for leap years to provide accurate age calculations."
      },
      {
        question: "Can I see my age in different units?",
        answer: "Yes, you can view your age in years, months, days, hours, minutes, and seconds simultaneously."
      }
    ],
    
    relatedTools: [
      { name: "Date Difference Calculator", href: "/date-difference-calculator", description: "Calculate difference between dates" },
      { name: "Future Date Calculator", href: "/future-date-calculator", description: "Calculate future dates" },
      { name: "BMI Calculator", href: "/bmi-calculator", description: "Calculate body mass index" },
      { name: "Simple Calculator", href: "/simple-calculator", description: "Basic math calculations" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<AgeCalculator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default AgeCalculatorPage;
