
import React from 'react';
import TemperatureConverter from '@/components/tools/TemperatureConverter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const TemperatureConverterPage = () => {
  const toolData = {
    title: "Temperature Converter - Convert Celsius, Fahrenheit, Kelvin",
    description: "Convert temperatures between Celsius, Fahrenheit, Kelvin, and Rankine scales instantly. Accurate temperature conversion tool for science, cooking, weather, and engineering.",
    category: "Converter Tools",
    
    howToUse: [
      "Enter a temperature value in any scale",
      "Select the input temperature scale (°C, °F, K, °R)",
      "Choose the output scale you want to convert to",
      "View instant conversion results",
      "Copy results or convert another temperature"
    ],
    
    features: [
      "Convert between Celsius, Fahrenheit, Kelvin, and Rankine",
      "Instant real-time conversion",
      "High precision calculations",
      "Bulk temperature conversion",
      "Temperature scale reference guide",
      "Common temperature references (freezing, boiling points)",
      "Scientific and everyday use cases",
      "Mobile-friendly interface"
    ],
    
    faqs: [
      {
        question: "What are the common temperature conversion formulas?",
        answer: "°F = (°C × 9/5) + 32, °C = (°F - 32) × 5/9, K = °C + 273.15, °R = °F + 459.67. Our converter handles all these calculations automatically with high precision."
      },
      {
        question: "When would I use Kelvin or Rankine scales?",
        answer: "Kelvin is used in scientific applications and thermodynamics as it's an absolute temperature scale starting from absolute zero. Rankine is similar to Kelvin but uses Fahrenheit-sized degrees, mainly used in engineering applications."
      },
      {
        question: "What's absolute zero in different scales?",
        answer: "Absolute zero is -273.15°C, -459.67°F, 0K, and 0°R. It's the theoretical temperature at which all molecular motion stops and represents the coldest possible temperature."
      },
      {
        question: "How accurate are the conversions?",
        answer: "Our converter provides high precision calculations with multiple decimal places. The accuracy is sufficient for both everyday use and most scientific applications."
      }
    ],
    
    relatedTools: [
      { name: "Unit Converter", href: "/unit-converter", description: "Convert various units of measurement" },
      { name: "Enhanced Unit Converter", href: "/enhanced-unit-converter", description: "Advanced unit conversion tool" },
      { name: "Currency Converter", href: "/currency-converter", description: "Convert between currencies" },
      { name: "Percentage Calculator", href: "/percentage-calculator", description: "Calculate percentages" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<TemperatureConverter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default TemperatureConverterPage;
