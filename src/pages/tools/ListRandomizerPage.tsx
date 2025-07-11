
import React from 'react';
import ListRandomizer from '@/components/tools/ListRandomizer';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const ListRandomizerPage = () => {
  const toolData = {
    title: "Free List Randomizer Tool Online",
    description: "Randomize and shuffle any list of items instantly. Perfect for creating random orders, picking winners, shuffling playlists, or organizing data randomly.",
    category: "Utility Tools",
    
    howToUse: [
      "Enter your list items, one per line",
      "Click 'Randomize List' to shuffle the order",
      "View your randomized list results",
      "Copy the shuffled list to your clipboard",
      "Randomize again for different orders"
    ],
    
    features: [
      "Instant list randomization and shuffling",
      "Support for any type of text items",
      "Unlimited list length capacity",
      "Multiple randomization algorithms",
      "One-click copy functionality",
      "Preserve original list option"
    ],
    
    faqs: [
      {
        question: "How random is the list shuffling?",
        answer: "We use cryptographically secure random number generators to ensure truly random shuffling of your list items."
      },
      {
        question: "Is there a limit on list size?",
        answer: "No, you can randomize lists of any size. However, very large lists may take slightly longer to process."
      },
      {
        question: "Can I randomize the same list multiple times?",
        answer: "Yes, each randomization produces a different random order. You can shuffle the same list as many times as needed."
      },
      {
        question: "What types of items can I randomize?",
        answer: "You can randomize any text-based items: names, numbers, words, phrases, URLs, or any other text content."
      }
    ],
    
    relatedTools: [
      { name: "Random Number Generator", href: "/random-number-generator", description: "Generate random numbers" },
      { name: "Dice Roller", href: "/dice-roller", description: "Roll virtual dice" },
      { name: "Coin Flip", href: "/coin-flip", description: "Flip virtual coins" },
      { name: "Name Generator", href: "/name-generator", description: "Generate random names" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<ListRandomizer />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default ListRandomizerPage;
