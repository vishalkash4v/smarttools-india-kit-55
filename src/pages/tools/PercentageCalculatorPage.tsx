
import React from 'react';
import PercentageCalculator from '@/components/tools/PercentageCalculator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const PercentageCalculatorPage = () => {
  const toolData = {
    title: "Free Percentage Calculator Online",
    description: "Calculate percentages, percentage increase/decrease, and find what percentage one number is of another. Free online percentage calculator with multiple calculation modes.",
    category: "Calculator Tools",
    
    howToUse: [
      "Choose the type of percentage calculation you need",
      "Enter the required numbers in the input fields",
      "View the calculated result instantly",
      "Use different modes for various percentage calculations",
      "Copy or note down the results for your use"
    ],
    
    features: [
      "Calculate percentage of a number",
      "Find percentage increase or decrease",
      "Determine what percentage one number is of another",
      "Calculate percentage change between values",
      "Multiple calculation modes in one tool",
      "Instant real-time calculations"
    ],
    
    faqs: [
      {
        question: "How do I calculate what percentage one number is of another?",
        answer: "Divide the first number by the second number and multiply by 100. For example, to find what percentage 25 is of 100: (25 ÷ 100) × 100 = 25%."
      },
      {
        question: "What's the difference between percentage increase and decrease?",
        answer: "Percentage increase shows how much a value has grown, while percentage decrease shows how much it has reduced, both relative to the original value."
      },
      {
        question: "How do I calculate percentage change?",
        answer: "Percentage change = ((New Value - Old Value) / Old Value) × 100. A positive result indicates an increase, while negative indicates a decrease."
      },
      {
        question: "Can I calculate compound percentages?",
        answer: "Yes, you can use our calculator multiple times to calculate compound percentages. Apply the first percentage, then use that result for the second calculation."
      },
      {
        question: "Are the calculations accurate for business use?",
        answer: "Yes, our calculations use precise mathematical formulas and are suitable for business, academic, and professional use with high accuracy."
      }
    ],
    
    relatedTools: [
      { name: "Simple Calculator", href: "/simple-calculator", description: "Basic arithmetic calculations" },
      { name: "BMI Calculator", href: "/bmi-calculator", description: "Calculate body mass index" },
      { name: "Age Calculator", href: "/age-calculator", description: "Calculate exact age" },
      { name: "Unit Converter", href: "/unit-converter", description: "Convert between units" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<PercentageCalculator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default PercentageCalculatorPage;
