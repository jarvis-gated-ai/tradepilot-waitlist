'use client'

import { useState, useEffect } from 'react'
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

// ── Device Mockup Screens ──────────────────────────────────────────────────────

function IPhoneVoiceLog() {
  return (
    <div className="w-full h-full bg-[#111] rounded-[28px] overflow-hidden flex flex-col">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[9px] text-white/60">
        <span>9:41</span>
        <div className="flex gap-1 items-center">
          <span>●●●●</span>
          <span>WiFi</span>
          <span>🔋</span>
        </div>
      </div>
      {/* App header */}
      <div className="px-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center text-[8px] font-black">F</div>
          <span className="text-white font-bold text-xs">VoiceLog™</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 px-4 py-4 flex flex-col gap-3">
        <div className="text-[9px] text-white/40 uppercase tracking-widest">Today — Job #284</div>
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </div>
            <span className="text-orange-400 text-[9px] font-semibold">RECORDING</span>
          </div>
          <p className="text-white/70 text-[9px] leading-relaxed">
            &ldquo;Replaced the 40-gallon Bradford White unit in the basement. Added expansion tank. Customer approved upgrade to PRO model on-site...&rdquo;
          </p>
        </div>
        {/* Waveform */}
        <div className="flex items-center justify-center gap-[2px] h-8 py-1">
          {[3,6,9,5,8,12,7,4,10,6,9,3,7,11,5,8,4,6,9,7,5,10,8,4].map((h, i) => (
            <div key={i} className="w-[3px] rounded-full bg-orange-500/60" style={{ height: `${h}px` }} />
          ))}
        </div>
        <div className="text-center text-[9px] text-white/30">0:47</div>
        {/* Previous notes */}
        <div className="space-y-2">
          <div className="text-[9px] text-white/30 uppercase tracking-widest">Saved Notes</div>
          {['Job #283 — HVAC filter swap + coil clean', 'Job #282 — Leak under sink, P-trap replaced'].map(n => (
            <div key={n} className="bg-white/5 rounded-lg px-3 py-2 text-[9px] text-white/50 flex items-center gap-2">
              <span className="text-orange-400">✓</span>{n}
            </div>
          ))}
        </div>
      </div>
      {/* Bottom action */}
      <div className="px-4 pb-4">
        <div className="bg-orange-500 rounded-xl py-2.5 text-center text-[10px] font-bold text-black">
          Save + Next Job →
        </div>
      </div>
    </div>
  )
}

