
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Timer, Target, Zap, RotateCcw, Play, Pause } from 'lucide-react';

const TypingTest = () => {
  const [language, setLanguage] = useState('english');
  const [duration, setDuration] = useState(60);
  const [currentText, setCurrentText] = useState('');
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);
  const [totalErrors, setTotalErrors] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const testTexts = {
    english: [
      "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is commonly used for typing practice. Regular practice with such texts helps improve both speed and accuracy in typing.",
      "Technology has revolutionized the way we communicate, work, and live our daily lives. From smartphones to artificial intelligence, these innovations continue to shape our future in ways we never imagined possible.",
      "Learning to type efficiently is an essential skill in today's digital world. Whether you're writing emails, creating documents, or coding software, fast and accurate typing can significantly boost your productivity.",
      "The internet has connected billions of people around the world, creating a global network of information sharing and collaboration. Social media platforms have transformed how we interact and share experiences with others.",
      "Climate change represents one of the most pressing challenges of our time. Scientists worldwide are working on innovative solutions to reduce carbon emissions and develop sustainable energy sources for future generations."
    ],
    hindi: [
      "आज के डिजिटल युग में टाइपिंग एक महत्वपूर्ण कौशल है। हिंदी टाइपिंग सीखना न केवल व्यावसायिक विकास में सहायक है बल्कि हमारी मातृभाषा के प्रति प्रेम को भी दर्शाता है।",
      "भारत एक विविधताओं से भरा देश है जहाँ अनेक भाषाएँ, संस्कृतियाँ और परंपराएँ एक साथ फलती-फूलती हैं। यह विविधता हमारी सबसे बड़ी ताकत है।",
      "शिक्षा का क्षेत्र तकनीकी प्रगति के साथ तेजी से बदल रहा है। ऑनलाइन कक्षाएँ और डिजिटल संसाधन अब पारंपरिक शिक्षा प्रणाली का अभिन्न अंग बन गए हैं।",
      "कंप्यूटर और इंटरनेट ने हमारे जीवन को आसान बना दिया है। घर बैठे ही हम दुनिया भर की जानकारी प्राप्त कर सकते हैं और विभिन्न सेवाओं का लाभ उठा सकते हैं।",
      "पर्यावरण संरक्षण आज के समय की सबसे बड़ी आवश्यकता है। हमें प्राकृतिक संसाधनों का सदुपयोग करते हुए भावी पीढ़ियों के लिए एक स्वच्छ और हरित पृथ्वी छोड़नी चाहिए।"
    ]
  };

  const getRandomText = () => {
    const texts = testTexts[language as keyof typeof testTexts];
    return texts[Math.floor(Math.random() * texts.length)];
  };

  const startTest = () => {
    const newText = getRandomText();
    setCurrentText(newText);
    setTypedText('');
    setCurrentIndex(0);
    setTimeLeft(duration);
    setIsActive(true);
    setIsCompleted(false);
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setTotalErrors(0);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const stopTest = () => {
    setIsActive(false);
    setIsCompleted(true);
  };

  const resetTest = () => {
    setCurrentText('');
    setTypedText('');
    setCurrentIndex(0);
    setTimeLeft(duration);
    setIsActive(false);
    setIsCompleted(false);
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setTotalErrors(0);
  };

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setIsCompleted(true);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isActive || isCompleted) return;

    const value = e.target.value;
    setTypedText(value);

    if (value.length <= currentText.length) {
      setCurrentIndex(value.length);

      // Calculate errors
      let errorCount = 0;
      for (let i = 0; i < value.length; i++) {
        if (value[i] !== currentText[i]) {
          errorCount++;
        }
      }
      setErrors(errorCount);
      setTotalErrors(errorCount);

      // Calculate accuracy
      const accuracyPercentage = value.length > 0 ? ((value.length - errorCount) / value.length) * 100 : 100;
      setAccuracy(Math.round(accuracyPercentage));

      // Calculate WPM
      const timeElapsed = (duration - timeLeft) / 60;
      const wordsTyped = value.trim().split(' ').length;
      const currentWpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;
      setWpm(currentWpm);

      // Check completion
      if (value === currentText) {
        setIsCompleted(true);
        setIsActive(false);
      }
    }
  };

  const getCharacterClass = (index: number) => {
    if (index < typedText.length) {
      return typedText[index] === currentText[index] ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
    } else if (index === currentIndex) {
      return 'bg-blue-200 border-b-2 border-blue-500';
    }
    return 'text-gray-600';
  };

  const progress = currentText ? (currentIndex / currentText.length) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Timer className="h-5 w-5" />
            Typing Test Settings
          </CardTitle>
          <CardDescription>
            Configure your typing test parameters
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Language</label>
              <Select value={language} onValueChange={setLanguage} disabled={isActive}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">हिंदी</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Duration (seconds)</label>
              <Select value={duration.toString()} onValueChange={(value) => setDuration(Number(value))} disabled={isActive}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 seconds</SelectItem>
                  <SelectItem value="60">1 minute</SelectItem>
                  <SelectItem value="120">2 minutes</SelectItem>
                  <SelectItem value="300">5 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end gap-2">
              {!currentText ? (
                <Button onClick={startTest} className="flex-1">
                  <Play className="h-4 w-4 mr-2" />
                  Start Test
                </Button>
              ) : (
                <>
                  <Button 
                    onClick={isActive ? stopTest : startTest} 
                    variant={isActive ? "destructive" : "default"}
                    className="flex-1"
                  >
                    {isActive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                    {isActive ? "Stop" : "Start"}
                  </Button>
                  <Button variant="outline" onClick={resetTest}>
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      {currentText && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Timer className="h-4 w-4 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold">{timeLeft}</p>
                  <p className="text-xs text-muted-foreground">Seconds</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">{wpm}</p>
                  <p className="text-xs text-muted-foreground">WPM</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-green-500" />
                <div>
                  <p className="text-2xl font-bold">{accuracy}%</p>
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div>
                <p className="text-2xl font-bold text-red-500">{totalErrors}</p>
                <p className="text-xs text-muted-foreground">Errors</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div>
                <p className="text-sm font-medium mb-2">Progress</p>
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">{Math.round(progress)}%</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Typing Area */}
      {currentText && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Typing Test</CardTitle>
              <div className="flex gap-2">
                {isCompleted && (
                  <Badge variant="default" className="bg-green-500">
                    Test Completed!
                  </Badge>
                )}
                {isActive && (
                  <Badge variant="default" className="bg-blue-500 animate-pulse">
                    Test Active
                  </Badge>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Text Display */}
            <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900">
              <div className="text-lg leading-relaxed font-mono">
                {currentText.split('').map((char, index) => (
                  <span
                    key={index}
                    className={`${getCharacterClass(index)} px-0.5 rounded`}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
            </div>

            {/* Input */}
            <input
              ref={inputRef}
              type="text"
              value={typedText}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg text-lg font-mono"
              placeholder={isActive ? "Type the text above..." : "Click Start Test to begin"}
              disabled={!isActive || isCompleted}
              autoFocus={isActive}
            />

            {/* Results */}
            {isCompleted && (
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-semibold mb-2">Test Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Speed</p>
                    <p className="font-bold">{wpm} WPM</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Accuracy</p>
                    <p className="font-bold">{accuracy}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Errors</p>
                    <p className="font-bold">{totalErrors}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Time</p>
                    <p className="font-bold">{duration - timeLeft}s</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Start Message */}
      {!currentText && (
        <Card className="text-center py-12">
          <CardContent>
            <Timer className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Ready for Your Typing Test?</h3>
            <p className="text-muted-foreground mb-4">
              Select your preferred language and duration, then click "Start Test" to begin
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TypingTest;
