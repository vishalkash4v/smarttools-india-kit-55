
import React from 'react';
import CoinFlip from '@/components/tools/CoinFlip';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const CoinFlipPage = () => {
  const toolData = {
    title: "Online Coin Flip - Virtual Coin Toss Tool",
    description: "Flip a virtual coin online for quick decisions. Get heads or tails results with our fair coin toss simulator. Perfect for games and decision making.",
    category: "Utility Tools",
    
    howToUse: [
      "Click the 'Flip Coin' button to start",
      "Watch the animated coin flip",
      "View the result: Heads or Tails",
      "Click 'Flip Again' for another toss",
      "Use for decisions, games, or random choices"
    ],
    
    features: [
      "Realistic coin flip animation",
      "50/50 probability for fair results",
      "Instant heads or tails outcome",
      "Multiple flip history tracking",
      "Perfect for quick decisions",
      "Mobile-friendly interface"
    ],
    
    faqs: [
      {
        question: "Is the coin flip result truly random?",
        answer: "Yes, our coin flip uses cryptographically secure random number generation to ensure a fair 50/50 probability for heads or tails."
      },
      {
        question: "Can I flip multiple coins at once?",
        answer: "Currently, the tool flips one coin at a time, but you can flip repeatedly as many times as needed for your decision or game."
      },
      {
        question: "Does it keep track of previous flips?",
        answer: "Yes, the tool maintains a history of your recent coin flips so you can see the pattern of heads and tails results."
      },
      {
        question: "Can I use this for sports or game decisions?",
        answer: "Absolutely! This virtual coin flip is perfect for sports, board games, settling disputes, or any situation where you need a fair random choice."
      }
    ],
    
    relatedTools: [
      { name: "Dice Roller", href: "/dice-roller", description: "Roll virtual dice" },
      { name: "Random Number Generator", href: "/random-number-generator", description: "Generate random numbers" },
      { name: "Decision Maker", href: "/decision-maker", description: "Help make choices" },
      { name: "Yes or No Generator", href: "/yes-no-generator", description: "Get yes/no answers" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<CoinFlip />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default CoinFlipPage;