function IPhoneQuickQuote() {
  return (
    <div className="w-full h-full bg-[#111] rounded-[28px] overflow-hidden flex flex-col">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[9px] text-white/60">
        <span>9:41</span>
        <div className="flex gap-1 items-center"><span>●●●●</span><span>WiFi</span><span>🔋</span></div>
      </div>
      {/* App header */}
      <div className="px-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center text-[8px] font-black">F</div>
          <span className="text-white font-bold text-xs">QuickQuote™</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 px-4 py-4 flex flex-col gap-3">
        <div className="text-[9px] text-white/40 uppercase tracking-widest">AI Generated — 28 sec</div>
        <div className="space-y-1.5">
          {[
            { label: 'Water Heater (40gal PRO)', price: '$1,240' },
            { label: 'Expansion Tank', price: '$180' },
            { label: 'Labor (2.5 hrs)', price: '$325' },
            { label: 'Permit Fee', price: '$85' },
          ].map(item => (
            <div key={item.label} className="flex justify-between items-center bg-white/[0.04] rounded-lg px-3 py-2">
              <span className="text-[9px] text-white/60">{item.label}</span>
              <span className="text-[9px] font-bold text-white">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-2 flex justify-between items-center">
          <span className="text-[10px] text-white/50 font-semibold">Total</span>
          <span className="text-[14px] font-black text-orange-400">$1,830</span>
        </div>
        <div className="bg-white/5 rounded-xl p-2.5">
          <div className="text-[8px] text-white/30 mb-1">Margin estimate</div>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-white/10 rounded-full h-1.5">
              <div className="bg-orange-500 h-1.5 rounded-full w-[68%]" />
            </div>
            <span className="text-[9px] text-orange-400 font-bold">68%</span>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 flex gap-2">
        <div className="flex-1 bg-white/5 border border-white/10 rounded-xl py-2.5 text-center text-[9px] text-white/50">Edit</div>
        <div className="flex-1 bg-orange-500 rounded-xl py-2.5 text-center text-[9px] font-bold text-black">Send to Client →</div>
      </div>
    </div>
  )
}

function IPadDashboard() {
  return (
    <div className="w-full h-full bg-[#0d0d0d] rounded-[20px] overflow-hidden flex flex-col">
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[9px] text-white/50 border-b border-white/5">
        <span className="font-semibold">9:41 AM</span>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center text-[7px] font-black">F</div>
          <span className="font-bold text-white text-[10px]">FLDWRK</span>
        </div>
        <div className="flex gap-1 text-[8px]"><span>●●●●</span><span>WiFi</span><span>🔋</span></div>
      </div>
      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-24 border-r border-white/5 flex flex-col gap-1 p-2 pt-3">
          {[
            { icon: '📊', label: 'Dashboard', active: true },
            { icon: '🎙️', label: 'VoiceLog', active: false },
            { icon: '💰', label: 'Quotes', active: false },
            { icon: '🧠', label: 'TradeIQ', active: false },
            { icon: '🚚', label: 'TruckStock', active: false },
          ].map(item => (
            <div key={item.label} className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg text-center ${item.active ? 'bg-orange-500/10' : ''}`}>
              <span className="text-base">{item.icon}</span>
              <span className={`text-[7px] ${item.active ? 'text-orange-400 font-semibold' : 'text-white/30'}`}>{item.label}</span>
            </div>
          ))}
        </div>
        {/* Dashboard content */}
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
          <div className="text-[9px] text-white/40 font-semibold uppercase tracking-widest">Week of Apr 21 — TradeIQ™ Summary</div>
          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Jobs Completed', value: '12', delta: '+3', color: 'orange' },
              { label: 'Revenue', value: '$9,840', delta: '+18%', color: 'green' },
              { label: 'Avg Margin', value: '71%', delta: '+4%', color: 'blue' },
            ].map(card => (
              <div key={card.label} className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-2.5">
                <div className="text-[8px] text-white/30 mb-1">{card.label}</div>
                <div className="text-[14px] font-black text-white">{card.value}</div>
                <div className="text-[8px] text-green-400">{card.delta} vs last week</div>
              </div>
            ))}
          </div>
          {/* Jobs list */}
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-2 flex-1">
            <div className="text-[8px] text-white/30 mb-2 font-semibold uppercase tracking-wider">Today&apos;s Jobs</div>
            <div className="space-y-1.5">
              {[
                { job: 'Water heater replacement', customer: 'Martinez Residence', status: 'Complete', margin: '68%' },
                { job: 'HVAC tune-up + filter', customer: 'Parkview Dental', status: 'In Progress', margin: '74%' },
                { job: 'Gas line inspection', customer: 'Cornerstone Apts', status: 'Scheduled', margin: '—' },
              ].map(j => (
                <div key={j.job} className="flex items-center justify-between bg-white/[0.03] rounded-lg px-2.5 py-2">
                  <div>
                    <div className="text-[9px] text-white/70 font-medium">{j.job}</div>
                    <div className="text-[8px] text-white/30">{j.customer}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] text-white/40">{j.margin}</span>
                    <span className={`text-[7px] px-2 py-0.5 rounded-full font-semibold ${
                      j.status === 'Complete' ? 'bg-green-500/15 text-green-400' :
                      j.status === 'In Progress' ? 'bg-orange-500/15 text-orange-400' :
                      'bg-white/5 text-white/30'
                    }`}>{j.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Mini chart */}
          <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-2">
            <div className="text-[8px] text-white/30 mb-2 font-semibold uppercase tracking-wider">Revenue (last 7 days)</div>
            <div className="flex items-end gap-1.5 h-8">
              {[40, 65, 45, 80, 55, 90, 72].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? '#f97316' : 'rgba(249,115,22,0.25)' }} />
              ))}
            </div>
            <div className="flex justify-between text-[7px] text-white/20 mt-1">
              {['M','T','W','T','F','S','S'].map(d => <span key={d}>{d}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Countdown Component ─────────────────────────────────────────────────────────

function LaunchCountdown() {
  const LAUNCH_DATE = new Date('2026-06-01T00:00:00')

  const calcTime = () => {
    const now = new Date()
    const diff = LAUNCH_DATE.getTime() - now.getTime()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [time, setTime] = useState(calcTime())

  useEffect(() => {
    const t = setInterval(() => setTime(calcTime()), 1000)
    return () => clearInterval(t)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Launch Countdown</p>
      <h2 className="text-4xl font-black text-center">Launching June 2026</h2>
      <p className="text-white/40 text-center max-w-md">
        We&apos;re heads-down building. Founding members get access first — and lock in 40% off forever.
      </p>
      <div className="flex gap-4">
        {[
          { label: 'Days', val: time.days },
          { label: 'Hours', val: time.hours },
          { label: 'Min', val: time.minutes },
          { label: 'Sec', val: time.seconds },
        ].map(({ label, val }) => (
          <div key={label} className="flex flex-col items-center bg-white/[0.04] border border-white/[0.08] rounded-2xl w-20 h-20 justify-center gap-1">
            <span className="text-3xl font-black gradient-text tabular-nums">{pad(val)}</span>
            <span className="text-[10px] text-white/30 uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>
      <a
        href="#waitlist"
        className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-3 rounded-xl transition-colors text-sm"
      >
        Claim Founding Spot →
      </a>
    </div>
  )
}

// ── Main Page ──────────────────────────────────────────────────────────────────

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
            <a href="#app-preview" className="hover:text-white transition-colors">App</a>
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
          {/* Launch badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 text-sm text-orange-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
            <span>Launching June 2026 — {spotsLeft} founding spots left</span>
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

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#waitlist" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-3.5 rounded-xl text-base transition-colors">
              Claim My Founding Spot →
            </a>
            <a href="#app-preview" className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 font-semibold px-8 py-3.5 rounded-xl text-base transition-colors">
              See the App ↓
            </a>
          </div>
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

      {/* ── APP PREVIEW SECTION ── */}
      <section id="app-preview" className="py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">App Preview</p>
            <h2 className="text-4xl font-black">Built for how you actually work.</h2>
            <p className="text-white/40 mt-4 max-w-xl mx-auto">
              Voice-first on your phone. Full visibility on your tablet. Everything synced, all the time.
            </p>
          </div>

          {/* Device layout: two iPhones + one iPad */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6">

            {/* iPhone 1 — VoiceLog */}
            <div className="flex flex-col items-center gap-4">
              {/* Phone frame */}
              <div className="relative" style={{ width: 200 }}>
                {/* Outer shell */}
                <div className="relative bg-[#1a1a1a] rounded-[40px] p-[3px] shadow-2xl shadow-black/80"
                     style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
                  {/* Dynamic island */}
                  <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-white/10" />
                  </div>
                  {/* Screen */}
                  <div className="bg-[#111] rounded-[38px] overflow-hidden" style={{ height: 400 }}>
                    <div className="pt-8 h-full">
                      <IPhoneVoiceLog />
                    </div>
                  </div>
                  {/* Home indicator */}
                  <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full" />
                </div>
                {/* Side buttons */}
                <div className="absolute left-[-3px] top-[80px] w-[3px] h-8 bg-[#2a2a2a] rounded-l-sm" />
                <div className="absolute left-[-3px] top-[120px] w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
                <div className="absolute left-[-3px] top-[144px] w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
                <div className="absolute right-[-3px] top-[100px] w-[3px] h-16 bg-[#2a2a2a] rounded-r-sm" />
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-white">VoiceLog™</div>
                <div className="text-xs text-white/40 mt-1">Hands-free job notes</div>
              </div>
            </div>

            {/* iPad — Dashboard (center, larger) */}
            <div className="flex flex-col items-center gap-4 order-first lg:order-none">
              <div className="relative" style={{ width: 360 }}>
                {/* iPad outer shell */}
                <div className="relative bg-[#1c1c1e] rounded-[28px] p-[4px] shadow-2xl"
                     style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.07), 0 40px 80px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08)' }}>
                  {/* Front camera */}
                  <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#111] border border-white/10 z-10" />
                  {/* Screen */}
                  <div className="bg-[#0d0d0d] rounded-[25px] overflow-hidden" style={{ height: 480 }}>
                    <div className="h-full">
                      <IPadDashboard />
                    </div>
                  </div>
                  {/* Home bar at bottom */}
                  <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-20 h-[3px] bg-white/15 rounded-full" />
                </div>
                {/* Side button */}
                <div className="absolute right-[-4px] top-[80px] w-[4px] h-10 bg-[#2a2a2a] rounded-r-sm" />
                {/* Volume buttons */}
                <div className="absolute top-[-4px] left-[80px] h-[4px] w-10 bg-[#2a2a2a] rounded-t-sm" />
                <div className="absolute top-[-4px] left-[100px] h-[4px] w-10 bg-[#2a2a2a] rounded-t-sm" />
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-white">TradeIQ™ Dashboard</div>
                <div className="text-xs text-white/40 mt-1">Full visibility on iPad</div>
              </div>
            </div>

            {/* iPhone 2 — QuickQuote */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative" style={{ width: 200 }}>
                <div className="relative bg-[#1a1a1a] rounded-[40px] p-[3px] shadow-2xl shadow-black/80"
                     style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
                  <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-white/10" />
                  </div>
                  <div className="bg-[#111] rounded-[38px] overflow-hidden" style={{ height: 400 }}>
                    <div className="pt-8 h-full">
                      <IPhoneQuickQuote />
                    </div>
                  </div>
                  <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full" />
                </div>
                <div className="absolute left-[-3px] top-[80px] w-[3px] h-8 bg-[#2a2a2a] rounded-l-sm" />
                <div className="absolute left-[-3px] top-[120px] w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
                <div className="absolute left-[-3px] top-[144px] w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
                <div className="absolute right-[-3px] top-[100px] w-[3px] h-16 bg-[#2a2a2a] rounded-r-sm" />
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-white">QuickQuote™</div>
                <div className="text-xs text-white/40 mt-1">AI quotes in 30 seconds</div>
              </div>
            </div>

          </div>

          {/* Ambient glow under devices */}
          <div className="relative h-0 overflow-visible flex justify-center">
            <div className="w-96 h-24 bg-orange-500/10 blur-3xl rounded-full -mt-12 pointer-events-none" />
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

      {/* ── COUNTDOWN SECTION ── */}
      <section className="py-24 px-6 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <LaunchCountdown />
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
