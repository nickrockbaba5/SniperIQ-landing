'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Brain, Zap, TrendingUp, Shield, Activity, BarChart3, Globe, ArrowRight, Play, Sparkles, Cpu, Target } from 'lucide-react';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [liveStats, setLiveStats] = useState({
    analyses: 127543,
    engines: 9,
    accuracy: 94.2,
    uptime: 99.9
  });

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

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Premium Animated Background - Silver/Gray theme */}
      <div className="fixed inset-0 z-0">
        {/* Silver gradient orbs with mouse parallax */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
          }}
        >
          <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-gray-300/30 rounded-full blur-[150px] animate-pulse"
            style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-gray-400/20 rounded-full blur-[150px] animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '1s' }} />
          <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-gray-500/15 rounded-full blur-[150px] animate-pulse"
            style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>

        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(rgba(192, 192, 192, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 192, 192, 0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)`
          }}
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,black_100%)]" />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Premium Header - Apple style */}
        <header className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/60 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl p-[1px] shadow-lg shadow-gray-500/50">
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-gray-300" />
                  </div>
                </div>
                <span className="text-xl font-black tracking-tight">
                  FIN<span className="text-gray-300">SCAN</span>
                </span>
              </div>

              {/* Nav */}
              <nav className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Features</a>
                <a href="#intelligence" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Intelligence</a>
                <a href="#methodology" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Methodology</a>
              </nav>

              {/* CTA */}
              <Link
                href="https://app.finscan.uk"
                className="group relative px-6 py-2.5 bg-gradient-to-r from-gray-200 to-gray-400 text-black rounded-xl font-bold text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Launch Platform</span>
              </Link>
            </div>
          </div>
        </header>

        {/* HERO - Full screen impact */}
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-gray-800 rounded-full mb-10 backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-300">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-300"></span>
              </div>
              <span className="text-sm font-semibold text-gray-300">
                Powering Professional Traders Worldwide
              </span>
            </div>

            {/* Main headline - MASSIVE with readable gray */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-10 leading-[0.9] tracking-tight">
              <span className="block text-white">
                Institutional
              </span>
              <span className="block text-gray-300">
                Intelligence
              </span>
            </h1>

            {/* Subheadline - gray for readability */}
            <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto mb-14 leading-relaxed font-light">
              Advanced AI research platform. <span className="text-gray-300 font-semibold">9 specialized engines.</span> Analyzing precious metals, currencies, and digital assets with <span className="text-white font-semibold">institutional-grade precision.</span>
            </p>

            {/* CTAs - Silver style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
              <Link
                href="https://app.finscan.uk/register"
                className="group relative px-10 py-5 bg-gradient-to-r from-gray-200 to-gray-400 text-black rounded-2xl font-bold text-xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-[0_0_80px_rgba(192,192,192,0.6)] flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Get Started Free</span>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { value: liveStats.analyses.toLocaleString(), label: 'Analyses Generated', icon: Activity },
                { value: liveStats.engines, label: 'AI Engines', icon: Cpu },
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

        {/* Trust bar - Silver */}
        <section className="py-16 border-y border-gray-900 bg-white/[0.01] backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-10 text-sm text-gray-400">
              {[
                { icon: Brain, text: '9 AI Analysis Engines' },
                { icon: Globe, text: 'Multi-Asset Coverage' },
                { icon: Activity, text: '24/7 Global Monitoring' },
                { icon: Shield, text: 'Institutional Grade' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <item.icon className="w-5 h-5 text-gray-300 group-hover:scale-110 transition-transform" />
                  <span className="font-medium group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features - Premium cards */}
        <section id="features" className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tight text-white">
                Built for Precision
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
                Institutional-grade infrastructure for professionals who demand more than surface-level insights.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Multi-Engine Analysis',
                  desc: 'Consensus-driven intelligence from 9 specialized engines analyzing regime detection, flow dynamics, correlation patterns, and market microstructure across global markets.',
                  tags: ['Regime Detection', 'Flow Analytics', 'Correlation']
                },
                {
                  icon: BarChart3,
                  title: 'Cross-Asset Intelligence',
                  desc: 'Unified view across precious metals, foreign exchange, and digital assets. Identify regime shifts and structural breaks before they cascade.',
                  tags: ['Metals', 'Forex', 'Crypto']
                },
                {
                  icon: Shield,
                  title: 'Institutional Methodology',
                  desc: 'Research-grade analysis combining quantitative signals, order flow analytics, and behavioral finance. Every insight includes confidence scoring.',
                  tags: ['Quant Signals', 'Risk Metrics']
                }
              ].map((feature, i) => (
                <div key={i} className="group relative p-8 bg-white/[0.02] backdrop-blur-xl border border-gray-800 rounded-3xl hover:bg-white/[0.05] hover:border-gray-600 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2">
                  {/* Icon */}
                  <div className="relative w-14 h-14 bg-gradient-to-br from-gray-300 to-gray-500 rounded-2xl p-[1px] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-500/30">
                    <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-gray-300" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black mb-4 tracking-tight text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6 font-light">{feature.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1.5 bg-white/[0.05] border border-gray-800 rounded-full text-xs text-gray-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gray-400/0 group-hover:bg-gray-400/10 transition-opacity duration-500 -z-10 blur-2xl" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intelligence Pipeline */}
        <section id="methodology" className="py-40 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tight text-white">
                Intelligence Pipeline
              </h2>
              <p className="text-xl text-gray-400 font-light">
                Transparency in methodology. Confidence in results.
              </p>
            </div>

            <div className="relative grid md:grid-cols-5 gap-6">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 -translate-y-1/2 z-0" />

              {[
                { icon: Activity, title: 'Data Ingestion', desc: '20+ Global Sources' },
                { icon: Brain, title: 'Multi-Engine', desc: '9 AI Models' },
                { icon: Zap, title: 'Regime Detection', desc: 'Market Phase ID' },
                { icon: TrendingUp, title: 'Signals', desc: 'Actionable Insights' },
                { icon: Shield, title: 'Risk Calibration', desc: 'Confidence Score' }
              ].map((step, i) => (
                <div key={i} className="relative z-10 group">
                  <div className="p-8 bg-black border border-gray-800 rounded-2xl hover:border-gray-600 transition-all duration-500 hover:scale-105">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform group-hover:bg-gray-700">
                      <step.icon className="w-6 h-6 text-gray-300" />
                    </div>
                    <h3 className="text-sm font-bold mb-2 text-center tracking-tight text-white">{step.title}</h3>
                    <p className="text-xs text-gray-500 text-center">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tight text-white">
                Performance Standards
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '94%+', label: 'Model Accuracy', sub: 'Backtested performance' },
                { value: '<100ms', label: 'Signal Latency', sub: 'Real-time processing' },
                { value: '99.9%', label: 'Uptime SLA', sub: 'Enterprise reliability' },
                { value: '20+', label: 'Data Sources', sub: 'Global coverage' }
              ].map((metric, i) => (
                <div key={i} className="group p-10 bg-white/[0.02] backdrop-blur-xl border border-gray-800 rounded-3xl text-center hover:bg-white/[0.05] hover:border-gray-600 transition-all duration-500 hover:scale-105">
                  <div className="text-6xl font-black text-gray-200 mb-4 group-hover:scale-110 transition-transform">
                    {metric.value}
                  </div>
                  <div className="text-lg font-bold mb-2 tracking-tight text-white">{metric.label}</div>
                  <div className="text-sm text-gray-500">{metric.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="relative p-16 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-white/[0.05] border border-gray-800 rounded-[3rem] backdrop-blur-2xl overflow-hidden group hover:border-gray-600 transition-all duration-500">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gray-400/0 group-hover:bg-gray-400/5 transition-opacity duration-500" />

              <div className="relative z-10 text-center">
                <Sparkles className="w-14 h-14 text-gray-300 mx-auto mb-8 group-hover:scale-110 transition-transform" />

                <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight text-white">
                  Begin Your Analysis
                </h2>

                <p className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light">
                  Access institutional-grade market intelligence. Professional tools for serious traders.
                </p>

                <Link
                  href="https://app.finscan.uk/register"
                  className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-gray-200 to-gray-400 text-black rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-110 hover:shadow-[0_0_100px_rgba(192,192,192,0.6)]"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>

                <p className="text-sm text-gray-500 mt-6 font-light">No credit card required</p>
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
                    FIN<span className="text-gray-300">SCAN</span>
                  </span>
                </div>
                <p className="text-sm text-gray-400">
                  Institutional-grade financial analysis platform powered by AI.
                </p>
              </div>

              {/* Product */}
              <div>
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-white">
                  Product
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://app.finscan.uk/dashboard" className="text-gray-400 hover:text-white transition-colors">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="https://app.finscan.uk/portfolio" className="text-gray-400 hover:text-white transition-colors">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="https://app.finscan.uk/research" className="text-gray-400 hover:text-white transition-colors">
                      Research
                    </a>
                  </li>
                  <li>
                    <a href="https://app.finscan.uk/settings" className="text-gray-400 hover:text-white transition-colors">
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

            <div className="pt-8 border-t border-gray-900">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                <p>© {new Date().getFullYear()} FinScan. All rights reserved.</p>
                <p>Institutional Intelligence Platform</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
