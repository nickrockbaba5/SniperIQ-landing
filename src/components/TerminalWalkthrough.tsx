import { useState, useEffect, useCallback } from 'react';
import {
  Play, Pause, SkipForward, RotateCcw, Volume2, VolumeX,
  TrendingUp, Brain, Target, BarChart3, Activity, Zap,
  Building2, Users, Shield, DollarSign, ArrowUpRight,
  ChevronRight, Eye, Layers, LineChart, PieChart
} from 'lucide-react';

interface WalkthroughStep {
  id: number;
  title: string;
  description: string;
  highlight: string;
  duration: number; // milliseconds
}

const steps: WalkthroughStep[] = [
  {
    id: 1,
    title: 'Select Your Asset',
    description: 'Search any stock, index, forex pair, crypto or commodity',
    highlight: 'search',
    duration: 3000,
  },
  {
    id: 2,
    title: '18 AI Engines Activate',
    description: 'Our proprietary engines analyse the asset in real-time',
    highlight: 'engines',
    duration: 4000,
  },
  {
    id: 3,
    title: 'Institutional Flow Detection',
    description: 'See where smart money is positioning - ICT concepts, dark pools, gamma exposure',
    highlight: 'institutional',
    duration: 4000,
  },
  {
    id: 4,
    title: 'AI Generates Insights',
    description: 'GPT-4 powered copilot synthesises all data into actionable analysis',
    highlight: 'ai',
    duration: 4000,
  },
  {
    id: 5,
    title: 'Get Your Edge',
    description: 'Unified conviction score with institutional-grade research in seconds',
    highlight: 'score',
    duration: 3000,
  },
];

