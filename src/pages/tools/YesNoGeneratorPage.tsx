
import React from 'react';
import YesNoGenerator from '@/components/tools/YesNoGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const YesNoGeneratorPage = () => {
  const toolData = {
    title: "Yes or No Generator - Random Decision Maker",
    description: "Get random Yes or No answers for quick decisions. Free online decision maker tool perfect for settling debates and making choices.",
    category: "Utility Tools",
    
    howToUse: [
      "Think of your yes/no question",
      "Click the 'Get Answer' button",
      "Receive a random Yes or No response",
      "Use the answer to make your decision",
      "Click again for a new random answer"
    ],
    
    features: [
      "Random Yes or No answers",
      "50/50 probability for fair results",
      "Instant decision making",
      "Simple one-click operation",
      "Perfect for settling debates",
      "Mobile-friendly interface"
    ],
    
    faqs: [
      {
        question: "Is the Yes/No result truly random?",
        answer: "Yes, our generator uses cryptographically secure random number generation to ensure a fair 50/50 probability for Yes or No answers."
      },
      {
        question: "Can I use this for important decisions?",
        answer: "While this tool provides random answers, we recommend using it for fun or minor decisions. For important choices, consider all factors carefully."
      },
      {
        question: "How does the random generation work?",
        answer: "The tool uses secure random algorithms that ensure each result is completely independent and has an equal chance of being Yes or No."
      },
      {
        question: "Can I customize the answers?",
        answer: "Currently, the tool provides standard Yes/No answers, but the randomness ensures variety in your decision-making process."
      }
    ],
    
    relatedTools: [
      { name: "Coin Flip", href: "/coin-flip", description: "Flip virtual coins" },
      { name: "Dice Roller", href: "/dice-roller", description: "Roll virtual dice" },
      { name: "Random Number Generator", href: "/random-number-generator", description: "Generate random numbers" },
      { name: "Decision Maker", href: "/decision-maker", description: "Advanced decision tool" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<YesNoGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default YesNoGeneratorPage;
