
import React from 'react';
import RandomNumberGenerator from '@/components/tools/RandomNumberGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const RandomNumberGeneratorPage = () => {
  const toolData = {
    title: "Random Number Generator Online",
    description: "Generate random numbers within any range with our free online random number generator. Perfect for games, lotteries, research, and decision making. Truly random number generation.",
    keywords: "random number generator, random numbers, number picker, lottery numbers, random generator",
    
    howToUse: [
      "Set your minimum number (can be negative)",
      "Set your maximum number",
      "Choose how many numbers to generate",
      "Click 'Generate Numbers' to get your random numbers",
      "Generate new numbers as many times as needed"
    ],
    
    features: [
      "Generate numbers in any range (including negative numbers)",
      "Generate multiple numbers at once",
      "Truly random number generation",
      "Support for decimal numbers",
      "No duplicates option available",
      "Instant generation with one click"
    ],
    
    faqs: [
      {
        question: "How random are the generated numbers?",
        answer: "Our generator uses JavaScript's built-in cryptographically secure random number generator, providing truly random numbers suitable for most applications including games and research."
      },
      {
        question: "Can I generate negative numbers?",
        answer: "Yes, you can set negative minimum values to generate negative numbers. For example, set min to -100 and max to 100 to generate numbers between -100 and 100."
      },
      {
        question: "Is there a limit to how many numbers I can generate?",
        answer: "You can generate up to 1000 numbers at once. For larger datasets, simply run the generator multiple times."
      },
      {
        question: "Can I generate decimal numbers?",
        answer: "Yes, our generator supports decimal numbers. You can specify the number of decimal places you want in your random numbers."
      },
      {
        question: "Are the numbers suitable for cryptographic purposes?",
        answer: "While our generator uses secure random functions, for cryptographic applications requiring high security, we recommend using specialized cryptographic libraries."
      }
    ],
    
    relatedTools: [
      { name: "Password Generator", href: "/password-generator" },
      { name: "Dice Roller", href: "/dice-roller" },
      { name: "Color Palette Generator", href: "/color-palette-generator" },
      { name: "Lorem Ipsum Generator", href: "/lorem-ipsum-generator" }
    ]
  };

  return (
    <ToolPageLayout {...toolData}>
      <RandomNumberGenerator />
    </ToolPageLayout>
  );
};

export default RandomNumberGeneratorPage;
