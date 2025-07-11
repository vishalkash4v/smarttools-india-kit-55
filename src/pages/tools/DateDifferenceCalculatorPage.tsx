
import React from 'react';
import DateDifferenceCalculator from '@/components/tools/DateDifferenceCalculator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const DateDifferenceCalculatorPage = () => {
  const toolData = {
    title: "Date Difference Calculator - Calculate Days Between Dates",
    description: "Calculate the exact difference between two dates in days, weeks, months, and years. Free online date calculator for project planning and age calculation.",
    category: "Calculator Tools",
    
    howToUse: [
      "Select or enter the first date (start date)",
      "Select or enter the second date (end date)",
      "View the calculated difference in various units",
      "See results in days, weeks, months, and years",
      "Use the results for planning or documentation"
    ],
    
    features: [
      "Calculate difference in multiple time units",
      "Support for past and future dates",
      "Leap year calculations included",
      "Business days calculation option",
      "Age calculator functionality",
      "Export results to various formats"
    ],
    
    faqs: [
      {
        question: "How accurate are the date calculations?",
        answer: "Our calculator accounts for leap years, varying month lengths, and all calendar irregularities to provide precise date differences down to the exact day."
      },
      {
        question: "Can I calculate business days only?",
        answer: "Yes, you can exclude weekends and holidays from the calculation to get the number of working days between two dates."
      },
      {
        question: "What date formats are supported?",
        answer: "The tool supports various date formats including MM/DD/YYYY, DD/MM/YYYY, and YYYY-MM-DD. You can also use the date picker for easy selection."
      },
      {
        question: "Can I calculate my exact age?",
        answer: "Yes, by entering your birth date and today's date, you can calculate your exact age in years, months, days, and even hours or minutes."
      }
    ],
    
    relatedTools: [
      { name: "Age Calculator", href: "/age-calculator", description: "Calculate your exact age" },
      { name: "Future Date Calculator", href: "/future-date-calculator", description: "Calculate future dates" },
      { name: "Work Days Calculator", href: "/work-days-calculator", description: "Calculate working days" },
      { name: "Time Zone Converter", href: "/time-zone-converter", description: "Convert between time zones" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<DateDifferenceCalculator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default DateDifferenceCalculatorPage;
