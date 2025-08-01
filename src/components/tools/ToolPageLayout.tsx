import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Share2, Star, Users, Shield, Clock, Zap, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ToolPageLayoutProps {
  title: string;
  description: string;
  keywords?: string;
  toolInterface?: React.ReactNode;
  howToUse: string[];
  features: string[];
  faqs: { question: string; answer: string }[];
  relatedTools: { name: string; href: string; description?: string }[];
  category?: string;
  rating?: number;
  userCount?: string;
  children?: React.ReactNode;
}

const ToolPageLayout: React.FC<ToolPageLayoutProps> = ({
  title,
  description,
  keywords,
  toolInterface,
  howToUse,
  features,
  faqs,
  relatedTools,
  category = "Online Tools",
  rating = 4.8,
  userCount = "10,000+",
  children
}) => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this amazing ${title} tool!`;

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
        <title>{title} - FYN Tools India</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
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

        {/* Quick Navigation */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 justify-center">
              <Compass className="h-5 w-5 text-primary" />
              Quick Navigation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="#tool"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 hover:bg-primary/20 hover:scale-105 transition-all duration-200 text-primary font-medium"
              >
                <Zap className="h-4 w-4" />
                Use Tool
              </a>
              <a
                href="#how-to-use"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 hover:bg-primary/20 hover:scale-105 transition-all duration-200 text-primary font-medium"
              >
                <Clock className="h-4 w-4" />
                How to Use
              </a>
              <a
                href="#features"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 hover:bg-primary/20 hover:scale-105 transition-all duration-200 text-primary font-medium"
              >
                <Star className="h-4 w-4" />
                Features
              </a>
              <a
                href="#faq"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 hover:bg-primary/20 hover:scale-105 transition-all duration-200 text-primary font-medium"
              >
                <Shield className="h-4 w-4" />
                FAQ
              </a>
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
                        <Link to={tool.href}>Try Now</Link>
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

export default ToolPageLayout;