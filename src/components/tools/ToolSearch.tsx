
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tool } from '@/data/toolsData';

interface ToolSearchProps {
  tools: Tool[];
  className?: string;
}

const ToolSearch: React.FC<ToolSearchProps> = ({ tools, className }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredTools = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    const query = searchTerm.toLowerCase();
    return tools.filter(tool => 
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query) ||
      tool.keywords.toLowerCase().includes(query)
    ).slice(0, 8); // Increased to 8 results
  }, [searchTerm, tools]);

  const handleClear = () => {
    setSearchTerm('');
    setIsOpen(false);
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search tools..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-10 h-10 md:h-12 text-sm md:text-base border-2 rounded-xl"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && searchTerm && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto shadow-xl border-2">
            <CardContent className="p-0">
              {filteredTools.length > 0 ? (
                <div className="space-y-1">
                  {filteredTools.map((tool) => (
                    <Link
                      key={tool.id}
                      to={tool.path}
                      onClick={() => setIsOpen(false)}
                      className="block p-3 md:p-4 hover:bg-muted/50 transition-colors border-b border-border/50 last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <tool.icon className="h-5 w-5 text-primary shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm truncate">{tool.name}</div>
                          <div className="text-xs text-muted-foreground truncate">{tool.description}</div>
                        </div>
                        <Badge variant="secondary" className="text-xs shrink-0">
                          {tool.category.split(' ')[0]}
                        </Badge>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-muted-foreground">
                  No tools found for "{searchTerm}"
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default ToolSearch;
