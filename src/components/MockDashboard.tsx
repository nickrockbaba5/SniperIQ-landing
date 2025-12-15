import { useState, useEffect } from 'react';
import {
  TrendingDown, TrendingUp, Activity, Target, Shield,
  BarChart3, Zap, Brain, AlertTriangle
} from 'lucide-react';

export default function MockDashboard() {
  const [currentPrice, setCurrentPrice] = useState(178.42);
  const [priceHistory, setPriceHistory] = useState<number[]>([]);
  const [activeEngine, setActiveEngine] = useState(0);

  const engines = [
    { name: 'ICT Smart Money', signal: 'BEARISH', confidence: 87, color: 'red' },
    { name: 'Gamma Exposure', signal: 'NEUTRAL', confidence: 62, color: 'yellow' },
    { name: 'Volume Delta', signal: 'BEARISH', confidence: 78, color: 'red' },
    { name: 'ML Regime', signal: 'RISK-OFF', confidence: 91, color: 'orange' },
  ];

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrice(prev => {
        const change = (Math.random() - 0.52) * 0.5;
        const newPrice = Math.max(175, Math.min(182, prev + change));
        setPriceHistory(hist => [...hist.slice(-30), newPrice]);
        return newPrice;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Rotate through engines
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEngine(prev => (prev + 1) % engines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const priceChange = -2.34;
  const priceChangePercent = -1.29;

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse" />

      {/* Header Bar */}
      <div className="relative px-4 py-3 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs text-gray-400 font-mono">LIVE</span>
          <span className="text-sm font-bold text-white">Institutional Trade Intelligence</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300 font-medium">AAPL</span>
          <span className="px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-300 font-medium">US EQUITY</span>
        </div>
      </div>

      <div className="relative p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Main Signal Panel */}
          <div className="lg:col-span-2 space-y-4">
            {/* Price Header */}
            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/10 backdrop-blur">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                      ${currentPrice.toFixed(2)}
                    </span>
                    <span className={`text-lg font-bold ${priceChange < 0 ? 'text-red-400' : 'text-green-400'}`}>
                      {priceChange < 0 ? '' : '+'}{priceChange.toFixed(2)} ({priceChangePercent}%)
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">Apple Inc. • NASDAQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 bg-red-500/20 border border-red-500/40 rounded-lg flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-red-400" />
                    <span className="text-sm font-bold text-red-400">BEARISH</span>
                  </div>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="mt-4 h-16 flex items-end gap-0.5">
                {priceHistory.map((price, i) => {
                  const height = ((price - 175) / 7) * 100;
                  const isLast = i === priceHistory.length - 1;
                  return (
                    <div
                      key={i}
                      className={`flex-1 rounded-t transition-all duration-300 ${
                        isLast ? 'bg-red-500' : 'bg-gradient-to-t from-red-600/50 to-red-400/30'
                      }`}
                      style={{ height: `${Math.max(10, height)}%` }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Engine Signals Grid */}
            <div className="grid grid-cols-2 gap-3">
              {engines.map((engine, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl border transition-all duration-500 ${
                    i === activeEngine
                      ? 'bg-white/[0.08] border-blue-500/50 scale-[1.02]'
                      : 'bg-white/[0.02] border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400 font-medium">{engine.name}</span>
                    {i === activeEngine && (
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-bold ${
                      engine.color === 'red' ? 'text-red-400' :
                      engine.color === 'yellow' ? 'text-yellow-400' : 'text-orange-400'
                    }`}>
                      {engine.signal}
                    </span>
                    <span className="text-xs text-gray-500">{engine.confidence}%</span>
                  </div>
                  <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        engine.color === 'red' ? 'bg-red-500' :
                        engine.color === 'yellow' ? 'bg-yellow-500' : 'bg-orange-500'
                      }`}
                      style={{ width: `${engine.confidence}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Fusion Score */}
          <div className="space-y-4">
            {/* FusionBrain Score */}
            <div className="p-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl border border-red-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-red-400" />
                <span className="text-sm font-bold text-white">FusionBrain Score</span>
              </div>
              <div className="relative w-full aspect-square max-w-[140px] mx-auto">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                  <circle
                    cx="50" cy="50" r="40" fill="none"
                    stroke="url(#redGradient)" strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${0.72 * 251.2} 251.2`}
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-red-400">72</span>
                  <span className="text-xs text-gray-500">BEARISH</span>
                </div>
              </div>
            </div>

            {/* Key Levels */}
            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold text-white">KEY LEVELS</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Resistance</span>
                  <span className="text-red-400 font-mono">$182.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Support</span>
                  <span className="text-green-400 font-mono">$175.20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Gamma Wall</span>
                  <span className="text-purple-400 font-mono">$180.00</span>
                </div>
              </div>
            </div>

            {/* Alert */}
            <div className="p-3 bg-yellow-500/10 rounded-xl border border-yellow-500/20 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs text-yellow-200">
                Liquidity sweep detected at $179.80. Watch for reversal.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Engine Bar */}
      <div className="relative px-4 py-3 border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="flex items-center gap-4 overflow-x-auto">
          {['Sniper Master', 'ICT Engine', 'Gamma Analysis', 'ML Regime', 'Macro Filter'].map((name, i) => (
            <div key={i} className="flex items-center gap-2 flex-shrink-0">
              <div className={`w-2 h-2 rounded-full ${i < 3 ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`} />
              <span className="text-xs text-gray-400">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
