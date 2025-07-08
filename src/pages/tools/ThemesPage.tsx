
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ThemeManager from '@/components/tools/ThemeManager';

const ThemesPage = () => {
  return (
    <>
      <Helmet>
        <title>Theme Manager - Customize Your Experience - FYN Tools India</title>
        <meta name="description" content="Customize your SmartTools experience with different themes and manage which tools are available." />
        <meta name="keywords" content="theme manager, customize interface, dark mode, light mode, tool settings" />
      </Helmet>
      <div className="container mx-auto py-4 sm:py-8 px-2 sm:px-4">
        <ThemeManager />
      </div>
    </>
  );
};

export default ThemesPage;
