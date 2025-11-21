import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Basic Meta
  title: "FinScan - Institutional-Grade Financial Intelligence | AI-Powered Market Analysis",
  description: "Advanced AI research platform combining 9 specialized engines for institutional-grade market analysis. Real-time data, professional tools, and AI-powered insights for precious metals, currencies, and digital assets.",

  // Keywords for SEO
  keywords: [
    "financial intelligence",
    "market analysis",
    "AI trading platform",
    "institutional trading tools",
    "real-time market data",
    "technical analysis",
    "market research",
    "trading intelligence",
    "AI-powered analysis",
    "professional trading platform",
    "forex analysis",
    "crypto analysis",
    "gold analysis",
    "silver analysis",
    "commodities trading",
    "financial research platform",
    "algorithmic trading",
    "market sentiment analysis",
    "trading signals",
    "institutional grade analytics"
  ],

  // Authors and Creator
  authors: [{ name: "FinScan Limited" }],
  creator: "FinScan Limited",
  publisher: "FinScan Limited",

  // OpenGraph (for social sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://finscan.uk",
    siteName: "FinScan",
    title: "FinScan - Institutional-Grade Financial Intelligence",
    description: "Advanced AI research platform combining 9 specialized engines for institutional-grade market analysis of precious metals, currencies, and digital assets.",
    images: [
      {
        url: "https://finscan.uk/og-image.png",
        width: 1200,
        height: 630,
        alt: "FinScan - Institutional Intelligence Platform",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "FinScan - Institutional-Grade Financial Intelligence",
    description: "Advanced AI research platform with 9 specialized engines for institutional-grade market analysis.",
    images: ["https://finscan.uk/twitter-image.png"],
    creator: "@finscan",
  },

  // Additional Meta
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Alternate languages (if you expand internationally)
  alternates: {
    canonical: "https://finscan.uk",
    languages: {
      'en-GB': 'https://finscan.uk',
      'en-US': 'https://finscan.uk',
    },
  },

  // App links (for mobile apps if you build them)
  // appleWebApp: {
  //   capable: true,
  //   title: "FinScan",
  //   statusBarStyle: "black-translucent",
  // },

  // Category
  category: "Finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data for AI Crawlers (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "FinScan",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "description": "Institutional-grade financial intelligence platform powered by 9 specialized AI engines. Provides real-time market analysis for precious metals, currencies, and digital assets.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "GBP",
                "priceValidUntil": "2025-12-31"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "10000",
                "bestRating": "5"
              },
              "creator": {
                "@type": "Organization",
                "name": "FinScan Limited",
                "url": "https://finscan.uk",
                "logo": "https://finscan.uk/logo.png",
                "sameAs": [
                  "https://twitter.com/finscan",
                  "https://linkedin.com/company/finscan"
                ]
              },
              "featureList": [
                "9 specialized AI analysis engines",
                "Real-time market data",
                "Multi-asset coverage (precious metals, forex, crypto)",
                "Institutional-grade analytics",
                "Advanced technical indicators",
                "Sentiment analysis",
                "Market regime detection",
                "Professional trading tools"
              ],
              "url": "https://finscan.uk",
              "screenshot": "https://finscan.uk/screenshot.png"
            })
          }}
        />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FinScan Limited",
              "legalName": "FinScan Limited",
              "url": "https://finscan.uk",
              "logo": "https://finscan.uk/logo.png",
              "foundingDate": "2024",
              "founders": [
                {
                  "@type": "Organization",
                  "name": "FinScan Limited"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB",
                "addressRegion": "England"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "contact@finscan.uk",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://twitter.com/finscan",
                "https://linkedin.com/company/finscan"
              ]
            })
          }}
        />

        {/* WebPage Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "FinScan - Institutional-Grade Financial Intelligence",
              "description": "Advanced AI research platform combining 9 specialized engines for institutional-grade market analysis",
              "url": "https://finscan.uk",
              "inLanguage": "en-GB",
              "isPartOf": {
                "@type": "WebSite",
                "name": "FinScan",
                "url": "https://finscan.uk"
              },
              "about": {
                "@type": "Thing",
                "name": "Financial Intelligence Platform",
                "description": "AI-powered market analysis for professional traders"
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Professional Traders, Institutional Investors, Financial Analysts"
              }
            })
          }}
        />
      </head>
      <body className="antialiased"><ThemeProviderWrapper>{children}</ThemeProviderWrapper></body>
    </html>
  );
}
