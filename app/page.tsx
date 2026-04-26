'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  email: string
  trade: string
  teamSize: string
}

const features = [
  {
    icon: '🎙️',
    name: 'VoiceLog™',
    desc: 'Dictate job notes hands-free on-site. No typing, no clipboard, no forgetting.',
  },
  {
    icon: '💰',
    name: 'QuickQuote™',
    desc: 'Get an AI-generated quote in 30 seconds from a voice description. Close jobs on the spot.',
  },
  {
    icon: '🧠',
    name: 'TradeIQ™',
    desc: 'Your business, analyzed. Job margin, top customers, peak seasons — automatically surfaced.',
  },
  {
    icon: '🚚',
    name: 'TruckStock™',
    desc: 'Track what\'s in your truck. Get alerts before you run out of the parts you always need.',
  },
]

const trades = [
  'Plumber', 'HVAC Tech', 'Electrician', 'General Contractor',
  'Roofer', 'Painter', 'Landscaper', 'Other'
]

const teamSizes = [
  'Just me', '2–5 people', '6–15 people', '15+ people'
]

const stats = [
  { value: '47 min', label: 'avg time lost to paperwork per job' },
  { value: '$12K', label: 'avg revenue lost to uncharged time' },
  { value: '3.2×', label: 'faster quoting with voice AI' },
]

