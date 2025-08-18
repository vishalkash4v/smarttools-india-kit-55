import React from 'react';
import { Helmet } from 'react-helmet-async';
import ToolWrapper from '@/components/layout/ToolWrapper';
import InvoiceGenerator from '@/components/tools/InvoiceGenerator';

const InvoiceGeneratorPage = () => {
  return (
    <>
      <Helmet>
        <title>Invoice Generator - Create Professional Invoices Online | Free Tool</title>
        <meta name="description" content="Create professional invoices online with auto-save, client management, and PDF export. Generate invoices quickly with stored company info and product details." />
        <meta name="keywords" content="invoice generator, create invoice, online invoice, invoice maker, business invoice, PDF invoice, invoice template" />
        <link rel="canonical" href="/invoice-generator" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Invoice Generator - Create Professional Invoices Online" />
        <meta property="og:description" content="Create professional invoices online with auto-save, client management, and PDF export. Generate invoices quickly with stored company info and product details." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/invoice-generator" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Invoice Generator - Create Professional Invoices Online" />
        <meta name="twitter:description" content="Create professional invoices online with auto-save, client management, and PDF export. Generate invoices quickly with stored company info and product details." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Invoice Generator",
            "description": "Create professional invoices online with auto-save, client management, and PDF export. Generate invoices quickly with stored company info and product details.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Any",
            "permissions": "browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>
      
      <ToolWrapper
        title="Invoice Generator"
        description="Create professional invoices with auto-save features. Your business info, client details, and product catalog are automatically saved locally for quick invoice generation."
      >
        <InvoiceGenerator />
      </ToolWrapper>
    </>
  );
};

export default InvoiceGeneratorPage;