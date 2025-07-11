
import React from 'react';
import EnhancedUnitConverter from '@/components/tools/EnhancedUnitConverter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const EnhancedUnitConverterPage = () => {
  const toolData = {
    title: "Enhanced Unit Converter Online",
    description: "Advanced unit converter with support for length, weight, temperature, volume, area, speed, pressure, energy, and more. Accurate conversions between metric and imperial units.",
    category: "Converter Tools",
    
    howToUse: [
      "Select the category of units you want to convert",
      "Choose the source unit from the dropdown",
      "Enter the value you want to convert",
      "Select the target unit for conversion",
      "View the converted result instantly"
    ],
    
    features: [
      "Multiple unit categories (length, weight, temperature, etc.)",
      "Support for metric and imperial systems",
      "Real-time conversion as you type",
      "High precision calculations",
      "Commonly used unit shortcuts",
      "Scientific and engineering units"
    ],
    
    faqs: [
      {
        question: "What unit categories are available?",
        answer: "We support length, weight, temperature, volume, area, speed, pressure, energy, power, time, and many other unit categories."
      },
      {
        question: "How accurate are the conversions?",
        answer: "Our conversions use precise mathematical formulas and provide accuracy suitable for both everyday use and professional applications."
      },
      {
        question: "Can I convert between different measurement systems?",
        answer: "Yes, you can easily convert between metric, imperial, and other measurement systems worldwide."
      },
      {
        question: "Are scientific units supported?",
        answer: "Yes, we include scientific and engineering units for professional use, including units for physics, chemistry, and engineering calculations."
      }
    ],
    
    relatedTools: [
      { name: "Temperature Converter", href: "/temperature-converter", description: "Convert temperatures" },
      { name: "Currency Converter", href: "/currency-converter", description: "Convert currencies" },
      { name: "Simple Calculator", href: "/simple-calculator", description: "Basic calculations" },
      { name: "Percentage Calculator", href: "/percentage-calculator", description: "Calculate percentages" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<EnhancedUnitConverter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default EnhancedUnitConverterPage;
