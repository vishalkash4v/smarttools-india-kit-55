import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PiggyBank } from 'lucide-react';
import { useCurrency } from '@/contexts/CurrencyContext';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const SipCalculator = () => {
  const [calculationType, setCalculationType] = useState<'sip' | 'lumpsum'>('sip');
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [lumpSumAmount, setLumpSumAmount] = useState(100000);
  const [timePeriod, setTimePeriod] = useState(10);
  const [interestRate, setInterestRate] = useState(12);
  const [result, setResult] = useState<{ totalInvestment: number; totalReturns: number; maturityAmount: number; } | null>(null);
  const { currencySymbol, loading: currencyLoading } = useCurrency();
  const [editingValues, setEditingValues] = useState<{ monthlyInvestment: boolean, lumpSumAmount: boolean, interestRate: boolean, timePeriod: boolean }>({
    monthlyInvestment: false,
    lumpSumAmount: false,
    interestRate: false,
    timePeriod: false,
  });

  const calculateSIP = () => {
    const P = monthlyInvestment;
    const r = interestRate / 100 / 12;
    const n = timePeriod * 12;
    let maturityAmount = 0;
    let totalInvestment = 0;
    let totalInterest = 0;

    if (P <= 0 || r <= 0 || n <= 0) return;

    let investmentData = {
      investedAmount: [],
      interestEarned: [],
      totalAmount: [],
    };

    // Calculate yearly values
    for (let i = 1; i <= timePeriod; i++) {
      const monthsInYear = i * 12;
      const annualInvestment = P * 12; // Monthly investment * 12
      totalInvestment += annualInvestment;

      // Calculate maturity amount (Total amount including interest) for that year
      let maturity = annualInvestment * Math.pow(1 + r, monthsInYear);

      // Calculate interest earned that year
      let interest = maturity - annualInvestment;

      totalInterest += interest;
      maturityAmount = totalInvestment + totalInterest;

      investmentData.investedAmount.push(annualInvestment);
      investmentData.interestEarned.push(interest);
      investmentData.totalAmount.push(maturityAmount);
    }

    const totalReturns = maturityAmount - totalInvestment;

    setResult({ totalInvestment, totalReturns, maturityAmount });

    return investmentData;
  };

  const calculateLumpsum = () => {
    const L = lumpSumAmount;
    const r = interestRate / 100;
    const n = timePeriod;

    if (L <= 0 || r <= 0 || n <= 0) return;

    // Compound Interest Formula: A = P(1 + r/n)^(nt)
    const maturityAmount = L * Math.pow(1 + r, n);
    const totalInvestment = L;
    const totalReturns = maturityAmount - totalInvestment;

    setResult({ totalInvestment, totalReturns, maturityAmount });

    return {
      investedAmount: [totalInvestment],
      interestEarned: [totalReturns],
      totalAmount: [maturityAmount],
    };
  };

  const handleCalculate = () => {
    if (calculationType === 'sip') {
      const investmentData = calculateSIP();
      updateChartData(investmentData);
    } else {
      const investmentData = calculateLumpsum();
      updateChartData(investmentData);
    }
  };

  const updateChartData = (investmentData: any) => {
    setChartData({
      labels: Array.from({ length: timePeriod }, (_, i) => `Year ${i + 1}`),
      datasets: [
        {
          label: 'Invested Amount',
          data: investmentData.investedAmount,
          borderColor: 'rgb(75, 192, 192)',
          fill: false,
          tension: 0.4, // Smooth lines
        },
        {
          label: 'Interest Earned',
          data: investmentData.interestEarned,
          borderColor: 'rgb(54, 162, 235)',
          fill: false,
          tension: 0.4,
        },
        {
          label: 'Total Value',
          data: investmentData.totalAmount,
          borderColor: 'rgb(153, 102, 255)',
          fill: false,
          tension: 0.4,
        }
      ],
    });
  };

  const handleClear = () => {
    setMonthlyInvestment(25000);
    setLumpSumAmount(100000);
    setTimePeriod(10);
    setInterestRate(12);
    setResult(null);
    setChartData({});
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const [chartData, setChartData] = useState<any>({});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        autoSkip: true,
        maxRotation: 45,
        minRotation: 30,
      },
      title: {
        display: true,
        text: 'Years',
      },
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'bottom' as const,
      align: 'start' as const,
      labels: {
        boxWidth: 20,
        padding: 10,
        usePointStyle: true,
      },
    },
    tooltip: {
      mode: 'nearest' as const,
      intersect: false,
      position: 'nearest' as const,
      callbacks: {
        label: (context: any) => {
          const dataIndex = context.dataIndex;
          const investedAmount = context.chart.data.datasets[0].data[dataIndex];
          const interestEarned = context.chart.data.datasets[1].data[dataIndex];
          const totalValue = context.chart.data.datasets[2].data[dataIndex];

          return [
            `Invested Amount: ₹${investedAmount.toFixed(2)}`,
            `Interest Earned: ₹${interestEarned.toFixed(2)}`,
            `Total Value: ₹${totalValue.toFixed(2)}`
          ];
        },
      },
    },
  },
} as const;




  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PiggyBank className="h-6 w-6" />
            SIP & Lump Sum Calculator
          </CardTitle>
          <CardDescription>
            Calculate returns on your Systematic Investment Plan (SIP) or Lump Sum investments.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4">
            <Button
              variant={calculationType === 'sip' ? 'default' : 'outline'}
              onClick={() => setCalculationType('sip')}
              className="flex-1"
            >
              SIP
            </Button>
            <Button
              variant={calculationType === 'lumpsum' ? 'default' : 'outline'}
              onClick={() => setCalculationType('lumpsum')}
              className="flex-1"
            >
              Lump Sum
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Monthly Investment / Lump Sum Amount */}
            <div className="space-y-2">
              <Label htmlFor="monthlyInvestment" className="flex items-center gap-2">
                {calculationType === 'sip' ? 'Monthly Investment (₹)' : 'Lump Sum Amount (₹)'}
              </Label>
              <input
                type="range"
                min="1000"
                max="100000"
                value={calculationType === 'sip' ? monthlyInvestment : lumpSumAmount}
                onChange={(e) => calculationType === 'sip' ? setMonthlyInvestment(Number(e.target.value)) : setLumpSumAmount(Number(e.target.value))}
                className="w-full"
              />
              <div>{currencySymbol}{formatCurrency(calculationType === 'sip' ? monthlyInvestment : lumpSumAmount)}</div>
            </div>

            {/* Expected Rate of Return */}
            <div className="space-y-2">
              <Label htmlFor="interestRate" className="flex items-center gap-2">
                Expected Rate of Return (%)
              </Label>
              <input
                type="range"
                min="1"
                max="25"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full"
              />
              <div>{interestRate}%</div>
            </div>

            {/* Time Period */}
            <div className="space-y-2">
              <Label htmlFor="timePeriod" className="flex items-center gap-2">
                Time Period (Years)
              </Label>
              <input
                type="range"
                min="1"
                max="30"
                value={timePeriod}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="w-full"
              />
              <div>{timePeriod} years</div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={handleCalculate} disabled={monthlyInvestment <= 0 || timePeriod <= 0 || interestRate <= 0} className="flex-1">
              Calculate
            </Button>
            <Button variant="outline" onClick={handleClear}>
              Clear
            </Button>
          </div>

          {result && (
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">Investment Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-blue-600">
                      {currencySymbol}{formatCurrency(result.totalInvestment)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Investment</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-green-600">
                      {currencySymbol}{formatCurrency(result.totalReturns)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Returns</div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-primary">
                      {currencySymbol}{formatCurrency(result.maturityAmount)}
                    </div>
                    <div className="text-sm text-muted-foreground">Maturity Value</div>
                  </div>
                </div>

                {/* Chart Component */}
                <div className="mt-6" style={{ position: 'relative', height: '400px' }}>
                  <Line data={chartData} options={chartOptions} />
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SipCalculator;
