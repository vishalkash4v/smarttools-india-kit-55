
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import { allTools } from '@/data/toolsData';

const ToolsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = useMemo(() => {
    if (!searchTerm) return allTools;
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return allTools.filter(tool =>
      tool.name.toLowerCase().includes(lowerSearchTerm) ||
      tool.description.toLowerCase().includes(lowerSearchTerm) ||
      tool.category.toLowerCase().includes(lowerSearchTerm) ||
      tool.keywords.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm]);

  const getIconColor = (category: string) => {
    switch (category) {
      case 'Text & Writing Tools':
        return 'text-blue-500';
      case 'Image Tools':
        return 'text-pink-500';
      case 'Typing Tools':
        return 'text-indigo-500';
      case 'Utility Tools':
        return 'text-green-500';
      case 'Number Tools':
        return 'text-purple-500';
      case 'Converter Tools':
        return 'text-orange-500';
      case 'Development Tools':
        return 'text-red-500';
      case 'Timer Tools':
        return 'text-yellow-500';
      case 'Network Tools':
        return 'text-cyan-500';
      case 'Video & Social Media Tools':
        return 'text-rose-500';
      default:
        return 'text-gray-500';
    }
  };

  const getBackgroundColor = (category: string) => {
    switch (category) {
      case 'Text & Writing Tools':
        return 'bg-blue-100 dark:bg-blue-900/20';
      case 'Image Tools':
        return 'bg-pink-100 dark:bg-pink-900/20';
      case 'Typing Tools':
        return 'bg-indigo-100 dark:bg-indigo-900/20';
      case 'Utility Tools':
        return 'bg-green-100 dark:bg-green-900/20';
      case 'Number Tools':
        return 'bg-purple-100 dark:bg-purple-900/20';
      case 'Converter Tools':
        return 'bg-orange-100 dark:bg-orange-900/20';
      case 'Development Tools':
        return 'bg-red-100 dark:bg-red-900/20';
      case 'Timer Tools':
        return 'bg-yellow-100 dark:bg-yellow-900/20';
      case 'Network Tools':
        return 'bg-cyan-100 dark:bg-cyan-900/20';
      case 'Video & Social Media Tools':
        return 'bg-rose-100 dark:bg-rose-900/20';
      default:
        return 'bg-gray-100 dark:bg-gray-900/20';
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlSearchTerm = params.get('search') || '';
    setSearchTerm(urlSearchTerm);
  }, [location.search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    const params = new URLSearchParams(location.search);
    if (newSearchTerm) {
      params.set('search', newSearchTerm);
    } else {
      params.delete('search');
    }
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  return (
    <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
          Professional Online Tools
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
          Discover {allTools.length}+ powerful, free online tools designed to boost your productivity. 
          From calculators to converters, we've got everything you need.
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-6 sm:mt-8 text-center">
          <div className="glass-card px-4 py-2 rounded-xl">
            <div className="text-xl sm:text-2xl font-bold text-primary">{allTools.length}+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Tools Available</div>
          </div>
          <div className="glass-card px-4 py-2 rounded-xl">
            <div className="text-xl sm:text-2xl font-bold text-primary">100%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Free to Use</div>
          </div>
          <div className="glass-card px-4 py-2 rounded-xl">
            <div className="text-xl sm:text-2xl font-bold text-primary">No</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Registration</div>
          </div>
        </div>
      </div>
      
      {/* Search Section */}
      <div className="mb-8 sm:mb-10 max-w-2xl mx-auto">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search from 80+ tools by name, category, or keywords..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full h-12 sm:h-14 text-base pl-4 pr-12 glass-card border-primary/20 focus:border-primary/40"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="h-6 w-6 text-muted-foreground">
              🔍
            </div>
          </div>
        </div>
        {searchTerm && (
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Found {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} matching "{searchTerm}"
          </p>
        )}
      </div>
      
      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {filteredTools.map((tool, index) => (
          <Card 
            key={tool.id} 
            className="group relative glass-card hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col h-full border-primary/10 hover:border-primary/30"
            style={{
              animationDelay: `${index * 50}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            {/* Category Badge */}
            <div className="absolute -top-2 -right-2 z-10">
              <div className={`px-2 py-1 text-xs font-medium rounded-full ${getBackgroundColor(tool.category)} ${getIconColor(tool.category)} shadow-sm`}>
                {tool.category.split(' ')[0]}
              </div>
            </div>
            
            <CardHeader className="pb-3 sm:pb-4">
              <div className="flex items-start gap-3 mb-2">
                <div className={`p-3 rounded-xl ${getBackgroundColor(tool.category)} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(tool.icon, { 
                    className: `h-6 w-6 sm:h-7 sm:w-7 ${getIconColor(tool.category)}` 
                  })}
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-sm sm:text-base lg:text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {tool.name}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mt-1">
                    {tool.category}
                  </p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-grow pt-0 pb-4 flex flex-col">
              <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 flex-grow opacity-80">
                {tool.description}
              </CardDescription>
              
              <Button 
                onClick={() => navigate(tool.path)} 
                className="w-full text-sm px-3 py-2 h-10 bg-gradient-to-r from-primary to-primary-hover border-0 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                variant="default"
              >
                <span className="font-medium">Use Tool →</span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results State */}
      {filteredTools.length === 0 && (
        <div className="text-center py-16 sm:py-20">
          <div className="text-6xl mb-6">🔍</div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">No tools found</h3>
          <p className="text-muted-foreground text-sm sm:text-base mb-6">
            We couldn't find any tools matching "<strong>{searchTerm}</strong>"
          </p>
          <Button 
            onClick={() => setSearchTerm('')}
            variant="outline"
            className="glass-card"
          >
            View All Tools
          </Button>
        </div>
      )}
      
      {/* Call to Action */}
      <div className="mt-16 sm:mt-20 text-center glass-card p-8 sm:p-12 rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">
          Need a Specific Tool?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Can't find what you're looking for? We're constantly adding new tools to help make your work easier and more efficient.
        </p>
        <Button 
          onClick={() => navigate('/contact')}
          className="bg-gradient-to-r from-primary to-primary-hover hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl px-8 py-3 text-lg"
        >
          Request a Tool
        </Button>
      </div>
    </div>
  );
};

export default ToolsPage;
