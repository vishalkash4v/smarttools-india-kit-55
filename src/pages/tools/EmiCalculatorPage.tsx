
import React from 'react';
import EmiCalculator from '@/components/tools/EmiCalculator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const EmiCalculatorPage = () => {
  const toolData = {
    title: "EMI Calculator - Home, Car & Personal Loan Calculator",
    description: "Calculate EMI for home loans, car loans, and personal loans. Find monthly installment amounts, total interest, and repayment schedule with our free EMI calculator.",
    category: "Financial Tools",
    
    howToUse: [
      "Enter the loan amount you need",
      "Input the annual interest rate offered by lender",
      "Select the loan tenure in months or years",
      "View calculated EMI and total payment details",
      "Analyze the payment schedule and interest breakdown"
    ],
    
    features: [
      "Calculate EMI for all types of loans",
      "Detailed amortization schedule",
      "Interest vs principal breakdown charts",
      "Compare multiple loan scenarios",
      "Prepayment calculation options",
      "Export payment schedule to Excel"
    ],
    
    faqs: [
      {
        question: "How is EMI calculated?",
        answer: "EMI is calculated using the formula: P × r × (1 + r)^n / ((1 + r)^n - 1), where P is principal, r is monthly interest rate, and n is tenure in months."
      },
      {
        question: "Can I calculate EMI for different loan types?",
        answer: "Yes, this calculator works for home loans, car loans, personal loans, business loans, and any other type of fixed-rate installment loan."
      },
      {
        question: "What is the difference between flat and reducing rate?",
        answer: "Most loans use reducing balance method where interest is calculated on outstanding principal. Our calculator uses the standard reducing balance method."
      },
      {
        question: "How does prepayment affect my EMI?",
        answer: "Prepayments reduce the outstanding principal, which can either reduce your EMI amount or shorten the loan tenure, saving significant interest over time."
      }
    ],
    
    relatedTools: [
      { name: "Home Loan Calculator", href: "/home-loan-calculator", description: "Calculate home loan EMI" },
      { name: "Car Loan Calculator", href: "/car-loan-calculator", description: "Calculate car loan EMI" },
      { name: "SIP Calculator", href: "/sip-calculator", description: "Calculate mutual fund SIP" },
      { name: "FD Calculator", href: "/fd-calculator", description: "Calculate fixed deposit returns" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<EmiCalculator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default EmiCalculatorPage;
