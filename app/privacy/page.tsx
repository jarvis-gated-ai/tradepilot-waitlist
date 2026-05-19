import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — FLDWRK',
  description: 'How FLDWRK collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: June 1, 2026</p>
        </div>

        <div className="bg-white border border-[#E8E5E0] rounded-3xl p-8 md:p-10 space-y-8" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)' }}>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">1. Who We Are</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              FLDWRK, Inc. (&quot;FLDWRK,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website at <a href="https://fldwrk.ai" className="text-red-600 hover:underline">fldwrk.ai</a> and the FLDWRK mobile application. We are committed to protecting your personal information and being transparent about how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">We collect the following types of information:</p>
            <ul className="space-y-3">
              {[
                { title: 'Waitlist Information', desc: 'When you join our waitlist, we collect your first name, last name, email address, trade type, and team size.' },
                { title: 'Usage Data', desc: 'We may collect information about how you interact with our website, including pages visited, time spent, and browser type.' },
                { title: 'Voice Data (App)', desc: 'When you use VoiceLog™ in the app, audio recordings are processed to generate structured job notes. Recordings are not stored longer than necessary for processing.' },
                { title: 'Job & Business Data', desc: 'Information you enter about jobs, customers, quotes, and inventory in the FLDWRK app.' },
              ].map(item => (
                <li key={item.title} className="flex gap-3 bg-[#F8F8F8] border border-[#E8E5E0] rounded-2xl px-5 py-4">
                  <span className="text-red-500 text-xs font-bold mt-0.5 shrink-0">→</span>
                  <div>
                    <span className="text-sm font-bold text-gray-800">{item.title}: </span>
                    <span className="text-sm text-gray-500">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'Send you waitlist updates and early access notifications',
                'Personalize your onboarding experience',
                'Provide and improve the FLDWRK platform',
                'Send you product updates, tips, and relevant communications',
                'Analyze usage patterns to improve our features',
                'Comply with legal obligations',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">4. Data Sharing</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              We do not sell, rent, or trade your personal information to third parties. We may share your data with trusted service providers who help us operate our platform (such as email delivery services), but only to the extent necessary to provide those services. All service providers are contractually bound to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">5. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Waitlist data is retained until you request removal or until FLDWRK launches and you either convert to a customer or opt out. App data is retained for as long as your account is active. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">6. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">Depending on your location, you may have the right to:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                'Access the personal data we hold about you',
                'Request correction of inaccurate data',
                'Request deletion of your data',
                'Opt out of marketing communications at any time',
                'Data portability (receive your data in a machine-readable format)',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-400 font-bold shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@fldwrk.ai" className="text-red-600 hover:underline">privacy@fldwrk.ai</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">7. Security</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              We use industry-standard security measures including encryption in transit (TLS), encrypted storage, and access controls to protect your data. However, no system is 100% secure and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">8. Cookies</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Our website uses minimal cookies necessary for operation and analytics. We do not use advertising or tracking cookies. You can disable cookies in your browser settings, though some features may not function correctly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">9. Children&apos;s Privacy</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              FLDWRK is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">10. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              We may update this Privacy Policy from time to time. We will notify you of material changes via email or a prominent notice on our website. Continued use of FLDWRK after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-gray-900 mb-3">11. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Questions about this Privacy Policy? Reach us at:<br />
              <a href="mailto:privacy@fldwrk.ai" className="text-red-600 hover:underline font-medium">privacy@fldwrk.ai</a>
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
            <Link href="/privacy" className="text-red-600 font-medium">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-700 transition-colors">Terms</Link>
            <a href="mailto:hello@fldwrk.ai" className="hover:text-gray-700 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
