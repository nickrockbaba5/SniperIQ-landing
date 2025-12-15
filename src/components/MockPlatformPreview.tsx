import { useState, useEffect } from 'react';
import {
  Brain, Activity, Target, Shield, Zap, TrendingUp, TrendingDown,
  BarChart3, Globe, Layers, ArrowUpRight, ArrowDownRight,
  Cpu, AlertTriangle, CheckCircle2
} from 'lucide-react';

export default function MockPlatformPreview() {
  const [activeSignal, setActiveSignal] = useState(0);
  const [pulseEngine, setPulseEngine] = useState(0);
  const [livePrice, setLivePrice] = useState(178.42);

  const signals = [
    { symbol: 'AAPL', direction: 'BEARISH', confidence: 87, price: 178.42, change: -1.29 },
    { symbol: 'NVDA', direction: 'BULLISH', confidence: 92, price: 875.30, change: +2.45 },
    { symbol: 'MSFT', direction: 'NEUTRAL', confidence: 65, price: 378.91, change: +0.34 },
    { symbol: 'TSLA', direction: 'BEARISH', confidence: 78, price: 242.15, change: -3.21 },
  ];

  const engines = [
    { name: 'ICT Smart Money', status: 'active', signal: 'BEAR' },
    { name: 'Gamma Exposure', status: 'active', signal: 'NEUT' },
    { name: 'Volume Footprint', status: 'active', signal: 'BEAR' },
    { name: 'ML Regime', status: 'active', signal: 'RISK' },
    { name: 'Macro Filter', status: 'active', signal: 'HAWK' },
    { name: 'Scenario Engine', status: 'processing', signal: '...' },
  ];

  // Rotate signals
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSignal(prev => (prev + 1) % signals.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Pulse engines
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseEngine(prev => (prev + 1) % engines.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Simulate price
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePrice(prev => {
        const change = (Math.random() - 0.52) * 0.3;
        return Math.max(177, Math.min(180, prev + change));
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentSignal = signals[activeSignal];

  return (
    <div className="relative w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Multi-color animated gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
      </div>

      {/* Header */}
      <div className="relative px-4 py-3 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-gray-900" />
            </div>
            <div>
              <span className="text-lg font-bold text-white">SniperIQ Terminal</span>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  18 engines active
                </span>
                <span>•</span>
                <span>Real-time</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-lg">
              <span className="text-xs font-bold text-green-400">PRO</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 p-4 sm:p-6">

        {/* Left Panel - Engines */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Engine Status
          </div>
          {engines.map((engine, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                i === pulseEngine
                  ? 'bg-white/[0.08] border-blue-500/50 scale-[1.02]'
                  : 'bg-white/[0.02] border-white/5'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    engine.status === 'active' ? 'bg-green-400' : 'bg-yellow-400 animate-pulse'
                  }`} />
                  <span className="text-xs text-gray-300">{engine.name}</span>
                </div>
                <span className={`text-xs font-bold ${
                  engine.signal === 'BEAR' ? 'text-red-400' :
                  engine.signal === 'BULL' ? 'text-green-400' :
                  engine.signal === 'RISK' ? 'text-orange-400' :
                  engine.signal === 'HAWK' ? 'text-purple-400' :
                  engine.signal === '...' ? 'text-yellow-400' : 'text-gray-400'
                }`}>
                  {engine.signal}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Center Panel - Main Signal */}
        <div className="lg:col-span-6 space-y-4">
          {/* Signal Card */}
          <div className={`p-6 rounded-2xl border backdrop-blur-xl transition-all duration-500 ${
            currentSignal.direction === 'BEARISH'
              ? 'bg-red-500/10 border-red-500/30'
              : currentSignal.direction === 'BULLISH'
              ? 'bg-green-500/10 border-green-500/30'
              : 'bg-yellow-500/10 border-yellow-500/30'
          }`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-black text-white">{currentSignal.symbol}</span>
                  <div className={`px-3 py-1 rounded-lg flex items-center gap-1 ${
                    currentSignal.direction === 'BEARISH'
                      ? 'bg-red-500/20 text-red-400'
                      : currentSignal.direction === 'BULLISH'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {currentSignal.direction === 'BEARISH' ? <TrendingDown className="w-4 h-4" /> :
                     currentSignal.direction === 'BULLISH' ? <TrendingUp className="w-4 h-4" /> :
                     <Activity className="w-4 h-4" />}
                    <span className="text-sm font-bold">{currentSignal.direction}</span>
                  </div>
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-black text-white font-mono">
                    ${currentSignal.symbol === 'AAPL' ? livePrice.toFixed(2) : currentSignal.price.toFixed(2)}
                  </span>
                  <span className={`text-lg font-bold flex items-center ${
                    currentSignal.change < 0 ? 'text-red-400' : 'text-green-400'
                  }`}>
                    {currentSignal.change < 0 ? <ArrowDownRight className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                    {currentSignal.change > 0 ? '+' : ''}{currentSignal.change}%
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400 mb-1">Confidence</div>
                <div className="text-3xl font-black text-white">{currentSignal.confidence}%</div>
              </div>
            </div>

            {/* Confidence Bar */}
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  currentSignal.direction === 'BEARISH' ? 'bg-gradient-to-r from-red-600 to-red-400' :
                  currentSignal.direction === 'BULLISH' ? 'bg-gradient-to-r from-green-600 to-green-400' :
                  'bg-gradient-to-r from-yellow-600 to-yellow-400'
                }`}
                style={{ width: `${currentSignal.confidence}%` }}
              />
            </div>
          </div>

          {/* FusionBrain Score */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/10 text-center">
              <Brain className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-purple-400">72</div>
              <div className="text-xs text-gray-500">FusionBrain</div>
            </div>
            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/10 text-center">
              <Target className="w-5 h-5 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-blue-400">$175</div>
              <div className="text-xs text-gray-500">Target</div>
            </div>
            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/10 text-center">
              <Shield className="w-5 h-5 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-green-400">2.3x</div>
              <div className="text-xs text-gray-500">Risk/Reward</div>
            </div>
          </div>

          {/* Mini Watchlist */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {signals.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveSignal(i)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg border transition-all ${
                  i === activeSignal
                    ? 'bg-white/10 border-white/30'
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05]'
                }`}
              >
                <span className="text-sm font-bold text-white">{s.symbol}</span>
                <span className={`ml-2 text-xs ${s.change < 0 ? 'text-red-400' : 'text-green-400'}`}>
                  {s.change > 0 ? '+' : ''}{s.change}%
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Panel - Alerts */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            Live Alerts
          </div>
          {[
            { type: 'warning', text: 'Liquidity sweep at $179.80', time: '2m ago' },
            { type: 'info', text: 'Gamma wall at $180', time: '5m ago' },
            { type: 'success', text: 'OB touched at $178.20', time: '8m ago' },
            { type: 'warning', text: 'Fed minutes in 2h', time: '15m ago' },
          ].map((alert, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl border ${
                alert.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/20' :
                alert.type === 'success' ? 'bg-green-500/10 border-green-500/20' :
                'bg-blue-500/10 border-blue-500/20'
              }`}
            >
              <div className="flex items-start gap-2">
                {alert.type === 'warning' ? <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" /> :
                 alert.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" /> :
                 <Zap className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />}
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-200 truncate">{alert.text}</p>
                  <span className="text-[10px] text-gray-500">{alert.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative px-4 py-3 border-t border-white/10 bg-black/60 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span className="text-gray-400">18/18 engines</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-green-400" />
              <span className="text-gray-400">Real-time data</span>
            </div>
          </div>
          <span className="text-xs text-gray-500">Updated: Just now</span>
        </div>
      </div>
    </div>
  );
}
