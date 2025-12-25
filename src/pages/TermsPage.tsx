import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SEO, PAGE_SEO } from '../components/SEO'

export default function TermsPage() {
  return (
    <>
      <SEO {...PAGE_SEO.terms} />
      <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-black mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: December 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400">
              By accessing and using SniperIQ ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-400">
              SniperIQ provides financial analysis tools and AI-powered market intelligence. The Service is for informational purposes only and should not be construed as financial advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
            <p className="text-gray-400">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p className="text-gray-400">
              All content, features, and functionality of the Service are owned by Eagle Digital Services Ltd and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-400">
              In no event shall Eagle Digital Services Ltd be liable for any indirect, incidental, special, consequential or punitive damages arising out of your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact</h2>
            <p className="text-gray-400">
              For questions about these Terms, please contact us at <a href="mailto:legal@sniperiq.ai" className="text-blue-400 hover:text-blue-300">legal@sniperiq.ai</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Data Sources and Analytical Methods</h2>

            <div className="space-y-4 text-gray-400">
              <h3 className="text-lg font-semibold text-white">7.1 Primary Data Provider</h3>
              <p>
                SniperIQ uses Financial Modeling Prep (FMP) API as our primary data source for:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Real-time and historical price data (OHLCV)</li>
                <li>Company financial statements (for equities)</li>
                <li>Economic calendar events</li>
                <li>Market news and sentiment data</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">7.2 Derived Analytics</h3>
              <p>
                In addition to direct market data, SniperIQ calculates derived analytical signals including but not limited to:
              </p>

              <div className="ml-4 space-y-3 mt-3">
                <div>
                  <strong className="text-white">Synthetic Options Signals:</strong> Calculated approximations based on price volatility patterns. NOT direct exchange options flow data. Derived from publicly available price movements.
                </div>
                <div>
                  <strong className="text-white">Synthetic Gamma Exposure:</strong> Estimated gamma walls calculated from price action. NOT direct options chain data from exchanges. Mathematical approximations for educational purposes.
                </div>
                <div>
                  <strong className="text-white">Synthetic Dark Pool Activity:</strong> Volume-based estimations of institutional activity. NOT direct Level 2 tape or dark pool print data. Derived patterns from public volume analysis.
                </div>
                <div>
                  <strong className="text-white">Synthetic COT Positioning:</strong> Momentum-based estimates of commercial positioning. NOT direct CFTC Commitment of Traders report data. Calculated approximations from price/volume trends.
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mt-6">7.3 FusionBrain Analysis Engine</h3>
              <p>
                Our proprietary FusionBrain system combines:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Direct data from FMP API (real market data)</li>
                <li>Derived analytics (calculated approximations)</li>
                <li>Machine learning predictions (trained on historical price data)</li>
                <li>Technical analysis indicators (calculated from price/volume)</li>
              </ul>
              <p className="mt-3">
                The final conviction scores represent a weighted synthesis of available data sources. Not all 21 analytical engines have direct institutional data feeds. Some engines use approximated signals derived from real price data.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">7.4 Data Quality Disclosure</h3>
              <p><strong className="text-white">Current Tier (Free/Starter):</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Approximately 6-8 engines operate with direct real-time data</li>
                <li>Remaining engines use derived approximations</li>
                <li>Final fusion conviction based on available data quality</li>
              </ul>
              <p className="mt-3"><strong className="text-white">Professional Tier (Future):</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Full 21 engines with institutional-grade data feeds</li>
                <li>Direct COT data from CFTC</li>
                <li>Real options flow from exchange feeds</li>
                <li>Authentic dark pool prints from Level 2 sources</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">7.5 Accuracy and Limitations</h3>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Synthetic signals are approximations, not guaranteed representations</li>
                <li>Derived analytics may not match actual institutional activity</li>
                <li>Past accuracy of synthetic signals does not guarantee future performance</li>
                <li>Users should understand the distinction between direct and derived data</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mt-6">7.6 No Misrepresentation</h3>
              <p>SniperIQ does not claim to have:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Direct access to proprietary institutional order flow</li>
                <li>Real-time dark pool print data (unless explicitly stated in Professional tier)</li>
                <li>Unfiltered COT positioning (unless explicitly stated)</li>
                <li>Direct options chain data from exchanges (unless explicitly stated)</li>
              </ul>
              <p className="mt-3">
                All analytical outputs are clearly labeled as "Model Output," "Derived," or "Approximated" where applicable.
              </p>

              <h3 className="text-lg font-semibold text-white mt-6">7.7 User Acknowledgment</h3>
              <p>By using SniperIQ, you acknowledge and accept that:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Some signals are synthetic approximations, not direct data</li>
                <li>FusionBrain conviction percentages reflect available data quality</li>
                <li>Tier limitations affect data source availability</li>
                <li>Upgrade to Professional tier required for full institutional feeds</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}
