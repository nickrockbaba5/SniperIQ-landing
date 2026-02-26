import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Clock, CreditCard, CheckCircle } from 'lucide-react'
import { SEO, PAGE_SEO } from '../components/SEO'

export default function RefundPage() {
  return (
    <>
      <SEO {...PAGE_SEO.refund} />
      <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-black mb-4">Refund Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: February 2026</p>

        {/* Guarantee Banner */}
        <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl mb-12 flex items-start gap-4">
          <Shield className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-emerald-400 mb-2">14-Day Money-Back Guarantee</h2>
            <p className="text-gray-300">
              All paid SniperIQ plans come with a 14-day money-back guarantee.
              If you're not satisfied for any reason, request a full refund within 14 days of purchase — no questions asked.
            </p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-10">
          {/* How it works */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-5 bg-white/5 border border-gray-800 rounded-lg">
                <CreditCard className="w-6 h-6 text-blue-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">1. Subscribe</h3>
                <p className="text-gray-400 text-sm">
                  Choose any paid plan (Starter, Pro, or Advanced) and complete your payment via Stripe.
                </p>
              </div>
              <div className="p-5 bg-white/5 border border-gray-800 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">2. Try It Out</h3>
                <p className="text-gray-400 text-sm">
                  Use SniperIQ with full access to all features included in your plan for up to 14 days.
                </p>
              </div>
              <div className="p-5 bg-white/5 border border-gray-800 rounded-lg">
                <CheckCircle className="w-6 h-6 text-emerald-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">3. Decide</h3>
                <p className="text-gray-400 text-sm">
                  Love it? Keep going. Not for you? Request a refund from Settings before the 14-day window closes.
                </p>
              </div>
            </div>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Eligibility</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">&#10003;</span>
                <span>Refund requests must be made within <strong className="text-white">14 calendar days</strong> of your initial purchase date.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">&#10003;</span>
                <span>Refunds are processed as a <strong className="text-white">full refund</strong> of the amount paid — no partial refunds or pro-rating.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 mt-1">&#10003;</span>
                <span>Each user is eligible for <strong className="text-white">one refund</strong> per subscription period.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">&#10007;</span>
                <span>After 14 days, refunds are not available. Your subscription will remain active until the end of your billing period.</span>
              </li>
            </ul>
          </section>

          {/* How to Request */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Request a Refund</h2>
            <ol className="space-y-3 text-gray-400 list-decimal list-inside">
              <li>Log in to your SniperIQ account at <a href="https://app.sniperiq.ai" className="text-blue-400 hover:underline">app.sniperiq.ai</a></li>
              <li>Navigate to <strong className="text-white">Settings</strong></li>
              <li>In the Subscription section, click <strong className="text-white">"Request Refund"</strong></li>
              <li>Confirm your request in the dialog</li>
              <li>Your refund will be processed automatically via Stripe</li>
            </ol>
          </section>

          {/* Processing Time */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Processing Time</h2>
            <p className="text-gray-400">
              Refunds are processed immediately through Stripe. Depending on your bank or card issuer,
              the refund will appear on your statement within <strong className="text-white">5–10 business days</strong>.
            </p>
          </section>

          {/* After Refund */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What Happens After a Refund</h2>
            <ul className="space-y-2 text-gray-400">
              <li>Your account is immediately downgraded to the <strong className="text-white">Free tier</strong>.</li>
              <li>You retain access to Free tier features (3 analyses per day).</li>
              <li>You can re-subscribe to any paid plan at any time.</li>
              <li>Your research history and saved reports are preserved.</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-400">
              If you have questions about our refund policy or need assistance, please contact us at{' '}
              <a href="mailto:support@sniperiq.ai" className="text-blue-400 hover:underline">support@sniperiq.ai</a>{' '}
              or visit our <Link to="/contact" className="text-blue-400 hover:underline">contact page</Link>.
            </p>
          </section>

          {/* Company Info */}
          <section className="pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              SniperIQ is operated by Eagle Digital Services Ltd (Company No. 16584009),
              registered at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom.
            </p>
          </section>
        </div>
      </div>
      </div>
    </>
  )
}
