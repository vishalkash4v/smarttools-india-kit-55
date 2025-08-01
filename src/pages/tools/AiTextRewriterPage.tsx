
import React from 'react';
import AiTextRewriter from '@/components/tools/AiTextRewriter';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const AiTextRewriterPage = () => {
  const toolData = {
    title: "AI Text Rewriter - Paraphrase & Rewrite Content",
    description: "Rewrite and paraphrase text using AI technology. Transform your content while maintaining meaning. Free online AI text rewriter for better writing.",
    category: "AI Tools",
    keywords:"AI text rewriter, paraphrase tool, AI paraphrasing tool, text rewriter online, rewrite content, AI content rewriter, free paraphrasing tool, AI rewrite tool, content paraphraser, text rephraser",
    
    howToUse: [
      "Paste your original text in the input area",
      "Select the rewriting style or tone you prefer",
      "Click 'Rewrite Text' to generate new versions",
      "Review the AI-generated alternatives",
      "Copy the rewritten text that best fits your needs"
    ],
    
    features: [
      "AI-powered text rewriting and paraphrasing",
      "Multiple rewriting styles and tones",
      "Maintains original meaning while changing structure",
      "Plagiarism-free content generation",
      "Supports various content types",
      "Real-time text transformation"
    ],
    
    faqs: [
      {
        question: "How does AI text rewriting work?",
        answer: "Our AI analyzes your text and generates alternative versions using natural language processing, maintaining the original meaning while changing sentence structure and word choices."
      },
      {
        question: "Is the rewritten content plagiarism-free?",
        answer: "Yes, the AI generates original content by restructuring sentences and using synonyms, creating unique text that maintains your original ideas."
      },
      {
        question: "Can I choose different writing styles?",
        answer: "Yes, you can select from various styles like formal, casual, academic, or creative to match your specific needs and audience."
      },
      {
        question: "What types of content can I rewrite?",
        answer: "You can rewrite articles, essays, emails, social media posts, academic papers, and any other text content you need to transform."
      }
    ],
    
    relatedTools: [
      { name: "Grammar Checker", href: "/grammar-checker", description: "Check and fix grammar errors" },
      { name: "Plagiarism Checker", href: "/plagiarism-checker", description: "Detect copied content" },
      { name: "Word Counter", href: "/word-counter", description: "Count words and characters" },
      { name: "Text Summarizer", href: "/text-summarizer", description: "Summarize long text" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      keywords={toolData.keywords}
      category={toolData.category}
      toolInterface={<AiTextRewriter />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
    />
  );
};

export default AiTextRewriterPage;
