import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check, X, ArrowRight, Brain, Shield, Zap, Target, Activity,
  BarChart3, Globe, Cpu, TrendingUp, Layers, DollarSign, LineChart,
  MessageSquare, Building2, Sparkles, ChevronDown
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type CellValue = true | false | string;

interface ComparisonRow {
  feature: string;
  sniperiq: CellValue;
  tradingview: CellValue;
  bloomberg: CellValue;
  tikr: CellValue;
  koyfin: CellValue;
  fiscalai: CellValue;
  metatrader: CellValue;
}

interface ComparisonCategory {
  name: string;
  icon: typeof Brain;
  color: string;
  rows: ComparisonRow[];
}

const categories: ComparisonCategory[] = [
  {
    name: 'AI & Analysis Engines',
    icon: Brain,
    color: 'blue',
    rows: [
      { feature: 'ICT Smart Money (Order Blocks, FVG, Liquidity)', sniperiq: true, tradingview: false, bloomberg: 'Partial', tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'Market Profile / TPO Analysis', sniperiq: true, tradingview: 'Plugin', bloomberg: true, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'Volume Footprint / CVD', sniperiq: true, tradingview: 'Plugin', bloomberg: true, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'Technical Indicators (20+)', sniperiq: true, tradingview: true, bloomberg: true, tikr: false, koyfin: 'Basic', fiscalai: false, metatrader: true },
      { feature: 'ML/AI Price Prediction', sniperiq: 'XGBoost + LightGBM', tradingview: false, bloomberg: 'GPT (search only)', tikr: false, koyfin: false, fiscalai: '1 LLM', metatrader: false },
      { feature: 'Pattern Recognition (Harmonic)', sniperiq: true, tradingview: 'Manual', bloomberg: false, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'AI Regime Classification', sniperiq: '7 regime types', tradingview: false, bloomberg: false, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'Total AI Engines', sniperiq: '21 engines', tradingview: '0', bloomberg: '2-3', tikr: '0', koyfin: '0', fiscalai: '1', metatrader: '0' },
    ],
  },
  {
    name: 'Consensus & Signal System',
    icon: Target,
    color: 'purple',
    rows: [
      { feature: 'Multi-Engine Consensus (EliteFusionBrain)', sniperiq: true, tradingview: false, bloomberg: false, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'Probabilistic Conviction Score (0-92%)', sniperiq: true, tradingview: false, bloomberg: false, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'Automated Trade Levels (Entry/SL/T1/T2/T3)', sniperiq: true, tradingview: false, bloomberg: false, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'Supreme Signal (4-Layer Confirmation)', sniperiq: true, tradingview: false, bloomberg: false, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'NO_CALL Quality Gate', sniperiq: true, tradingview: false, bloomberg: false, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'Engine-by-Engine Reasoning (Evidence Mode)', sniperiq: true, tradingview: false, bloomberg: false, tikr: false, koyfin: false, fiscalai: 'Partial', metatrader: false },
    ],
  },
  {
    name: 'Fundamental Data & Research',
    icon: Building2,
    color: 'emerald',
    rows: [
      { feature: 'Financial Statements (10yr)', sniperiq: true, tradingview: false, bloomberg: true, tikr: true, koyfin: true, fiscalai: 'Partial', metatrader: false },
      { feature: 'Analyst Estimates & Price Targets', sniperiq: true, tradingview: false, bloomberg: true, tikr: true, koyfin: true, fiscalai: 'Partial', metatrader: false },
      { feature: 'Automated DCF Valuation', sniperiq: true, tradingview: false, bloomberg: true, tikr: false, koyfin: false, fiscalai: 'Partial', metatrader: false },
      { feature: '13F Institutional Ownership', sniperiq: true, tradingview: false, bloomberg: true, tikr: true, koyfin: 'Partial', fiscalai: false, metatrader: false },
      { feature: 'Quality Scoring (Piotroski/Altman)', sniperiq: true, tradingview: false, bloomberg: true, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'Automated Research Reports (PDF)', sniperiq: true, tradingview: false, bloomberg: 'Analyst (human)', tikr: false, koyfin: false, fiscalai: true, metatrader: false },
    ],
  },
  {
    name: 'Macro, Options & Positioning',
    icon: Globe,
    color: 'amber',
    rows: [
      { feature: 'FRED Treasury / CPI / GDP (Direct API)', sniperiq: true, tradingview: false, bloomberg: true, tikr: false, koyfin: 'Display', fiscalai: false, metatrader: false },
      { feature: 'CFTC COT Positioning Engine', sniperiq: true, tradingview: 'Indicator', bloomberg: true, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'Gamma Exposure / GEX Engine', sniperiq: true, tradingview: false, bloomberg: true, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'Options Flow Analytics', sniperiq: true, tradingview: false, bloomberg: true, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'Economic Calendar', sniperiq: true, tradingview: true, bloomberg: true, tikr: false, koyfin: true, fiscalai: false, metatrader: false },
      { feature: 'Intermarket Correlations', sniperiq: true, tradingview: false, bloomberg: true, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
    ],
  },
  {
    name: 'Asset Coverage',
    icon: Layers,
    color: 'cyan',
    rows: [
      { feature: 'US & Global Equities', sniperiq: '90,000+', tradingview: true, bloomberg: true, tikr: '100,000+', koyfin: true, fiscalai: true, metatrader: 'Via broker' },
      { feature: 'Forex (Major/Minor/Exotic)', sniperiq: true, tradingview: true, bloomberg: true, tikr: false, koyfin: false, fiscalai: false, metatrader: true },
      { feature: 'Commodities (Gold, Oil, etc.)', sniperiq: true, tradingview: true, bloomberg: true, tikr: false, koyfin: false, fiscalai: false, metatrader: true },
      { feature: 'Cryptocurrency', sniperiq: true, tradingview: true, bloomberg: 'Partial', tikr: false, koyfin: false, fiscalai: false, metatrader: 'Via broker' },
      { feature: 'India NSE/MCX (Dedicated ML)', sniperiq: true, tradingview: 'Partial', bloomberg: true, tikr: false, koyfin: false, fiscalai: false, metatrader: 'Via broker' },
      { feature: 'ETF Analytics', sniperiq: true, tradingview: true, bloomberg: true, tikr: true, koyfin: true, fiscalai: false, metatrader: false },
    ],
  },
  {
    name: 'Screening & Discovery',
    icon: Activity,
    color: 'rose',
    rows: [
      { feature: 'Global Asset Screener', sniperiq: '90,000+ assets', tradingview: 'Basic', bloomberg: true, tikr: 'Equities only', koyfin: 'Equities only', fiscalai: false, metatrader: false },
      { feature: 'AI Score Ranking', sniperiq: true, tradingview: false, bloomberg: false, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'ICT Smart Money Screening', sniperiq: true, tradingview: false, bloomberg: false, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'Multi-Factor Filtering', sniperiq: true, tradingview: 'Partial', bloomberg: true, tikr: 'Partial', koyfin: true, fiscalai: false, metatrader: false },
      { feature: 'Sector Rotation Tracking', sniperiq: true, tradingview: false, bloomberg: true, tikr: false, koyfin: 'Partial', fiscalai: false, metatrader: false },
    ],
  },
  {
    name: 'AI Assistant & Platform',
    icon: MessageSquare,
    color: 'pink',
    rows: [
      { feature: 'LLM Voice + Text Assistant', sniperiq: true, tradingview: false, bloomberg: false, tikr: false, koyfin: false, fiscalai: 'Text only', metatrader: false },
      { feature: 'REST API Access', sniperiq: '399 endpoints', tradingview: 'Partial', bloomberg: true, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
      { feature: 'WebSocket Real-Time Feeds', sniperiq: true, tradingview: true, bloomberg: true, tikr: false, koyfin: false, fiscalai: false, metatrader: true },
      { feature: 'Custom Price Alerts', sniperiq: true, tradingview: true, bloomberg: true, tikr: false, koyfin: 'Partial', fiscalai: false, metatrader: true },
      { feature: 'Portfolio Risk Analytics', sniperiq: true, tradingview: 'Watchlist', bloomberg: true, tikr: 'Watchlist', koyfin: true, fiscalai: false, metatrader: true },
      { feature: 'Multi-Provider Data Failover', sniperiq: '6+ providers', tradingview: false, bloomberg: true, tikr: false, koyfin: false, fiscalai: false, metatrader: false },
    ],
  },
];

const competitors = [
  { key: 'sniperiq' as const, name: 'SniperIQ', highlight: true },
  { key: 'tradingview' as const, name: 'TradingView', highlight: false },
  { key: 'bloomberg' as const, name: 'Bloomberg', highlight: false },
  { key: 'tikr' as const, name: 'TIKR', highlight: false },
  { key: 'koyfin' as const, name: 'Koyfin', highlight: false },
  { key: 'fiscalai' as const, name: 'Fiscal.ai', highlight: false },
  { key: 'metatrader' as const, name: 'MetaTrader', highlight: false },
];

type CompetitorKey = typeof competitors[number]['key'];

const pricing: Record<CompetitorKey, string> = {
  sniperiq: 'Free - £199/mo',
  tradingview: 'Free - £50/mo',
  bloomberg: '~£2,000/mo',
  tikr: 'Free - £50/mo',
  koyfin: 'Free - £100/mo',
  fiscalai: 'Free - £99/mo',
  metatrader: 'Free',
};

interface UniqueFeature {
  title: string;
  desc: string;
  icon: typeof Brain;
}

const uniqueFeatures: UniqueFeature[] = [
  { title: '21-Engine Parallel Analysis', desc: 'No platform runs more than 3 engines simultaneously. SniperIQ runs 21.', icon: Cpu },
  { title: 'EliteFusionBrain Consensus', desc: 'Weighted vote + regime filter + quality gate producing calibrated conviction.', icon: Brain },
  { title: 'Automated Trade Levels', desc: 'Entry/SL/T1/T2/T3 derived from structural confluence across all engines.', icon: Target },
  { title: 'Supreme Signal 4-Layer Confirmation', desc: 'Structure + Momentum + Context + Fakeout Filter for every signal.', icon: Shield },
  { title: 'AI Regime Classification', desc: '7 regime types feeding back into conviction filtering.', icon: Sparkles },
  { title: 'NO_CALL Quality Gate', desc: 'System refuses to give a signal when conditions are insufficient. Intellectual honesty.', icon: Zap },
  { title: 'India NSE/MCX Dedicated ML', desc: 'No Western fintech platform offers India-specific institutional ML models.', icon: Globe },
  { title: 'Evidence Mode', desc: 'Transparent engine-by-engine reasoning for every signal generated.', icon: Layers },
  { title: '399 REST API Endpoints', desc: 'Full programmatic access to all 21 engines, screening, and data.', icon: BarChart3 },
  { title: '6+ Data Provider Failover', desc: 'DataSourceRouter with automatic failover. No single provider dependency.', icon: Activity },
  { title: 'Engine Lab', desc: 'Experiment with individual engines and parameters on Advanced tier.', icon: TrendingUp },
  { title: 'LLM Voice Assistant', desc: 'Voice + text AI assistant powered by real-time engine outputs.', icon: MessageSquare },
];

/* ------------------------------------------------------------------ */
/*  CELL RENDERER                                                       */
/* ------------------------------------------------------------------ */

function Cell({ value, isSniperIQ = false }: { value: CellValue; isSniperIQ?: boolean }) {
  if (value === true) {
    return <Check className={`w-5 h-5 mx-auto ${isSniperIQ ? 'text-emerald-400' : 'text-gray-400'}`} />;
  }
  if (value === false) {
    return <X className="w-4 h-4 mx-auto text-gray-700" />;
  }
  return (
    <span className={`text-xs font-medium ${isSniperIQ ? 'text-emerald-300' : 'text-gray-400'}`}>
      {value}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPETITOR CARDS                                                    */
/* ------------------------------------------------------------------ */

interface CompetitorCardData {
  name: string;
  price: string;
  engines: string;
  strength: string;
  weakness: string;
  gradient: string;
}

const competitorCards: CompetitorCardData[] = [
  {
    name: 'TradingView',
    price: 'Free - £50/mo',
    engines: '0 AI engines',
    strength: 'Best-in-class charting, 60M+ users, Pine Script, social features',
    weakness: 'Zero automated analysis. Shows data but does not analyse it. No order flow, no ML, no consensus.',
    gradient: 'from-blue-600/20 to-blue-400/20',
  },
  {
    name: 'Bloomberg Terminal',
    price: '~£24,000/year',
    engines: '2-3 AI tools',
    strength: 'Comprehensive institutional data, Bloomberg Intelligence, chat, fixed income',
    weakness: 'Costs 10x more. No multi-engine consensus, no ICT methodology, no self-service SaaS.',
    gradient: 'from-orange-600/20 to-orange-400/20',
  },
  {
    name: 'TIKR',
    price: 'Free - £50/mo',
    engines: '0 AI engines',
    strength: 'Excellent fundamental data, 10yr financials, clean UI, analyst estimates',
    weakness: 'Zero analysis engines. Equities only. No AI, no signals, no forex/commodity/crypto.',
    gradient: 'from-emerald-600/20 to-emerald-400/20',
  },
  {
    name: 'Koyfin',
    price: 'Free - £100/mo',
    engines: '0 AI engines',
    strength: 'Beautiful dashboards, custom templates, economic data display, sector views',
    weakness: 'Data dashboard only. No automated analysis, no AI, no order flow, no signal generation.',
    gradient: 'from-purple-600/20 to-purple-400/20',
  },
  {
    name: 'Fiscal.ai',
    price: 'Free - £99/mo',
    engines: '1 LLM',
    strength: 'AI copilot for stock research, filing analysis via NLP, earnings call analysis',
    weakness: 'Single AI dimension vs SniperIQ\'s 21. No order flow, no options, no multi-asset, no signals.',
    gradient: 'from-cyan-600/20 to-cyan-400/20',
  },
  {
    name: 'MetaTrader 4/5',
    price: 'Free',
    engines: '0 AI engines',
    strength: 'Direct trade execution, Expert Advisors, MQL scripting, multi-broker support',
    weakness: 'No built-in AI, no fundamentals, no research reports, no screening. Executes trades; doesn\'t tell you what to trade.',
    gradient: 'from-red-600/20 to-red-400/20',
  },
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function ComparePage() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    Object.fromEntries(categories.map(c => [c.name, true]))
  );

  const toggleCategory = (name: string) => {
    setOpenCategories(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/80 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="SniperIQ" className="w-9 h-9" />
              <span className="text-xl font-black tracking-tight">
                SNIPER<span className="text-gray-300">IQ</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/engines" className="text-sm text-gray-400 hover:text-white transition-colors">Engines</Link>
              <span className="text-sm text-white font-semibold">Compare</span>
            </nav>

            <a
              href="https://app.sniperiq.ai/"
              className="group relative px-6 py-2.5 bg-gradient-to-r from-gray-200 to-gray-400 text-black rounded-xl font-bold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Launch Terminal</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-transparent" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-gray-800 rounded-full mb-8 backdrop-blur-xl">
            <BarChart3 className="w-4 h-4 text-gray-300" />
            <span className="text-sm font-semibold text-gray-300">Honest, Feature-by-Feature Comparison</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            SniperIQ vs <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">Everyone</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            Every feature mapped. Every competitor compared. Based on real backend capabilities — not marketing claims.
          </p>

          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            SniperIQ runs <span className="text-white font-semibold">21 proprietary AI engines</span> through a
            probabilistic consensus system. No other retail platform has this architecture.
          </p>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="py-8 px-4 sm:px-6 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '21', label: 'AI Engines', sub: 'vs 0-3 for competitors' },
              { value: '399', label: 'API Endpoints', sub: 'Full programmatic access' },
              { value: '90,000+', label: 'Assets Screened', sub: 'Multi-asset global coverage' },
              { value: '6+', label: 'Data Providers', sub: 'Auto-failover redundancy' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-white/[0.02] border border-gray-800 rounded-xl">
                <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-300 mt-1">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Comparison Table */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
              Complete Feature Matrix
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              7 categories, 50+ features. Green means the platform has it. Every claim verified against actual product capabilities.
            </p>
          </div>

          {/* Pricing Row */}
          <p className="text-xs text-gray-500 mb-2 sm:hidden text-center">Scroll sideways to compare all platforms &rarr;</p>
          <div className="overflow-x-auto mb-8 -mx-4 px-4">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-8 gap-0 items-end">
                <div className="p-4 text-sm font-bold text-gray-400 uppercase tracking-wide">Pricing</div>
                {competitors.map(c => (
                  <div
                    key={c.key}
                    className={`p-3 text-center ${c.highlight ? 'bg-emerald-500/10 border border-emerald-500/30 rounded-t-xl' : ''}`}
                  >
                    <div className={`text-xs font-bold mb-1 ${c.highlight ? 'text-emerald-400' : 'text-gray-400'}`}>
                      {c.name}
                    </div>
                    <div className={`text-xs ${c.highlight ? 'text-emerald-300 font-bold' : 'text-gray-500'}`}>
                      {pricing[c.key]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Category Tables */}
          {categories.map(category => {
            const isOpen = openCategories[category.name] !== false;
            const Icon = category.icon;

            return (
              <div key={category.name} className="mb-6">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex items-center gap-3 p-4 bg-white/[0.03] border border-gray-800 rounded-xl hover:bg-white/[0.05] transition-all mb-2"
                >
                  <div className={`w-8 h-8 bg-${category.color}-500/20 rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 text-${category.color}-400`} />
                  </div>
                  <span className="text-lg font-bold text-white flex-1 text-left">{category.name}</span>
                  <span className="text-xs text-gray-500 mr-2">{category.rows.length} features</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Table */}
                {isOpen && (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] border-collapse">
                      <thead>
                        <tr>
                          <th className="text-left p-3 text-xs text-gray-500 font-medium w-[250px]">Feature</th>
                          {competitors.map(c => (
                            <th
                              key={c.key}
                              className={`text-center p-3 text-xs font-bold ${
                                c.highlight
                                  ? 'text-emerald-400 bg-emerald-500/5'
                                  : 'text-gray-500'
                              }`}
                            >
                              {c.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {category.rows.map((row, idx) => (
                          <tr
                            key={idx}
                            className="border-t border-gray-900/50 hover:bg-white/[0.02] transition-colors"
                          >
                            <td className="p-3 text-sm text-gray-300 font-medium">{row.feature}</td>
                            {competitors.map(c => (
                              <td
                                key={c.key}
                                className={`p-3 text-center ${c.highlight ? 'bg-emerald-500/5' : ''}`}
                              >
                                <Cell value={row[c.key]} isSniperIQ={c.highlight} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Unique to SniperIQ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-bold text-emerald-300">Zero Competitors Offer This</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
              What Only SniperIQ Has
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              12 capabilities that exist on no other retail platform at any price point.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {uniqueFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="group p-6 bg-white/[0.02] border border-gray-800 rounded-xl hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Competitor Breakdown Cards */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
              Competitor Breakdown
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What each platform does well — and where they fall short compared to SniperIQ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitorCards.map((comp, i) => (
              <div
                key={i}
                className={`p-6 bg-gradient-to-br ${comp.gradient} border border-gray-800 rounded-2xl hover:border-gray-600 transition-all`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-black text-white">{comp.name}</h3>
                  <span className="text-xs font-mono text-gray-400 bg-black/30 px-2 py-1 rounded">{comp.price}</span>
                </div>

                <div className="text-xs font-bold text-gray-400 mb-4 px-2 py-1 bg-black/20 rounded inline-block">
                  {comp.engines}
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-xs font-semibold text-emerald-300">Strengths</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-6">{comp.strength}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-xs font-semibold text-red-300">vs SniperIQ</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-6">{comp.weakness}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Position Visual */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-white">Market Positioning</h2>
            <p className="text-gray-400">SniperIQ occupies a quadrant that no competitor fills.</p>
          </div>

          <div className="relative bg-white/[0.02] border border-gray-800 rounded-2xl p-8 sm:p-12">
            {/* Axes */}
            <div className="text-center text-xs text-gray-500 mb-6 font-bold uppercase tracking-wider">
              Analytical Depth
            </div>

            <div className="relative h-[400px] w-full">
              {/* Grid lines */}
              <div className="absolute inset-0 border-l border-b border-gray-700" />
              <div className="absolute left-1/2 top-0 bottom-0 border-l border-gray-800 border-dashed" />
              <div className="absolute top-1/2 left-0 right-0 border-t border-gray-800 border-dashed" />

              {/* Quadrant Labels */}
              <div className="absolute top-4 left-4 text-xs text-gray-600">High Depth + Low Price</div>
              <div className="absolute top-4 right-4 text-xs text-gray-600 text-right">High Depth + High Price</div>
              <div className="absolute bottom-4 left-4 text-xs text-gray-600">Low Depth + Low Price</div>
              <div className="absolute bottom-4 right-4 text-xs text-gray-600 text-right">Low Depth + High Price</div>

              {/* SniperIQ — top-left */}
              <div className="absolute top-[10%] left-[18%] transform -translate-x-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-black px-4 py-2 rounded-xl font-black text-sm shadow-lg shadow-emerald-500/30">
                    SniperIQ
                  </div>
                  <div className="text-xs text-emerald-400 mt-1 text-center font-medium">£39-199/mo</div>
                </div>
              </div>

              {/* Bloomberg — top-right */}
              <div className="absolute top-[15%] right-[10%]">
                <div className="bg-orange-500/20 border border-orange-500/30 px-3 py-1.5 rounded-lg text-xs text-orange-300 font-bold">
                  Bloomberg
                </div>
                <div className="text-xs text-gray-500 mt-1 text-center">£2,000/mo</div>
              </div>

              {/* TradingView — bottom-left */}
              <div className="absolute bottom-[20%] left-[20%]">
                <div className="bg-blue-500/20 border border-blue-500/30 px-3 py-1.5 rounded-lg text-xs text-blue-300 font-bold">
                  TradingView
                </div>
                <div className="text-xs text-gray-500 mt-1 text-center">Free-£50/mo</div>
              </div>

              {/* TIKR — bottom-left cluster */}
              <div className="absolute bottom-[30%] left-[35%]">
                <div className="bg-gray-500/20 border border-gray-500/30 px-3 py-1.5 rounded-lg text-xs text-gray-300 font-bold">
                  TIKR
                </div>
              </div>

              {/* Koyfin — bottom-left cluster */}
              <div className="absolute bottom-[15%] left-[40%]">
                <div className="bg-purple-500/20 border border-purple-500/30 px-3 py-1.5 rounded-lg text-xs text-purple-300 font-bold">
                  Koyfin
                </div>
              </div>

              {/* Fiscal.ai — middle-left */}
              <div className="absolute top-[40%] left-[25%]">
                <div className="bg-cyan-500/20 border border-cyan-500/30 px-3 py-1.5 rounded-lg text-xs text-cyan-300 font-bold">
                  Fiscal.ai
                </div>
              </div>

              {/* LSEG / FactSet — top-right cluster */}
              <div className="absolute top-[25%] right-[20%]">
                <div className="bg-gray-500/20 border border-gray-500/30 px-3 py-1.5 rounded-lg text-xs text-gray-400 font-bold">
                  LSEG / FactSet
                </div>
                <div className="text-xs text-gray-500 mt-1 text-center">£3,000-50,000/yr</div>
              </div>

              {/* MetaTrader — bottom-right */}
              <div className="absolute bottom-[25%] right-[25%]">
                <div className="bg-red-500/20 border border-red-500/30 px-3 py-1.5 rounded-lg text-xs text-red-300 font-bold">
                  MetaTrader
                </div>
              </div>
            </div>

            {/* X-axis label */}
            <div className="text-center text-xs text-gray-500 mt-6 font-bold uppercase tracking-wider">
              Price (Low → High)
            </div>

            {/* Empty quadrant callout */}
            <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
              <p className="text-sm text-emerald-300 font-semibold">
                SniperIQ is the only platform in the <span className="text-white font-black">High Depth + Accessible Price</span> quadrant. This market gap is the opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line Summary */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.05] border border-gray-800 rounded-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">The Bottom Line</h2>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              {[
                { platform: 'TradingView', verdict: 'shows data. SniperIQ analyses it through 21 engines and tells you what it means.' },
                { platform: 'Bloomberg', verdict: 'is the gold standard but costs 10x more and requires institutional infrastructure.' },
                { platform: 'TIKR & Koyfin', verdict: 'display financial numbers. They don\'t analyse them.' },
                { platform: 'Fiscal.ai', verdict: 'wraps one LLM around data. SniperIQ runs 21 specialised engines plus an LLM.' },
                { platform: 'MetaTrader', verdict: 'executes trades. SniperIQ tells you what to trade and why.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-400">
                    <span className="text-white font-bold">{item.platform}</span> {item.verdict}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.05] border border-gray-800 rounded-3xl">
            <Sparkles className="w-12 h-12 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white">
              Ready to See the Difference?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              21 AI engines. Probabilistic consensus. Automated trade levels. No other retail platform has this.
            </p>
            <a
              href="https://app.sniperiq.ai/"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gray-200 to-gray-400 text-black rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-110 hover:shadow-[0_0_100px_rgba(192,192,192,0.6)]"
            >
              <span>Launch Terminal — Free</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <p className="text-sm text-gray-500 mt-4">Free tier available. No credit card required.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="SniperIQ" className="w-7 h-7" />
              <span className="text-sm font-black">SNIPER<span className="text-gray-300">IQ</span></span>
            </div>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Eagle Digital Services Ltd</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
