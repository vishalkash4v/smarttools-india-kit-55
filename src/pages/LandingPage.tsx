
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQ from '@/components/sections/FAQ';
import Testimonials from '@/components/sections/Testimonials';
import ToolSearch from '@/components/tools/ToolSearch';
import { allTools } from '@/data/toolsData';
import {
  Zap,
  Shield,
  Globe,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';

const LandingPage = () => {
  const featuredTools = allTools.slice(0, 6);

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'All tools run instantly in your browser with no waiting time'
    },
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Your data never leaves your browser. Complete privacy guaranteed'
    },
    {
      icon: Globe,
      title: 'Always Available',
      description: 'Access from anywhere, anytime. No downloads or installations required'
    },
    {
      icon: Users,
      title: 'User Friendly',
      description: 'Clean, intuitive interface designed for everyone to use easily'
    }
  ];

  const stats = [
    { number: '25+', label: 'Professional Tools', icon: Award },
    { number: '100K+', label: 'Happy Users', icon: Users },
    { number: '1M+', label: 'Calculations Done', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime', icon: CheckCircle }
  ];

  return (
    <>
      <Helmet>
        <title>FYN Tools Worldwide - 80+ Free Professional Online Tools | No Registration Required</title>
        <meta name="description" content="Access 80+ free professional online tools instantly. Calculators, text tools, image editors, converters, generators, and developer utilities. Secure, fast, and no registration required. Trusted by 100K+ users worldwide." />
        <meta name="keywords" content="free online tools, professional tools, calculators, text tools, image tools, developer tools, converters, generators, QR code generator, BMI calculator, JSON formatter, password generator, image resizer, text converter, online calculator, web tools, utility tools, no registration, instant results, secure tools, India tools, worldwide tools" />
        <meta name="author" content="FYN Tools Worldwide" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="application-name" content="FYN Tools Worldwide" />
        <meta name="apple-mobile-web-app-title" content="FYN Tools" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FYN Tools Worldwide - 80+ Free Professional Online Tools" />
        <meta property="og:description" content="Access 80+ free professional online tools instantly. Calculators, text tools, image editors, converters, generators, and developer utilities. Secure, fast, and no registration required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fyntools.com" />
        <meta property="og:site_name" content="FYN Tools Worldwide" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="https://fyntools.com/assets/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="FYN Tools Worldwide - Professional Online Tools" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FYN Tools Worldwide - 80+ Free Professional Online Tools" />
        <meta name="twitter:description" content="Access 80+ free professional online tools instantly. Calculators, text tools, image editors, converters, generators, and developer utilities." />
        <meta name="twitter:image" content="https://fyntools.com/assets/twitter-image.jpg" />
        <meta name="twitter:site" content="@fyntoolsworldwide" />
        <meta name="twitter:creator" content="@fyntoolsworldwide" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://fyntools.com" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://api.fyntools.com" />

        {/* Structured Data - WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "FYN Tools Worldwide",
            "alternateName": "FYN Tools",
            "description": "Professional online tools for developers, businesses, and individuals worldwide",
            "url": "https://fyntools.com",
            "logo": "https://fyntools.com/logo.png",
            "sameAs": [
              "https://twitter.com/fyntoolsworldwide",
              "https://facebook.com/fyntoolsworldwide",
              "https://linkedin.com/company/fyntoolsworldwide"
            ],
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://fyntools.com/tools?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "FYN Tools Worldwide",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fyntools.com/logo.png"
              }
            }
          })}
        </script>

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FYN Tools Worldwide",
            "url": "https://fyntools.com",
            "logo": "https://fyntools.com/logo.png",
            "description": "Provider of free professional online tools for developers, businesses, and individuals worldwide",
            "foundingDate": "2024",
            "sameAs": [
              "https://twitter.com/fyntoolsworldwide",
              "https://facebook.com/fyntoolsworldwide",
              "https://linkedin.com/company/fyntoolsworldwide"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "email": "support@fyntools.com",
              "availableLanguage": ["English"]
            }
          })}
        </script>

        {/* Structured Data - SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "FYN Tools Platform",
            "operatingSystem": "Web Browser",
            "applicationCategory": "UtilitiesApplication",
            "description": "Comprehensive platform offering 80+ free professional online tools",
            "url": "https://fyntools.com",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "provider": {
              "@type": "Organization",
              "name": "FYN Tools Worldwide",
              "url": "https://fyntools.com"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1250",
              "bestRating": "5",
              "worstRating": "1"
            },
            "featureList": [
              "80+ Professional Tools",
              "No Registration Required",
              "Instant Results",
              "100% Secure & Private",
              "Mobile Responsive",
              "Free Forever"
            ]
          })}
        </script>

        {/* Structured Data - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://fyntools.com"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full bg-gradient-to-br from-transparent via-primary/5 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-5xl mx-auto">
              <div className="mb-8 animate-bounce-in">
                <Badge variant="secondary" className="mb-4 text-sm px-4 py-2 glass-effect">
                  <Sparkles className="h-4 w-4 mr-2" />
                  80+ Professional Tools Available
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="heading-gradient">Professional</span>
                  <br />
                  <span className="text-foreground">Online Tools</span>
                  <br />
                  <span className="text-primary">for Everyone</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  Free, secure, and instant tools for developers, businesses, and individuals.
                  No registration required, works directly in your browser.
                </p>
              </div>

              {/* Search Bar */}
              <div className="mb-8 flex justify-center">
                <ToolSearch tools={allTools} className="max-w-lg w-full" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
                <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                  <Link to="/tools">
                    Explore All Tools <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 hover-lift">
                  <Link to="/about">
                    About Us
                  </Link>
                </Button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center hover-lift glass-effect border-primary/20">
                    <CardContent className="p-6">
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Professional Tools
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Handpicked tools that professionals use daily for maximum productivity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.map((tool) => (
                <Link key={tool.id} to={tool.path}>
                  <Card className="h-full hover-lift card-enhanced group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <tool.icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {tool.category.split(' ')[0]}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {tool.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {tool.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="hover-lift">
                <Link to="/tools">
                  View All 25+ Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose FYN Tools India?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built with modern technology for the best user experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover-lift card-enhanced">
                  <CardHeader className="pb-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 w-fit mx-auto mb-4 animate-float">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of professionals who trust FYN Tools India for their daily tasks
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                  <Link to="/tools">
                    Start Using Tools Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 hover-lift">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
