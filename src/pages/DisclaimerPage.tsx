import { Link } from 'react-router-dom'
import { ArrowLeft, AlertTriangle } from 'lucide-react'

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <AlertTriangle className="w-10 h-10 text-amber-400" />
          <h1 className="text-4xl font-black">Risk Disclaimer</h1>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-8">
          <p className="text-amber-300 font-medium">
            Trading and investing in financial markets involves substantial risk of loss and is not suitable for every investor.
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Not Financial Advice</h2>
            <p className="text-gray-400">
              The information provided by SniperIQ is for general informational and educational purposes only. It is not intended to be and should not be construed as financial advice, investment advice, trading advice, or any other type of advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">No Guarantees</h2>
            <p className="text-gray-400">
              Past performance is not indicative of future results. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed on our platform. The signals, analysis, and tools provided are for informational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Risk Warning</h2>
            <p className="text-gray-400">
              Trading foreign exchange, CFDs, derivatives, and other financial instruments on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Seek Professional Advice</h2>
            <p className="text-gray-400">
              You should seek advice from an independent financial advisor if you have any doubts. Eagle Digital Services Ltd does not provide personalized investment advice and is not registered as a broker-dealer or investment advisor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">UK FCA Notice</h2>
            <p className="text-gray-400">
              SniperIQ is a software and information service provider. We are not authorized or regulated by the Financial Conduct Authority (FCA). Our services do not constitute regulated investment advice.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
