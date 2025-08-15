import React, { useState, useMemo, useMemo as useMemoAlias } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { differenceInYears, differenceInMonths, differenceInDays, isValid, format } from 'date-fns';
import { User, Gift } from 'lucide-react';
import { cn } from "@/lib/utils";

// MUI X Date Pickers (responsive)
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

// Animations
import { motion, AnimatePresence } from 'framer-motion';

const EMOJIS = ["🎉", "🎈", "🎂", "🥳", "🎊"];

const AgeCalculator = () => {
  const [dob, setDob] = useState<Dayjs | null>(null);

  const ageResult = useMemo(() => {
    if (!dob) return null;

    const birthDate = dob.toDate();
    if (!isValid(birthDate)) return { error: "Invalid date selected." };

    const today = new Date();
    if (birthDate > today) return { error: "Date of birth cannot be in the future." };

    const years = differenceInYears(today, birthDate);

    const monthsDate = new Date(birthDate);
    monthsDate.setFullYear(monthsDate.getFullYear() + years);

    const months = differenceInMonths(today, monthsDate);

    const daysDate = new Date(monthsDate);
    daysDate.setMonth(daysDate.getMonth() + months);

    const days = differenceInDays(today, daysDate);

    const nextBirthday = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );
    if (nextBirthday < today) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const daysToNextBirthday = differenceInDays(nextBirthday, today);

    return {
      years,
      months,
      days,
      daysToNextBirthday,
      error: null as string | null,
      summary: `You are ${years} years, ${months} months, and ${days} days old.`
    };
  }, [dob]);

  const isBirthdayToday = !!ageResult && !ageResult.error && ageResult.daysToNextBirthday === 0;

  const handleReset = () => setDob(null);

  return (
    <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-100 mb-2 sm:mb-4">
          <User className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Age Calculator</h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Calculate your exact age and days until your next birthday
        </p>
      </div>

      {/* Main Calculator Card */}
      <Card className="glass-card shadow-xl">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <div className="space-y-6 sm:space-y-8">
            {/* Date Input */}
            <div className="space-y-3 sm:space-y-6">
              <div className="text-center space-y-1.5 sm:space-y-2">
                <h3 className="text-base sm:text-lg font-semibold gradient-text">
                  Select Your Date of Birth
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Choose your birth date below
                </p>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Pick your birth date"
                      value={dob}
                      onChange={(newValue) => setDob(newValue)}
                      minDate={dayjs('1900-01-01')}
                      maxDate={dayjs()}
                      disableFuture
                      format="MMMM D, YYYY"
                      reduceAnimations
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          variant: 'outlined',
                          size: 'medium',
                          className: cn(
                            "w-full [&_.MuiInputBase-root]:h-12 sm:[&_.MuiInputBase-root]:h-14",
                            "[&_.MuiInputBase-input]:text-base sm:[&_.MuiInputBase-input]:text-lg"
                          )
                        },
                      }}
                    />
                  </LocalizationProvider>
                  <div className="mt-2 text-xs sm:text-sm text-muted-foreground">
                    {dob ? `Selected: ${format(dob.toDate(), "MMMM d, yyyy")}` : "No date selected"}
                  </div>
                </div>
              </div>
            </div>

            {/* Error Display */}
            {ageResult && ageResult.error && (
              <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-600 text-sm sm:text-base font-medium">{ageResult.error}</p>
              </div>
            )}

            {/* Reset Button */}
            {dob && (
              <div className="flex justify-center">
                <Button
                  onClick={handleReset}
                  variant="glass"
                  className="h-11 sm:h-12 px-6 sm:px-8 text-base sm:text-lg w-full sm:w-auto"
                >
                  Reset Date
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {ageResult && !ageResult.error && (
        <div className="space-y-4 sm:space-y-6 animate-fade-in">
          {/* Main Age Display */}
          <Card className="glass-card shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-5 sm:p-8 text-center">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold gradient-text">Your Age</h2>

                <div className="text-5xl sm:text-6xl font-bold gradient-text">
                  {ageResult.years}
                </div>
                <div className="text-base sm:text-xl text-muted-foreground">
                  years old
                </div>

                <div className="pt-5 sm:pt-6 border-t border-border/30">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="text-center space-y-1.5 sm:space-y-2">
                      <div className="text-2xl sm:text-3xl font-bold text-foreground">{ageResult.years}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-medium">Years</div>
                    </div>
                    <div className="text-center space-y-1.5 sm:space-y-2">
                      <div className="text-2xl sm:text-3xl font-bold text-foreground">{ageResult.months}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-medium">Months</div>
                    </div>
                    <div className="text-center space-y-1.5 sm:space-y-2">
                      <div className="text-2xl sm:text-3xl font-bold text-foreground">{ageResult.days}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-medium">Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Birthday Card with animations & emojis */}
          <motion.div
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
          >
            <Card className="relative overflow-hidden glass-card shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 sm:p-6">
                {/* Confetti layer (shown only on birthday) */}
                <AnimatePresence>
                  {isBirthdayToday && (
                    <motion.div
                      className="pointer-events-none absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {Array.from({ length: 18 }).map((_, i) => {
                        const delay = Math.random() * 0.6;
                        const x = Math.random() * 100;   // vw%
                        const duration = 2.2 + Math.random() * 1.5;
                        const emoji = EMOJIS[i % EMOJIS.length];
                        return (
                          <motion.span
                            key={i}
                            className="absolute text-xl sm:text-2xl"
                            style={{ left: `${x}%`, top: `-10%` }}
                            initial={{ y: -20, rotate: 0, opacity: 0 }}
                            animate={{
                              y: "120%",
                              rotate: 360,
                              opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                              delay,
                              duration,
                              repeat: Infinity,
                              repeatDelay: 1.2,
                              ease: "easeOut",
                            }}
                          >
                            {emoji}
                          </motion.span>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-center gap-3 sm:gap-4 text-center">
                  <motion.div
                    className={cn(
                      "p-3 sm:p-3.5 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"
                    )}
                    animate={isBirthdayToday ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                    transition={{ repeat: isBirthdayToday ? Infinity : 0, duration: 1.2 }}
                  >
                    <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-semibold gradient-text">
                      {isBirthdayToday ? "It’s Your Birthday! 🥳" : "Next Birthday"}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {isBirthdayToday ? (
                        <span className="font-semibold">
                          Wishing you a fantastic year ahead 🎉🎂🎈
                        </span>
                      ) : (
                        <>
                          <span className="font-bold text-primary">
                            {ageResult.daysToNextBirthday}
                          </span>{" "}
                          days to go{" "}
                          <span aria-hidden>✨</span>
                        </>
                      )}
                    </p>
                  </div>
                </div>

                {/* Subtle hover emoji trail when not birthday */}
                {!isBirthdayToday && (
                  <motion.div
                    className="mt-3 flex justify-center gap-2 text-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span>🎈</span><span>🎉</span><span>🎂</span>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
