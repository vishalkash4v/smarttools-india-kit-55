
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Share2, Star, Users, Shield, Clock, Zap, Home, ChevronRight } from 'lucide-react';
import { generateToolSchemas, type SchemaConfig } from '@/utils/schemaUtils';

interface EnhancedToolPageLayoutProps {
  title: string;
  description: string;
  shortIntro: string;
  toolInterface?: React.ReactNode;
  howToUse: string[];
  features: string[];
  faqs: { question: string; answer: string }[];
  relatedTools: { name: string; href: string; description?: string }[];
  category?: string;
  rating?: number;
  userCount?: string;
  children?: React.ReactNode;
  canonicalUrl?: string;
  keywords?: string;
  testimonials?: { name: string; rating: number; text: string; title?: string }[];
}

const EnhancedToolPageLayout: React.FC<EnhancedToolPageLayoutProps> = ({
  title,
  description,
  shortIntro,
  toolInterface,
  howToUse,
  features,
  faqs,
  relatedTools,
  category = "Online Tools",
  rating = 4.8,
  userCount = "10,000+",
  children,
  canonicalUrl,
  keywords,
  testimonials
}) => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this amazing ${title} tool!`;

  // Generate schema markup
  const schemaConfig: SchemaConfig = {
    toolName: title,
    toolUrl: canonicalUrl || shareUrl,
    description: description,
    faqs: faqs,
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: title, url: canonicalUrl || shareUrl }
    ],
    testimonials: testimonials
  };

  const schemas = generateToolSchemas(schemaConfig);

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    };
    
    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      <Helmet>
        <title>{title} - Free Online Tool | FYN Tools Worldwide</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Schema Markup */}
        {schemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl || shareUrl} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Home className="h-4 w-4" />
          <a href="/" className="hover:text-primary">Home</a>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{title}</span>
        </nav>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="mb-4">
              {category}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </h1>
          
          {/* Short Introduction */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
            {shortIntro}
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            {description}
          </p>
          
          {/* Rating and User Count */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{rating}/5</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold">{userCount} users</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Quick Navigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <a href="#tool" className="text-primary hover:underline">🔧 Use Tool</a>
              <a href="#how-to-use" className="text-primary hover:underline">📋 How to Use</a>
              <a href="#features" className="text-primary hover:underline">⭐ Features</a>
              <a href="#faq" className="text-primary hover:underline">❓ FAQ</a>
            </div>
          </CardContent>
        </Card>

        {/* Tool Interface */}
        <section id="tool" className="mb-12">
          <Card className="shadow-2xl border-primary/20">
            <CardHeader className="text-center border-b">
              <CardTitle className="text-2xl flex items-center justify-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                Start Using the Tool
              </CardTitle>
              <CardDescription className="text-lg">
                Free, fast, and secure - no registration required
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {toolInterface || children}
            </CardContent>
          </Card>
        </section>

        {/* How to Use */}
        <section id="how-to-use" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                How to Use This Tool
              </CardTitle>
              <CardDescription>
                Follow these simple steps to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {howToUse.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section id="features" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                Key Features & Benefits
              </CardTitle>
              <CardDescription>
                Why choose our tool for your needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <CardDescription>
                Common questions about this tool
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                    {index < faqs.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <section className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">What Users Say</CardTitle>
                <CardDescription>
                  Real feedback from our users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">"{testimonial.text}"</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{testimonial.name}</span>
                        {testimonial.title && (
                          <span className="text-xs text-muted-foreground">• {testimonial.title}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Related Tools */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Related Tools</CardTitle>
              <CardDescription>
                Explore more tools that might interest you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedTools.map((tool, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{tool.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                      <Button asChild size="sm" className="w-full">
                        <a href={tool.href}>Try Now</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Social Sharing */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-3">
              <Share2 className="h-5 w-5" />
              Share This Tool
            </CardTitle>
            <CardDescription>
              Help others discover this useful tool
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleShare('twitter')}
                className="flex items-center gap-2"
              >
                🐦 Twitter
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleShare('linkedin')}
                className="flex items-center gap-2"
              >
                💼 LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-2"
              >
                📘 Facebook
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnhancedToolPageLayout;
