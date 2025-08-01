
import React from 'react';
import EnhancedToolPageLayout from '@/components/tools/EnhancedToolPageLayout';
import PasswordGenerator from '@/components/tools/PasswordGenerator';

const PasswordGeneratorPage: React.FC = () => {
  const howToUse = [
    "Select your desired password length using the slider (8-50 characters)",
    "Choose which character types to include: uppercase, lowercase, numbers, symbols",
    "Click 'Generate Password' to create a secure password",
    "Copy the generated password and use it for your accounts"
  ];

  const features = [
    "Customizable password length (8-50 characters)",
    "Multiple character type options",
    "Instant password generation",
    "Copy to clipboard functionality",
    "Secure random generation",
    "No passwords stored or logged"
  ];

  const faqs = [
    {
      question: "How secure are the generated passwords?",
      answer: "Our password generator uses cryptographically secure random number generation to create passwords. The passwords are generated locally in your browser and are not stored anywhere."
    },
    {
      question: "What makes a strong password?",
      answer: "A strong password should be at least 12 characters long, contain a mix of uppercase and lowercase letters, numbers, and special characters, and avoid common words or patterns."
    },
    {
      question: "Should I use different passwords for different accounts?",
      answer: "Yes, absolutely! Using unique passwords for each account ensures that if one password is compromised, your other accounts remain secure."
    },
    {
      question: "How often should I change my passwords?",
      answer: "It's recommended to change passwords every 3-6 months, or immediately if you suspect a security breach. Use a password manager to keep track of multiple passwords."
    }
  ];

  const relatedTools = [
    {
      name: "Username Generator",
      href: "/tools/username-generator",
      description: "Generate unique usernames for your accounts"
    },
    {
      name: "Hash Generator",
      href: "/tools/hash-generator", 
      description: "Generate secure hashes for data integrity"
    },
    {
      name: "Random Number Generator",
      href: "/tools/random-number-generator",
      description: "Generate random numbers for various purposes"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Best password generator I've used. Simple, secure, and reliable!",
      title: "Security Analyst"
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Love the customization options. Generated passwords for all my accounts.",
      title: "Developer"
    }
  ];

  return (
    <EnhancedToolPageLayout
      title="Password Generator"
      description="Generate strong, secure passwords instantly with our free Password Generator. Customize length and character types for maximum security. No storage, completely safe."
      shortIntro="Create strong, secure passwords in seconds with customizable options for length and character types."
      toolInterface={<PasswordGenerator />}
      howToUse={howToUse}
      features={features}
      faqs={faqs}
      relatedTools={relatedTools}
      testimonials={testimonials}
      category="Security Tools"
      rating={4.9}
      userCount="50,000+"
      canonicalUrl="https://fyntools.com/tools/password-generator"
      keywords="password generator, secure passwords, random password, strong password, password creator, security tool"
    />
  );
};

export default PasswordGeneratorPage;
