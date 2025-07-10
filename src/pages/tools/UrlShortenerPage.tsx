
import React from 'react';
import UrlShortener from '@/components/tools/UrlShortener';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const UrlShortenerPage = () => {
  const toolData = {
    title: "Free URL Shortener Online",
    description: "Create short, shareable URLs from long links. Free online URL shortener with custom aliases, click tracking, and QR codes. Perfect for social media and marketing.",
    category: "Utility Tools",
    
    howToUse: [
      "Paste your long URL in the input field",
      "Optionally add a custom alias for branding",
      "Click 'Shorten URL' to create a short link",
      "Copy the shortened URL to your clipboard",
      "Share your short link anywhere online"
    ],
    
    features: [
      "Create short, memorable URLs",
      "Custom aliases for branding",
      "QR code generation for mobile sharing",
      "Click tracking and analytics",
      "Bulk URL shortening",
      "No registration required"
    ],
    
    faqs: [
      {
        question: "Why should I use a URL shortener?",
        answer: "URL shorteners make long links more manageable for social media, emails, and printed materials. They also provide click tracking and can include your brand in the shortened URL."
      },
      {
        question: "Do shortened URLs expire?",
        answer: "Our shortened URLs don't have an expiration date and will continue to work indefinitely. However, if the original URL becomes unavailable, the shortened link won't work either."
      },
      {
        question: "Can I customize my shortened URLs?",
        answer: "Yes, you can create custom aliases to make your shortened URLs more memorable and brand-friendly. Custom aliases help with recognition and trust."
      },
      {
        question: "Are shortened URLs safe to click?",
        answer: "Our service doesn't modify the destination of your URLs. However, always be cautious when clicking shortened links from unknown sources, as they can hide the actual destination."
      },
      {
        question: "Can I track clicks on my shortened URLs?",
        answer: "Yes, our service provides basic click tracking so you can see how many people have clicked on your shortened links and when they were clicked."
      }
    ],
    
    relatedTools: [
      { name: "QR Code Generator", href: "/qr-generator", description: "Generate QR codes for URLs" },
      { name: "Link Analytics", href: "/link-analytics", description: "Analyze link performance" },
      { name: "Social Media Tools", href: "/social-media-tools", description: "Tools for social media" },
      { name: "Marketing Tools", href: "/marketing-tools", description: "Digital marketing utilities" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<UrlShortener />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default UrlShortenerPage;
