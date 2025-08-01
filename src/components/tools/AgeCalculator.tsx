import React, { useState, useMemo } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { differenceInYears, differenceInMonths, differenceInDays, isValid, parseISO, format } from 'date-fns';
import { User, Calendar, Gift } from 'lucide-react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const ageResult = useMemo(() => {
    if (!dob) return null;

    const birthDate = parseISO(dob);
    if (!isValid(birthDate)) return { error: "Invalid date format. Please use YYYY-MM-DD." };
    
    const today = new Date();
    if (birthDate > today) return { error: "Date of birth cannot be in the future." };

    const years = differenceInYears(today, birthDate);
    const monthsDate = new Date(birthDate);
    monthsDate.setFullYear(monthsDate.getFullYear() + years);
    const months = differenceInMonths(today, monthsDate);
    const daysDate = new Date(monthsDate);
    daysDate.setMonth(daysDate.getMonth() + months);
    const days = differenceInDays(today, daysDate);
    
    const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < today) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const daysToNextBirthday = differenceInDays(nextBirthday, today);

    return {
      years,
      months,
      days,
      daysToNextBirthday,
      error: null,
      summary: `You are ${years} years, ${months} months, and ${days} days old.`
    };
  }, [dob]);

  const handleReset = () => {
    setDob('');
  };

  const todayDateString = format(new Date(), 'yyyy-MM-dd');

  return (
    <div className="max-w-4xl mx-auto space-y-6 px-4 sm:px-6 py-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 mb-4">
          <User className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 dark:text-purple-300" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Free Age Calculator Online
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Calculate your exact age with our chronological age calculator. Find age differences, days to your next birthday, and more in seconds.
        </p>
      </div>

      {/* Main Calculator Card */}
      <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
        <CardContent className="p-6 sm:p-8">
          <div className="space-y-6">
            {/* Date Input */}
            <div className="space-y-3">
              <Label htmlFor="dob" className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200">
                Enter Your Date of Birth
              </Label>
              <Input
                id="dob"
                type="date"
                value={dob}
                onChange={handleDobChange}
                className="h-12 sm:h-14 text-base sm:text-lg border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-purple-500 dark:focus:border-purple-400 focus:ring-0 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                max={todayDateString}
              />
            </div>

            {/* Error Display */}
            {ageResult && ageResult.error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-xl">
                <p className="text-red-600 dark:text-red-300 font-medium">{ageResult.error}</p>
              </div>
            )}

            {/* Reset Button */}
            <div className="flex justify-center">
              <Button 
                onClick={handleReset} 
                variant="outline" 
                className="h-11 sm:h-12 px-6 sm:px-8 text-base sm:text-lg border-2 border-gray-200 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {ageResult && !ageResult.error && (
        <div className="space-y-6 animate-fade-in">
          {/* Main Age Display */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-900/50">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Your Exact Age
                </h2>
                
                {/* Age Summary */}
                <div className="text-4xl sm:text-5xl font-bold text-purple-600 dark:text-purple-300">
                  {ageResult.years}
                </div>
                <div className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                  years old
                </div>
                
                {/* Detailed Breakdown */}
                <div className="pt-4 sm:pt-6 border-t border-purple-200 dark:border-purple-700">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">{ageResult.years}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">{ageResult.months}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Months</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">{ageResult.days}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Next Birthday Card */}
          <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-center space-x-3">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 dark:text-pink-300" />
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">Next Birthday</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <span className="font-bold text-pink-600 dark:text-pink-300">{ageResult.daysToNextBirthday}</span> days to go
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;