export default function TerminalWalkthrough() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-advance through steps
  useEffect(() => {
    if (!isPlaying) return;

    const step = steps[currentStep];
    const interval = 50; // Update progress every 50ms
    const increment = (interval / step.duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next step
          setCurrentStep((s) => (s + 1) % steps.length);
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, currentStep]);

  const handlePlayPause = useCallback(() => {
    setIsPlaying((p) => !p);
  }, []);

  const handleSkip = useCallback(() => {
    setProgress(0);
    setCurrentStep((s) => (s + 1) % steps.length);
  }, []);

  const handleRestart = useCallback(() => {
    setProgress(0);
    setCurrentStep(0);
    setIsPlaying(true);
  }, []);

  const handleStepClick = useCallback((index: number) => {
    setProgress(0);
    setCurrentStep(index);
  }, []);

  const currentStepData = steps[currentStep];

  return (
    <div className="relative w-full">
      {/* Main Video-like Container */}
      <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-gray-800 bg-gradient-to-br from-gray-900 via-black to-gray-900 group hover:border-gray-600 transition-all duration-500">
        {/* Animated Background Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Animated Terminal Content */}
        <div className="absolute inset-0 p-4 md:p-8 flex flex-col">
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-sm text-gray-400 font-mono">SniperIQ Terminal v2.0</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LIVE</span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 grid grid-cols-12 gap-4">
            {/* Left Panel - Search & Stock Info */}
            <div className="col-span-4 space-y-4">
              {/* Search Box */}
              <div
                className={`p-3 rounded-xl border transition-all duration-500 ${
                  currentStepData.highlight === 'search'
                    ? 'bg-emerald-500/20 border-emerald-500/50 scale-105 shadow-lg shadow-emerald-500/20'
                    : 'bg-white/[0.03] border-white/10'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-gray-400" />
                  <div className="flex-1">
                    <div
                      className={`h-3 rounded ${
                        currentStepData.highlight === 'search'
                          ? 'bg-gradient-to-r from-emerald-400 to-cyan-400'
                          : 'bg-white/20'
                      }`}
                      style={{
                        width: currentStepData.highlight === 'search' ? '100%' : '60%',
                        transition: 'all 0.5s',
                      }}
                    />
                  </div>
                </div>
                {currentStepData.highlight === 'search' && (
                  <div className="mt-2 text-xs text-emerald-400 font-mono animate-pulse">
                    Searching: AAPL...
                  </div>
                )}
              </div>

              {/* Stock Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Apple Inc.</div>
                    <div className="text-xs text-gray-500">NASDAQ: AAPL</div>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-2xl font-black text-white">$178.42</div>
                    <div className="flex items-center gap-1 text-emerald-400 text-xs">
                      <ArrowUpRight className="w-3 h-3" />
                      +2.34%
                    </div>
                  </div>
                  <div className="text-right text-xs text-gray-500">
                    <div>Vol: 52.3M</div>
                    <div>MCap: $2.78T</div>
                  </div>
                </div>
              </div>

              {/* Score Card */}
              <div
                className={`p-4 rounded-xl border transition-all duration-500 ${
                  currentStepData.highlight === 'score'
                    ? 'bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border-emerald-500/50 scale-105 shadow-lg shadow-emerald-500/20'
                    : 'bg-white/[0.03] border-white/10'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white">SniperIQ Score</span>
                </div>
                <div className="flex items-end gap-2">
                  <span
                    className={`text-3xl font-black transition-all duration-500 ${
                      currentStepData.highlight === 'score'
                        ? 'text-emerald-400 scale-110'
                        : 'text-gray-400'
                    }`}
                  >
                    87
                  </span>
                  <span className="text-sm text-gray-500 mb-1">/100</span>
                  {currentStepData.highlight === 'score' && (
                    <span className="px-2 py-0.5 bg-emerald-500/20 rounded text-xs text-emerald-300 font-bold animate-pulse">
                      STRONG BUY
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Center Panel - AI Engines Grid */}
            <div className="col-span-5 space-y-4">
              {/* Engines Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-bold text-white">18 AI Engines</span>
                </div>
                <span className="text-xs text-emerald-400">All Active</span>
              </div>

              {/* Engine Cards Grid */}
              <div
                className={`grid grid-cols-3 gap-2 transition-all duration-500 ${
                  currentStepData.highlight === 'engines' ? 'scale-[1.02]' : ''
                }`}
              >
                {[
                  { name: 'Momentum', icon: TrendingUp, color: 'emerald' },
                  { name: 'Technical', icon: LineChart, color: 'cyan' },
                  { name: 'Sentiment', icon: Brain, color: 'purple' },
                  { name: 'Options', icon: Target, color: 'amber' },
                  { name: 'Macro', icon: BarChart3, color: 'blue' },
                  { name: 'Risk', icon: Shield, color: 'red' },
                  { name: 'Quant', icon: Activity, color: 'pink' },
                  { name: 'Value', icon: DollarSign, color: 'green' },
                  { name: 'Pattern', icon: PieChart, color: 'orange' },
                ].map((engine, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-lg border transition-all duration-300 ${
                      currentStepData.highlight === 'engines'
                        ? `bg-${engine.color}-500/20 border-${engine.color}-500/50 animate-pulse`
                        : 'bg-white/[0.03] border-white/10'
                    }`}
                    style={{
                      animationDelay: `${i * 100}ms`,
                    }}
                  >
                    <engine.icon
                      className={`w-4 h-4 mb-1 ${
                        currentStepData.highlight === 'engines'
                          ? `text-${engine.color}-400`
                          : 'text-gray-500'
                      }`}
                    />
                    <div className="text-[10px] text-gray-400 truncate">{engine.name}</div>
                    <div
                      className={`text-xs font-bold ${
                        currentStepData.highlight === 'engines' ? 'text-white' : 'text-gray-500'
                      }`}
                    >
                      {70 + Math.floor(Math.random() * 25)}%
                    </div>
                  </div>
                ))}
              </div>

              {/* Institutional Panel */}
              <div
                className={`p-4 rounded-xl border transition-all duration-500 ${
                  currentStepData.highlight === 'institutional'
                    ? 'bg-amber-500/10 border-amber-500/50 scale-[1.02] shadow-lg shadow-amber-500/20'
                    : 'bg-white/[0.03] border-white/10'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-bold text-white">Institutional Flow</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-xs text-gray-500">Dark Pool</div>
                    <div
                      className={`text-sm font-bold ${
                        currentStepData.highlight === 'institutional'
                          ? 'text-emerald-400'
                          : 'text-gray-400'
                      }`}
                    >
                      BULLISH
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Gamma</div>
                    <div
                      className={`text-sm font-bold ${
                        currentStepData.highlight === 'institutional'
                          ? 'text-amber-400'
                          : 'text-gray-400'
                      }`}
                    >
                      +$2.1B
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">ICT</div>
                    <div
                      className={`text-sm font-bold ${
                        currentStepData.highlight === 'institutional'
                          ? 'text-cyan-400'
                          : 'text-gray-400'
                      }`}
                    >
                      ORDER BLK
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - AI Copilot */}
            <div className="col-span-3 space-y-4">
              <div
                className={`h-full p-4 rounded-xl border transition-all duration-500 ${
                  currentStepData.highlight === 'ai'
                    ? 'bg-purple-500/10 border-purple-500/50 shadow-lg shadow-purple-500/20'
                    : 'bg-white/[0.03] border-white/10'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-bold text-white">AI Copilot</span>
                </div>
                <div className="space-y-2">
                  {currentStepData.highlight === 'ai' ? (
                    <>
                      <div className="text-xs text-gray-300 animate-pulse">
                        Analysing AAPL with 18 engines...
                      </div>
                      <div className="h-2 bg-purple-500/30 rounded overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="text-[10px] text-purple-400 mt-3 leading-relaxed">
                        "AAPL shows strong institutional accumulation with bullish gamma positioning.
                        Technical structure supports upside to $185..."
                      </div>
                    </>
                  ) : (
                    <div className="space-y-2">
                      <div className="h-2 bg-white/10 rounded w-full" />
                      <div className="h-2 bg-white/10 rounded w-4/5" />
                      <div className="h-2 bg-white/10 rounded w-3/5" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Step Overlay */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 px-6 py-3 bg-black/80 backdrop-blur-xl rounded-full border border-white/20">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-sm font-bold text-black">
              {currentStepData.id}
            </span>
            <div>
              <div className="text-sm font-bold text-white">{currentStepData.title}</div>
              <div className="text-xs text-gray-400">{currentStepData.description}</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-100"
            style={{
              width: `${((currentStep + progress / 100) / steps.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Controls Bar */}
      <div className="mt-4 flex items-center justify-between px-4">
        {/* Left Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePlayPause}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" />
            )}
          </button>
          <button
            onClick={handleSkip}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
          >
            <SkipForward className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={handleRestart}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
          >
            <RotateCcw className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => setIsMuted((m) => !m)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center gap-2">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => handleStepClick(i)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
                i === currentStep
                  ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/50'
                  : 'bg-white/5 hover:bg-white/10 border border-transparent'
              }`}
            >
              <span
                className={`text-xs font-bold ${
                  i === currentStep ? 'text-emerald-400' : 'text-gray-500'
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`text-xs hidden md:inline ${
                  i === currentStep ? 'text-white' : 'text-gray-500'
                }`}
              >
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Duration */}
        <div className="text-sm text-gray-500">
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>

      {/* Feature Cards Below */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            icon: Zap,
            title: '18 AI Engines',
            desc: 'Real-time analysis from momentum to macro',
            color: 'emerald',
          },
          {
            icon: Users,
            title: 'Institutional Flow',
            desc: 'See where smart money is positioning',
            color: 'amber',
          },
          {
            icon: Brain,
            title: 'AI Copilot',
            desc: 'GPT-4 powered research synthesis',
            color: 'purple',
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all group"
          >
            <div
              className={`w-10 h-10 rounded-lg bg-${feature.color}-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
            >
              <feature.icon className={`w-5 h-5 text-${feature.color}-400`} />
            </div>
            <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
            <p className="text-xs text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
