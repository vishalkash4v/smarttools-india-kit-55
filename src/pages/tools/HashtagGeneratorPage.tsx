
import React from 'react';
import HashtagGenerator from '@/components/tools/HashtagGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const HashtagGeneratorPage = () => {
  const toolData = {
    title: "Hashtag Generator - Instagram, Twitter, TikTok Tags",
    description: "Generate trending hashtags for Instagram, Twitter, TikTok, and other social media platforms. Boost your content reach with relevant and popular hashtags.",
    category: "Social Media Tools",
    
    howToUse: [
      "Enter keywords related to your content or niche",
      "Select the social media platform you're targeting",
      "Choose hashtag categories (trending, niche, branded)",
      "Generate relevant hashtags automatically",
      "Copy hashtags and use them in your posts"
    ],
    
    features: [
      "Platform-specific hashtag suggestions",
      "Trending and popular hashtag discovery",
      "Niche and long-tail hashtag options",
      "Hashtag performance analytics",
      "Copy hashtags with one click",
      "Save favorite hashtag combinations"
    ],
    
    faqs: [
      {
        question: "How many hashtags should I use per post?",
        answer: "Instagram allows up to 30 hashtags, but 5-10 quality hashtags often perform better. Twitter works best with 1-2 hashtags. TikTok users typically use 3-5 hashtags."
      },
      {
        question: "What makes a good hashtag?",
        answer: "Good hashtags are relevant to your content, have moderate competition, mix popular and niche tags, and align with your target audience's interests."
      },
      {
        question: "How do I find trending hashtags?",
        answer: "Our tool analyzes current trends across platforms to suggest hashtags that are gaining popularity, helping you tap into trending conversations."
      },
      {
        question: "Should I create branded hashtags?",
        answer: "Yes, branded hashtags help build community around your brand, encourage user-generated content, and make it easier to track mentions and engagement."
      }
    ],
    
    relatedTools: [
      { name: "Social Media Scheduler", href: "/social-media-scheduler", description: "Schedule social media posts" },
      { name: "Caption Generator", href: "/caption-generator", description: "Generate social media captions" },
      { name: "Instagram Analytics", href: "/instagram-analytics", description: "Analyze Instagram performance" },
      { name: "Content Planner", href: "/content-planner", description: "Plan your content calendar" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      category={toolData.category}
      toolInterface={<HashtagGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default HashtagGeneratorPage;
