
import React from 'react';
import MetaTagPreviewer from '@/components/tools/MetaTagPreviewer';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const MetaTagPreviewerPage = () => {
  const toolData = {
    title: "Free Meta Tag Previewer & Generator",
    description: "Preview and generate meta tags for social media sharing. See how your website will appear on Facebook, Twitter, LinkedIn, and other platforms. Optimize your social media presence.",
    category: "SEO Tools",
    
    howToUse: [
      "Enter your website URL or page details",
      "Fill in title, description, and image information",
      "Preview how it appears on different social platforms",
      "Copy the generated meta tags to your clipboard",
      "Add the meta tags to your website's HTML head section"
    ],
    
    features: [
      "Preview for Facebook, Twitter, LinkedIn",
      "Open Graph meta tag generation",
      "Twitter Card meta tag creation",
      "Real-time preview updates",
      "Meta tag validation and optimization",
      "Copy-ready HTML meta tags"
    ],
    
    faqs: [
      {
        question: "What are meta tags and why are they important?",
        answer: "Meta tags provide information about your webpage to search engines and social media platforms. They control how your content appears when shared, improving click-through rates and SEO."
      },
      {
        question: "What's the difference between Open Graph and Twitter Cards?",
        answer: "Open Graph is used by Facebook, LinkedIn, and other platforms, while Twitter Cards are specific to Twitter. Both control how your content appears when shared."
      },
      {
        question: "What image size should I use for social sharing?",
        answer: "Recommended sizes are 1200x630 pixels for Facebook/Open Graph and 1200x600 pixels for Twitter Cards. Images should be under 1MB for optimal loading."
      },
      {
        question: "How do I add meta tags to my website?",
        answer: "Copy the generated meta tags and paste them in the <head> section of your HTML document, before the closing </head> tag."
      }
    ],
    
    relatedTools: [
      { name: "URL Slug Generator", href: "/url-slug-generator", description: "Generate SEO-friendly URLs" },
      { name: "QR Code Generator", href: "/qr-generator", description: "Create QR codes for URLs" },
      { name: "HTML Formatter", href: "/html-formatter", description: "Format HTML code" },
      { name: "JSON-LD Generator", href: "/json-ld-generator", description: "Generate structured data" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<MetaTagPreviewer />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default MetaTagPreviewerPage;
