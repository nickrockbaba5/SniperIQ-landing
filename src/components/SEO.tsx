/**
 * SEO Component - Dynamic meta tags for each page
 * Implements SEO best practices for financial platforms
 */

import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogType?: string
  ogImage?: string
  twitterCard?: 'summary' | 'summary_large_image'
  noIndex?: boolean
  structuredData?: object
}

const BASE_URL = 'https://sniperiq.ai'
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`
const SITE_NAME = 'SniperIQ'
const TWITTER_HANDLE = '@sniperiq'

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData,
}: SEOProps) {
  const fullTitle = title.includes('SniperIQ') ? title : `${title} | SniperIQ`
  const canonicalUrl = canonical || BASE_URL

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Eagle Digital Services Ltd" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

// Pre-defined page SEO configs for consistency
export const PAGE_SEO = {
  home: {
    title: 'SniperIQ - AI-Powered Institutional-Grade Market Intelligence Platform',
    description:
      'SniperIQ is an AI-powered institutional-grade market intelligence platform that fuses ICT smart money, Market Profile (TPO), Volume Footprint, Dark Pool, Options Flow, Gamma Exposure, COT positioning, Macro regime, Intermarket, Sector Rotation, ETF Flow, Factor Models and India Institutional ML into one research terminal for equities, indices, forex, crypto and commodities. Research-only – no trade execution or personalised advice.',
    keywords:
      'SniperIQ, AI trading research, ICT smart money, ICT concepts, market profile, TPO, volume profile, volume footprint, order flow, dark pool data, options flow, gamma exposure, dealer gamma, COT positioning, macro regime, intermarket analysis, sector rotation, ETF flow, factor models, seasonality, institutional signals, institutional research platform, India institutional ML, NSE signals, MCX signals, NIFTY analysis, BANKNIFTY analysis, swing trading research, intraday trading research, trading playbook, AI copilot for markets, overmind intelligence, fusion brain, institutional signal API',
    canonical: BASE_URL,
  },
  about: {
    title: 'About SniperIQ - Company & Mission',
    description: 'Learn about SniperIQ, the AI-powered financial research platform built by Eagle Digital Services Ltd. Our mission is to democratize institutional-grade market intelligence for traders and investors.',
    keywords: 'about SniperIQ, Eagle Digital Services Ltd, financial technology, AI research, market intelligence company, London fintech',
    canonical: `${BASE_URL}/about`,
  },
  contact: {
    title: 'Contact SniperIQ - Get in Touch',
    description: 'Contact SniperIQ for support, partnership inquiries, or feedback. Our team is based in London, UK and available to help with your financial research needs.',
    keywords: 'contact SniperIQ, support, customer service, fintech support, London UK',
    canonical: `${BASE_URL}/contact`,
  },
  engineStack: {
    title: 'SniperIQ Engine Stack – ICT Smart Money, Market Profile, Dark Pool, Options Flow & Institutional ML',
    description:
      'Deep dive into the SniperIQ engine stack: ICT smart money concepts, Market Profile (TPO), Volume Footprint, Dark Pool, Gamma Exposure, Options Flow, COT positioning, Macro, Intermarket, Sector Rotation, ETF Flow, Fusion Brain and India Institutional ML for NSE/MCX.',
    keywords:
      'ICT smart money, market profile, TPO, volume footprint, dark pool data, options flow, gamma exposure, COT positioning, macro regime, intermarket analysis, sector rotation, ETF flow, factor models, seasonality, institutional ML, India institutional signals, NSE, MCX',
    canonical: `${BASE_URL}/engines`,
  },
  pricing: {
    title: 'SniperIQ Pricing - Plans & Features',
    description: 'Choose the right SniperIQ plan for your needs. Free tier available. Premium plans include advanced AI engines, real-time data, and institutional-grade analysis tools.',
    keywords: 'SniperIQ pricing, subscription plans, financial software pricing, trading platform cost, premium features',
    canonical: `${BASE_URL}/pricing`,
  },
  terms: {
    title: 'Terms of Service - SniperIQ',
    description: 'Read the SniperIQ Terms of Service. Understand your rights and responsibilities when using our AI-powered financial research platform.',
    keywords: 'terms of service, user agreement, legal terms, SniperIQ terms',
    canonical: `${BASE_URL}/terms`,
    noIndex: false, // Terms should be indexed for transparency
  },
  privacy: {
    title: 'Privacy Policy - SniperIQ',
    description: 'SniperIQ Privacy Policy. Learn how we collect, use, and protect your personal data. GDPR compliant data handling practices.',
    keywords: 'privacy policy, data protection, GDPR, personal data, SniperIQ privacy',
    canonical: `${BASE_URL}/privacy`,
    noIndex: false,
  },
  disclaimer: {
    title: 'Disclaimer - SniperIQ',
    description: 'Important disclaimer for SniperIQ users. SniperIQ is a research platform only - no trade execution or personalized investment advice. Not FCA regulated.',
    keywords: 'disclaimer, risk warning, investment disclaimer, FCA, financial advice',
    canonical: `${BASE_URL}/disclaimer`,
    noIndex: false,
  },
  refund: {
    title: 'Refund Policy - SniperIQ',
    description: 'SniperIQ 14-day money-back guarantee. Request a full refund within 14 days of purchase, no questions asked. Learn about our refund policy and process.',
    keywords: 'refund policy, money-back guarantee, SniperIQ refund, subscription cancellation, 14-day guarantee',
    canonical: `${BASE_URL}/refund-policy`,
    noIndex: false,
  },
}

// Structured data templates
export const STRUCTURED_DATA = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eagle Digital Services Ltd',
    legalName: 'Eagle Digital Services Ltd',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    foundingDate: '2025',
    description: 'UK-based technology company specializing in AI-powered financial research and market intelligence platforms.',
    taxID: '16584009',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '71-75 Shelton Street',
      addressLocality: 'Covent Garden',
      addressRegion: 'London',
      postalCode: 'WC2H 9JQ',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'contact@sniperiq.ai',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://twitter.com/sniperiq',
      'https://linkedin.com/company/sniperiq',
    ],
  },

  webApplication: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'SniperIQ',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web Browser',
    description: 'AI-powered financial research platform with 42 specialized engines for institutional-grade market analysis.',
    url: BASE_URL,
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '99',
      priceCurrency: 'GBP',
      offerCount: '3',
    },
    featureList: [
      'Real-time market data',
      'AI-powered predictions',
      'Options flow analysis',
      'Dark pool data',
      'Insider trading tracking',
      'Hedge fund 13F filings',
      'Technical analysis',
      'Fundamental analysis',
      'Portfolio risk analysis',
      'Economic calendar',
    ],
    screenshot: `${BASE_URL}/screenshot.png`,
    creator: {
      '@type': 'Organization',
      name: 'Eagle Digital Services Ltd',
    },
  },

  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SniperIQ',
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://app.sniperiq.ai/research?symbol={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },

  siteNavigation: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Dashboard',
        url: 'https://app.sniperiq.ai/dashboard',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Research',
        url: 'https://app.sniperiq.ai/research',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Screener',
        url: 'https://app.sniperiq.ai/screener',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'Portfolio',
        url: 'https://app.sniperiq.ai/portfolio',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'Pricing',
        url: `${BASE_URL}/#pricing`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 6,
        name: 'Engine Stack',
        url: `${BASE_URL}/engines`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 7,
        name: 'Contact',
        url: `${BASE_URL}/contact`,
      },
    ],
  },

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
}

export default SEO
