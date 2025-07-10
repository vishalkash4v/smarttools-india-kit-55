
import React from 'react';
import DiscordFormatter from '@/components/tools/DiscordFormatter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const DiscordFormatterPage = () => {
  const toolData = {
    title: "Discord Text Formatter - Markdown & Styling Tool",
    description: "Format Discord messages with bold, italic, underline, strikethrough, code blocks, and more. Free Discord text formatting tool with live preview.",
    category: "Text Tools",
    
    howToUse: [
      "Type your message in the input area",
      "Use formatting buttons or type markdown syntax",
      "Preview your formatted message in real-time",
      "Copy the formatted text to your clipboard",
      "Paste into Discord to see the styling"
    ],
    
    features: [
      "Bold, italic, underline, and strikethrough text",
      "Code blocks and inline code formatting",
      "Spoiler text and colored text options",
      "Live preview of Discord formatting",
      "Copy formatted text to clipboard",
      "Support for all Discord markdown syntax"
    ],
    
    faqs: [
      {
        question: "What formatting options are available for Discord?",
        answer: "Discord supports bold (**text**), italic (*text*), underline (__text__), strikethrough (~~text~~), code (`code`), code blocks (```code```), and spoiler text (||text||)."
      },
      {
        question: "Can I preview how my text will look in Discord?",
        answer: "Yes, our tool provides a live preview that shows exactly how your formatted text will appear in Discord messages."
      },
      {
        question: "Does this work with Discord bots and webhooks?",
        answer: "Yes, the formatting syntax works the same way in regular messages, bot messages, and webhook messages in Discord."
      },
      {
        question: "Can I combine multiple formatting styles?",
        answer: "Yes, you can combine different formatting styles like bold italic (***text***) or bold code (**`text`**) for more complex styling."
      }
    ],
    
    relatedTools: [
      { name: "Markdown Editor", href: "/markdown-editor", description: "Edit and preview Markdown" },
      { name: "Text Case Converter", href: "/text-case-converter", description: "Convert text case" },
      { name: "HTML Formatter", href: "/html-formatter", description: "Format HTML code" },
      { name: "Text Reverser", href: "/text-reverser", description: "Reverse text strings" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<DiscordFormatter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default DiscordFormatterPage;
