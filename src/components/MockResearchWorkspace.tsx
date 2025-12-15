import { useState, useEffect } from 'react';
import {
  TrendingUp, TrendingDown, DollarSign, BarChart3, Target,
  FileText, PieChart, Building2, ArrowUpRight, ArrowDownRight,
  Shield, Users, Briefcase, Activity, Zap, Brain, LineChart,
  CheckCircle, AlertTriangle, ChevronRight, Sparkles
} from 'lucide-react';

export default function MockResearchWorkspace() {
  const [activeTab, setActiveTab] = useState(0);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showPulse, setShowPulse] = useState(true);

  const tabs = ['Intelligence', 'Financials', 'Valuation', 'Smart Money'];

  // Animate SniperIQ score
  useEffect(() => {
    const target = 87;
    const duration = 1500;
    const steps = 50;
    const increment = target / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setAnimatedScore(target);
        clearInterval(interval);
      } else {
        setAnimatedScore(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  // Pulse animation toggle
  useEffect(() => {
    const interval = setInterval(() => setShowPulse(p => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % tabs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // SniperIQ Intelligence Scores (our proprietary analysis)
  const intelligenceScores = [
    { label: 'Quality', score: 91, icon: Shield, color: 'emerald', desc: 'Profitability & stability' },
    { label: 'Growth', score: 78, icon: TrendingUp, color: 'cyan', desc: 'Revenue & EPS trends' },
    { label: 'Value', score: 72, icon: DollarSign, color: 'purple', desc: 'Relative valuation' },
    { label: 'Health', score: 88, icon: Activity, color: 'blue', desc: 'Balance sheet strength' },
  ];

  // Financial metrics
  const financials = [
    { label: 'Revenue', value: '$383.3B', change: '+7.8%', positive: true, yoy: 'YoY' },
    { label: 'Net Income', value: '$94.7B', change: '+4.2%', positive: true, yoy: 'YoY' },
    { label: 'FCF', value: '$110.5B', change: '+12.3%', positive: true, yoy: 'YoY' },
    { label: 'Gross Margin', value: '44.1%', change: '+1.2pp', positive: true, yoy: 'YoY' },
    { label: 'ROE', value: '147.2%', change: '', positive: true, yoy: 'TTM' },
    { label: 'ROIC', value: '56.8%', change: '', positive: true, yoy: 'TTM' },
  ];

  // Valuation metrics with AI fair value
  const valuationMetrics = [
    { label: 'P/E', value: '28.4x', vs: '25.2x', vsLabel: 'Sector', status: 'premium' },
    { label: 'EV/EBITDA', value: '21.7x', vs: '18.5x', vsLabel: 'Peers', status: 'premium' },
    { label: 'P/FCF', value: '25.1x', vs: '22.0x', vsLabel: 'Historical', status: 'fair' },
    { label: 'PEG', value: '2.1x', vs: '1.5x', vsLabel: 'Growth adj.', status: 'elevated' },
  ];

  // Smart Money data
  const smartMoney = {
    institutional: { ownership: 61.2, change: '+2.1%', holders: 5847 },
    insider: { netBuys: 12, sentiment: 'Bullish', last90: '+$4.2M' },
    etfFlows: { net30d: '+$1.8B', topETF: 'QQQ' }
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-purple-500/5 animate-pulse" />

      {/* Header */}
      <div className="relative px-4 py-3 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">Apple Inc.</span>
                <span className="px-2 py-0.5 bg-emerald-500/20 rounded text-xs text-emerald-300 font-medium">AAPL</span>
                <span className="px-2 py-0.5 bg-cyan-500/20 rounded text-[10px] text-cyan-300 font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> LIVE
                </span>
              </div>
              <span className="text-xs text-gray-500">Technology • Consumer Electronics • $2.78T</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-white">$178.42</div>
            <div className="flex items-center justify-end gap-1 text-emerald-400 text-xs">
              <ArrowUpRight className="w-3 h-3" />
              <span>+2.34%</span>
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
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                i === activeTab
                  ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {i === 0 && <Brain className="w-3 h-3" />}
              {i === 1 && <FileText className="w-3 h-3" />}
              {i === 2 && <Target className="w-3 h-3" />}
              {i === 3 && <Users className="w-3 h-3" />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="relative p-4">
        {/* SniperIQ Intelligence Hero */}
        <div className="mb-4 p-4 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-purple-500/10 rounded-xl border border-emerald-500/20">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-bold text-white">SniperIQ Intelligence Score</span>
              </div>
              <div className="flex items-end gap-3">
                <span className={`text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent transition-all ${showPulse ? 'scale-105' : 'scale-100'}`}>
                  {animatedScore}
                </span>
                <span className="text-lg text-emerald-400 mb-1">/100</span>
                <span className="px-2 py-0.5 bg-emerald-500/20 rounded text-xs text-emerald-300 font-bold mb-1">
                  STRONG BUY
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Comprehensive analysis across quality, growth, value, and financial health metrics.
                Top 15% of Technology sector.
              </p>
            </div>

            {/* Score Breakdown Mini */}
            <div className="hidden sm:grid grid-cols-2 gap-2">
              {intelligenceScores.map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-2 py-1 bg-black/30 rounded-lg">
                  <item.icon className={`w-3 h-3 text-${item.color}-400`} />
                  <span className="text-xs text-gray-400">{item.label}</span>
                  <span className={`text-xs font-bold text-${item.color}-400`}>{item.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column - Financial Metrics */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-bold text-white">Key Financials</span>
              <span className="text-[10px] text-gray-500 ml-auto">FY 2024</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {financials.map((item, i) => (
                <div
                  key={i}
                  className="p-2 bg-white/[0.03] rounded-lg border border-white/5 hover:bg-white/[0.05] transition-all"
                >
                  <span className="text-[10px] text-gray-500">{item.label}</span>
                  <div className="text-sm font-bold text-white mt-0.5">{item.value}</div>
                  {item.change && (
                    <span className={`text-[10px] ${item.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {item.change}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Revenue Chart */}
            <div className="p-3 bg-white/[0.03] rounded-lg border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white">Revenue Trend</span>
                <span className="text-[10px] text-emerald-400">+42% 5Y CAGR</span>
              </div>
              <div className="h-16 flex items-end gap-1">
                {[260, 274, 365, 394, 383].map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                    <div
                      className="w-full rounded-t bg-gradient-to-t from-cyan-600/50 to-cyan-400/80"
                      style={{ height: `${(val / 400) * 100}%` }}
                    />
                    <span className="text-[9px] text-gray-500">{2020 + i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Valuation & Smart Money */}
          <div className="space-y-3">
            {/* Valuation */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-bold text-white">Valuation</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {valuationMetrics.map((item, i) => (
                  <div key={i} className="p-2 bg-white/[0.03] rounded-lg border border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-gray-500">{item.label}</span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                        item.status === 'fair' ? 'bg-emerald-500/20 text-emerald-300' :
                        item.status === 'premium' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-amber-500/20 text-amber-300'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">{item.value}</div>
                    <span className="text-[9px] text-gray-500">vs {item.vs} {item.vsLabel}</span>
                  </div>
                ))}
              </div>

              {/* AI Fair Value */}
              <div className="mt-2 p-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg border border-purple-500/20">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-bold text-white">AI Fair Value</span>
                </div>
                <div className="flex items-end gap-2 mt-1">
                  <span className="text-2xl font-black text-purple-400">$192.50</span>
                  <span className="text-xs text-emerald-400 mb-1">+7.9% upside</span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1">
                  DCF + Comparables + ML sentiment adjustment
                </p>
              </div>
            </div>

            {/* Smart Money */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-white">Smart Money</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 bg-white/[0.03] rounded-lg border border-white/5">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3 text-blue-400" />
                    <span className="text-[10px] text-gray-500">Institutional</span>
                  </div>
                  <div className="text-sm font-bold text-white">{smartMoney.institutional.ownership}%</div>
                  <span className="text-[9px] text-emerald-400">{smartMoney.institutional.change}</span>
                </div>
                <div className="p-2 bg-white/[0.03] rounded-lg border border-white/5">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-amber-400" />
                    <span className="text-[10px] text-gray-500">Insider</span>
                  </div>
                  <div className="text-sm font-bold text-emerald-400">{smartMoney.insider.sentiment}</div>
                  <span className="text-[9px] text-gray-400">{smartMoney.insider.last90}</span>
                </div>
                <div className="p-2 bg-white/[0.03] rounded-lg border border-white/5">
                  <div className="flex items-center gap-1">
                    <PieChart className="w-3 h-3 text-cyan-400" />
                    <span className="text-[10px] text-gray-500">ETF Flows</span>
                  </div>
                  <div className="text-sm font-bold text-emerald-400">{smartMoney.etfFlows.net30d}</div>
                  <span className="text-[9px] text-gray-400">30d net</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Data Sources */}
      <div className="relative px-4 py-2 border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle className="w-3 h-3" />
              <span className="text-gray-400">10Y Financials</span>
            </span>
            <span className="flex items-center gap-1 text-cyan-400">
              <CheckCircle className="w-3 h-3" />
              <span className="text-gray-400">DCF Model</span>
            </span>
            <span className="flex items-center gap-1 text-purple-400">
              <CheckCircle className="w-3 h-3" />
              <span className="text-gray-400">Insider Data</span>
            </span>
          </div>
          <span className="text-gray-500 flex items-center gap-1">
            <Zap className="w-3 h-3 text-emerald-400" />
            Powered by SniperIQ Intelligence Engine
          </span>
        </div>
      </div>
    </div>
  );
}
