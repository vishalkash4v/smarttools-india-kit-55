
import React from 'react';
import AgeCalculator from '@/components/tools/AgeCalculator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const AgeCalculatorPage = () => {
  const toolData = {
    title: "Free Age Calculator Online",
    description: "Calculate your exact age in years, months, days, hours, and minutes. Free online age calculator with precise calculations and additional features like zodiac signs and life statistics.",
    category: "Calculator Tools",
    
    howToUse: [
      "Select your birth date using the date picker",
      "Choose the target date (default is today)",
      "View your exact age in multiple formats",
      "See additional information like zodiac sign",
      "Calculate time differences between any two dates"
    ],
    
    features: [
      "Calculate exact age in years, months, and days",
      "Show age in hours, minutes, and seconds",
      "Zodiac sign calculation",
      "Next birthday countdown",
      "Age comparison between multiple dates",
      "Mobile-friendly date picker interface"
    ],
    
    faqs: [
      {
        question: "How accurate is the age calculation?",
        answer: "Our age calculator is extremely accurate, accounting for leap years and different month lengths. It calculates down to the exact day, hour, and minute."
      },
      {
        question: "Can I calculate age for past dates?",
        answer: "Yes, you can calculate age for any date in the past or future. Simply select your desired target date instead of using today's date."
      },
      {
        question: "Does the calculator account for leap years?",
        answer: "Yes, our calculator automatically accounts for leap years and different month lengths to provide accurate age calculations."
      },
      {
        question: "Can I calculate the age difference between two people?",
        answer: "Yes, you can use the calculator to find the age difference between two people by calculating their ages separately and comparing the results."
      },
      {
        question: "Is my birth date information stored?",
        answer: "No, all calculations happen locally in your browser. Your birth date and personal information are never stored or transmitted to our servers."
      }
    ],
    
    relatedTools: [
      { name: "Date Difference Calculator", href: "/date-difference-calculator", description: "Calculate differences between dates" },
      { name: "Future Date Calculator", href: "/future-date-calculator", description: "Calculate future dates" },
      { name: "BMI Calculator", href: "/bmi-calculator", description: "Calculate your body mass index" },
      { name: "Percentage Calculator", href: "/percentage-calculator", description: "Calculate percentages easily" }
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
