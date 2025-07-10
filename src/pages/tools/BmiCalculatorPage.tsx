
import React from 'react';
import BmiCalculator from '@/components/tools/BmiCalculator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const BmiCalculatorPage = () => {
  const toolData = {
    title: "Free BMI Calculator Online",
    description: "Calculate your Body Mass Index (BMI) instantly with our free online BMI calculator. Get your BMI score, category, and health recommendations based on WHO standards.",
    category: "Health Tools",
    
    howToUse: [
      "Enter your weight in kilograms or pounds",
      "Enter your height in centimeters or feet/inches",
      "Select your preferred unit system",
      "Click 'Calculate BMI' to get your results",
      "View your BMI category and health recommendations"
    ],
    
    features: [
      "Support for metric and imperial units",
      "Instant BMI calculation and categorization",
      "Health recommendations based on BMI",
      "Visual BMI scale indicator",
      "BMI history tracking",
      "Mobile-optimized interface"
    ],
    
    faqs: [
      {
        question: "What is BMI and why is it important?",
        answer: "BMI (Body Mass Index) is a measure of body fat based on height and weight. It's used as a screening tool to identify potential weight-related health problems."
      },
      {
        question: "What are the BMI categories?",
        answer: "BMI categories are: Underweight (below 18.5), Normal weight (18.5-24.9), Overweight (25-29.9), and Obese (30 and above)."
      },
      {
        question: "Is BMI accurate for everyone?",
        answer: "BMI is a general screening tool and may not be accurate for athletes with high muscle mass, elderly people, or certain ethnic groups. Consult a healthcare provider for personalized advice."
      },
      {
        question: "Can I use this calculator for children?",
        answer: "This calculator is designed for adults (18+ years). Children's BMI is calculated differently and requires age and gender-specific percentiles."
      },
      {
        question: "How often should I check my BMI?",
        answer: "For general health monitoring, checking BMI monthly or quarterly is sufficient. If you're actively trying to lose or gain weight, weekly checks may be helpful."
      }
    ],
    
    relatedTools: [
      { name: "Age Calculator", href: "/age-calculator", description: "Calculate your exact age" },
      { name: "Percentage Calculator", href: "/percentage-calculator", description: "Calculate percentages for health metrics" },
      { name: "Unit Converter", href: "/unit-converter", description: "Convert between different units" },
      { name: "Simple Calculator", href: "/simple-calculator", description: "Perform basic calculations" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<BmiCalculator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default BmiCalculatorPage;
