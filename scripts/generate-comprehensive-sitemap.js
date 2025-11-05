import fs from 'fs';
import path from 'path';
import { allTools } from '../src/data/toolsData.js';

const baseUrl = 'https://fyntools.com';

// Static pages
const staticRoutes = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/tools', priority: '0.9', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  { url: '/themes', priority: '0.6', changefreq: 'monthly' },
];

// Generate tool routes from toolsData.ts
const toolRoutes = allTools.map(tool => ({
  url: tool.path,
  priority: '0.8',
  changefreq: 'weekly'
}));

// Combine all routes
const routes = [...staticRoutes, ...toolRoutes];

const generateSitemap = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urls = routes.map(route => {
    return `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;

  return sitemap;
};

const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

User-agent: TelegramBot
Allow: /

Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /dist/
Disallow: /node_modules/
Disallow: /.git/
Disallow: /.vscode/
Disallow: /scripts/

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-tools.xml

Crawl-delay: 1`;
};

// Generate and write files
const sitemapContent = generateSitemap();
const robotsContent = generateRobotsTxt();

// Ensure public directory exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
console.log(`✅ Sitemap generated with ${routes.length} URLs`);

// Write robots.txt
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
console.log('✅ Robots.txt updated');

// Generate tools-specific sitemap
const toolsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.filter(route => route.url.includes('/') && route.url !== '/').map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(publicDir, 'sitemap-tools.xml'), toolsSitemap);
console.log('✅ Tools sitemap generated');

console.log('🎉 All SEO files generated successfully!');
