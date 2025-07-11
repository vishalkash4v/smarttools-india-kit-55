
import React from 'react';
import BmiCalculator from '@/components/tools/BmiCalculator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const BmiCalculatorPage = () => {
  const toolData = {
    title: "Free BMI Calculator Online",
    description: "Calculate your Body Mass Index (BMI) instantly. Get your BMI score, health category, and personalized recommendations for maintaining a healthy weight.",
    category: "Health Tools",
    
    howToUse: [
      "Enter your height in feet/inches or centimeters",
      "Input your current weight in pounds or kilograms",
      "Select your preferred measurement units",
      "Click 'Calculate BMI' to get your results",
      "Review your BMI category and health recommendations"
    ],
    
    features: [
      "BMI calculation with metric and imperial units",
      "Health category classification",
      "Ideal weight range suggestions",
      "Visual BMI scale representation",
      "Personalized health recommendations",
      "Age and gender considerations"
    ],
    
    faqs: [
      {
        question: "What is BMI and why is it important?",
        answer: "BMI (Body Mass Index) is a measure of body fat based on height and weight. It helps assess if you're underweight, normal weight, overweight, or obese."
      },
      {
        question: "What are the BMI categories?",
        answer: "BMI categories are: Underweight (<18.5), Normal (18.5-24.9), Overweight (25-29.9), and Obese (≥30). Each category has different health implications."
      },
      {
        question: "Is BMI accurate for everyone?",
        answer: "BMI is a useful screening tool but has limitations. It doesn't account for muscle mass, bone density, or body composition. Athletes may have high BMI due to muscle mass."
      },
      {
        question: "How often should I check my BMI?",
        answer: "You can check your BMI monthly or whenever your weight changes significantly. It's useful for tracking long-term weight management goals."
      }
    ],
    
    relatedTools: [
      { name: "Age Calculator", href: "/age-calculator", description: "Calculate your exact age" },
      { name: "Percentage Calculator", href: "/percentage-calculator", description: "Calculate percentages" },
      { name: "Unit Converter", href: "/unit-converter", description: "Convert between units" },
      { name: "Simple Calculator", href: "/simple-calculator", description: "Basic calculations" }
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
