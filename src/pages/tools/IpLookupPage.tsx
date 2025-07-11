
import React from 'react';
import IpLookup from '@/components/tools/IpLookup';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const IpLookupPage = () => {
  const toolData = {
    title: "Free IP Address Lookup Tool",
    description: "Look up IP address information including location, ISP, organization, and more. Get detailed geolocation data and network information for any IP address.",
    category: "Network Tools",
    
    howToUse: [
      "Enter any IP address in the input field",
      "Click 'Lookup' to retrieve IP information",
      "View detailed location and network data",
      "See ISP, organization, and hosting information",
      "Check your own IP address automatically"
    ],
    
    features: [
      "Detailed IP geolocation information",
      "ISP and organization details",
      "Country, region, and city data",
      "Time zone and coordinates",
      "IPv4 and IPv6 support",
      "Your current IP detection"
    ],
    
    faqs: [
      {
        question: "How accurate is IP geolocation?",
        answer: "IP geolocation accuracy varies. City-level accuracy is typically 55-80%, while country-level accuracy is usually above 95%. Accuracy depends on the IP database and type of connection."
      },
      {
        question: "Can I lookup IPv6 addresses?",
        answer: "Yes, our tool supports both IPv4 and IPv6 address lookups with comprehensive information for both formats."
      },
      {
        question: "What information can I get from an IP lookup?",
        answer: "You can get location (country, region, city), ISP name, organization, time zone, coordinates, and sometimes additional network information."
      },
      {
        question: "Is IP lookup legal and safe?",
        answer: "Yes, IP lookup using public databases is legal and safe. We only show publicly available information that doesn't violate privacy."
      }
    ],
    
    relatedTools: [
      { name: "URL Shortener", href: "/url-shortener", description: "Create short URLs" },
      { name: "QR Code Generator", href: "/qr-generator", description: "Generate QR codes" },
      { name: "Password Generator", href: "/password-generator", description: "Generate secure passwords" },
      { name: "Hash Generator", href: "/hash-generator", description: "Generate hash values" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<IpLookup />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default IpLookupPage;
