
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
    <div className="w-full px-2 sm:px-4 py-4 sm:py-8">
      <div className="mb-6 sm:mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">All Tools</h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
          Explore a variety of free online tools for various tasks.
        </p>
      </div>
      
      <div className="mb-4 sm:mb-6 max-w-2xl mx-auto">
        <Input
          type="search"
          placeholder="Search tools by name, description, or keywords..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full h-12 text-base"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredTools.map((tool) => (
          <Card key={tool.id} className="w-full flex flex-col hover:shadow-lg transition-all duration-200 hover:scale-105">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className={`p-2 sm:p-3 rounded-xl ${getBackgroundColor(tool.category)} shrink-0`}>
                  {React.createElement(tool.icon, { 
                    className: `h-6 w-6 sm:h-8 sm:w-8 ${getIconColor(tool.category)}` 
                  })}
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-sm sm:text-lg leading-tight line-clamp-2">{tool.name}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-1 truncate">{tool.category}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow pt-0 pb-3 sm:pb-4 flex flex-col">
              <CardDescription className="text-xs sm:text-sm leading-relaxed line-clamp-3 mb-3 sm:mb-4 flex-grow">
                {tool.description}
              </CardDescription>
              <Button 
                onClick={() => navigate(tool.path)} 
                className="w-full text-xs sm:text-sm px-2 py-2 h-auto min-h-[36px] whitespace-normal text-center"
                variant="outline"
              >
                <span className="break-words">Use Tool</span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <p className="text-muted-foreground text-sm sm:text-base">
            No tools found matching your search criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default ToolsPage;
