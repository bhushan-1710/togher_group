import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

// The inbox that receives enquiries
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? 'info@toghergroup.com';

// The "From" address — must be a domain verified in your Resend account
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'noreply@toghergroup.com';

function formatEnquiryType(value?: string): string {
  if (!value) return 'General Enquiry';
  const map: Record<string, string> = {
    client: 'Client / Employer Requisition',
    candidate: 'Candidate Representation',
    general: 'General Corporate Enquiry',
    'client-management': 'Client — Management Professionals Recruitment',
    'client-trades': 'Client — Trades & Labour',
    'client-general': 'Client — General Enquiry',
    'candidate-management': 'Candidate — Management Professional',
    'candidate-trades': 'Candidate — Trades & Labour',
    'candidate-cv': 'Candidate — Submit CV',
  };
  return map[value] ?? value;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = (body.name || body.contactName || '').trim();
    const email = (body.email || '').trim();
    const phone = (body.phone || '').trim();
    const enquiryType = body.enquiryType || body.intent || 'general';
    const organisation = (body.organisation || '').trim();
    const discipline = (body.discipline || body.roleRef || '').trim();
    const message = (body.message || '').trim();

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (Name, Email, and Message).' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const enquiryLabel = formatEnquiryType(enquiryType);

    // If Resend API key is configured, send actual emails
    if (resend) {
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          replyTo: email,
          subject: `New Requisition: ${enquiryLabel} — ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1B1B18; line-height: 1.6;">
              <h2 style="font-size: 1.25rem; margin-bottom: 1.5rem; border-bottom: 2px solid #5C8200; padding-bottom: 0.75rem;">
                New Requisition Enquiry — Togher Group
              </h2>
              <table style="width:100%; border-collapse: collapse; font-size: 0.9375rem;">
                <tr>
                  <td style="padding: 0.5rem 0; color: #8A8E82; width: 140px; vertical-align: top;">Name</td>
                  <td style="padding: 0.5rem 0; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 0.5rem 0; color: #8A8E82; vertical-align: top;">Email</td>
                  <td style="padding: 0.5rem 0;"><a href="mailto:${email}" style="color: #5C8200;">${email}</a></td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 0.5rem 0; color: #8A8E82; vertical-align: top;">Phone</td>
                  <td style="padding: 0.5rem 0;">${phone}</td>
                </tr>` : ''}
                ${organisation ? `
                <tr>
                  <td style="padding: 0.5rem 0; color: #8A8E82; vertical-align: top;">Organisation</td>
                  <td style="padding: 0.5rem 0;">${organisation}</td>
                </tr>` : ''}
                ${discipline ? `
                <tr>
                  <td style="padding: 0.5rem 0; color: #8A8E82; vertical-align: top;">Discipline / Role</td>
                  <td style="padding: 0.5rem 0; font-weight: 500;">${discipline}</td>
                </tr>` : ''}
                <tr>
                  <td style="padding: 0.5rem 0; color: #8A8E82; vertical-align: top;">Category</td>
                  <td style="padding: 0.5rem 0;">${enquiryLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 0.5rem 0; color: #8A8E82; vertical-align: top;">Specification Details</td>
                  <td style="padding: 0.5rem 0; white-space: pre-wrap;">${message}</td>
                </tr>
              </table>
              <p style="margin-top: 2rem; font-size: 0.75rem; color: #8A8E82;">
                Sent via toghergroup.com recruitment terminal
              </p>
            </div>
          `,
        });

        // Send confirmation email to enquirer
        await resend.emails.send({
          from: FROM_EMAIL,
          to: email,
          subject: "We've received your requisition — Togher Group",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; color: #1B1B18; line-height: 1.6;">
              <h2 style="font-size: 1.25rem; margin-bottom: 1rem; border-bottom: 2px solid #5C8200; padding-bottom: 0.75rem;">
                Thank you, ${name}.
              </h2>
              <p style="font-size: 0.9375rem; color: #444;">
                We have received your specification regarding <strong>${enquiryLabel}</strong>. Our senior directors review all briefs within two business hours.
              </p>
              <p style="font-size: 0.9375rem; color: #444;">
                If your requirement involves an urgent site shortfall, please call our Dublin HQ at +353 (0)1 905 3800 directly.
              </p>
              <p style="margin-top: 2rem; font-size: 0.875rem; color: #666;">
                Sincerely,<br />
                <strong>Togher Group Executive Recruitment Practice</strong>
              </p>
              <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 2rem 0;" />
              <p style="font-size: 0.75rem; color: #8A8E82;">
                Togher Group · Dublin HQ & London Desk · Managing Director: Steve Togher
              </p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.warn('[contact/route] Resend dispatch warning:', emailErr);
      }
    } else {
      console.log('[contact/route] Received submission (Dev/Simulation mode):', {
        name,
        email,
        phone,
        enquiryLabel,
        organisation,
        discipline,
        message,
      });
    }

    return NextResponse.json({ ok: true, status: 'dispatched' }, { status: 200 });
  } catch (err) {
    console.error('[contact/route] Error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your requisition.' },
      { status: 500 }
    );
  }
}
