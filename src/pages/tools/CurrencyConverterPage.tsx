
import React from 'react';
import CurrencyConverter from '@/components/tools/CurrencyConverter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const CurrencyConverterPage = () => {
  const toolData = {
    title: "Free Currency Converter Online",
    description: "Convert between world currencies with real-time exchange rates. Free online currency converter supporting USD, EUR, GBP, INR, and 150+ other currencies.",
    category: "Financial Tools",
    
    howToUse: [
      "Enter the amount you want to convert",
      "Select the source currency from the dropdown",
      "Choose the target currency you want to convert to",
      "View the converted amount with current exchange rates",
      "Check historical exchange rate trends if available"
    ],
    
    features: [
      "Support for 150+ world currencies",
      "Real-time exchange rate updates",
      "Popular currency pairs (USD/EUR, GBP/USD, etc.)",
      "Historical exchange rate data",
      "Mobile-friendly responsive design",
      "Accurate conversion calculations"
    ],
    
    faqs: [
      {
        question: "How often are exchange rates updated?",
        answer: "Exchange rates are updated regularly throughout the trading day to provide the most current conversion rates available."
      },
      {
        question: "Which currencies are supported?",
        answer: "We support over 150 world currencies including major currencies like USD, EUR, GBP, JPY, INR, and many others from countries worldwide."
      },
      {
        question: "Are the exchange rates accurate for trading?",
        answer: "Our rates are sourced from reliable financial data providers, but for actual trading or large transactions, always verify with your bank or financial institution."
      },
      {
        question: "Can I see historical exchange rates?",
        answer: "Yes, many currency pairs include historical data so you can see how exchange rates have changed over time."
      }
    ],
    
    relatedTools: [
      { name: "Percentage Calculator", href: "/percentage-calculator", description: "Calculate percentages" },
      { name: "Simple Calculator", href: "/simple-calculator", description: "Basic calculations" },
      { name: "Unit Converter", href: "/unit-converter", description: "Convert measurements" },
      { name: "SIP Calculator", href: "/sip-calculator", description: "Investment planning" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<CurrencyConverter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default CurrencyConverterPage;
