
require('babel-register')();
const fs = require('fs');
const path = require('path');

// All tool routes from the application
const toolRoutes = [
  // Text & Writing Tools
  '/word-counter',
  '/text-case-converter',
  '/base64-converter',
  '/lorem-ipsum-generator',
  '/whitespace-remover',
  '/duplicate-line-remover',
  '/text-reverser',
  '/regex-tester',
  '/text-font-changer',
  '/ai-text-rewriter',
  '/text-to-handwriting',
  '/url-slug-generator',
  '/notes',

  // Image Tools
  '/image-compressor',
  '/logo-to-favicon',
  '/image-upscaler',
  '/image-cropper',
  '/image-format-converter',
  '/svg-optimizer',
  '/image-metadata-viewer',
  '/pdf-text-extractor',
  '/placeholder-image-generator',
  '/pixelate-tool',
  '/tools/pixelate-tool',
  '/photo-annotation-tool',
  '/tools/photo-annotation-tool',
  '/tools/background-remover',
  '/tools/image-resizer',
  '/tools/auto-image-resizer',
  '/tools/add-name-date-photo',
  '/tools/qr-scanner',

  // Typing Tools
  '/typing-tutor',
  '/typing-test',
  '/typing-games',
  '/typing-competition',

  // Utility Tools
  '/qr-code-generator',
  '/password-generator',
  '/json-formatter',
  '/color-picker-tool',
  '/todo-list',
  '/list-randomizer',
  '/barcode-generator',
  '/url-wrapper',

  // Number Tools
  '/simple-calculator',
  '/age-calculator',
  '/date-difference-calculator',
  '/future-date-calculator',
  '/bmi-calculator',
  '/percentage-calculator',
  '/currency-converter',
  '/gst-calculator',
  '/emi-calculator',
  '/sip-calculator',
  '/ppf-calculator',
  '/fd-calculator',
  '/income-tax-calculator',

  // Converter Tools
  '/temperature-converter',
  '/unit-converter',
  '/enhanced-unit-converter',

  // Developer Tools
  '/hash-generator',
  '/jwt-decoder',
  '/meta-tag-previewer',
  '/live-preview',
  '/javascript-minifier',
  '/table-to-json-converter',

  // Timer Tools
  '/stopwatch',
  '/countdown-timer',

  // Network Tools
  '/ip-lookup',

  // Video & Social Media Tools
  '/social-media-db-viewer',
  '/social-media-downloader',
  '/youtube-downloader',

  // Main Pages
  '/',
  '/about',
  '/contact',
  '/tools',
  '/themes'
];

const baseUrl = 'https://fyntools.com';
const currentDate = new Date().toISOString().split('T')[0];

// Generate sitemap XML
const generateSitemap = () => {
  const urls = toolRoutes.map(route => {
    const priority = route === '/' ? '1.0' : route === '/tools' ? '0.9' : '0.8';
    const changefreq = route === '/' ? 'daily' : 'weekly';
    
    return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};

// Write sitemap to public directory
const sitemapContent = generateSitemap();
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);

console.log(`Sitemap generated with ${toolRoutes.length} URLs`);
console.log('Sitemap saved to public/sitemap.xml');
