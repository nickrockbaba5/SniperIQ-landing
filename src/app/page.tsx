export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
              <span className="text-black font-black text-3xl">FS</span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
              FinScan
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Institutional-Grade Financial Intelligence
            </p>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Advanced AI research platform combining 18 specialized engines for real-time market analysis
            </p>

            {/* CTA Button */}
            <a
              href="https://app.finscan.uk/dashboard"
              className="inline-block px-12 py-5 bg-gradient-to-r from-gray-200 to-gray-400 text-black font-bold text-lg rounded-2xl hover:from-gray-300 hover:to-gray-500 transition-all transform hover:scale-105 shadow-2xl"
            >
              Launch Platform
            </a>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 bg-white/[0.02] backdrop-blur-xl border border-gray-800 rounded-3xl">
            <div className="text-4xl font-black text-white mb-4">18</div>
            <h3 className="text-xl font-bold text-white mb-2">AI Engines</h3>
            <p className="text-gray-400">
              Technical, Macro, Options, and Sentiment analysis working in harmony
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-white/[0.02] backdrop-blur-xl border border-gray-800 rounded-3xl">
            <div className="text-4xl font-black text-white mb-4">5min</div>
            <h3 className="text-xl font-bold text-white mb-2">Real-Time Updates</h3>
            <p className="text-gray-400">
              Live market data with automatic refresh every 5 minutes
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-white/[0.02] backdrop-blur-xl border border-gray-800 rounded-3xl">
            <div className="text-4xl font-black text-white mb-4">5</div>
            <h3 className="text-xl font-bold text-white mb-2">Asset Classes</h3>
            <p className="text-gray-400">
              Gold, Silver, and major forex pairs with institutional analysis
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>© 2025 FinScan. Institutional-grade intelligence platform.</p>
          <p className="mt-2 text-sm">FCA Compliant • SOC 2 Type II Certified</p>
        </div>
      </div>
    </div>
  );
}
