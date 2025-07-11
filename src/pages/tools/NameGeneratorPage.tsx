
import React from 'react';
import NameGenerator from '@/components/tools/NameGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const NameGeneratorPage = () => {
  const toolData = {
    title: "Free Random Name Generator Online",
    description: "Generate random names for characters, babies, businesses, or creative projects. Choose from various categories including first names, last names, and full names from different cultures.",
    category: "Generator Tools",
    
    howToUse: [
      "Select the type of name you want to generate",
      "Choose gender preference (male, female, or both)",
      "Pick a cultural or regional origin if desired",
      "Click 'Generate Names' to create random options",
      "Copy your favorite names or generate more options"
    ],
    
    features: [
      "Multiple name categories and types",
      "Gender-specific name generation",
      "Cultural and regional name origins",
      "Batch generation of multiple names",
      "First name and surname combinations",
      "Copy individual names easily"
    ],
    
    faqs: [
      {
        question: "What types of names can I generate?",
        answer: "You can generate first names, last names, full names, business names, character names, and more from various cultural backgrounds and regions."
      },
      {
        question: "Are the generated names real?",
        answer: "Yes, our generator uses databases of real names from various cultures and languages, ensuring authentic and meaningful name suggestions."
      },
      {
        question: "Can I specify name origins or cultures?",
        answer: "Yes, you can choose from various cultural origins including English, Spanish, French, Italian, German, and many other cultural backgrounds."
      },
      {
        question: "Is this suitable for baby naming?",
        answer: "Absolutely! Many parents use our tool for baby name inspiration, exploring names from different cultures and finding unique options they might not have considered."
      }
    ],
    
    relatedTools: [
      { name: "Username Generator", href: "/username-generator", description: "Generate unique usernames" },
      { name: "Business Name Generator", href: "/business-name-generator", description: "Create business names" },
      { name: "Random Number Generator", href: "/random-number-generator", description: "Generate random numbers" },
      { name: "List Randomizer", href: "/list-randomizer", description: "Randomize lists" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<NameGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default NameGeneratorPage;
