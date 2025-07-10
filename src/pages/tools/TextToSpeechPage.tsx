
import React from 'react';
import TextToSpeech from '@/components/tools/TextToSpeech';
import ToolPageLayout from '@/components/tools/ToolPageLayout';

const TextToSpeechPage = () => {
  const toolData = {
    title: "Free Text to Speech Converter Online",
    description: "Convert text to speech with natural voices. Free online text-to-speech tool with multiple languages, voice options, and speed controls. Perfect for accessibility and content creation.",
    keywords: "text to speech, TTS, voice generator, speech synthesis, text reader, audio converter",
    
    howToUse: [
      "Enter or paste your text in the input area",
      "Select your preferred language and voice",
      "Adjust speech speed and pitch if needed",
      "Click 'Play' to hear your text spoken aloud",
      "Download the audio file if the feature is available"
    ],
    
    features: [
      "Natural-sounding voice synthesis",
      "Multiple languages and voices",
      "Adjustable speech speed and pitch",
      "Support for long text passages",
      "Pause, resume, and stop controls",
      "Works on all devices and browsers"
    ],
    
    faqs: [
      {
        question: "What languages are supported?",
        answer: "We support dozens of languages including English, Spanish, French, German, Chinese, Japanese, and many more. The available voices depend on your browser's TTS capabilities."
      },
      {
        question: "Can I download the generated audio?",
        answer: "Audio download capability depends on your browser. Some browsers allow recording the audio output, while others only support real-time playback."
      },
      {
        question: "Is there a limit on text length?",
        answer: "Most browsers can handle several thousand words, but very long texts may be split into chunks. For best performance, keep individual passages under 1000 words."
      },
      {
        question: "How natural do the voices sound?",
        answer: "Voice quality varies by browser and device. Modern browsers use advanced TTS engines that produce quite natural-sounding speech, especially for common languages."
      },
      {
        question: "Can I use this for commercial purposes?",
        answer: "Yes, you can use the tool for personal and commercial purposes. However, check your browser's TTS licensing if you plan to distribute the generated audio."
      }
    ],
    
    relatedTools: [
      { name: "Speech to Text", href: "/speech-to-text" },
      { name: "Audio Converter", href: "/audio-converter" },
      { name: "Voice Recorder", href: "/voice-recorder" },
      { name: "Text Editor", href: "/text-editor" }
    ]
  };

  return (
    <ToolPageLayout {...toolData}>
      <TextToSpeech />
    </ToolPageLayout>
  );
};

export default TextToSpeechPage;
