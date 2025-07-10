
import React from 'react';
import UrlSlugGenerator from '@/components/tools/UrlSlugGenerator';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const UrlSlugGeneratorPage = () => {
  const toolData = {
    title: "Free URL Slug Generator Online",
    description: "Generate SEO-friendly URL slugs from any text. Create clean, readable URLs for better search engine optimization. Free online URL slug generator tool with instant results.",
    category: "SEO Tools",
    
    howToUse: [
      "Enter your title or text in the input field",
      "The tool automatically generates a URL-friendly slug",
      "Copy the generated slug using the copy button",
      "Use the slug in your website URLs or CMS",
      "Customize as needed for your specific requirements"
    ],
    
    features: [
      "Instantly converts text to URL-friendly slugs",
      "Removes special characters and spaces",
      "Converts to lowercase for consistency",
      "SEO-optimized slug generation",
      "One-click copy to clipboard",
      "Real-time slug preview"
    ],
    
    faqs: [
      {
        question: "What is a URL slug?",
        answer: "A URL slug is the part of a URL that identifies a particular page on a website in an easy-to-read form. It's typically derived from the page title and made URL-friendly by converting to lowercase, replacing spaces with hyphens, and removing special characters."
      },
      {
        question: "Why are URL slugs important for SEO?",
        answer: "URL slugs help search engines understand your page content and improve user experience. Clean, descriptive slugs can improve click-through rates and search rankings by making URLs more readable and trustworthy."
      },
      {
        question: "What characters are removed from slugs?",
        answer: "Special characters like @, #, %, &, and others are removed. Spaces are replaced with hyphens, and the text is converted to lowercase for consistency and URL compatibility."
      },
      {
        question: "Can I customize the generated slug?",
        answer: "Yes, after generation you can manually edit the slug to better match your needs while maintaining URL-friendly formatting."
      },
      {
        question: "Are there any length limits for URL slugs?",
        answer: "While there's no strict technical limit, it's recommended to keep slugs under 60 characters for better SEO and user experience. Our tool works with any length input."
      }
    ],
    
    relatedTools: [
      { name: "SEO Meta Tags Generator", href: "/seo-meta-tags-generator", description: "Generate meta tags for SEO" },
      { name: "Keyword Density Checker", href: "/keyword-density-checker", description: "Check keyword density" },
      { name: "URL Shortener", href: "/url-shortener", description: "Create short URLs" },
      { name: "Text Case Converter", href: "/text-case-converter", description: "Convert text case" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<UrlSlugGenerator />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default UrlSlugGeneratorPage;
