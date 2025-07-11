
import React from 'react';
import IncomeTaxCalculator from '@/components/tools/IncomeTaxCalculator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const IncomeTaxCalculatorPage = () => {
  const toolData = {
    title: "Free Income Tax Calculator Online",
    description: "Calculate income tax for different tax regimes. Compare old vs new tax systems, get detailed tax breakdowns, and plan your tax savings effectively.",
    category: "Financial Tools",
    
    howToUse: [
      "Enter your annual gross income",
      "Add deductions and exemptions",
      "Select your tax regime (old or new)",
      "Input investment details for tax savings",
      "View detailed tax calculation and breakdown"
    ],
    
    features: [
      "Support for multiple tax regimes",
      "Detailed tax breakdown and analysis",
      "Investment planning for tax savings",
      "Comparison between old and new tax systems",
      "HRA, LTA, and other exemption calculations",
      "Tax-saving investment recommendations"
    ],
    
    faqs: [
      {
        question: "What's the difference between old and new tax regimes?",
        answer: "The old regime offers various deductions and exemptions with higher tax rates, while the new regime has lower tax rates but fewer deductions available."
      },
      {
        question: "Which tax regime should I choose?",
        answer: "The choice depends on your income level and eligible deductions. Our calculator helps you compare both regimes to choose the most beneficial one."
      },
      {
        question: "Are the calculations accurate?",
        answer: "Our calculator uses current tax slabs and rates. However, consult a tax professional for complex situations or final tax planning decisions."
      },
      {
        question: "Can I calculate tax for previous years?",
        answer: "The calculator is designed for the current financial year. Tax rates and slabs may differ for previous years."
      }
    ],
    
    relatedTools: [
      { name: "SIP Calculator", href: "/sip-calculator", description: "Calculate SIP returns" },
      { name: "GST Calculator", href: "/gst-calculator", description: "Calculate GST amounts" },
      { name: "EMI Calculator", href: "/emi-calculator", description: "Calculate loan EMI" },
      { name: "FD Calculator", href: "/fd-calculator", description: "Calculate FD returns" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<IncomeTaxCalculator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default IncomeTaxCalculatorPage;
