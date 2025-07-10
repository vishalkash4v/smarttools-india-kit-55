
import React from 'react';
import UnitConverter from '@/components/tools/UnitConverter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const UnitConverterPage = () => {
  const toolData = {
    title: "Free Unit Converter Online",
    description: "Convert between different units of measurement including length, weight, temperature, volume, and more. Comprehensive unit conversion tool with accurate calculations.",
    category: "Converter Tools",
    
    howToUse: [
      "Select the type of unit you want to convert (length, weight, etc.)",
      "Choose the 'from' unit from the dropdown list",
      "Enter the value you want to convert",
      "Select the 'to' unit from the second dropdown",
      "View the converted result instantly"
    ],
    
    features: [
      "Multiple unit categories (length, weight, temperature, volume)",
      "Accurate conversion calculations",
      "Support for metric and imperial units",
      "Instant conversion results",
      "Easy-to-use dropdown menus",
      "Mobile-friendly interface"
    ],
    
    faqs: [
      {
        question: "What types of units can I convert?",
        answer: "You can convert length (meters, feet, inches), weight (kilograms, pounds), temperature (Celsius, Fahrenheit, Kelvin), volume (liters, gallons), and many other unit types."
      },
      {
        question: "How accurate are the conversions?",
        answer: "Our conversions use precise mathematical formulas and are accurate to multiple decimal places, suitable for both casual and professional use."
      },
      {
        question: "Can I convert between metric and imperial units?",
        answer: "Yes, the tool supports conversion between metric, imperial, and other measurement systems commonly used worldwide."
      },
      {
        question: "Is there a limit to the values I can convert?",
        answer: "No, you can convert any reasonable numeric value. The tool handles both very small and very large numbers efficiently."
      }
    ],
    
    relatedTools: [
      { name: "Simple Calculator", href: "/simple-calculator", description: "Basic math calculations" },
      { name: "Percentage Calculator", href: "/percentage-calculator", description: "Calculate percentages" },
      { name: "Currency Converter", href: "/currency-converter", description: "Convert currencies" },
      { name: "BMI Calculator", href: "/bmi-calculator", description: "Calculate body mass index" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<UnitConverter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default UnitConverterPage;
