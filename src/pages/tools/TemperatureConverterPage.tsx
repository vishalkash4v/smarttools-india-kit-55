
import React from 'react';
import { Helmet } from 'react-helmet-async';
import TemperatureConverter from '@/components/tools/TemperatureConverter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const TemperatureConverterPage = () => {
  const howToUse = [
    "Enter the temperature value you want to convert",
    "Select the input temperature unit (Celsius, Fahrenheit, or Kelvin)",
    "Choose the output temperature unit for conversion",
    "View the converted temperature instantly",
    "Use the swap button to quickly reverse the conversion direction"
  ];

  const features = [
    "Convert between Celsius, Fahrenheit, and Kelvin",
    "Instant real-time temperature conversion",
    "Precise calculations with decimal support",
    "Bi-directional conversion with swap function",
    "Scientific accuracy for professional use",
    "Mobile-responsive design",
    "No registration or installation required",
    "Supports negative temperatures",
    "Educational temperature scale information",
    "Copy results with one click"
  ];

  const faqs = [
    {
      question: "What temperature scales can I convert between?",
      answer: "Our converter supports the three most common temperature scales: Celsius (°C), Fahrenheit (°F), and Kelvin (K). You can convert between any combination of these scales."
    },
    {
      question: "How accurate are the temperature conversions?",
      answer: "Our converter uses precise mathematical formulas and provides accuracy up to several decimal places, making it suitable for both everyday use and scientific applications."
    },
    {
      question: "What is the difference between Celsius and Fahrenheit?",
      answer: "Celsius is based on water's freezing (0°C) and boiling points (100°C). Fahrenheit sets water's freezing at 32°F and boiling at 212°F. The conversion formula is: °F = (°C × 9/5) + 32."
    },
    {
      question: "When would I use Kelvin temperature scale?",
      answer: "Kelvin is the absolute temperature scale used in scientific applications. It starts at absolute zero (-273.15°C) and is commonly used in physics, chemistry, and engineering calculations."
    },
    {
      question: "Can I convert negative temperatures?",
      answer: "Yes, our converter handles negative temperatures correctly for all scales. This is useful for weather data, scientific measurements, and industrial applications."
    }
  ];

  const relatedTools = [
    {
      name: "Unit Converter",
      href: "/enhanced-unit-converter",
      description: "Convert length, weight, volume, and more"
    },
    {
      name: "Date Calculator",
      href: "/date-difference-calculator",
      description: "Calculate differences between dates"
    },
    {
      name: "Percentage Calculator",
      href: "/percentage-calculator",
      description: "Calculate percentages and ratios"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Temperature Converter - Celsius, Fahrenheit, Kelvin</title>
        <meta name="description" content="Free online temperature converter. Convert between Celsius, Fahrenheit, and Kelvin instantly. Accurate temperature conversion tool for students, professionals, and everyday use." />
        <meta name="keywords" content="temperature converter, celsius to fahrenheit, fahrenheit to celsius, kelvin converter, temperature conversion, weather conversion" />
        <link rel="canonical" href="https://fyntools.com/temperature-converter" />
        <meta property="og:title" content="Temperature Converter - Celsius, Fahrenheit, Kelvin" />
        <meta property="og:description" content="Convert temperatures between Celsius, Fahrenheit, and Kelvin instantly with our free online temperature converter." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fyntools.com/temperature-converter" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Temperature Converter Online" />
        <meta name="twitter:description" content="Convert between Celsius, Fahrenheit, and Kelvin with our free temperature converter tool." />
      </Helmet>
      
      <ToolPageLayout
        title="Temperature Converter"
        description="Convert temperatures between Celsius, Fahrenheit, and Kelvin scales instantly. Our free online temperature converter provides accurate conversions for weather data, cooking, science, and everyday temperature calculations."
        toolInterface={<TemperatureConverter />}
        howToUse={howToUse}
        features={features}
        faqs={faqs}
        relatedTools={relatedTools}
        category="Conversion Tools"
        rating={4.7}
        userCount="25,000+"
      />
    </>
  );
};

export default TemperatureConverterPage;
