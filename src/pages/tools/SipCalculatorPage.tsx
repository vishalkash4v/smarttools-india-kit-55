
import React from 'react';
import SipCalculator from '@/components/tools/SipCalculator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const SipCalculatorPage = () => {
  const toolData = {
    title: "SIP Calculator - Systematic Investment Plan Calculator India",
    description: "Calculate your SIP returns and plan systematic investments in mutual funds. Free SIP calculator with detailed projections, charts, and investment planning tools for India.",
    category: "Financial Tools",
    
    howToUse: [
      "Enter your monthly SIP investment amount",
      "Set expected annual return rate (typically 8-15% for equity funds)",
      "Choose investment duration in years",
      "View projected corpus and total gains",
      "Analyze year-wise investment growth"
    ],
    
    features: [
      "Calculate SIP returns with compound interest",
      "Visual charts showing investment growth",
      "Year-wise breakdown of investments",
      "Comparison of investment vs returns",
      "Support for different return rates",
      "Goal-based SIP planning",
      "Inflation-adjusted calculations",
      "Export results and charts"
    ],
    
    faqs: [
      {
        question: "What is a good SIP return rate to expect?",
        answer: "Historically, equity mutual funds in India have generated 10-15% annual returns over long periods. Debt funds typically give 6-9%. However, returns vary based on market conditions and fund performance. It's wise to use conservative estimates for planning."
      },
      {
        question: "How much should I invest in SIP monthly?",
        answer: "A general rule is to invest 10-20% of your monthly income in SIPs. Start with what you can afford consistently and increase gradually. Even ₹500-1000 monthly SIPs can build substantial wealth over time through compounding."
      },
      {
        question: "What's the minimum SIP amount and duration?",
        answer: "Most mutual funds allow SIPs starting from ₹100-500 per month. However, for meaningful wealth creation, consider investing at least ₹1000+ monthly. Minimum duration varies but SIPs work best for 5+ years to benefit from compounding."
      },
      {
        question: "Should I continue SIP during market downturns?",
        answer: "Yes, continuing SIP during market lows is actually beneficial as you buy more units at lower prices (rupee cost averaging). This helps improve overall returns when markets recover. Avoid stopping SIPs during temporary market volatility."
      }
    ],
    
    relatedTools: [
      { name: "PPF Calculator", href: "/ppf-calculator", description: "Calculate Public Provident Fund returns" },
      { name: "FD Calculator", href: "/fd-calculator", description: "Fixed deposit maturity calculator" },
      { name: "EMI Calculator", href: "/emi-calculator", description: "Calculate loan EMIs" },
      { name: "Income Tax Calculator", href: "/income-tax-calculator", description: "Calculate income tax liability" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<SipCalculator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default SipCalculatorPage;
