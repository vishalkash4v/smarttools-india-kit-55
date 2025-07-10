
import React from 'react';
import YoutubeDownloader from '@/components/tools/YoutubeDownloader';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const YoutubeDownloaderPage = () => {
  const toolData = {
    title: "YouTube Video Information & Download Guide",
    description: "Get information about YouTube videos and learn about legal download options. Understand YouTube's terms of service and explore legitimate alternatives for offline viewing.",
    category: "Video Tools",
    
    howToUse: [
      "Paste a YouTube video URL in the input field",
      "Click 'Analyze' to get video information",
      "View video details and thumbnail preview",
      "Learn about legal download alternatives",
      "Consider YouTube Premium for official offline viewing"
    ],
    
    features: [
      "Video information extraction",
      "Thumbnail preview display",
      "Legal alternatives guidance",
      "Terms of service awareness",
      "YouTube Premium recommendations",
      "Educational content about copyright"
    ],
    
    faqs: [
      {
        question: "Is it legal to download YouTube videos?",
        answer: "Downloading YouTube videos may violate YouTube's Terms of Service unless you have explicit permission from the content creator or it's your own content. We recommend using YouTube Premium for official offline viewing."
      },
      {
        question: "What are the legal alternatives to downloading?",
        answer: "YouTube Premium offers official offline downloads, YouTube Music for audio content, and many creators provide direct download links for their content. Always respect copyright and terms of service."
      },
      {
        question: "Can I download videos I created?",
        answer: "Yes, you can download your own YouTube videos through YouTube Studio or by using legitimate tools, as you own the copyright to your content."
      },
      {
        question: "What about Creative Commons videos?",
        answer: "Videos with Creative Commons licenses can often be downloaded legally, but you should check the specific license terms and give proper attribution to the creator."
      },
      {
        question: "Are there desktop tools for downloading?",
        answer: "Yes, there are desktop applications like yt-dlp and others, but they should only be used for content you own or have permission to download, respecting copyright laws."
      }
    ],
    
    relatedTools: [
      { name: "Video Converter", href: "/video-converter", description: "Convert video formats" },
      { name: "Audio Extractor", href: "/audio-extractor", description: "Extract audio from videos" },
      { name: "Video Compressor", href: "/video-compressor", description: "Compress video files" },
      { name: "Thumbnail Generator", href: "/thumbnail-generator", description: "Create video thumbnails" }
    ]
  };

  return (
    <ToolPageLayout
      title={toolData.title}
      description={toolData.description}
      toolInterface={<YoutubeDownloader />}
      howToUse={toolData.howToUse}
      features={toolData.features}
      faqs={toolData.faqs}
      relatedTools={toolData.relatedTools}
      category={toolData.category}
    />
  );
};

export default YoutubeDownloaderPage;
