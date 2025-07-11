
import React from 'react';
import FdCalculator from '@/components/tools/FdCalculator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const FdCalculatorPage = () => {
  const toolData = {
    title: "FD Calculator - Fixed Deposit Interest Calculator",
    description: "Calculate fixed deposit maturity amount and interest earnings. Compare FD returns across different banks and tenure options with our free FD calculator.",
    category: "Financial Tools",
    
    howToUse: [
      "Enter your fixed deposit investment amount",
      "Input the annual interest rate offered",
      "Select the tenure period in months or years",
      "Choose compounding frequency (quarterly, half-yearly, etc.)",
      "View maturity amount and total interest earned"
    ],
    
    features: [
      "Calculate FD maturity amount and interest",
      "Support for different compounding frequencies",
      "Compare multiple FD scenarios",
      "Tax calculation on FD interest (TDS)",
      "Premature withdrawal penalty calculation",
      "Interest rate trend analysis"
    ],
    
    faqs: [
      {
        question: "How is FD interest calculated?",
        answer: "FD interest is calculated using compound interest formula: A = P(1 + r/n)^(nt), where P is principal, r is annual rate, n is compounding frequency, and t is time."
      },
      {
        question: "What is the difference between simple and compound interest?",
        answer: "Most FDs offer compound interest where interest earns interest. This results in higher returns compared to simple interest, especially for longer tenures."
      },
      {
        question: "How is tax calculated on FD interest?",
        answer: "FD interest is added to your income and taxed as per your tax slab. TDS is deducted if interest exceeds ₹40,000 per year (₹50,000 for senior citizens)."
      },
      {
        question: "Can I break my FD before maturity?",
        answer: "Yes, but premature withdrawal usually attracts penalty of 0.5-1% on interest rate. Some banks don't allow premature withdrawal for very short-term FDs."
      }
    ],
    
    relatedTools: [
      { name: "RD Calculator", href: "/rd-calculator", description: "Calculate recurring deposit returns" },
      { name: "PPF Calculator", href: "/ppf-calculator", description: "Calculate PPF maturity amount" },
      { name: "NSC Calculator", href: "/nsc-calculator", description: "Calculate NSC returns" },
      { name: "Tax Calculator", href: "/tax-calculator", description: "Calculate income tax" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<FdCalculator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default FdCalculatorPage;
