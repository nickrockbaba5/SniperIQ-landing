import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const ERROR_WEBHOOK_URL = process.env.NEXT_PUBLIC_ERROR_WEBHOOK_URL;
const CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

export const metadata: Metadata = {
  // Basic Meta
  title: "SniperIQ – Institutional-Grade Financial Intelligence Platform.",
  description: "SniperIQ is an advanced AI research platform combining 9 specialized engines for institutional-grade market analysis. Real-time data, professional tools, and AI-powered insights for equities, indices, forex, crypto, and commodities.",

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
  authors: [{ name: "Eagle Digital Services Ltd" }],
  creator: "Eagle Digital Services Ltd",
  publisher: "Eagle Digital Services Ltd",

  // OpenGraph (for social sharing - Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://sniperiq.ai",
    siteName: "SniperIQ",
    title: "SniperIQ – Institutional-Grade Financial Intelligence Platform.",
    description: "Advanced AI research platform combining 9 specialized engines for institutional-grade market analysis across global markets.",
    images: [
      {
        url: "https://sniperiq.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "SniperIQ - Institutional Intelligence Platform",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "SniperIQ – Institutional-Grade Financial Intelligence Platform.",
    description: "Advanced AI research platform with 9 specialized engines for institutional-grade market analysis.",
    images: ["https://sniperiq.ai/twitter-image.png"],
    creator: "@sniperiq",
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
    canonical: "https://sniperiq.ai",
    languages: {
      'en-GB': 'https://sniperiq.ai',
      'en-US': 'https://sniperiq.ai',
    },
  },

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
              "name": "SniperIQ",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "description": "Institutional-grade financial intelligence platform powered by 9 specialized AI engines. Provides real-time market analysis for global equities, indices, currencies, and digital assets.",
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
                "name": "Eagle Digital Services Ltd",
                "url": "https://sniperiq.ai",
                "logo": "https://sniperiq.ai/logo.png",
                "description": "UK-based technology company specializing in AI-powered financial intelligence platforms",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "71-75 Shelton Street",
                  "addressLocality": "Covent Garden, London",
                  "postalCode": "WC2H 9JQ",
                  "addressCountry": "GB"
                },
                "sameAs": [
                  "https://twitter.com/sniperiq",
                  "https://linkedin.com/company/sniperiq"
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
              "url": "https://sniperiq.ai",
              "screenshot": "https://sniperiq.ai/screenshot.png"
            })
          }}
        />

        {/* Google Analytics (optional, enabled when NEXT_PUBLIC_GA_MEASUREMENT_ID is set) */}
        {GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
                `,
              }}
            />
          </>
        )}

        {/* Mixpanel behaviour tracking (optional, enabled when NEXT_PUBLIC_MIXPANEL_TOKEN is set) */}
        {MIXPANEL_TOKEN && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(f,b){
                  if(!b.__SV){
                    var a,e,i,g;window.mixpanel=b;b._i=[];
                    b.init=function(a,e,d){function f(b,h){
                      var a=h.split(".");
                      if(a.length==2){b=b[a[0]];h=a[1]}
                      b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}
                    }
                    var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";
                    c.people=c.people||[];
                    c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);
                      b||(a+=" (stub)");
                      return a};
                    c.people.toString=function(){return c.toString(1)+".people (stub)"};
                    i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
                    for(g=0;g<i.length;g++)f(c,i[g]);
                    b._i.push([a,e,d])
                  };
                  b.__SV=1.2;
                  a=f.createElement("script");
                  a.type="text/javascript";
                  a.async=!0;
                  a.src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
                  e=f.getElementsByTagName("script")[0];
                  e.parentNode.insertBefore(a,e)
                }})(document,window.mixpanel||[]);
                window.mixpanel.init('${MIXPANEL_TOKEN}', { debug: false });
                window.mixpanel.track('Page View', { path: window.location.pathname });
              `,
            }}
          />
        )}

        {/* Lightweight error tracking hook (can forward to Sentry or custom webhook) */}
        {ERROR_WEBHOOK_URL && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(){
                  if (typeof window === 'undefined' || !window.addEventListener) return;
                  function sendError(payload) {
                    try {
                      var url = '${ERROR_WEBHOOK_URL}';
                      if (!url) return;
                      var body = JSON.stringify(payload);
                      if (navigator.sendBeacon) {
                        navigator.sendBeacon(url, body);
                      } else {
                        fetch(url, {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: body
                        });
                      }
                    } catch (e) {
                      console.error('Error reporting failed', e);
                    }
                  }
                  window.addEventListener('error', function(evt){
                    sendError({
                      type: 'error',
                      message: evt.message,
                      source: evt.filename,
                      lineno: evt.lineno,
                      colno: evt.colno
                    });
                  });
                  window.addEventListener('unhandledrejection', function(evt){
                    sendError({
                      type: 'unhandledrejection',
                      reason: evt.reason && (evt.reason.message || evt.reason.toString())
                    });
                  });
                })();
              `,
            }}
          />
        )}

        {/* Chat support (Crisp) - enabled when NEXT_PUBLIC_CRISP_WEBSITE_ID is set */}
        {CRISP_WEBSITE_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.$crisp = [];
                window.CRISP_WEBSITE_ID = '${CRISP_WEBSITE_ID}';
                (function() {
                  var d = document;
                  var s = d.createElement("script");
                  s.src = "https://client.crisp.chat/l.js";
                  s.async = true;
                  d.getElementsByTagName("head")[0].appendChild(s);
                })();
              `,
            }}
          />
        )}

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Eagle Digital Services Ltd",
              "legalName": "Eagle Digital Services Ltd",
              "url": "https://sniperiq.ai",
              "logo": "https://sniperiq.ai/logo.png",
              "foundingDate": "2025",
              "description": "UK-based technology company specializing in AI-powered financial intelligence platforms.",
              "taxID": "16584009",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "71-75 Shelton Street",
                "addressLocality": "Covent Garden",
                "addressRegion": "London",
                "postalCode": "WC2H 9JQ",
                "addressCountry": "GB"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "contact@sniperiq.ai",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://twitter.com/sniperiq",
                "https://linkedin.com/company/sniperiq"
              ],
              "brand": {
                "@type": "Brand",
                "name": "SniperIQ",
                "description": "Institutional-grade financial intelligence platform"
              }
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
              "name": "SniperIQ - Institutional-Grade Financial Intelligence",
              "description": "Advanced AI research platform combining 9 specialized engines for institutional-grade market analysis",
              "url": "https://sniperiq.ai",
              "inLanguage": "en-GB",
              "isPartOf": {
                "@type": "WebSite",
                "name": "SniperIQ",
                "url": "https://sniperiq.ai"
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
      <body className="antialiased"><Providers>{children}</Providers></body>
    </html>
  );
}
