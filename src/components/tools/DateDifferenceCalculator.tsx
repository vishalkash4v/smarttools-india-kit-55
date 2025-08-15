import React, { useMemo, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { format, differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';
import { Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

// MUI X Date Pickers (responsive)
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

const DateDifferenceCalculator = () => {
  const [start, setStart] = useState<Dayjs | null>(null);
  const [end, setEnd] = useState<Dayjs | null>(null);

  const toDate = (d: Dayjs | null) => (d ? d.toDate() : undefined);

  const difference = useMemo(() => {
    const startDate = toDate(start);
    const endDate = toDate(end);

    if (!startDate || !endDate) return null;
    if (startDate > endDate) return 'ERR_START_AFTER_END' as const;

    const years = differenceInYears(endDate, startDate);
    const monthsTotal = differenceInMonths(endDate, startDate);
    const months = monthsTotal % 12;

    const tempDate = new Date(startDate);
    tempDate.setFullYear(tempDate.getFullYear() + years);
    tempDate.setMonth(tempDate.getMonth() + months);

    const days = differenceInDays(endDate, tempDate);
    const totalDays = differenceInDays(endDate, startDate);

    return { years, months, days, totalDays };
  }, [start, end]);

  const handleReset = () => {
    setStart(null);
    setEnd(null);
  };

  const setToday = (which: 'start' | 'end') => {
    const today = dayjs();
    if (which === 'start') setStart(today);
    else setEnd(today);
  };

  const swapDates = () => {
    setStart(end);
    setEnd(start);
  };

  const isError = difference === 'ERR_START_AFTER_END';

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4 sm:p-6">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 mb-3">
          <CalendarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Date Calculator</h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          Calculate the exact difference between two dates
        </p>
      </div>

      <Card className="border-0 shadow-xl bg-white">
        <CardContent className="p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-end">
            {/* Start Date */}
            <div className="space-y-3">
              <Label className="text-sm sm:text-base font-semibold text-gray-700">From Date</Label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={start}
                  onChange={setStart}
                  label="Pick a date"
                  maxDate={end ?? undefined}
                  format="MMM D, YYYY"
                  reduceAnimations
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: 'outlined',
                      size: 'medium',
                      className: cn(
                        "w-full [&_.MuiInputBase-root]:h-12 sm:[&_.MuiInputBase-root]:h-14",
                        "[&_.MuiInputBase-input]:text-sm sm:[&_.MuiInputBase-input]:text-base"
                      )
                    }
                  }}
                />
              </LocalizationProvider>
              <div className="flex gap-2">
                <Button variant="outline" className="h-9 px-3 rounded-lg text-xs sm:text-sm" onClick={() => setToday('start')}>
                  Today
                </Button>
                {start && (
                  <span className="text-xs sm:text-sm text-gray-500 self-center">
                    Selected: {format(start.toDate(), 'PPP')}
                  </span>
                )}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </div>
            </div>

            {/* End Date */}
            <div className="space-y-3">
              <Label className="text-sm sm:text-base font-semibold text-gray-700">To Date</Label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={end}
                  onChange={setEnd}
                  label="Pick a date"
                  minDate={start ?? undefined}
                  format="MMM D, YYYY"
                  reduceAnimations
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      variant: 'outlined',
                      size: 'medium',
                      className: cn(
                        "w-full [&_.MuiInputBase-root]:h-12 sm:[&_.MuiInputBase-root]:h-14",
                        "[&_.MuiInputBase-input]:text-sm sm:[&_.MuiInputBase-input]:text-base"
                      )
                    }
                  }}
                />
              </LocalizationProvider>
              <div className="flex gap-2">
                <Button variant="outline" className="h-9 px-3 rounded-lg text-xs sm:text-sm" onClick={() => setToday('end')}>
                  Today
                </Button>
                {end && (
                  <span className="text-xs sm:text-sm text-gray-500 self-center">
                    Selected: {format(end.toDate(), 'PPP')}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mt-6">
            <Button
              onClick={swapDates}
              variant="outline"
              className="h-10 sm:h-12 px-4 sm:px-6 text-sm sm:text-lg border-2 rounded-xl"
              disabled={!start || !end}
            >
              Swap Dates
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-lg border-2 rounded-xl"
            >
              Reset
            </Button>
          </div>

          {/* Inline error instead of toast */}
          {isError && (
            <div className="mt-4 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl text-sm sm:text-base text-red-700">
              Start date cannot be after end date.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results */}
      {difference && !isError && (
        <div className="space-y-4 sm:space-y-6">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Duration</h2>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">
                {difference.totalDays}
              </div>
              <div className="text-base sm:text-lg lg:text-xl text-gray-600">
                {difference.totalDays === 1 ? 'day' : 'days'}
              </div>
              <div className="pt-4 sm:pt-6 border-t border-blue-200">
                <div className="grid grid-cols-3 gap-3 sm:gap-6">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{difference.years}</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{difference.months}</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Months</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{difference.days}</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">Days</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center space-y-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Date Range</h3>
                <p className="text-sm sm:text-base text-gray-600 break-words">
                  From <span className="font-semibold">{format(start!.toDate(), 'MMM dd, yyyy')}</span> to{' '}
                  <span className="font-semibold">{format(end!.toDate(), 'MMM dd, yyyy')}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DateDifferenceCalculator;
