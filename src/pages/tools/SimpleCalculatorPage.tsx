
import React from 'react';
import SimpleCalculator from '@/components/tools/SimpleCalculator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const SimpleCalculatorPage = () => {
  const toolData = {
    title: "Free Simple Calculator Online",
    description: "Free online calculator for basic math operations. Perform addition, subtraction, multiplication, and division with our easy-to-use simple calculator tool.",
    category: "Calculator Tools",
    
    howToUse: [
      "Click numbers to enter values into the calculator",
      "Use operation buttons (+, -, ×, ÷) for calculations",
      "Press equals (=) to get your result",
      "Use Clear (C) to reset the calculator",
      "Use backspace to delete the last entered digit"
    ],
    
    features: [
      "Basic arithmetic operations (add, subtract, multiply, divide)",
      "Keyboard input support",
      "Clear and backspace functions",
      "Decimal number support",
      "Error handling for invalid operations",
      "Responsive design for all devices"
    ],
    
    faqs: [
      {
        question: "Can I use keyboard to input numbers?",
        answer: "Yes, you can use your keyboard to input numbers and operations. The calculator supports both mouse clicks and keyboard input for convenience."
      },
      {
        question: "What happens if I divide by zero?",
        answer: "The calculator will display an error message when you try to divide by zero, as this operation is mathematically undefined."
      },
      {
        question: "Can I perform multiple operations in sequence?",
        answer: "Yes, you can chain operations together. The calculator will compute each operation as you proceed through your calculation."
      },
      {
        question: "How do I clear the calculator?",
        answer: "Use the 'C' button to clear all values and start fresh, or use the backspace function to delete the last entered digit."
      }
    ],
    
    relatedTools: [
      { name: "Percentage Calculator", href: "/percentage-calculator", description: "Calculate percentages easily" },
      { name: "Age Calculator", href: "/age-calculator", description: "Calculate exact age" },
      { name: "BMI Calculator", href: "/bmi-calculator", description: "Calculate body mass index" },
      { name: "Unit Converter", href: "/unit-converter", description: "Convert between units" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<SimpleCalculator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default SimpleCalculatorPage;
