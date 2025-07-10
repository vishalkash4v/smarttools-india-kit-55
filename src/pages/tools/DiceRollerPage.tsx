
import React from 'react';
import DiceRoller from '@/components/tools/DiceRoller';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const DiceRollerPage = () => {
  const toolData = {
    title: "Online Dice Roller - Virtual Dice Generator",
    description: "Roll virtual dice online with customizable sides and quantities. Perfect for board games, RPGs, and decision making. Free online dice rolling tool.",
    category: "Gaming Tools",
    
    howToUse: [
      "Select the number of dice you want to roll",
      "Choose the type of dice (6-sided, 20-sided, etc.)",
      "Click 'Roll Dice' to generate random results",
      "View individual dice results and total sum",
      "Roll again as many times as needed"
    ],
    
    features: [
      "Multiple dice types (D4, D6, D8, D10, D12, D20, D100)",
      "Roll up to 10 dice simultaneously",
      "Individual and total results display",
      "Animated dice rolling effect",
      "Perfect for tabletop gaming and RPGs",
      "Fair random number generation"
    ],
    
    faqs: [
      {
        question: "What types of dice can I roll?",
        answer: "You can roll standard dice including 4-sided (D4), 6-sided (D6), 8-sided (D8), 10-sided (D10), 12-sided (D12), 20-sided (D20), and 100-sided (D100) dice."
      },
      {
        question: "How many dice can I roll at once?",
        answer: "You can roll up to 10 dice simultaneously, which is perfect for most board games and role-playing game scenarios."
      },
      {
        question: "Are the dice rolls truly random?",
        answer: "Yes, our dice roller uses cryptographically secure random number generation to ensure fair and unbiased results for all your gaming needs."
      },
      {
        question: "Can I use this for Dungeons & Dragons?",
        answer: "Absolutely! Our dice roller supports all standard D&D dice types including D4, D6, D8, D10, D12, and D20, making it perfect for tabletop RPGs."
      }
    ],
    
    relatedTools: [
      { name: "Random Number Generator", href: "/random-number-generator", description: "Generate random numbers" },
      { name: "Coin Flip", href: "/coin-flip", description: "Flip virtual coins" },
      { name: "Password Generator", href: "/password-generator", description: "Generate secure passwords" },
      { name: "Username Generator", href: "/username-generator", description: "Create unique usernames" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<DiceRoller />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default DiceRollerPage;
