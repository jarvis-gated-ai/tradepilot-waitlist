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
        <div style="font-family: monospace; background: #0a0a0a; color: #fff; padding: 24px; border-radius: 12px;">
          <h2 style="color: #f97316; margin: 0 0 16px;">New Founding Member</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Trade:</strong> ${trade}</p>
          <p><strong>Team Size:</strong> ${teamSize}</p>
          <p style="color: #666; margin-top: 24px; font-size: 12px;">FLDWRK Waitlist</p>
        </div>
      `,
    })

    // Confirm to lead
    await resend.emails.send({
      from: 'FLDWRK <waitlist@fldwrk.ai>',
      to: email,
      subject: `You're on the FLDWRK founding list 🔧`,
      html: `
        <div style="font-family: -apple-system, sans-serif; background: #0a0a0a; color: #fff; padding: 40px; max-width: 500px; border-radius: 16px;">
          <div style="background: #f97316; width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;">
            <span style="font-weight: 900; font-size: 18px; color: #000;">F</span>
          </div>
          <h1 style="font-size: 28px; font-weight: 900; margin: 0 0 12px;">You're in.</h1>
          <p style="color: #aaa; line-height: 1.6;">
            You're now on the FLDWRK founding member waitlist. You'll get early access, 40% off forever,
            and a direct line to the team when we open the doors.
          </p>
          <p style="color: #aaa; line-height: 1.6; margin-top: 16px;">
            We're building for the plumber in a truck at 7am — not the office manager at a desk. 
            If that's you, we can't wait to show you what we've got.
          </p>
          <p style="margin-top: 32px; color: #666; font-size: 13px;">— The FLDWRK team</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
