'use client';

import Link from 'next/link';
import { Brain, ArrowLeft, Shield, Lock, Eye, Database, FileText } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl p-[1px]">
                <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-gray-300" />
                </div>
              </div>
              <span className="text-xl font-black">FIN<span className="text-gray-300">SCAN</span></span>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-gray-400" />
            <div>
              <h1 className="text-5xl md:text-6xl font-black">Privacy Policy</h1>
              <p className="text-gray-400 mt-2">UK GDPR Compliant</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-500/10 to-transparent border border-gray-500/20 rounded-xl p-6 mb-8">
            <p className="text-sm text-gray-300 leading-relaxed">
              <strong>Last Updated:</strong> 20 January 2025<br />
              <strong>Effective Date:</strong> 20 January 2025<br />
              <strong>Data Controller:</strong> FinScan Limited<br />
              <strong>Contact:</strong> privacy@finscan.uk
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-10">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-black mb-4 flex items-center gap-3">
                <FileText className="w-7 h-7 text-gray-400" />
                1. Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                FinScan Limited ("<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you use our financial analysis platform and services (the "<strong>Services</strong>").
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                This policy is issued in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and the Privacy and Electronic Communications Regulations (PECR).
              </p>
              <p className="text-gray-300 leading-relaxed">
                FinScan Limited is the data controller responsible for your personal data. We are registered with the Information Commissioner's Office (ICO) in the United Kingdom.
              </p>
            </section>

            {/* What Data We Collect */}
            <section>
              <h2 className="text-3xl font-black mb-4 flex items-center gap-3">
                <Database className="w-7 h-7 text-gray-400" />
                2. Information We Collect
              </h2>

              <h3 className="text-2xl font-bold mb-3 text-gray-200">2.1 Information You Provide</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect personal data that you voluntarily provide when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
                <li>Register for an account (name, email address, password)</li>
                <li>Complete your user profile (trading experience, investment objectives, risk tolerance)</li>
                <li>Contact our customer support (correspondence content, support tickets)</li>
                <li>Subscribe to our newsletters or marketing communications</li>
                <li>Participate in surveys, promotions, or research studies</li>
                <li>Make payments (payment information processed by third-party payment processors)</li>
              </ul>

              <h3 className="text-2xl font-bold mb-3 text-gray-200">2.2 Information Automatically Collected</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you access our Services, we automatically collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
                <li><strong>Usage Data:</strong> Pages viewed, features used, time spent, search queries, watchlists, portfolio data</li>
                <li><strong>Device Information:</strong> IP address, browser type and version, device type, operating system, unique device identifiers</li>
                <li><strong>Location Data:</strong> Approximate geographic location derived from IP address</li>
                <li><strong>Cookies and Tracking:</strong> See our Cookie Policy for detailed information</li>
                <li><strong>Log Data:</strong> Access times, error logs, performance data</li>
              </ul>

              <h3 className="text-2xl font-bold mb-3 text-gray-200">2.3 Information from Third Parties</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may receive data from:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Financial data providers (market data, economic indicators - anonymized and aggregated)</li>
                <li>Analytics providers (Google Analytics, usage statistics)</li>
                <li>Identity verification services (for compliance with UK financial regulations)</li>
                <li>Social media platforms (if you choose to connect your account)</li>
              </ul>
            </section>

            {/* Legal Basis */}
            <section>
              <h2 className="text-3xl font-black mb-4 flex items-center gap-3">
                <Lock className="w-7 h-7 text-gray-400" />
                3. Legal Basis for Processing
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Under UK GDPR, we process your personal data on the following legal bases:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">3.1 Contractual Necessity</h4>
                  <p className="text-gray-300 text-sm">
                    Processing necessary to provide our Services under our Terms of Service (account creation, service delivery, customer support).
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">3.2 Legitimate Interests</h4>
                  <p className="text-gray-300 text-sm">
                    Processing necessary for our legitimate business interests, including improving our Services, fraud prevention, network security, and business analytics, provided these interests are not overridden by your rights.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">3.3 Consent</h4>
                  <p className="text-gray-300 text-sm">
                    Where you have given explicit consent for specific processing activities (marketing communications, optional data collection). You may withdraw consent at any time.
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">3.4 Legal Obligations</h4>
                  <p className="text-gray-300 text-sm">
                    Processing required to comply with UK legal obligations, including financial regulations, tax laws, and law enforcement requests.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Data */}
            <section>
              <h2 className="text-3xl font-black mb-4">4. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use your personal data for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li><strong>Service Delivery:</strong> Provide, maintain, and improve our analysis platform and features</li>
                <li><strong>Personalization:</strong> Customize your experience, recommendations, and interface preferences</li>
                <li><strong>Communication:</strong> Send service notifications, updates, security alerts, and support messages</li>
                <li><strong>Marketing:</strong> Send promotional materials about new features or services (with your consent; opt-out available)</li>
                <li><strong>Analytics:</strong> Understand usage patterns, improve algorithms, develop new features</li>
                <li><strong>Security:</strong> Detect, prevent, and respond to fraud, security incidents, and illegal activities</li>
                <li><strong>Compliance:</strong> Fulfill legal obligations, enforce our terms, protect our rights and those of others</li>
                <li><strong>Research:</strong> Conduct anonymized research and develop AI/ML models (only with aggregated, de-identified data)</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-3xl font-black mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell your personal data. We may share your data with:
              </p>

              <h3 className="text-2xl font-bold mb-3 text-gray-200">5.1 Service Providers</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Third-party companies that perform services on our behalf:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
                <li>Cloud hosting providers (AWS, Digital Ocean - subject to Data Processing Agreements)</li>
                <li>Payment processors (Stripe - they have their own privacy policies)</li>
                <li>Email service providers (for transactional and marketing emails)</li>
                <li>Analytics providers (Google Analytics - anonymized where possible)</li>
                <li>Customer support platforms</li>
              </ul>

              <h3 className="text-2xl font-bold mb-3 text-gray-200">5.2 Legal Requirements</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may disclose your data where required by UK law or regulation:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-6">
                <li>To comply with legal process, court orders, or government requests</li>
                <li>To enforce our Terms of Service and protect our rights</li>
                <li>To protect the safety and security of our users and the public</li>
                <li>In connection with fraud prevention and investigation</li>
              </ul>

              <h3 className="text-2xl font-bold mb-3 text-gray-200">5.3 Business Transfers</h3>
              <p className="text-gray-300 leading-relaxed">
                If we are involved in a merger, acquisition, or sale of assets, your data may be transferred. We will notify you via email and/or prominent notice on our Services before your data is transferred.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-3xl font-black mb-4">6. International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Your data may be processed outside the United Kingdom. Where we transfer data internationally, we ensure appropriate safeguards are in place:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Standard Contractual Clauses (SCCs) approved by the UK ICO</li>
                <li>Adequacy decisions (where the destination country provides adequate protection)</li>
                <li>Binding Corporate Rules for intra-group transfers</li>
                <li>Your explicit consent where required</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-3xl font-black mb-4">7. Data Retention</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We retain your personal data only as long as necessary for the purposes set out in this policy:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
                <li><strong>Active Accounts:</strong> Data retained while your account is active and for a reasonable period afterward</li>
                <li><strong>Closed Accounts:</strong> Most data deleted within 90 days of account closure</li>
                <li><strong>Legal Requirements:</strong> Some data retained longer to comply with legal, tax, or accounting obligations (typically 6-7 years)</li>
                <li><strong>Legitimate Interests:</strong> Anonymized data may be retained for analytics and research</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                You may request earlier deletion subject to our legal obligations (see Your Rights below).
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-3xl font-black mb-4 flex items-center gap-3">
                <Eye className="w-7 h-7 text-gray-400" />
                8. Your Rights Under UK GDPR
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the following rights regarding your personal data:
              </p>

              <div className="space-y-3 mb-6">
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-bold text-white mb-1">Right of Access</h4>
                  <p className="text-gray-300 text-sm">Request a copy of your personal data we hold</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-bold text-white mb-1">Right to Rectification</h4>
                  <p className="text-gray-300 text-sm">Request correction of inaccurate or incomplete data</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-bold text-white mb-1">Right to Erasure ("Right to be Forgotten")</h4>
                  <p className="text-gray-300 text-sm">Request deletion of your data (subject to legal obligations)</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-bold text-white mb-1">Right to Restriction of Processing</h4>
                  <p className="text-gray-300 text-sm">Request that we limit how we use your data</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-bold text-white mb-1">Right to Data Portability</h4>
                  <p className="text-gray-300 text-sm">Receive your data in a structured, machine-readable format</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-bold text-white mb-1">Right to Object</h4>
                  <p className="text-gray-300 text-sm">Object to processing based on legitimate interests or for direct marketing</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-bold text-white mb-1">Rights Related to Automated Decision-Making</h4>
                  <p className="text-gray-300 text-sm">Not be subject to decisions based solely on automated processing (including profiling) that produce legal or similarly significant effects</p>
                </div>
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-bold text-white mb-1">Right to Withdraw Consent</h4>
                  <p className="text-gray-300 text-sm">Withdraw consent at any time where processing is based on consent</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                To exercise these rights, contact us at <a href="mailto:privacy@finscan.uk" className="text-gray-200 underline hover:text-white">privacy@finscan.uk</a>.
                We will respond within one month of receipt of your request (extendable by two further months in complex cases).
              </p>

              <p className="text-gray-300 leading-relaxed">
                You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe we have not handled your data properly. Visit <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-gray-200 underline hover:text-white">ico.org.uk</a> or call 0303 123 1113.
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-3xl font-black mb-4">9. Data Security</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication (role-based access, multi-factor authentication)</li>
                <li>Employee training on data protection and confidentiality</li>
                <li>Incident response procedures and breach notification protocols</li>
                <li>Regular backups and disaster recovery plans</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                However, no method of transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-3xl font-black mb-4">10. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to improve your experience and analyze usage. See our separate <Link href="/cookies" className="text-gray-200 underline hover:text-white">Cookie Policy</Link> for detailed information about:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Types of cookies we use (essential, functional, analytics, marketing)</li>
                <li>Third-party cookies and tracking</li>
                <li>How to manage and disable cookies</li>
                <li>Impact of disabling cookies on Service functionality</li>
              </ul>
            </section>

            {/* Children */}
            <section>
              <h2 className="text-3xl font-black mb-4">11. Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our Services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from children. If you are a parent or guardian and believe your child has provided us with personal data, contact us immediately at <a href="mailto:privacy@finscan.uk" className="text-gray-200 underline hover:text-white">privacy@finscan.uk</a>, and we will delete such data.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-3xl font-black mb-4">12. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes via email or prominent notice on our Services at least 30 days before the changes take effect. Continued use of our Services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-3xl font-black mb-4">13. Contact Us</h2>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong className="text-white">Data Protection Officer:</strong> FinScan Limited</p>
                  <p><strong className="text-white">Email:</strong> <a href="mailto:privacy@finscan.uk" className="text-gray-200 underline hover:text-white">privacy@finscan.uk</a></p>
                  <p><strong className="text-white">Address:</strong> FinScan Limited, United Kingdom</p>
                  <p><strong className="text-white">ICO Registration:</strong> [Registration Number]</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-900 bg-black py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 FinScan Limited. All rights reserved. Registered in England and Wales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