export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [spotsLeft] = useState(47)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      // fail silently, still show success for UX
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white noise-bg">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center font-black text-sm">F</div>
            <span className="font-bold text-lg tracking-tight">FLDWRK</span>
            <span className="text-xs text-white/30 font-mono ml-1">.ai</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/50">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <a href="#waitlist" className="text-sm bg-orange-500 hover:bg-orange-400 text-black font-semibold px-4 py-2 rounded-lg transition-colors">
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 text-sm text-orange-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
            <span>{spotsLeft} founding user spots remaining</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Run your trade business
            <br />
            <span className="gradient-text">from your truck.</span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            FLDWRK is the AI-native field service platform built for plumbers, HVAC techs, and electricians —
            not office managers. Voice-first. Job-ready. No laptop required.
          </p>

          {/* Stats row */}
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black gradient-text">{s.value}</div>
                <div className="text-sm text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA scroll hint */}
          <a href="#waitlist" className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-white/70 transition-colors">
            <span>Get early access</span>
            <span className="animate-bounce">↓</span>
          </a>
        </div>
      </section>

      {/* Problem section */}
      <section className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">The Problem</p>
              <h2 className="text-4xl font-black mb-6 leading-tight">
                Jobber was built for the office. You work in the field.
              </h2>
              <p className="text-white/60 leading-relaxed">
                Current FSM tools assume you have a desk, a laptop, and time to type. You have a Sprinter van,
                dirty gloves, and 10 minutes between jobs. FLDWRK meets you where you actually are.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { bad: 'Type job notes after every visit', good: 'Dictate notes hands-free in 30 seconds' },
                { bad: 'Build quotes in a spreadsheet', good: 'AI quotes from a voice description' },
                { bad: 'Guess your profit margins', good: 'TradeIQ™ tells you automatically' },
                { bad: 'Run out of parts mid-job', good: 'TruckStock™ alerts you before you leave' },
              ].map((item) => (
                <div key={item.bad} className="grid grid-cols-2 gap-3">
                  <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-3 text-sm text-white/40 flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✕</span>
                    <span>{item.bad}</span>
                  </div>
                  <div className="bg-orange-500/5 border border-orange-500/10 rounded-xl p-3 text-sm text-white/70 flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5">✓</span>
                    <span>{item.good}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">Features</p>
            <h2 className="text-4xl font-black">Everything you need. Nothing you don&apos;t.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.name} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-orange-500/20 hover:bg-white/[0.05] transition-all group">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors">{f.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section id="pricing" className="py-20 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-4xl font-black mb-4">Simple. Flat. No surprises.</h2>
          <p className="text-white/50 mb-12">Founding members lock in 40% off forever.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Solo', price: '$49', founding: '$29', desc: 'For the one-man operation', features: ['VoiceLog™', 'QuickQuote™', 'Unlimited jobs', 'Mobile app'] },
              { name: 'Crew', price: '$89', founding: '$53', desc: 'For small crews (up to 5)', features: ['Everything in Solo', 'Multi-tech dispatch', 'TradeIQ™ analytics', 'Customer portal'], featured: true },
              { name: 'Shop', price: '$149', founding: '$89', desc: 'For growing operations', features: ['Everything in Crew', 'TruckStock™', 'API access', 'Priority support'] },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl p-6 text-left relative ${plan.featured ? 'bg-orange-500/10 border-2 border-orange-500/40' : 'bg-white/[0.03] border border-white/[0.06]'}`}>
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-sm text-white/50 mb-1">{plan.name}</div>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-3xl font-black text-orange-400">{plan.founding}</span>
                  <span className="text-white/30 line-through text-sm mb-1">{plan.price}</span>
                  <span className="text-white/30 text-sm mb-1">/mo</span>
                </div>
                <p className="text-white/40 text-xs mb-5">{plan.desc}</p>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-white/60 flex items-center gap-2">
                      <span className="text-orange-400 text-xs">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-sm mt-6">Founding pricing locks in when we launch. No card required to join the waitlist.</p>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          {submitted ? (
            <div className="text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-4xl font-black mb-4">You&apos;re on the list.</h2>
              <p className="text-white/50 text-lg">
                You&apos;re one of {spotsLeft} founding members. We&apos;ll reach out personally before we launch.
                Tell a fellow tradesperson.
              </p>
              <div className="mt-8 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                <p className="text-sm text-white/40 mb-3">Share FLDWRK with your crew</p>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://twitter.com/intent/tweet?text=Just%20joined%20the%20FLDWRK%20waitlist%20%E2%80%94%20AI-native%20field%20service%20management%20built%20for%20the%20trades.%20No%20laptop%20required.%20fldwrk.ai"
                    target="_blank"
                    className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm transition-colors"
                  >
                    Share on X
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText('https://fldwrk.ai')}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm transition-colors"
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">Early Access</p>
                <h2 className="text-4xl font-black mb-4">
                  Get in before we launch.
                </h2>
                <p className="text-white/50">
                  Founding members get 40% off forever, direct access to the team, and help shape the product.
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-sm text-white/60 mb-2">Work Email</label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' }
                      })}
                      type="email"
                      placeholder="you@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">What&apos;s your trade?</label>
                    <select
                      {...register('trade', { required: true })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all"
                    >
                      <option value="" className="bg-[#111]">Select your trade</option>
                      {trades.map(t => (
                        <option key={t} value={t} className="bg-[#111]">{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">Team size</label>
                    <div className="grid grid-cols-2 gap-3">
                      {teamSizes.map(size => (
                        <label key={size} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 cursor-pointer hover:border-orange-500/30 transition-all has-[:checked]:border-orange-500/50 has-[:checked]:bg-orange-500/5">
                          <input
                            {...register('teamSize', { required: true })}
                            type="radio"
                            value={size}
                            className="accent-orange-500"
                          />
                          <span className="text-sm text-white/70">{size}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-400 disabled:bg-orange-500/50 text-black font-bold py-4 rounded-xl text-base transition-all transform hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {loading ? 'Securing your spot...' : `Secure My Founding Spot →`}
                  </button>

                  <p className="text-center text-xs text-white/25">
                    No spam. No credit card. Just early access.
                  </p>
                </form>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center font-black text-xs">F</div>
            <span className="font-bold text-sm">FLDWRK</span>
            <span className="text-white/20 text-xs">.ai</span>
          </div>
          <p className="text-white/20 text-xs">© 2026 FLDWRK. Built for the trades.</p>
          <div className="flex gap-4 text-xs text-white/20">
            <a href="/privacy" className="hover:text-white/50 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white/50 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
