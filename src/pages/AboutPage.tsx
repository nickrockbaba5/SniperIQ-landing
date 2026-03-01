import { Link } from 'react-router-dom'
import { Brain, ArrowLeft } from 'lucide-react'
import { SEO, PAGE_SEO, STRUCTURED_DATA } from '../components/SEO'

export default function AboutPage() {
  return (
    <>
      <SEO
        {...PAGE_SEO.about}
        structuredData={STRUCTURED_DATA.organization}
      />
      <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl flex items-center justify-center">
            <Brain className="w-6 h-6 text-black" />
          </div>
          <h1 className="text-4xl font-black">About SniperIQ</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            SniperIQ is an institutional-grade financial intelligence platform built by Eagle Digital Services Ltd, a UK-based technology company.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Mission</h2>
          <p className="text-gray-400">
            We believe every trader deserves access to institutional-quality analysis. Our platform combines 21 specialized AI engines with comprehensive fundamental data to deliver insights previously available only to hedge funds and institutional investors.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Company Information</h2>
          <div className="bg-white/5 border border-gray-800 rounded-xl p-6 mt-4">
            <p className="text-gray-300 mb-2"><strong>Company:</strong> Eagle Digital Services Ltd</p>
            <p className="text-gray-300 mb-2"><strong>Company Number:</strong> 16584009</p>
            <p className="text-gray-300 mb-2"><strong>Registered Address:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Contact</h2>
          <p className="text-gray-400">
            For inquiries, please email us at <a href="mailto:contact@sniperiq.ai" className="text-blue-400 hover:text-blue-300">contact@sniperiq.ai</a>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
