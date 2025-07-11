
import React from 'react';
import GstCalculator from '@/components/tools/GstCalculator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const GstCalculatorPage = () => {
  const toolData = {
    title: "GST Calculator - Calculate GST Amount & Tax Online",
    description: "Calculate GST amount, inclusive and exclusive prices for goods and services. Free online GST calculator for India with all tax slabs (5%, 12%, 18%, 28%).",
    category: "Tax Tools",
    
    howToUse: [
      "Enter the base amount or GST-inclusive price",
      "Select the applicable GST rate (5%, 12%, 18%, 28%)",
      "Choose calculation type: GST exclusive or inclusive",
      "View calculated GST amount and total price",
      "Use results for invoicing and tax planning"
    ],
    
    features: [
      "Calculate GST for all tax slabs in India",
      "GST inclusive and exclusive calculations",
      "CGST, SGST, and IGST breakdown",
      "Reverse GST calculation support",
      "Export results for accounting",
      "Multiple currency support"
    ],
    
    faqs: [
      {
        question: "What are the current GST rates in India?",
        answer: "GST rates in India are 5%, 12%, 18%, and 28% depending on the goods or services. Essential items may be exempt (0%) or have special rates."
      },
      {
        question: "What's the difference between CGST, SGST, and IGST?",
        answer: "CGST (Central GST) and SGST (State GST) apply to intra-state transactions, while IGST (Integrated GST) applies to inter-state transactions. The total rate remains the same."
      },
      {
        question: "How do I calculate reverse GST?",
        answer: "Reverse GST calculation finds the base amount from GST-inclusive price. Formula: Base Amount = GST Inclusive Amount / (1 + GST Rate/100)."
      },
      {
        question: "Can I use this for business invoicing?",
        answer: "Yes, this calculator helps create accurate invoices by calculating GST amounts, but ensure you comply with all GST regulations and use proper invoicing software for business."
      }
    ],
    
    relatedTools: [
      { name: "Income Tax Calculator", href: "/income-tax-calculator", description: "Calculate income tax" },
      { name: "TDS Calculator", href: "/tds-calculator", description: "Calculate TDS deductions" },
      { name: "Sales Tax Calculator", href: "/sales-tax-calculator", description: "Calculate sales tax" },
      { name: "Invoice Generator", href: "/invoice-generator", description: "Create professional invoices" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<GstCalculator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default GstCalculatorPage;
