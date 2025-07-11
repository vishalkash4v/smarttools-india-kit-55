
export interface SchemaConfig {
  toolName: string;
  toolUrl: string;
  description: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

export const generateSoftwareApplicationSchema = (config: SchemaConfig) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": config.toolName,
    "operatingSystem": "All",
    "applicationCategory": "UtilitiesApplication", 
    "description": config.description,
    "url": config.toolUrl,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "FYN Tools Worldwide",
      "url": "https://fyntools.com/"
    }
  };
};

export const generateFAQPageSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.url
    }))
  };
};

export const generateToolSchemas = (config: SchemaConfig) => {
  const schemas = [
    generateSoftwareApplicationSchema(config)
  ];

  if (config.faqs && config.faqs.length > 0) {
    schemas.push(generateFAQPageSchema(config.faqs));
  }

  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(config.breadcrumbs));
  }

  return schemas;
};
