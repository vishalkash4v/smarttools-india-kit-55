
import React from 'react';
import UrlShortener from '@/components/tools/UrlShortener';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const UrlShortenerPage = () => {
  const toolData = {
    title: "Free URL Shortener Online",
    description: "Shorten long URLs instantly with our free URL shortener. Create custom short links, track clicks, and manage your shortened URLs. Perfect for social media and marketing campaigns.",
    category: "Utility Tools",
    
    howToUse: [
      "Paste your long URL in the input field",
      "Optionally customize the short URL suffix",
      "Click 'Shorten URL' to generate the short link",
      "Copy the shortened URL for sharing",
      "Track clicks and analytics (if available)"
    ],
    
    features: [
      "Instant URL shortening",
      "Custom short URL aliases",
      "Click tracking and analytics",
      "QR code generation for short URLs",
      "Bulk URL shortening",
      "No registration required"
    ],
    
    faqs: [
      {
        question: "How long do shortened URLs last?",
        answer: "Our shortened URLs are permanent and don't expire. However, if the original URL becomes unavailable, the short link will also stop working."
      },
      {
        question: "Can I customize my short URLs?",
        answer: "Yes, you can create custom aliases for your short URLs to make them more memorable and brand-friendly."
      },
      {
        question: "Do you track clicks on shortened URLs?",
        answer: "We provide basic click analytics including total clicks, geographic data, and referrer information to help you understand your link performance."
      },
      {
        question: "Is there a limit on how many URLs I can shorten?",
        answer: "No, there's no limit on the number of URLs you can shorten. Our service is completely free with unlimited usage."
      },
      {
        question: "Are shortened URLs safe?",
        answer: "We scan all URLs for malicious content before shortening. However, always be cautious when clicking shortened URLs from unknown sources."
      }
    ],
    
    relatedTools: [
      { name: "QR Code Generator", href: "/qr-generator", description: "Create QR codes for your URLs" },
      { name: "URL Slug Generator", href: "/url-slug-generator", description: "Generate SEO-friendly URL slugs" },
      { name: "Link Analyzer", href: "/link-analyzer", description: "Analyze and check URLs" },
      { name: "Meta Tag Previewer", href: "/meta-tag-previewer", description: "Preview social media link cards" }
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
