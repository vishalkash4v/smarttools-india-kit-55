
import { 
  FileText, Calculator, QrCode, TextCursor, Key, Code, Eraser, CopyCheck, 
  ArrowLeftRight, Search, Palette, ListChecks, Clock, Timer, User, CalendarDays, 
  Weight, Percent, DollarSign, Eye, FileCode, Table, PackagePlus, Globe, 
  TrendingUp, List, Barcode, PenTool, StickyNote, Share2, Link2, Hash, 
  Calendar as CalendarSchedule, Type, Smartphone, Keyboard, Trophy, Gamepad2, 
  Users, Image as ImageIcon, Zap, Star, Crop, RotateCcw, Camera, FileImage, 
  FileArchive, Download, Video, Copy
} from "lucide-react";

export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  keywords: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

export const allTools: Tool[] = [
  // Text & Writing Tools
  { 
    id: 'word-counter', 
    name: 'Word Counter', 
    category: 'Text & Writing Tools', 
    description: 'Count words, characters, and paragraphs in your text.',
    keywords: 'word count, character count, text analysis, writing tools',
    path: '/word-counter',
    href: '/word-counter',
    icon: FileText 
  },
  { 
    id: 'text-case-converter', 
    name: 'Text Case Converter', 
    category: 'Text & Writing Tools', 
    description: 'Convert text between uppercase, lowercase, and title case.',
    keywords: 'uppercase, lowercase, title case, text transform',
    path: '/text-case-converter',
    href: '/text-case-converter',
    icon: TextCursor
  },
  { 
    id: 'text-font-changer', 
    name: 'Text Font Changer', 
    category: 'Text & Writing Tools', 
    description: 'Transform plain text into fancy fonts and styles like bold, italic, bubble text, and more.',
    keywords: 'font changer, fancy text, bold, italic, bubble text, text styles',
    path: '/text-font-changer',
    href: '/text-font-changer',
    icon: Type
  },
  { 
    id: 'ai-text-rewriter', 
    name: 'AI Text Rewriter', 
    category: 'Text & Writing Tools', 
    description: 'Rewrite your content to make it unique and avoid AI detection.',
    keywords: 'ai rewriter, content rewrite, plagiarism, unique content',
    path: '/ai-text-rewriter',
    href: '/ai-text-rewriter',
    icon: CopyCheck
  },
  { 
    id: 'lorem-ipsum-generator', 
    name: 'Lorem Ipsum Generator', 
    category: 'Text & Writing Tools', 
    description: 'Generate placeholder text for your designs.',
    keywords: 'lorem ipsum, placeholder text, dummy text, design',
    path: '/lorem-ipsum-generator',
    href: '/lorem-ipsum-generator',
    icon: FileText
  },
  { 
    id: 'whitespace-remover', 
    name: 'Whitespace Remover', 
    category: 'Text & Writing Tools', 
    description: 'Remove extra spaces and tabs from your text.',
    keywords: 'whitespace, remove spaces, clean text, formatting',
    path: '/whitespace-remover',
    href: '/whitespace-remover',
    icon: Eraser
  },
  { 
    id: 'duplicate-line-remover', 
    name: 'Duplicate Line Remover', 
    category: 'Text & Writing Tools', 
    description: 'Remove duplicate lines from your text.',
    keywords: 'duplicate lines, remove duplicates, clean text, unique lines',
    path: '/duplicate-line-remover',
    href: '/duplicate-line-remover',
    icon: CopyCheck
  },
  { 
    id: 'text-reverser', 
    name: 'Text Reverser', 
    category: 'Text & Writing Tools', 
    description: 'Reverse text, words, or lines in your text.',
    keywords: 'reverse text, flip text, backwards text, mirror text',
    path: '/text-reverser',
    href: '/text-reverser',
    icon: ArrowLeftRight
  },
  { 
    id: 'regex-tester', 
    name: 'Regex Tester', 
    category: 'Text & Writing Tools', 
    description: 'Test regular expressions against your text.',
    keywords: 'regex, regular expression, pattern matching, test regex',
    path: '/regex-tester',
    href: '/regex-tester',
    icon: Search
  },
  { 
    id: 'base64-converter', 
    name: 'Base64 Converter', 
    category: 'Text & Writing Tools', 
    description: 'Encode and decode Base64 strings.',
    keywords: 'base64, encode, decode, converter, encryption',
    path: '/base64-converter',
    href: '/base64-converter',
    icon: Code
  },
  { 
    id: 'text-to-handwriting', 
    name: 'Text to Handwriting', 
    category: 'Text & Writing Tools', 
    description: 'Convert typed text into handwritten-style text on lined paper.',
    keywords: 'handwriting, text to handwriting, cursive, calligraphy',
    path: '/text-to-handwriting',
    href: '/text-to-handwriting',
    icon: PenTool
  },
  { 
    id: 'url-slug-generator', 
    name: 'URL Slug Generator', 
    category: 'Text & Writing Tools', 
    description: 'Convert text into SEO-friendly URL slugs.',
    keywords: 'url slug, seo friendly url, permalink, url generator',
    path: '/url-slug-generator',
    href: '/url-slug-generator',
    icon: TextCursor
  },
  { 
    id: 'notes', 
    name: 'Notes', 
    category: 'Text & Writing Tools', 
    description: 'Create, organize, and manage your personal notes with tags and colors.',
    keywords: 'notes, notepad, organize notes, personal notes, tags',
    path: '/notes',
    href: '/notes',
    icon: StickyNote
  },

  // Image Tools
  { 
    id: 'image-compressor', 
    name: 'Image Compressor', 
    category: 'Image Tools', 
    description: 'Compress images to reduce file size while maintaining quality. Convert MB images to KB for document uploads.',
    keywords: 'image compressor, reduce file size, compress photos, optimize images',
    path: '/image-compressor',
    href: '/image-compressor',
    icon: ImageIcon
  },
  { 
    id: 'logo-to-favicon', 
    name: 'Logo to Favicon Converter', 
    category: 'Image Tools', 
    description: 'Convert your logo into multiple favicon sizes for websites and apps. Generate 16x16, 32x32, 180x180 and more favicon formats.',
    keywords: 'favicon generator, logo to favicon, website icon, app icon',
    path: '/logo-to-favicon',
    href: '/logo-to-favicon',
    icon: Star
  },
  { 
    id: 'image-upscaler', 
    name: 'Image Upscaler', 
    category: 'Image Tools', 
    description: 'Upscale and enhance image quality using advanced interpolation techniques. Increase image resolution and improve clarity.',
    keywords: 'image upscaler, enhance image quality, increase resolution, upscale photos',
    path: '/image-upscaler',
    href: '/image-upscaler',
    icon: Zap
  },
  { 
    id: 'image-cropper', 
    name: 'Image Cropper & Resizer', 
    category: 'Image Tools', 
    description: 'Crop and resize images for social media platforms. Perfect dimensions for Instagram, Facebook, Twitter, LinkedIn posts and stories.',
    keywords: 'image cropper, crop photos, resize images, social media dimensions',
    path: '/image-cropper',
    href: '/image-cropper',
    icon: Crop
  },
  { 
    id: 'image-format-converter', 
    name: 'Image Format Converter', 
    category: 'Image Tools', 
    description: 'Convert images between JPG, PNG, WebP formats with quality control. Fast and secure online image converter.',
    keywords: 'image converter, jpg to png, webp converter, format converter',
    path: '/image-format-converter',
    href: '/image-format-converter',
    icon: RotateCcw
  },
  { 
    id: 'svg-optimizer', 
    name: 'SVG Optimizer', 
    category: 'Image Tools', 
    description: 'Optimize SVG files by removing unused attributes, comments, and metadata. Reduce file size while maintaining quality.',
    keywords: 'svg optimizer, optimize svg, reduce svg size, clean svg',
    path: '/svg-optimizer',
    href: '/svg-optimizer',
    icon: FileCode
  },
  { 
    id: 'image-metadata-viewer', 
    name: 'Image Metadata Viewer', 
    category: 'Image Tools', 
    description: 'View and extract EXIF data and metadata from images. See camera settings, GPS location, and technical details.',
    keywords: 'image metadata, exif data, photo details, image properties',
    path: '/image-metadata-viewer',
    href: '/image-metadata-viewer',
    icon: Camera
  },
  { 
    id: 'pdf-text-extractor', 
    name: 'PDF Text Extractor', 
    category: 'Image Tools', 
    description: 'Extract text content from PDF files. Convert PDF documents to plain text format for easy editing and copying.',
    keywords: 'pdf text extractor, pdf to text, extract pdf content, pdf converter',
    path: '/pdf-text-extractor',
    href: '/pdf-text-extractor',
    icon: FileArchive
  },
  { 
    id: 'placeholder-image-generator', 
    name: 'Placeholder Image Generator', 
    category: 'Image Tools', 
    description: 'Generate custom placeholder images with specified dimensions, colors, and text. Perfect for web design mockups.',
    keywords: 'placeholder image, dummy image, mockup image, design placeholder',
    path: '/placeholder-image-generator',
    href: '/placeholder-image-generator',
    icon: FileImage
  },
  { 
    id: 'pixelate-tool', 
    name: 'Pixelate Tool', 
    category: 'Image Tools', 
    description: 'Apply pixelation effects to specific areas of your images with customizable strength and size.',
    keywords: 'pixelate image, blur faces, privacy tool, image censoring',
    path: '/tools/pixelate-tool',
    href: '/tools/pixelate-tool',
    icon: ImageIcon
  },
  { 
    id: 'photo-annotation-tool', 
    name: 'Photo Annotation Tool', 
    category: 'Image Tools', 
    description: 'Add name, date, signature, and fingerprint to photos. Perfect for passport photos and applications.',
    keywords: 'photo annotation, add name to photo, passport photo editor, photo signature',
    path: '/tools/photo-annotation-tool',
    href: '/tools/photo-annotation-tool',
    icon: PenTool
  },
  { 
    id: 'background-remover', 
    name: 'Background Remover', 
    category: 'Image Tools', 
    description: 'Remove background from photos automatically. Create transparent backgrounds instantly.',
    keywords: 'background remover, remove background, transparent background, photo editor',
    path: '/tools/background-remover',
    href: '/tools/background-remover',
    icon: Eraser
  },
  { 
    id: 'image-resizer', 
    name: 'Image Resizer', 
    category: 'Image Tools', 
    description: 'Manually resize image dimensions and file size. Perfect for documents and web images.',
    keywords: 'image resizer, resize photos, change image size, scale images',
    path: '/tools/image-resizer',
    href: '/tools/image-resizer',
    icon: ImageIcon
  },
  { 
    id: 'auto-image-resizer', 
    name: 'Auto Image Resizer', 
    category: 'Image Tools', 
    description: 'Automatically resize images to optimal dimensions and file sizes for various use cases.',
    keywords: 'auto resize, smart resize, batch resize, optimize images',
    path: '/tools/auto-image-resizer',
    href: '/tools/auto-image-resizer',
    icon: Zap
  },
  { 
    id: 'add-name-date-photo', 
    name: 'Add Name & Date on Photo', 
    category: 'Image Tools', 
    description: 'Add name and date on passport photographs for online application forms.',
    keywords: 'add name to photo, passport photo, photo with name, photo editor',
    path: '/tools/add-name-date-photo',
    href: '/tools/add-name-date-photo',
    icon: CalendarDays
  },
  { 
    id: 'qr-scanner', 
    name: 'QR Scanner', 
    category: 'Image Tools', 
    description: 'Scan QR codes using camera or upload image to decode QR codes.',
    keywords: 'qr scanner, scan qr code, qr reader, decode qr',
    path: '/tools/qr-scanner',
    href: '/tools/qr-scanner',
    icon: QrCode
  },

  // Typing Tools
  { 
    id: 'typing-tutor', 
    name: 'Typing Tutor', 
    category: 'Typing Tools', 
    description: 'Learn touch typing with guided lessons in English and Hindi.',
    keywords: 'typing tutor, learn typing, touch typing, typing lessons',
    path: '/typing-tutor',
    href: '/typing-tutor',
    icon: Keyboard
  },
  { 
    id: 'typing-test', 
    name: 'Typing Test', 
    category: 'Typing Tools', 
    description: 'Test your typing speed and accuracy with various text samples.',
    keywords: 'typing test, typing speed, wpm test, typing accuracy',
    path: '/typing-test',
    href: '/typing-test',
    icon: Timer
  },
  { 
    id: 'typing-games', 
    name: 'Typing Games', 
    category: 'Typing Tools', 
    description: 'Fun typing games to improve your skills while playing.',
    keywords: 'typing games, fun typing, typing practice, keyboard games',
    path: '/typing-games',
    href: '/typing-games',
    icon: Gamepad2
  },
  { 
    id: 'typing-competition', 
    name: 'Typing Competition', 
    category: 'Typing Tools', 
    description: 'Compete with random players in real-time typing challenges.',
    keywords: 'typing competition, multiplayer typing, typing race, typing challenge',
    path: '/typing-competition',
    href: '/typing-competition',
    icon: Trophy
  },

  // Utility Tools
  { 
    id: 'qr-code-generator', 
    name: 'QR Code Generator', 
    category: 'Utility Tools', 
    description: 'Generate QR codes from text or URLs.',
    keywords: 'qr code generator, create qr code, qr maker, generate qr',
    path: '/qr-code-generator',
    href: '/qr-code-generator',
    icon: QrCode
  },
  { 
    id: 'password-generator', 
    name: 'Password Generator', 
    category: 'Utility Tools', 
    description: 'Generate strong and secure passwords.',
    keywords: 'password generator, strong password, secure password, random password',
    path: '/password-generator',
    href: '/password-generator',
    icon: Key
  },
  { 
    id: 'json-formatter', 
    name: 'JSON Formatter', 
    category: 'Utility Tools', 
    description: 'Format and validate JSON data.',
    keywords: 'json formatter, format json, validate json, json validator',
    path: '/json-formatter',
    href: '/json-formatter',
    icon: Code
  },
  { 
    id: 'color-picker-tool', 
    name: 'Color Picker', 
    category: 'Utility Tools', 
    description: 'Pick colors from a palette or image.',
    keywords: 'color picker, eyedropper, color selector, hex color',
    path: '/color-picker-tool',
    href: '/color-picker-tool',
    icon: Palette
  },
  { 
    id: 'todo-list', 
    name: 'To-Do List', 
    category: 'Utility Tools', 
    description: 'Create and manage your to-do list.',
    keywords: 'todo list, task manager, checklist, productivity',
    path: '/todo-list',
    href: '/todo-list',
    icon: ListChecks
  },
  { 
    id: 'list-randomizer', 
    name: 'List Randomizer', 
    category: 'Utility Tools', 
    description: 'Randomize the order of items in any list.',
    keywords: 'list randomizer, shuffle list, random order, randomize items',
    path: '/list-randomizer',
    href: '/list-randomizer',
    icon: List
  },
  { 
    id: 'barcode-generator', 
    name: 'Barcode Generator', 
    category: 'Utility Tools', 
    description: 'Generate barcodes from text for various applications.',
    keywords: 'barcode generator, create barcode, barcode maker, generate barcode',
    path: '/barcode-generator',
    href: '/barcode-generator',
    icon: Barcode
  },
  { 
    id: 'url-wrapper', 
    name: 'URL App Wrapper', 
    category: 'Utility Tools', 
    description: 'Convert regular URLs into app-opening links for mobile apps and web services.',
    keywords: 'url wrapper, app links, deep links, mobile app links',
    path: '/url-wrapper',
    href: '/url-wrapper',
    icon: Smartphone
  },

  // Number Tools
  { 
    id: 'simple-calculator', 
    name: 'Simple Calculator', 
    category: 'Number Tools', 
    description: 'Perform basic arithmetic calculations.',
    keywords: 'calculator, math, arithmetic, add subtract multiply divide',
    path: '/simple-calculator',
    href: '/simple-calculator',
    icon: Calculator
  },
  { 
    id: 'age-calculator', 
    name: 'Age Calculator', 
    category: 'Number Tools', 
    description: 'Calculate age from a birthdate.',
    keywords: 'age calculator, calculate age, birthday calculator, age from date',
    path: '/age-calculator',
    href: '/age-calculator',
    icon: User
  },
  { 
    id: 'date-difference-calculator', 
    name: 'Date Difference Calculator', 
    category: 'Number Tools', 
    description: 'Calculate the difference between two dates.',
    keywords: 'date difference, days between dates, date calculator, time difference',
    path: '/date-difference-calculator',
    href: '/date-difference-calculator',
    icon: CalendarDays
  },
  { 
    id: 'future-date-calculator', 
    name: 'Future Date Calculator', 
    category: 'Number Tools', 
    description: 'Calculate future or past dates by adding or subtracting days, months, or years.',
    keywords: 'future date, past date, add days, subtract days, date calculator',
    path: '/future-date-calculator',
    href: '/future-date-calculator',
    icon: CalendarSchedule
  },
  { 
    id: 'bmi-calculator', 
    name: 'BMI Calculator', 
    category: 'Number Tools', 
    description: 'Calculate Body Mass Index (BMI).',
    keywords: 'bmi calculator, body mass index, health calculator, weight calculator',
    path: '/bmi-calculator',
    href: '/bmi-calculator',
    icon: Weight
  },
  { 
    id: 'percentage-calculator', 
    name: 'Percentage Calculator', 
    category: 'Number Tools', 
    description: 'Calculate percentages and ratios.',
    keywords: 'percentage calculator, percent, ratio calculator, percentage of',
    path: '/percentage-calculator',
    href: '/percentage-calculator',
    icon: Percent
  },
  { 
    id: 'currency-converter', 
    name: 'Currency Converter', 
    category: 'Number Tools', 
    description: 'Convert between different currencies.',
    keywords: 'currency converter, exchange rate, money converter, forex',
    path: '/currency-converter',
    href: '/currency-converter',
    icon: DollarSign
  },
  { 
    id: 'gst-calculator', 
    name: 'GST Calculator', 
    category: 'Number Tools', 
    description: 'Calculate GST (Goods and Services Tax).',
    keywords: 'gst calculator, goods services tax, tax calculator, india tax',
    path: '/gst-calculator',
    href: '/gst-calculator',
    icon: PackagePlus
  },
  { 
    id: 'emi-calculator', 
    name: 'EMI Calculator', 
    category: 'Number Tools', 
    description: 'Calculate Equated Monthly Installment (EMI) for loans.',
    keywords: 'emi calculator, loan calculator, monthly installment, loan emi',
    path: '/emi-calculator',
    href: '/emi-calculator',
    icon: DollarSign
  },
  { 
    id: 'sip-calculator', 
    name: 'SIP & Lumpsum Calculator', 
    category: 'Number Tools', 
    description: 'Calculate returns on your SIP or Lumpsum investments.',
    keywords: 'sip calculator, investment calculator, mutual fund, lumpsum calculator',
    path: '/sip-calculator',
    href: '/sip-calculator',
    icon: TrendingUp
  },
  { 
    id: 'ppf-calculator', 
    name: 'PPF Calculator', 
    category: 'Number Tools', 
    description: 'Calculate returns on your Public Provident Fund (PPF) investments.',
    keywords: 'ppf calculator, public provident fund, ppf returns, ppf maturity',
    path: '/ppf-calculator',
    href: '/ppf-calculator',
    icon: TrendingUp
  },
  { 
    id: 'fd-calculator', 
    name: 'FD Calculator', 
    category: 'Number Tools', 
    description: 'Calculate returns on your Fixed Deposit (FD) investments.',
    keywords: 'fd calculator, fixed deposit, fd maturity, fd returns',
    path: '/fd-calculator',
    href: '/fd-calculator',
    icon: TrendingUp
  },
  { 
    id: 'income-tax-calculator', 
    name: 'Income Tax Calculator', 
    category: 'Number Tools', 
    description: 'Calculate your income tax liability.',
    keywords: 'income tax calculator, tax calculator, tax liability, india tax',
    path: '/income-tax-calculator',
    href: '/income-tax-calculator',
    icon: DollarSign
  },

  // Converter Tools
  { 
    id: 'temperature-converter', 
    name: 'Temperature Converter', 
    category: 'Converter Tools', 
    description: 'Convert between Celsius and Fahrenheit.',
    keywords: 'temperature converter, celsius fahrenheit, temperature conversion',
    path: '/temperature-converter',
    href: '/temperature-converter',
    icon: Palette
  },
  { 
    id: 'unit-converter', 
    name: 'Unit Converter', 
    category: 'Converter Tools', 
    description: 'Convert between different units of measurement.',
    keywords: 'unit converter, measurement converter, length weight volume',
    path: '/unit-converter',
    href: '/unit-converter',
    icon: Palette
  },
  { 
    id: 'enhanced-unit-converter', 
    name: 'Enhanced Unit Converter', 
    category: 'Converter Tools', 
    description: 'Convert between various units including length, weight, temperature, time, data size, and speed.',
    keywords: 'enhanced unit converter, advanced converter, all units, metric imperial',
    path: '/enhanced-unit-converter',
    href: '/enhanced-unit-converter',
    icon: ArrowLeftRight
  },

  // Developer Tools
  { 
    id: 'hash-generator', 
    name: 'Hash Generator', 
    category: 'Development Tools', 
    description: 'Generate cryptographic hashes using MD5, SHA-1, SHA-256, and SHA-512 algorithms.',
    keywords: 'hash generator, md5, sha1, sha256, cryptographic hash',
    path: '/hash-generator',
    href: '/hash-generator',
    icon: Hash
  },
  { 
    id: 'jwt-decoder', 
    name: 'JWT Token Decoder', 
    category: 'Development Tools', 
    description: 'Decode and parse JWT (JSON Web Token) headers, payloads, and signatures.',
    keywords: 'jwt decoder, json web token, jwt parser, token decoder',
    path: '/jwt-decoder',
    href: '/jwt-decoder',
    icon: Key
  },
  { 
    id: 'meta-tag-previewer', 
    name: 'Meta Tag Previewer', 
    category: 'Development Tools', 
    description: 'Preview how your website appears in search results and generate SEO meta tags.',
    keywords: 'meta tags, seo preview, open graph, twitter cards',
    path: '/meta-tag-previewer',
    href: '/meta-tag-previewer',
    icon: Eye
  },
  { 
    id: 'live-preview', 
    name: 'HTML/CSS/JS Live Preview', 
    category: 'Development Tools', 
    description: 'Live preview HTML, CSS, and JavaScript code in real-time.',
    keywords: 'live preview, html css js, code editor, web development',
    path: '/live-preview',
    href: '/live-preview',
    icon: FileCode
  },
  { 
    id: 'javascript-minifier', 
    name: 'JavaScript Minifier', 
    category: 'Development Tools', 
    description: 'Minify JavaScript code to reduce file size.',
    keywords: 'javascript minifier, js minify, compress javascript, optimize js',
    path: '/javascript-minifier',
    href: '/javascript-minifier',
    icon: Code
  },
  { 
    id: 'table-to-json-converter', 
    name: 'Table to JSON Converter', 
    category: 'Development Tools', 
    description: 'Convert HTML tables to JSON format.',
    keywords: 'table to json, html table converter, json converter, data converter',
    path: '/table-to-json-converter',
    href: '/table-to-json-converter',
    icon: Table
  },

  // Timer Tools
  { 
    id: 'stopwatch', 
    name: 'Stopwatch', 
    category: 'Timer Tools', 
    description: 'Track elapsed time with a stopwatch.',
    keywords: 'stopwatch, timer, time tracker, elapsed time',
    path: '/stopwatch',
    href: '/stopwatch',
    icon: Clock
  },
  { 
    id: 'countdown-timer', 
    name: 'Countdown Timer', 
    category: 'Timer Tools', 
    description: 'Set a timer and count down to a specific time.',
    keywords: 'countdown timer, timer, countdown, alarm timer',
    path: '/countdown-timer',
    href: '/countdown-timer',
    icon: Timer
  },
  
  // Network Tools
  { 
    id: 'ip-lookup', 
    name: "What's My IP", 
    category: 'Network Tools', 
    description: 'Find your public IP address and location information.',
    keywords: 'ip lookup, my ip address, ip location, public ip',
    path: '/ip-lookup',
    href: '/ip-lookup',
    icon: Globe 
  },

  // Video & Social Media Tools
  { 
    id: 'social-media-db-viewer', 
    name: 'Social Media DB Viewer', 
    category: 'Video & Social Media Tools', 
    description: 'View public profile information from Instagram and Facebook accounts.',
    keywords: 'social media viewer, instagram viewer, facebook viewer, profile viewer',
    path: '/social-media-db-viewer',
    href: '/social-media-db-viewer',
    icon: Globe
  },
  { 
    id: 'social-media-downloader', 
    name: 'Instagram & Facebook Downloader', 
    category: 'Video & Social Media Tools', 
    description: 'Download reels, posts, stories, and highlights from Instagram and Facebook.',
    keywords: 'instagram downloader, facebook downloader, download reels, download stories',
    path: '/social-media-downloader',
    href: '/social-media-downloader',
    icon: Download
  },
  { 
    id: 'youtube-downloader', 
    name: 'YouTube Video & MP3 Downloader', 
    category: 'Video & Social Media Tools', 
    description: 'Download YouTube videos in various qualities or extract audio as MP3.',
    keywords: 'youtube downloader, download youtube video, youtube to mp3, video downloader',
    path: '/youtube-downloader',
    href: '/youtube-downloader',
    icon: Video
  },
];
