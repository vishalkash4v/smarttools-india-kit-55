
export interface SchemaConfig {
  toolName: string;
  toolUrl: string;
  description: string;
  shortIntro?: string;
  category?: string;
  keywords?: string[] | string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  testimonials?: Array<{
    name: string;
    rating: number;
    text: string;
    title?: string;
  }>;
  features?: string[];
  howToUse?: string[];
  relatedTools?: Array<{
    name: string;
    href: string;
    description?: string;
  }>;
}

export const generateSoftwareApplicationSchema = (config: SchemaConfig) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": config.toolName,
    "operatingSystem": "Web Browser",
    "applicationCategory": "UtilitiesApplication", 
    "description": config.description,
    "url": config.toolUrl,
    "screenshot": "https://fyntools.com/assets/tool-screenshots/image-resizer.jpg",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "Organization",
      "name": "FYN Tools Worldwide",
      "url": "https://fyntools.com/",
      "logo": "https://fyntools.com/logo.png"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "featureList": config.features || [],
    "keywords": Array.isArray(config.keywords) ? config.keywords.join(", ") : config.keywords || "",
    "category": config.category || "Online Tool"
  };
};

export const generateWebApplicationSchema = (config: SchemaConfig) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": config.toolName,
    "description": config.description,
    "url": config.toolUrl,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "FYN Tools Worldwide",
      "url": "https://fyntools.com/"
    },
    "featureList": config.features || []
  };
};

export const generateHowToSchema = (config: SchemaConfig) => {
  if (!config.howToUse || config.howToUse.length === 0) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to use ${config.toolName}`,
    "description": config.description,
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": config.howToUse.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": `Step ${index + 1}`,
      "text": step
    }))
  };
};

export const generateItemListSchema = (config: SchemaConfig) => {
  if (!config.relatedTools || config.relatedTools.length === 0) return null;
  
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Related Tools",
    "description": "Related tools that complement this functionality",
    "numberOfItems": config.relatedTools.length,
    "itemListElement": config.relatedTools.map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": tool.name,
      "url": `https://fyntools.com${tool.href}`,
      "description": tool.description
    }))
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

export const generateTestimonialsSchema = (testimonials: Array<{ name: string; rating: number; text: string; title?: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Online Tool",
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": testimonial.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating,
        "bestRating": 5
      },
      "reviewBody": testimonial.text
    }))
  };
};

export const generateToolSchemas = (config: SchemaConfig) => {
  const schemas: any[] = [
    generateSoftwareApplicationSchema(config),
    generateWebApplicationSchema(config)
  ];

  // Add HowTo schema if steps are provided
  const howToSchema = generateHowToSchema(config);
  if (howToSchema) {
    schemas.push(howToSchema);
  }

  // Add ItemList schema for related tools
  const itemListSchema = generateItemListSchema(config);
  if (itemListSchema) {
    schemas.push(itemListSchema);
  }

  if (config.faqs && config.faqs.length > 0) {
    schemas.push(generateFAQPageSchema(config.faqs));
  }

  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(config.breadcrumbs));
  }

  if (config.testimonials && config.testimonials.length > 0) {
    schemas.push(generateTestimonialsSchema(config.testimonials));
  }

  return schemas;
};
