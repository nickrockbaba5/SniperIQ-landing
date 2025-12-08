'use client'

import { useState, useEffect } from 'react'
import { Calculator, Clock, TrendingUp, DollarSign } from 'lucide-react'

export default function ROICalculator() {
  const [hoursPerDay, setHoursPerDay] = useState(4)
  const [hourlyRate, setHourlyRate] = useState(50)
  const [tradingDays, setTradingDays] = useState(250)
  const [savingsData, setSavingsData] = useState({
    hoursSaved: 0,
    moneySaved: 0,
    sniperiqCost: 990,
    netSavings: 0,
    roi: 0,
    paybackDays: 0,
  })

  useEffect(() => {
    // SniperIQ reduces research time from X hours to 20 minutes (0.33 hours)
    const sniperiqTime = 0.33
    const hoursSavedPerDay = Math.max(0, hoursPerDay - sniperiqTime)
    const annualHoursSaved = hoursSavedPerDay * tradingDays
    const annualMoneySaved = annualHoursSaved * hourlyRate
    const sniperiqCost = 990 // Pro plan annual
    const netSavings = annualMoneySaved - sniperiqCost
    const roi = sniperiqCost > 0 ? ((netSavings / sniperiqCost) * 100) : 0
    const paybackDays = hoursSavedPerDay > 0 ? Math.ceil(sniperiqCost / (hoursSavedPerDay * hourlyRate)) : 0

    setSavingsData({
      hoursSaved: annualHoursSaved,
      moneySaved: annualMoneySaved,
      sniperiqCost,
      netSavings,
      roi,
      paybackDays,
    })
  }, [hoursPerDay, hourlyRate, tradingDays])

  return (
    <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.03] border border-gray-800 rounded-full mb-6 backdrop-blur-xl">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-semibold text-gray-300">
              ROI Calculator
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-white">
            Calculate Your Savings
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light">
            See how much time and money you'll save with SniperIQ's institutional research terminal
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Input Controls */}
          <div className="space-y-6 backdrop-blur-xl bg-white/[0.02] border border-gray-800 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-6">Your Current Workflow</h3>

            {/* Hours per day */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  Research time per day
                </label>
                <span className="text-2xl font-black text-white">{hoursPerDay}h</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8"
                step="0.5"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>30 min</span>
                <span>8 hours</span>
              </div>
            </div>

            {/* Hourly rate */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  Your time value (£/hour)
                </label>
                <span className="text-2xl font-black text-white">£{hourlyRate}</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>£10/hr</span>
                <span>£500/hr</span>
              </div>
            </div>

            {/* Trading days */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Trading days per year
                </label>
                <span className="text-2xl font-black text-white">{tradingDays}</span>
              </div>
              <input
                type="range"
                min="50"
                max="365"
                step="5"
                value={tradingDays}
                onChange={(e) => setTradingDays(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>50 days</span>
                <span>365 days</span>
              </div>
            </div>

            {/* Info box */}
            <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
              <p className="text-xs text-emerald-300 leading-relaxed">
                <strong>SniperIQ reduces research time to 20 minutes</strong> by synthesizing 9 AI engines,
                real-time fundamentals, and institutional data into one terminal.
              </p>
            </div>
          </div>

          {/* Right: Results */}
          <div className="space-y-4">
            {/* Annual Savings Card */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 via-white/[0.05] to-emerald-500/10 border-2 border-emerald-400 rounded-3xl p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-emerald-300">Annual Savings</h3>
                <div className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-black rounded-full">
                  NET PROFIT
                </div>
              </div>
              <div className="text-5xl sm:text-6xl font-black text-white mb-2">
                £{savingsData.netSavings.toLocaleString()}
              </div>
              <p className="text-sm text-gray-400">
                after SniperIQ Pro (£{savingsData.sniperiqCost})
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Hours Saved */}
              <div className="backdrop-blur-xl bg-white/[0.02] border border-gray-800 rounded-2xl p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Hours Saved</p>
                </div>
                <p className="text-3xl sm:text-4xl font-black text-white">
                  {savingsData.hoursSaved.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">per year</p>
              </div>

              {/* Money Saved */}
              <div className="backdrop-blur-xl bg-white/[0.02] border border-gray-800 rounded-2xl p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Money Saved</p>
                </div>
                <p className="text-3xl sm:text-4xl font-black text-white">
                  £{savingsData.moneySaved.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">per year</p>
              </div>

              {/* ROI */}
              <div className="backdrop-blur-xl bg-white/[0.02] border border-gray-800 rounded-2xl p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">ROI</p>
                </div>
                <p className="text-3xl sm:text-4xl font-black text-emerald-400">
                  {savingsData.roi > 0 ? savingsData.roi.toFixed(0) : '0'}%
                </p>
                <p className="text-xs text-gray-500 mt-1">return on investment</p>
              </div>

              {/* Payback Period */}
              <div className="backdrop-blur-xl bg-white/[0.02] border border-gray-800 rounded-2xl p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-4 h-4 text-gray-400" />
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Payback</p>
                </div>
                <p className="text-3xl sm:text-4xl font-black text-white">
                  {savingsData.paybackDays}
                </p>
                <p className="text-xs text-gray-500 mt-1">trading days</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="https://app.sniperiq.ai/"
                className="block w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white text-center font-black text-lg rounded-xl shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Start Saving Today - Get 15 FREE Credits
              </a>
              <p className="text-xs text-center text-gray-500 mt-3">
                14-day free trial • No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </div>

        {/* Bottom testimonial */}
        <div className="mt-12 text-center">
          <div className="inline-block px-6 py-4 bg-white/[0.02] border border-gray-800 rounded-2xl max-w-2xl">
            <p className="text-sm text-gray-400 italic mb-2">
              "I used to spend 4-5 hours daily doing research across multiple platforms.
              SniperIQ cut that to 20 minutes. That's <span className="text-emerald-400 font-semibold">£37,500 saved</span> in my first year alone."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center text-black font-bold">
                MR
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Michael Richardson</p>
                <p className="text-xs text-gray-500">Hedge Fund Analyst, London</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
