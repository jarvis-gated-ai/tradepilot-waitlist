import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — FLDWRK',
  description: 'Terms and conditions for using FLDWRK.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F8] text-[#1A1A1A]">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E8E5E0]" style={{ boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center font-black text-sm text-white shadow-md">F</div>
            <span className="font-black text-lg tracking-tight text-gray-900">FLDWRK</span>
            <span className="text-xs text-gray-300 font-mono">.ai</span>
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">← Back to home</Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="mb-12">
          <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last updated: June 1, 2026</p>
        </div>

        <div className="bg-white border border-[#E8E5E0] rounded-3xl p-8 md:p-10 space-y-8" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)' }}>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              By accessing or using FLDWRK (&quot;the Service&quot;), operated by FLDWRK, Inc. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              FLDWRK is an AI-native field service management platform designed for tradespeople including plumbers, HVAC technicians, electricians, and general contractors. The Service includes voice-based job logging, AI-powered quoting, business intelligence, inventory management, and related features available via web and mobile applications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">3. Waitlist & Early Access</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Joining the FLDWRK waitlist does not guarantee access to the Service. Early access and founding member pricing are offered at our discretion. We reserve the right to modify or cancel founding member offers prior to the public launch.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">4. User Accounts</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">When the Service launches:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'You must provide accurate and complete information when creating an account.',
                'You are responsible for maintaining the confidentiality of your account credentials.',
                'You are responsible for all activity that occurs under your account.',
                'You must notify us immediately of any unauthorized use of your account.',
                'One account per person; sharing accounts is not permitted.',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">5. Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">You agree not to:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'Use the Service for any unlawful purpose or in violation of any regulations',
                'Attempt to gain unauthorized access to any part of the Service',
                'Interfere with or disrupt the integrity or performance of the Service',
                'Upload or transmit viruses, malicious code, or harmful content',
                'Scrape, crawl, or systematically extract data from the Service',
                'Reverse engineer or attempt to extract the source code of our software',
                'Use the Service to compete with FLDWRK or build a competing product',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">6. Subscription & Payment</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              FLDWRK operates on a monthly subscription model. Founding members who join the waitlist before launch will receive their locked-in founding pricing. Subscriptions automatically renew unless cancelled before the renewal date. We reserve the right to change pricing with 30 days&apos; written notice to existing subscribers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">7. Your Data</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              You retain ownership of all data you enter into FLDWRK. By using the Service, you grant us a limited license to process and store your data solely to provide the Service. We will not use your business data for purposes other than operating and improving the Service. See our <Link href="/privacy" className="text-red-600 hover:underline">Privacy Policy</Link> for full details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">8. Voice Data & AI Processing</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              By using VoiceLog™ and other AI-powered features, you consent to the processing of voice recordings and text inputs by our AI systems. Audio is processed to generate structured output and is not retained beyond what is operationally necessary. You are responsible for obtaining any required consent from third parties whose voices may be captured.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">9. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              The FLDWRK name, logo, software, features, and content are owned by FLDWRK, Inc. and protected by intellectual property laws. Nothing in these Terms grants you a right to use FLDWRK&apos;s trademarks or intellectual property beyond what is necessary to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">10. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components. AI-generated content (quotes, notes, analytics) is provided as a tool — you are responsible for reviewing and verifying all outputs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">11. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              To the maximum extent permitted by law, FLDWRK, Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. Our total liability for any claim related to the Service shall not exceed the amount you paid to us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">12. Termination</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Either party may terminate the Service relationship at any time. We may suspend or terminate your access for violation of these Terms. Upon termination, you may request an export of your data within 30 days. After that period, your data may be permanently deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">13. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law provisions. Any disputes shall be resolved through binding arbitration in accordance with the American Arbitration Association rules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">14. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              We may modify these Terms at any time. Material changes will be communicated via email or a prominent notice on the Service. Continued use after changes take effect constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">15. Contact</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Questions about these Terms? Contact us at:<br />
              <a href="mailto:legal@fldwrk.ai" className="text-red-600 hover:underline font-medium">legal@fldwrk.ai</a>
              <br />
              FLDWRK, Inc. · fldwrk.ai
            </p>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#E8E5E0] bg-white py-8 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-red-600 flex items-center justify-center font-black text-[10px] text-white">F</div>
            <span className="font-black text-sm text-gray-900">FLDWRK</span>
            <span className="text-gray-300 text-xs font-mono">.ai</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-gray-700 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-red-600 font-medium">Terms</Link>
            <a href="mailto:hello@fldwrk.ai" className="hover:text-gray-700 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
