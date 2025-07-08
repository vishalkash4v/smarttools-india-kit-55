
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Menu, X, Zap, Sparkles, Search } from 'lucide-react';
import { useState } from 'react';
import ToolSearch from '@/components/tools/ToolSearch';
import { allTools } from '@/data/toolsData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Tools', href: '/tools' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="glass-card border-b border-white/10 dark:border-white/5 sticky top-0 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300 shrink-0"
          >
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="SmartTools Logo" 
                className="w-10 h-10 rounded-xl object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallbackDiv = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallbackDiv) {
                    fallbackDiv.style.display = 'flex';
                  }
                }}
              />
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg animate-glow-pulse" style={{ display: 'none' }}>
                <Zap className="h-6 w-6 text-white" />
              </div>
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-primary animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">SmartTools</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Your Digital Toolkit</span>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <ToolSearch tools={allTools} className="w-full" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 interactive"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button 
              variant="glass" 
              size="sm" 
              className="hidden sm:flex whitespace-nowrap"
              asChild
            >
              <Link to="/tools">
                Get Started
              </Link>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 dark:border-white/5 py-4 animate-fade-in">
            {/* Mobile Search Bar */}
            <div className="mb-4 px-2">
              <ToolSearch tools={allTools} className="w-full" onResultClick={handleMobileMenuClose} />
            </div>
            
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <Link to="/tools" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
