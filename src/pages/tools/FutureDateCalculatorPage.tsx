
import React from 'react';
import FutureDateCalculator from '@/components/tools/FutureDateCalculator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const FutureDateCalculatorPage = () => {
  const toolData = {
    title: "Future Date Calculator - Add Days, Weeks, Months",
    description: "Calculate future dates by adding days, weeks, months, or years to any starting date. Perfect for project planning, deadlines, and scheduling.",
    category: "Calculator Tools",
    
    howToUse: [
      "Select your starting date using the date picker",
      "Choose the time unit (days, weeks, months, years)",
      "Enter the number of units to add",
      "View the calculated future date instantly",
      "Use the result for planning and scheduling"
    ],
    
    features: [
      "Add days, weeks, months, or years to any date",
      "Account for leap years and varying month lengths",
      "Calculate multiple future dates simultaneously",
      "Business days calculation (excluding weekends)",
      "Holiday exclusion options",
      "Export results to calendar applications"
    ],
    
    faqs: [
      {
        question: "How does the calculator handle month-end dates?",
        answer: "When adding months to dates like January 31st, the calculator intelligently handles cases where the target month has fewer days, typically moving to the last day of that month."
      },
      {
        question: "Can I exclude weekends from calculations?",
        answer: "Yes, you can choose to add only business days, which automatically excludes Saturdays and Sundays from the count."
      },
      {
        question: "Does it account for leap years?",
        answer: "Absolutely! The calculator correctly handles leap years when calculating future dates, ensuring accuracy across all calendar variations."
      },
      {
        question: "Can I calculate multiple scenarios at once?",
        answer: "Yes, you can set up multiple date calculations simultaneously to compare different timeline scenarios for your projects or planning needs."
      }
    ],
    
    relatedTools: [
      { name: "Date Difference Calculator", href: "/date-difference-calculator", description: "Calculate days between dates" },
      { name: "Age Calculator", href: "/age-calculator", description: "Calculate your exact age" },
      { name: "Work Days Calculator", href: "/work-days-calculator", description: "Calculate working days" },
      { name: "Project Timeline", href: "/project-timeline", description: "Create project timelines" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<FutureDateCalculator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default FutureDateCalculatorPage;
