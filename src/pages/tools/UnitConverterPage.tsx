
import React from 'react';
import UnitConverter from '@/components/tools/UnitConverter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const UnitConverterPage = () => {
  const toolData = {
    title: "Free Unit Converter Online",
    description: "Convert between different units of measurement instantly. Length, weight, temperature, volume, area, and more. Free online unit converter with accurate conversions and multiple unit systems.",
    category: "Calculator Tools",
    
    howToUse: [
      "Select the type of measurement (length, weight, temperature, etc.)",
      "Enter the value you want to convert",
      "Choose the source unit from the dropdown",
      "Select the target unit for conversion",
      "View the converted result instantly"
    ],
    
    features: [
      "Convert length, weight, temperature, volume, and area",
      "Support for metric and imperial units",
      "Instant real-time conversion",
      "High precision calculations",
      "Common unit presets for quick access",
      "Mobile-friendly interface"
    ],
    
    faqs: [
      {
        question: "What types of units can I convert?",
        answer: "You can convert length (meters, feet, inches), weight (kilograms, pounds, ounces), temperature (Celsius, Fahrenheit, Kelvin), volume (liters, gallons, cups), and area (square meters, acres, etc.)."
      },
      {
        question: "How accurate are the conversions?",
        answer: "Our conversions use precise mathematical formulas and are accurate to multiple decimal places. The results are suitable for both everyday use and professional applications."
      },
      {
        question: "Can I convert between different unit systems?",
        answer: "Yes, you can convert between metric, imperial, and other unit systems. For example, convert meters to feet, kilograms to pounds, or Celsius to Fahrenheit."
      },
      {
        question: "Are the conversion factors up to date?",
        answer: "Yes, we use the latest international standards and conversion factors. Our conversions are based on official definitions from organizations like NIST and ISO."
      },
      {
        question: "Can I use this for cooking measurements?",
        answer: "Absolutely! Our converter includes common cooking units like cups, tablespoons, teaspoons, ounces, and milliliters, making it perfect for recipe conversions."
      }
    ],
    
    relatedTools: [
      { name: "Temperature Converter", href: "/temperature-converter", description: "Convert between temperature scales" },
      { name: "BMI Calculator", href: "/bmi-calculator", description: "Calculate body mass index" },
      { name: "Currency Converter", href: "/currency-converter", description: "Convert between currencies" },
      { name: "Percentage Calculator", href: "/percentage-calculator", description: "Calculate percentages" }
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
