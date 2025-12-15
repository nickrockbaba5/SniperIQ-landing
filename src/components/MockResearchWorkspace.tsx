import { useState, useEffect } from 'react';
import {
  TrendingUp, TrendingDown, DollarSign, BarChart3,
  FileText, PieChart, Building2, ArrowUpRight, ArrowDownRight
} from 'lucide-react';

export default function MockResearchWorkspace() {
  const [activeTab, setActiveTab] = useState(0);
  const [animatedRevenue, setAnimatedRevenue] = useState(0);

  const tabs = ['Overview', 'Financials', 'Valuation', 'Ownership'];

  // Animate revenue counter
  useEffect(() => {
    const target = 383.29;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setAnimatedRevenue(target);
        clearInterval(interval);
      } else {
        setAnimatedRevenue(current);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  // Cycle through tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % tabs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const financials = [
    { label: 'Revenue', value: `$${animatedRevenue.toFixed(1)}B`, change: '+7.8%', positive: true },
    { label: 'Net Income', value: '$94.7B', change: '+4.2%', positive: true },
    { label: 'Gross Margin', value: '44.1%', change: '+1.2%', positive: true },
    { label: 'Operating CF', value: '$110.5B', change: '+12.3%', positive: true },
  ];

  const ratios = [
    { label: 'P/E Ratio', value: '28.4x', benchmark: '25.2x', status: 'premium' },
    { label: 'EV/EBITDA', value: '21.7x', benchmark: '18.5x', status: 'premium' },
    { label: 'ROE', value: '147.2%', benchmark: '25.0%', status: 'excellent' },
    { label: 'Debt/Equity', value: '1.81', benchmark: '1.20', status: 'elevated' },
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 animate-pulse" />

      {/* Header */}
      <div className="relative px-4 py-3 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">Apple Inc.</span>
                <span className="px-2 py-0.5 bg-emerald-500/20 rounded text-xs text-emerald-300 font-medium">AAPL</span>
              </div>
              <span className="text-xs text-gray-500">Technology • Consumer Electronics</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-white">$178.42</div>
            <div className="flex items-center gap-1 text-red-400 text-xs">
              <ArrowDownRight className="w-3 h-3" />
              <span>-1.29%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative px-4 py-2 border-b border-white/5 bg-black/20">
        <div className="flex items-center gap-1">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                i === activeTab
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="relative p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Financial Metrics */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-bold text-white">Key Financials (FY 2024)</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {financials.map((item, i) => (
                <div
                  key={i}
                  className="p-3 bg-white/[0.03] rounded-xl border border-white/10 hover:bg-white/[0.05] transition-all group"
                >
                  <span className="text-xs text-gray-500">{item.label}</span>
                  <div className="flex items-end justify-between mt-1">
                    <span className="text-lg font-bold text-white">{item.value}</span>
                    <span className={`text-xs font-medium flex items-center gap-0.5 ${
                      item.positive ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {item.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Revenue Chart */}
            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-white">Revenue Trend (5Y)</span>
                <span className="text-xs text-emerald-400">+42% CAGR</span>
              </div>
              <div className="h-20 flex items-end gap-1">
                {[260, 274, 365, 394, 383].map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t bg-gradient-to-t from-emerald-600/50 to-emerald-400/80 transition-all duration-1000"
                      style={{ height: `${(val / 400) * 100}%`, animationDelay: `${i * 200}ms` }}
                    />
                    <span className="text-[10px] text-gray-500">{2020 + i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Valuation Ratios */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-bold text-white">Valuation Analysis</span>
            </div>

            <div className="space-y-3">
              {ratios.map((ratio, i) => (
                <div key={i} className="p-3 bg-white/[0.03] rounded-xl border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">{ratio.label}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      ratio.status === 'excellent' ? 'bg-emerald-500/20 text-emerald-300' :
                      ratio.status === 'premium' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {ratio.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-bold text-white">{ratio.value}</span>
                    <span className="text-xs text-gray-500">vs {ratio.benchmark} sector</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        ratio.status === 'excellent' ? 'bg-emerald-500' :
                        ratio.status === 'premium' ? 'bg-blue-500' : 'bg-yellow-500'
                      }`}
                      style={{ width: `${Math.min(100, (parseFloat(ratio.value) / parseFloat(ratio.benchmark)) * 50)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* AI Fair Value */}
            <div className="p-4 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-bold text-white">AI Fair Value</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-black text-emerald-400">$192.50</span>
                <span className="text-sm text-emerald-300 mb-1">+7.9% upside</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Based on DCF, comparables, and ML adjustments
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative px-4 py-3 border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="text-gray-500">Market Cap: <span className="text-white">$2.78T</span></span>
            <span className="text-gray-500">Employees: <span className="text-white">164,000</span></span>
          </div>
          <span className="text-gray-500">Data: FMP • Bloomberg • SEC Filings</span>
        </div>
      </div>
    </div>
  );
}
