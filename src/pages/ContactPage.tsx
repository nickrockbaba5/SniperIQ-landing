import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-black mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-gray-800 rounded-xl p-6">
            <Mail className="w-8 h-8 text-blue-400 mb-4" />
            <h2 className="text-xl font-bold mb-2">Email Support</h2>
            <p className="text-gray-400 mb-4">For general inquiries and support</p>
            <a href="mailto:contact@sniperiq.ai" className="text-blue-400 hover:text-blue-300">
              contact@sniperiq.ai
            </a>
          </div>

          <div className="bg-white/5 border border-gray-800 rounded-xl p-6">
            <MessageSquare className="w-8 h-8 text-emerald-400 mb-4" />
            <h2 className="text-xl font-bold mb-2">Enterprise Sales</h2>
            <p className="text-gray-400 mb-4">For business and enterprise inquiries</p>
            <a href="mailto:enterprise@sniperiq.ai" className="text-emerald-400 hover:text-emerald-300">
              enterprise@sniperiq.ai
            </a>
          </div>
        </div>

        <div className="mt-12 bg-white/5 border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Company Address</h2>
          <p className="text-gray-400">
            Eagle Digital Services Ltd<br />
            71-75 Shelton Street<br />
            Covent Garden, London<br />
            WC2H 9JQ<br />
            United Kingdom
          </p>
        </div>
      </div>
    </div>
  )
}
