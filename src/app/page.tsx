'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Brain, Zap, TrendingUp, Shield, Activity, BarChart3, Globe, ArrowRight, Play,
  Sparkles, Cpu, Target, ChevronRight, Check, DollarSign, LineChart,
  TrendingDown, Layers, FileText, MessageSquare, Lightbulb, Building2, Clock, Loader2
} from 'lucide-react';
import { redirectToCheckout, type TierName } from '../lib/stripe';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [liveStats, setLiveStats] = useState({
    analyses: 127543,
    engines: 9,
    accuracy: 94.2,
    uptime: 99.9
  });

  // Pricing state
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  // Live counter
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        analyses: prev.analyses + Math.floor(Math.random() * 3) + 1
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Pricing tiers configuration
  const pricingTiers = [
    {
      name: 'free' as TierName,
      displayName: 'Free',
      price: { monthly: 0, yearly: 0 },
      description: 'Get started free',
      features: ['3 analyses/day', '5 AI queries/day', '0 exports/month', '3 basic engines', 'Basic fundamentals', 'Delayed data'],
      cta: 'Get Started',
      ctaLink: 'https://app.sniperiq.ai/register',
      popular: false,
    },
    {
      name: 'starter' as TierName,
      displayName: 'Starter',
      price: { monthly: 39, yearly: 390 },
      description: 'Essential trading intelligence',
      features: ['10 analyses/day', '20 AI queries/day', '10 exports/month', '3 basic engines', 'Basic fundamentals', 'Delayed data'],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'pro' as TierName,
      displayName: 'Pro',
      price: { monthly: 99, yearly: 990 },
      description: 'Professional trading suite',
      features: ['50 analyses/day', '100 AI queries/day', '50 exports/month', 'All 12 AI engines', 'Full fundamentals', 'Real-time data'],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'advanced' as TierName,
      displayName: 'Advanced',
      price: { monthly: 199, yearly: 1990 },
      description: 'Institutional-grade intelligence',
      features: ['200 analyses/day', '500 AI queries/day', '200 exports/month', 'All 12 AI engines', 'Premium fundamentals', 'Real-time data + API access'],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'enterprise' as TierName,
      displayName: 'Enterprise',
      price: { monthly: 0, yearly: 0 },
      description: 'Custom enterprise solutions',
      features: ['Unlimited analyses', 'Unlimited AI queries', 'Unlimited exports', 'All 12 AI engines', 'Premium fundamentals', 'Real-time data', 'Dedicated support', 'White-label options'],
      cta: 'Contact Sales',
      ctaLink: 'mailto:enterprise@sniperiq.ai?subject=SniperIQ%20Enterprise%20Plan',
      popular: false,
    },
  ];

  // Handle Stripe checkout
  const handleSelectTier = async (tierName: TierName) => {
    if (tierName === 'free') {
      window.location.href = 'https://app.sniperiq.ai/register';
      return;
    }

    if (tierName === 'enterprise') {
      window.location.href = 'mailto:enterprise@sniperiq.ai?subject=SniperIQ%20Enterprise%20Plan';
      return;
    }

    setCheckoutLoading(tierName);
    setCheckoutError(null);

    try {
      await redirectToCheckout(tierName, billingCycle);
    } catch (error) {
      console.error('Checkout error:', error);
      setCheckoutError(error instanceof Error ? error.message : 'Failed to start checkout');
      // Fallback to registration page
      setTimeout(() => {
        window.location.href = 'https://app.sniperiq.ai/register';
      }, 2000);
    } finally {
      setCheckoutLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Premium Animated Background - Silver/Gray theme - Mobile Optimized */}
      <div className="fixed inset-0 z-0">
        {/* Silver gradient orbs with mouse parallax - Reduced blur on mobile */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
          }}
        >
          {/* Mobile: smaller orbs with less blur */}
          <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-gray-300/30 rounded-full blur-[80px] md:blur-[150px] animate-pulse"
            style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-10%] right-[10%] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-gray-400/20 rounded-full blur-[80px] md:blur-[150px] animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute top-[40%] right-[20%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-gray-500/15 rounded-full blur-[60px] md:blur-[150px] animate-pulse"
            style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>

        {/* Animated grid - Disabled on mobile for performance */}
        <div
          className="hidden md:block absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(192, 192, 192, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 192, 192, 0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)`
          }}
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,black_100%)]" />

        {/* Noise texture - Reduced opacity on mobile */}
        <div className="absolute inset-0 opacity-[0.01] md:opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Premium Header - Apple style */}
        <header className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/60 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between gap-3">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl p-[1px] shadow-lg shadow-gray-500/50">
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-gray-300" />
                  </div>
                </div>
                <span className="text-xl font-black tracking-tight">
                  SNIPER<span className="text-gray-300">IQ</span>
                </span>
              </div>

              {/* Nav */}
              <nav className="hidden md:flex items-center gap-8">
                <Link href="/screener" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Screener</Link>
                <Link href="/research/AAPL" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Research</Link>
                <a href="#modules" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Platform</a>
                <a href="#comparison" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Compare</a>
                <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Pricing</a>
              </nav>

              {/* CTA */}
              <Link
                href="https://app.sniperiq.ai/register"
                className="group relative px-6 py-2.5 bg-gradient-to-r from-gray-200 to-gray-400 text-black rounded-xl font-bold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Launch Terminal</span>
              </Link>
            </div>
          </div>
        </header>

        {/* ENHANCED HERO - Full screen with terminal preview */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
          {/* Floating particles - silver */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}

          <div className="max-w-7xl mx-auto text-center relative z-10">
            {/* Company Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-gray-800/50 rounded-full mb-4 backdrop-blur-xl">
              <span className="text-xs text-gray-500">
                A product of{' '}
                <a
                  href="https://find-and-update.company-information.service.gov.uk/company/16584009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors underline"
                >
                  Eagle Digital Services Ltd
                </a>
              </span>
            </div>

            {/* Live Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-gray-800 rounded-full mb-10 backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-300">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-300"></span>
              </div>
              <span className="text-sm font-semibold text-gray-300">
                UK-Based • Institutional Grade • Live at finscan.uk
              </span>
            </div>

            {/* Main headline - Mobile first */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight tracking-tight">
              <span className="block text-white">
                SniperIQ Terminal
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gray-300 tracking-tight">
              Institutional Trading + Fundamentals + AI Copilot
            </p>

            {/* Subheadline - Compact for mobile */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              One platform powered by <span className="text-white font-semibold">9 AI engines</span>, comprehensive fundamentals, and real-time liquidity intelligence.
            </p>

            {/* CTAs - Mobile optimized */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-16">
              <Link
                href="https://app.sniperiq.ai/register"
                className="group relative px-8 py-4 bg-gradient-to-r from-gray-200 to-gray-400 text-black rounded-xl font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(192,192,192,0.5)] flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Launch Terminal</span>
                <ArrowRight className="w-6 h-6 relative group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

              <a
                href="#live-preview"
                className="group px-10 py-5 bg-white/[0.03] hover:bg-white/[0.08] border border-gray-800 hover:border-gray-600 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3 backdrop-blur-xl"
              >
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </a>
            </div>

            {/* Live stats - Silver cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { value: liveStats.analyses.toLocaleString(), label: 'Analyses Generated', icon: Activity },
                { value: `${liveStats.engines} AI`, label: 'Engines Active', icon: Cpu },
                { value: `${liveStats.accuracy}%`, label: 'Model Accuracy', icon: Target },
                { value: `${liveStats.uptime}%`, label: 'Uptime SLA', icon: Shield }
              ].map((stat, i) => (
                <div key={i} className="group relative p-6 bg-white/[0.02] backdrop-blur-xl border border-gray-800 rounded-2xl hover:bg-white/[0.05] hover:border-gray-600 transition-all duration-500 hover:scale-105">
                  <stat.icon className="w-5 h-5 text-gray-300 mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-black text-gray-200 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gray-400/0 group-hover:bg-gray-400/10 transition-all duration-500 -z-10 blur-xl" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THREE HERO MODULES SECTION */}
        <section id="modules" className="py-40 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section header */}
            <div className="text-center mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white">
                Three Platforms. One Terminal.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light">
                Everything you need for institutional-grade analysis in a single interface.
              </p>
            </div>

            {/* Module 1: Institutional Trade Intelligence */}
            <div className="mb-16 sm:mb-24 group">
              <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.05] border border-gray-800 rounded-2xl sm:rounded-3xl backdrop-blur-2xl hover:border-gray-600 transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">Institutional Trade Intelligence</h3>
                    <p className="text-sm sm:text-base text-gray-400">Retail-accessible institutional trading engine</p>
                  </div>
                </div>

                {/* Screenshot placeholder */}
                <div className="mb-6 h-48 sm:h-64 md:h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl border border-gray-800 flex items-center justify-center">
                  <div className="text-center px-4">
                    <LineChart className="w-12 h-12 sm:w-16 sm:h-16 text-gray-600 mx-auto mb-2 sm:mb-3" />
                    <p className="text-gray-500 text-sm sm:text-base">Terminal Screenshot Here</p>
                    <p className="text-gray-600 text-xs sm:text-sm">ICT Structure + Gamma + Liquidity Maps</p>
                  </div>
                </div>

                {/* Features grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: Target, title: 'Smart Money (ICT)', desc: 'Order blocks, FVG, liquidity pools' },
                    { icon: Layers, title: 'Gamma Exposure', desc: 'Options gamma walls & dealer hedging' },
                    { icon: Activity, title: 'Liquidity Map', desc: 'Stop-loss clusters & sweep zones' },
                    { icon: BarChart3, title: 'Volume Footprint', desc: 'Delta analysis & absorption' },
                    { icon: Zap, title: 'Scenario Engine', desc: 'Multi-path probability modeling' },
                    { icon: Brain, title: 'ML Regime Detection', desc: 'Market phase classification' },
                    { icon: Globe, title: 'Macro Filter', desc: 'FRED data & central bank policy' }
                  ].map((feature, i) => (
                    <div key={i} className="p-4 bg-white/[0.02] border border-gray-800 rounded-xl hover:bg-white/[0.04] transition-all">
                      <feature.icon className="w-5 h-5 text-blue-400 mb-3" />
                      <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300 font-medium">
                    Sniper Master
                  </span>
                  <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium">
                    FusionBrain
                  </span>
                  <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-300 font-medium">
                    Multi-Timeframe
                  </span>
                </div>
              </div>
            </div>

            {/* Module 2: Company Fundamentals Terminal */}
            <div className="mb-16 sm:mb-24 group">
              <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.05] border border-gray-800 rounded-2xl sm:rounded-3xl backdrop-blur-2xl hover:border-gray-600 transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">Company Fundamentals Terminal</h3>
                    <p className="text-sm sm:text-base text-gray-400">Institutional-grade fundamental analysis</p>
                  </div>
                </div>

                {/* Screenshot placeholder */}
                <div className="mb-6 h-48 sm:h-64 md:h-80 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-xl sm:rounded-2xl border border-gray-800 flex items-center justify-center">
                  <div className="text-center px-4">
                    <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-gray-600 mx-auto mb-2 sm:mb-3" />
                    <p className="text-gray-500 text-sm sm:text-base">Fundamentals Page Screenshot</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Financial Statements + Key Metrics + Ratios</p>
                  </div>
                </div>

                {/* Features grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: FileText, title: 'Financial Statements', desc: 'Income, Balance Sheet, Cash Flow (10 years)' },
                    { icon: BarChart3, title: 'Ratios & Key Metrics', desc: 'P/E, ROE, Debt ratios, margins, growth' },
                    { icon: TrendingUp, title: 'Earnings & Surprises', desc: 'Historical EPS, estimates, beat/miss' },
                    { icon: Shield, title: 'Ownership Analysis', desc: 'Institutional holders, insider trades' },
                    { icon: Globe, title: 'ETF Exposure', desc: 'Which funds hold this stock' },
                    { icon: DollarSign, title: 'Fair Value AI', desc: 'DCF valuation with AI adjustments' },
                    { icon: Activity, title: 'Global Coverage', desc: '30,000+ companies worldwide' }
                  ].map((feature, i) => (
                    <div key={i} className="p-4 bg-white/[0.02] border border-gray-800 rounded-xl hover:bg-white/[0.04] transition-all">
                      <feature.icon className="w-5 h-5 text-emerald-400 mb-3" />
                      <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Compare tag */}
                <div className="flex items-center gap-3 mt-8 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                  <Check className="w-5 h-5 text-emerald-400" />
                  <p className="text-sm text-emerald-300 font-medium">
                    <span className="font-bold">Quant + Fundamentals + AI</span> — comparable to Fiscal.ai, but integrated with trading intelligence
                  </p>
                </div>
              </div>
            </div>

            {/* Module 3: AI Research Copilot */}
            <div className="group">
              <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.05] border border-gray-800 rounded-2xl sm:rounded-3xl backdrop-blur-2xl hover:border-gray-600 transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">AI Research Copilot</h3>
                    <p className="text-sm sm:text-base text-gray-400">Ask anything. Get institutional-grade answers.</p>
                  </div>
                </div>

                {/* Screenshot placeholder */}
                <div className="mb-6 h-48 sm:h-64 md:h-80 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl sm:rounded-2xl border border-gray-800 flex items-center justify-center">
                  <div className="text-center px-4">
                    <MessageSquare className="w-12 h-12 sm:w-16 sm:h-16 text-gray-600 mx-auto mb-2 sm:mb-3" />
                    <p className="text-gray-500 text-sm sm:text-base">AI Chat Interface Screenshot</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Research Engine + Context-Aware Analysis</p>
                  </div>
                </div>

                {/* Features grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: Lightbulb, title: 'Generate Research Instantly', desc: 'Full reports with charts & data' },
                    { icon: FileText, title: 'Explain Fundamentals', desc: 'Break down financial statements' },
                    { icon: Target, title: 'Explain Liquidity Traps', desc: 'ICT concepts in plain language' },
                    { icon: TrendingUp, title: 'Compare Companies', desc: 'Side-by-side fundamental analysis' },
                    { icon: Zap, title: 'Generate Trade Setups', desc: 'Entry/exit with risk parameters' },
                    { icon: Globe, title: 'Explain Macro Regime', desc: 'Central bank policy & correlations' },
                    { icon: Shield, title: 'Automatic Risk Filters', desc: 'FCA-compliant disclaimers' }
                  ].map((feature, i) => (
                    <div key={i} className="p-4 bg-white/[0.02] border border-gray-800 rounded-xl hover:bg-white/[0.04] transition-all">
                      <feature.icon className="w-5 h-5 text-amber-400 mb-3" />
                      <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Powered by */}
                <div className="flex items-center gap-3 mt-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                  <Brain className="w-5 h-5 text-amber-400" />
                  <p className="text-sm text-amber-300 font-medium">
                    Powered by GPT-4 + unified research context from ML, macro, fundamentals & scenarios
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENHANCED PRICING SECTION with Stripe Integration */}
        <section id="pricing" className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-gray-800 rounded-full mb-6 backdrop-blur-xl">
                <span className="text-sm font-semibold text-gray-300">
                  Simple, Transparent Pricing
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight text-white">
                Choose Your Plan
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light">
                Institutional-grade trading intelligence at every level. Choose the plan that fits your workflow.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-10 sm:mb-12">
              <span className={`text-sm sm:text-base ${billingCycle === 'monthly' ? 'text-white font-semibold' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-14 h-7 sm:w-16 sm:h-8 rounded-full bg-gray-700 transition-colors hover:bg-gray-600"
                aria-label="Toggle billing cycle"
              >
                <div
                  className={`absolute top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-400 transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-8 sm:translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm sm:text-base ${billingCycle === 'yearly' ? 'text-white font-semibold' : 'text-gray-500'}`}>
                Yearly
                <span className="ml-2 px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded-full font-bold">
                  Save 17%
                </span>
              </span>
            </div>

            {/* Checkout Error */}
            {checkoutError && (
              <div className="max-w-md mx-auto mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm text-center animate-pulse">
                {checkoutError}
              </div>
            )}

            {/* Pricing Cards Grid */}
            <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
              {pricingTiers.map((tier) => {
                const price = billingCycle === 'yearly' && tier.price.yearly > 0
                  ? (tier.price.yearly / 12).toFixed(0)
                  : tier.price.monthly;
                const isLoading = checkoutLoading === tier.name;
                const isPro = tier.popular;

                return (
                  <div
                    key={tier.name}
                    className={`group relative p-6 sm:p-7 backdrop-blur-xl rounded-3xl transition-all duration-500 ${
                      isPro
                        ? 'bg-gradient-to-br from-gray-500/10 via-white/[0.05] to-gray-500/10 border-2 border-gray-400 hover:border-gray-300 scale-[1.02] hover:scale-105 shadow-2xl shadow-gray-500/20'
                        : 'bg-white/[0.02] border border-gray-800 hover:bg-white/[0.05] hover:border-gray-600'
                    }`}
                  >
                    {/* Most Popular Badge */}
                    {isPro && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-gray-300 to-gray-500 text-black text-xs font-black rounded-full uppercase tracking-wider">
                        Most Popular
                      </div>
                    )}

                    {/* Tier Header */}
                    <div className="mb-6">
                      <h3 className={`text-xl sm:text-2xl font-black mb-1 ${isPro ? 'text-white' : 'text-white'}`}>
                        {tier.displayName}
                      </h3>
                      <p className={`text-xs sm:text-sm ${isPro ? 'text-gray-300' : 'text-gray-400'}`}>
                        {tier.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      {tier.name === 'enterprise' ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl sm:text-4xl font-black text-gray-200">Custom</span>
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-2">
                          <span className={`text-4xl sm:text-5xl font-black ${isPro ? 'text-white' : 'text-gray-200'}`}>
                            £{price}
                          </span>
                          <span className={`text-sm ${isPro ? 'text-gray-300' : 'text-gray-400'}`}>
                            {billingCycle === 'yearly' && tier.price.yearly > 0 ? '/mo (billed yearly)' : '/month'}
                          </span>
                        </div>
                      )}
                      {billingCycle === 'yearly' && tier.price.yearly > 0 && tier.name !== 'free' && (
                        <p className="text-xs text-emerald-400 mt-1">
                          £{tier.price.yearly}/year - Save £{(tier.price.monthly * 12 - tier.price.yearly)}
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6 text-sm">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isPro ? 'text-emerald-400' : 'text-gray-400'}`} />
                          <span className={isPro ? 'text-white' : 'text-gray-300'}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    {tier.ctaLink ? (
                      <a
                        href={tier.ctaLink}
                        className={`block w-full py-3 rounded-xl font-semibold text-center text-sm transition-all duration-300 ${
                          isPro
                            ? 'bg-gradient-to-r from-gray-200 to-gray-400 hover:from-gray-100 hover:to-gray-300 text-black font-black shadow-lg shadow-gray-500/30'
                            : 'bg-white/[0.05] hover:bg-white/[0.1] border border-gray-700 hover:border-gray-500'
                        }`}
                      >
                        {tier.cta}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleSelectTier(tier.name)}
                        disabled={isLoading}
                        className={`w-full py-3 rounded-xl font-semibold text-center text-sm transition-all duration-300 ${
                          isPro
                            ? 'bg-gradient-to-r from-gray-200 to-gray-400 hover:from-gray-100 hover:to-gray-300 text-black font-black shadow-lg shadow-gray-500/30'
                            : 'bg-white/[0.05] hover:bg-white/[0.1] border border-gray-700 hover:border-gray-500'
                        } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Processing...
                          </span>
                        ) : (
                          tier.cta
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Pricing FAQ/Note */}
            <div className="mt-12 sm:mt-16 text-center">
              <p className="text-xs sm:text-sm text-gray-400">
                All plans include a 14-day free trial. No credit card required. Cancel anytime.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                * Yearly plans save you 17% compared to monthly billing
              </p>
            </div>
          </div>
        </section>
        {/* COMPARISON TABLE SECTION */}
        <section id="comparison" className="py-40 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white">
                How SniperIQ Compares
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light">
                The only platform combining institutional trading intelligence, fundamentals, and AI in one terminal.
              </p>
            </div>

            {/* Comparison table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-800">
                    <th className="text-left p-6 text-gray-400 font-bold uppercase tracking-wide text-sm">Feature</th>
                    <th className="text-center p-6 text-white font-black text-lg">SniperIQ</th>
                    <th className="text-center p-6 text-gray-400 font-medium text-sm">TradingView</th>
                    <th className="text-center p-6 text-gray-400 font-medium text-sm">Fiscal.ai</th>
                    <th className="text-center p-6 text-gray-400 font-medium text-sm">AlphaResearch</th>
                  </tr>
                </thead>
                <tbody>
                  {([
                    { feature: 'Sniper Engine (ICT)', finscan: true, tv: false, fiscal: false, alpha: false },
                    { feature: 'ICT + Liquidity Maps', finscan: true, tv: false, fiscal: false, alpha: false },
                    { feature: 'Gamma + Open Interest', finscan: true, tv: false, fiscal: false, alpha: false },
                    { feature: 'Financial Statements', finscan: true, tv: false, fiscal: true, alpha: true },
                    { feature: 'Ratios & Key Metrics', finscan: true, tv: false, fiscal: true, alpha: true },
                    { feature: 'AI Copilot (GPT-4)', finscan: true, tv: false, fiscal: true, alpha: true },
                    { feature: 'Macro Regime Detection', finscan: true, tv: false, fiscal: false, alpha: false },
                    { feature: 'Unified Terminal (All-in-One)', finscan: true, tv: false, fiscal: false, alpha: false },
                    { feature: '9 AI Engines', finscan: true, tv: false, fiscal: false, alpha: false },
                    { feature: 'Multi-Timeframe Analysis', finscan: true, tv: 'partial', fiscal: false, alpha: false }
                  ] as Array<{feature: string; finscan: boolean | string; tv: boolean | string; fiscal: boolean | string; alpha: boolean | string}>).map((row, i) => (
                    <tr key={i} className="border-b border-gray-900 hover:bg-white/[0.02] transition-colors">
                      <td className="p-6 text-gray-300 font-medium">{row.feature}</td>
                      <td className="p-6 text-center">
                        {row.finscan === true && <Check className="w-6 h-6 text-green-400 mx-auto" />}
                        {row.finscan === false && <span className="text-gray-700">—</span>}
                        {row.finscan === 'partial' && <span className="text-amber-400 text-sm">Partial</span>}
                      </td>
                      <td className="p-6 text-center">
                        {row.tv === true && <Check className="w-6 h-6 text-gray-600 mx-auto" />}
                        {row.tv === false && <span className="text-gray-700">—</span>}
                        {row.tv === 'partial' && <span className="text-gray-600 text-sm">Partial</span>}
                      </td>
                      <td className="p-6 text-center">
                        {row.fiscal === true && <Check className="w-6 h-6 text-gray-600 mx-auto" />}
                        {row.fiscal === false && <span className="text-gray-700">—</span>}
                      </td>
                      <td className="p-6 text-center">
                        {row.alpha === true && <Check className="w-6 h-6 text-gray-600 mx-auto" />}
                        {row.alpha === false && <span className="text-gray-700">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Endorsement callout */}
            <div className="mt-16 p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-3xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-black text-white mb-2">The Unified Institutional Terminal</h3>
                  <p className="text-gray-400">
                    FinScan is the <span className="text-white font-semibold">only platform</span> that combines institutional trading intelligence (ICT, gamma, liquidity),
                    company fundamentals (Fiscal.ai-level), and AI research copilot in a single, integrated terminal.
                    Stop switching between 5 different tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT DEMO SECTION */}
        <section id="live-preview" className="py-40 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-gray-800 rounded-full mb-8 backdrop-blur-xl">
                <Play className="w-4 h-4 text-gray-300" />
                <span className="text-sm font-semibold text-gray-300">
                  See It In Action
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white">
                Terminal Walkthrough
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light">
                Watch how professional traders use FinScan for institutional-grade analysis
              </p>
            </div>

            {/* Main demo video/screenshot */}
            <div className="mb-16">
              <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-gray-800 bg-gradient-to-br from-gray-900 via-black to-gray-900 group hover:border-gray-600 transition-all duration-500">
                {/* Enhanced video placeholder with mock UI elements */}
                <div className="absolute inset-0">
                  {/* Animated grid background */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}></div>

                  {/* Floating mock chart elements in background */}
                  <div className="absolute top-8 left-8 w-48 h-32 border border-gray-800 rounded-lg bg-black/40 backdrop-blur-sm p-3 opacity-60">
                    <div className="flex gap-1 h-full items-end">
                      {[30, 50, 40, 70, 55, 80, 60].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/40 to-purple-500/40 rounded-t" style={{height: `${h}%`}}></div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-8 right-8 w-56 space-y-2 opacity-60">
                    <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500 font-mono">ICT Structure</span>
                        <span className="text-xs text-green-400 font-bold">BULLISH</span>
                      </div>
                      <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-green-500 to-emerald-500"></div>
                      </div>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500 font-mono">AI Confidence</span>
                        <span className="text-xs text-blue-400 font-bold">94%</span>
                      </div>
                      <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full w-[94%] bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      </div>
                    </div>
                  </div>

                  {/* Central play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center z-10">
                      <div className="relative mb-6">
                        {/* Pulsing glow effect */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-2xl animate-pulse"></div>
                        </div>

                        {/* Play button */}
                        <div className="relative w-28 h-28 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:from-white group-hover:to-gray-300 transition-all duration-300 cursor-pointer">
                          <Play className="w-14 h-14 text-black ml-2" />
                        </div>
                      </div>

                      <p className="text-3xl font-black text-white mb-3">Watch Platform Demo</p>
                      <p className="text-lg text-gray-400 mb-4">5-minute walkthrough of all features</p>

                      <div className="flex items-center justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-gray-500">1080p HD</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-500">5:24</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
              </div>
            </div>

            {/* Feature screenshots carousel */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Institutional Analysis',
                  desc: 'ICT structure, gamma walls, liquidity maps',
                  icon: TrendingUp,
                  gradient: 'from-blue-500/20 to-purple-500/20'
                },
                {
                  title: 'Company Fundamentals',
                  desc: 'Financial statements, ratios, valuations',
                  icon: Building2,
                  gradient: 'from-emerald-500/20 to-teal-500/20'
                },
                {
                  title: 'AI Research Copilot',
                  desc: 'Generate reports, explain concepts',
                  icon: MessageSquare,
                  gradient: 'from-amber-500/20 to-orange-500/20'
                }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className={`relative aspect-video rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br ${item.gradient} hover:border-gray-600 transition-all duration-500 hover:scale-[1.02]`}>
                    {/* Enhanced screenshot placeholder with mock UI */}
                    <div className="absolute inset-0 p-4 flex flex-col">
                      {/* Mock terminal header */}
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/40"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500/40"></div>
                        </div>
                        <div className="flex-1 text-center">
                          <div className="text-xs font-mono text-gray-500">{item.title}</div>
                        </div>
                      </div>

                      {/* Mock content area */}
                      <div className="flex-1 flex items-center justify-center relative">
                        {/* Background grid pattern */}
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                          backgroundSize: '20px 20px'
                        }}></div>

                        {/* Icon with glow effect */}
                        <div className="relative">
                          <div className="absolute inset-0 blur-xl opacity-50">
                            <item.icon className="w-20 h-20 text-white" />
                          </div>
                          <item.icon className="w-20 h-20 text-gray-400 group-hover:text-gray-300 group-hover:scale-110 transition-all relative z-10" />
                        </div>

                        {/* Mock data bars/charts */}
                        {i === 0 && (
                          <div className="absolute bottom-4 left-4 right-4 flex items-end gap-1">
                            {[40, 65, 45, 80, 55, 90, 70, 85].map((h, idx) => (
                              <div key={idx} className="flex-1 bg-blue-500/20 border border-blue-500/30 rounded-t" style={{height: `${h}%`}}></div>
                            ))}
                          </div>
                        )}

                        {i === 1 && (
                          <div className="absolute top-4 left-4 right-4 space-y-2">
                            {[100, 80, 65, 50].map((w, idx) => (
                              <div key={idx} className="h-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full" style={{width: `${w}%`}}></div>
                            ))}
                          </div>
                        )}

                        {i === 2 && (
                          <div className="absolute top-4 left-4 right-4 space-y-2 text-xs font-mono">
                            <div className="h-2 w-full bg-amber-500/20 rounded"></div>
                            <div className="h-2 w-4/5 bg-amber-500/15 rounded"></div>
                            <div className="h-2 w-3/4 bg-amber-500/10 rounded"></div>
                          </div>
                        )}
                      </div>

                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                        <p className="text-sm font-bold text-white">{item.title}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-400 text-center">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Key highlights */}
            <div className="mt-16 grid md:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: 'Real-Time', desc: '<100ms latency' },
                { icon: Brain, title: '9 AI Engines', desc: 'Multi-model consensus' },
                { icon: Shield, title: 'FCA Compliant', desc: 'UK research platform' },
                { icon: Activity, title: '24/7 Monitoring', desc: 'Global market coverage' }
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-white/[0.02] border border-gray-800 rounded-2xl hover:bg-white/[0.04] transition-all">
                  <item.icon className="w-8 h-8 text-gray-300 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Endorsement narrative */}
        <section className="py-40 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
                Built for Professionals
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Globe, title: 'UK-Based', desc: 'Headquartered in the UK with full FCA compliance. Research platform designed for global professional traders.' },
                { icon: Brain, title: 'AI-First Fintech', desc: '9 specialized AI engines working in parallel. Multi-engine architecture for maximum accuracy and confidence.' },
                { icon: Shield, title: 'Institutional-Grade', desc: 'Built to standards used by trading firms. Enterprise reliability (99.9% uptime), real-time processing (<100ms latency).' },
                { icon: Building2, title: 'Global Coverage', desc: 'Multi-asset support (equities, forex, metals, crypto). 30,000+ companies, institutional-grade data, worldwide market coverage.' }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/[0.02] border border-gray-800 rounded-3xl hover:bg-white/[0.05] hover:border-gray-600 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Innovation statement */}
            <div className="mt-16 text-center p-12 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.05] border border-gray-800 rounded-[3rem] backdrop-blur-2xl">
              <Lightbulb className="w-12 h-12 text-amber-400 mx-auto mb-6" />
              <h3 className="text-3xl font-black text-white mb-4">Innovation at the Core</h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're not just another chart platform. FinScan is a <span className="text-white font-semibold">complete institutional research terminal</span> designed
                from the ground up to give retail traders the same edge that hedge funds and prop firms have been using for years.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Pricing Section (kept for reference, not linked) */}
        <section id="pricing-legacy" className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-gray-800 rounded-full mb-8 backdrop-blur-xl">
                <span className="text-sm font-semibold text-gray-300">
                  Simple, Transparent Pricing
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-white">
                Choose Your Plan
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light">
                Professional-grade intelligence at prices that make sense. No hidden fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Starter Tier */}
              <div className="group relative p-8 bg-white/[0.02] backdrop-blur-xl border border-gray-800 rounded-3xl hover:bg-white/[0.05] hover:border-gray-600 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2">
                <div className="mb-8">
                  <h3 className="text-2xl font-black mb-2 text-white">Starter</h3>
                  <p className="text-sm text-gray-400">For individual analysts</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-gray-200">£49</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">5 analyses per day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Basic fundamentals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">AI copilot (limited)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Email support</span>
                  </li>
                </ul>

              <Link
                href="https://app.sniperiq.ai/register"
                  className="block w-full py-4 bg-white/[0.05] hover:bg-white/[0.1] border border-gray-700 hover:border-gray-600 rounded-xl font-bold text-center transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>

              {/* Professional Tier - RECOMMENDED */}
              <div className="group relative p-8 bg-gradient-to-br from-gray-500/10 via-white/[0.05] to-gray-500/10 backdrop-blur-xl border-2 border-gray-400 rounded-3xl hover:border-gray-300 transition-all duration-500 scale-105 hover:scale-110 shadow-2xl shadow-gray-500/20">
                {/* Recommended badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-gray-300 to-gray-500 text-black text-xs font-black rounded-full uppercase tracking-wider">
                  Most Popular
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-black mb-2 text-white">Professional</h3>
                  <p className="text-sm text-gray-300">For research teams</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white">£149</span>
                    <span className="text-gray-300">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white font-semibold">Unlimited analyses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white font-semibold">All 9 AI engines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white font-semibold">Full fundamentals access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white font-semibold">AI copilot (unlimited)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white font-semibold">Priority support</span>
                  </li>
                </ul>

                <Link
                  href="https://app.sniperiq.ai/register"
                  className="block w-full py-4 bg-gradient-to-r from-gray-200 to-gray-400 hover:from-gray-100 hover:to-gray-300 text-black rounded-xl font-black text-center transition-all duration-300 shadow-lg shadow-gray-500/30"
                >
                  Start Free Trial
                </Link>
              </div>

              {/* Enterprise Tier */}
              <div className="group relative p-8 bg-white/[0.02] backdrop-blur-xl border border-gray-800 rounded-3xl hover:bg-white/[0.05] hover:border-gray-600 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2">
                <div className="mb-8">
                  <h3 className="text-2xl font-black mb-2 text-white">Enterprise</h3>
                  <p className="text-sm text-gray-400">For institutions</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-gray-200">£299</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Custom alerts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Dedicated support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">White-label options</span>
                  </li>
                </ul>

                <Link
                  href="https://app.sniperiq.ai/register"
                  className="block w-full py-4 bg-white/[0.05] hover:bg-white/[0.1] border border-gray-700 hover:border-gray-600 rounded-xl font-bold text-center transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Pricing FAQ/Note */}
            <div className="mt-16 text-center">
              <p className="text-sm text-gray-400">
                All plans include 14-day free trial • No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.05] border border-gray-800 rounded-3xl lg:rounded-[3rem] backdrop-blur-2xl overflow-hidden group hover:border-gray-600 transition-all duration-500">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gray-400/0 group-hover:bg-gray-400/5 transition-opacity duration-500" />

              <div className="relative z-10 text-center">
                <Sparkles className="w-14 h-14 text-gray-300 mx-auto mb-8 group-hover:scale-110 transition-transform" />

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight text-white">
                  Ready to Trade Like an Institution?
                </h2>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
                  Join professional traders using SniperIQ Terminal for institutional-grade intelligence.
                </p>

                <Link
                  href="https://app.sniperiq.ai/register"
                  className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-gray-200 to-gray-400 text-black rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-110 hover:shadow-[0_0_100px_rgba(192,192,192,0.6)]"
                >
                  <span>Launch Terminal</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>

                <p className="text-sm text-gray-500 mt-6 font-light">14-day free trial • No credit card required</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-900 bg-black">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl p-[1px]">
                    <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                      <Brain className="w-5 h-5 text-gray-300" />
                    </div>
                  </div>
                  <span className="text-xl font-black">
                    SNIPER<span className="text-gray-300">IQ</span>
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  Institutional-grade financial analysis platform powered by 9 AI engines.
                </p>
                <p className="text-xs text-gray-500">
                  A product of Eagle Digital Services Ltd
                </p>
              </div>

              {/* Product */}
              <div>
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-white">
                  Product
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://app.sniperiq.ai/dashboard" className="text-gray-400 hover:text-white transition-colors">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="https://app.sniperiq.ai/portfolio" className="text-gray-400 hover:text-white transition-colors">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="https://app.sniperiq.ai/research" className="text-gray-400 hover:text-white transition-colors">
                      Research
                    </a>
                  </li>
                  <li>
                    <a href="https://app.sniperiq.ai/settings" className="text-gray-400 hover:text-white transition-colors">
                      Settings
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-white">
                  Company
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-white">
                  Legal
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors">
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Company Registration Info */}
            <div className="pt-8 border-t border-gray-900 mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-gray-600">
                <p>Eagle Digital Services Ltd</p>
                <span className="hidden sm:inline">•</span>
                <p>Company No. 16584009</p>
                <span className="hidden sm:inline">•</span>
                <p>Registered in England & Wales</p>
              </div>
              <p className="text-center text-xs text-gray-600 mt-2">
                71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
              </p>
            </div>

            <div className="pt-6 border-t border-gray-900">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Eagle Digital Services Ltd. All rights reserved.</p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://find-and-update.company-information.service.gov.uk/company/16584009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-300 transition-colors text-xs underline"
                  >
                    Companies House
                  </a>
                  <span>•</span>
                    <span className="text-xs">sniperiq.ai</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
