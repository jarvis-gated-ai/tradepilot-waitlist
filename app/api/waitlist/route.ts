import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder')
  try {
    const { email, trade, teamSize } = await req.json()

    if (!email || !trade || !teamSize) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Notify Adeel
    await resend.emails.send({
      from: 'FLDWRK Waitlist <waitlist@fldwrk.ai>',
      to: 'info@gatedenterprise.com',
      subject: `🔧 New FLDWRK Waitlist Signup — ${trade}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #F9F8F6; padding: 32px; max-width: 520px; margin: 0 auto;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 24px;">
            <div style="background: #F97316; width: 36px; height: 36px; border-radius: 9px; display: flex; align-items: center; justify-content: center;">
              <span style="font-weight: 900; font-size: 16px; color: #fff;">F</span>
            </div>
            <span style="font-weight: 900; font-size: 18px; color: #1A1A1A;">FLDWRK</span>
          </div>
          <h2 style="color: #1A1A1A; margin: 0 0 8px; font-size: 22px; font-weight: 900;">New Founding Member 🎉</h2>
          <p style="color: #6B7280; font-size: 14px; margin: 0 0 24px;">Someone just joined the waitlist.</p>
          <div style="background: #fff; border: 1px solid #E8E5E0; border-radius: 16px; padding: 20px; margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #9CA3AF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Email</td><td style="padding: 8px 0; color: #1A1A1A; font-weight: 700; font-size: 15px;">${email}</td></tr>
              <tr><td style="padding: 8px 0; color: #9CA3AF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Trade</td><td style="padding: 8px 0; color: #1A1A1A; font-weight: 700; font-size: 15px;">${trade}</td></tr>
              <tr><td style="padding: 8px 0; color: #9CA3AF; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Team Size</td><td style="padding: 8px 0; color: #1A1A1A; font-weight: 700; font-size: 15px;">${teamSize}</td></tr>
            </table>
          </div>
          <p style="color: #9CA3AF; font-size: 12px; margin: 0;">fldwrk.ai waitlist</p>
        </div>
      `,
    })

    // Confirm to lead
    await resend.emails.send({
      from: 'FLDWRK <waitlist@fldwrk.ai>',
      to: email,
      subject: `You're on the FLDWRK founding list 🔧`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #F9F8F6; padding: 40px; max-width: 520px; margin: 0 auto;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 32px;">
            <div style="background: #F97316; width: 36px; height: 36px; border-radius: 9px; display: flex; align-items: center; justify-content: center;">
              <span style="font-weight: 900; font-size: 16px; color: #fff;">F</span>
            </div>
            <span style="font-weight: 900; font-size: 18px; color: #1A1A1A;">FLDWRK</span>
          </div>

          <h1 style="font-size: 32px; font-weight: 900; margin: 0 0 12px; color: #1A1A1A;">You're in. 🎉</h1>

          <p style="color: #6B7280; line-height: 1.7; margin: 0 0 16px; font-size: 15px;">
            You're officially on the <strong style="color: #1A1A1A;">FLDWRK founding member waitlist</strong>.
            That means early access, 40% off your subscription forever, and a direct line to the product team.
          </p>

          <div style="background: #FFF4ED; border: 1px solid #FED7AA; border-radius: 16px; padding: 20px; margin: 24px 0;">
            <p style="margin: 0; color: #9A3412; font-size: 14px; font-weight: 600;">🔗 Your founding member perks</p>
            <ul style="margin: 12px 0 0; padding-left: 20px; color: #7C2D12; font-size: 14px; line-height: 1.8;">
              <li>40% off your plan — locked in forever</li>
              <li>Access before public launch in June 2026</li>
              <li>Direct line to the founders</li>
              <li>Help shape what we build next</li>
            </ul>
          </div>

          <p style="color: #6B7280; line-height: 1.7; margin: 0 0 32px; font-size: 15px;">
            We're building FLDWRK for the plumber in a truck at 7am — not the office manager behind a desk.
            Voice-first. No laptop. No paperwork. Just your phone and your skills.
          </p>

          <a href="https://fldwrk.ai" style="display: inline-block; background: #F97316; color: #fff; font-weight: 900; font-size: 15px; padding: 14px 28px; border-radius: 12px; text-decoration: none;">See the App Preview →</a>

          <p style="margin-top: 40px; color: #9CA3AF; font-size: 13px; border-top: 1px solid #E8E5E0; padding-top: 20px;">
            — The FLDWRK team<br />
            <a href="https://fldwrk.ai" style="color: #F97316;">fldwrk.ai</a> &nbsp;·&nbsp; Launching June 2026
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
