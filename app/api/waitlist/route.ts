import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbxHbV-JRFYIyP9XOtxSAwh_Zx3NwGKRarxJxcugOh1dBDVTL3oG_ILBJ1YbifBagquKAg/exec";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { success: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const body = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();

    if (!name || !email) {
      return Response.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailIsValid) {
      return Response.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const leadHtml = `
      <div style="margin:0; padding:0; background-color:#f5f5f5; font-family:Arial, Helvetica, sans-serif;">
        <div style="max-width:640px; margin:0 auto; padding:40px 20px;">
          <div style="background:#ffffff; border:1px solid #e5e5e5; border-radius:16px; overflow:hidden;">
            <div style="padding:32px; border-bottom:1px solid #eeeeee; background:#111111;">
              <p style="margin:0; font-size:12px; letter-spacing:1.6px; text-transform:uppercase; color:#bbbbbb;">
                ATTOM AGENCY
              </p>
              <h1 style="margin:12px 0 0; font-size:28px; line-height:1.2; color:#ffffff;">
                New waitlist submission
              </h1>
            </div>
            <div style="padding:32px;">
              <table style="width:100%; border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #f0f0f0; width:180px; font-size:14px; color:#666666;">Name</td>
                  <td style="padding:12px 0; border-bottom:1px solid #f0f0f0; font-size:14px; color:#111111;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #f0f0f0; font-size:14px; color:#666666;">Email</td>
                  <td style="padding:12px 0; border-bottom:1px solid #f0f0f0; font-size:14px; color:#111111;">${email}</td>
                </tr>
                <tr>
                  <td style="padding:12px 0; font-size:14px; color:#666666;">Phone</td>
                  <td style="padding:12px 0; font-size:14px; color:#111111;">${phone || "—"}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;

    const autoReplyHtml = `
      <div style="margin:0; padding:0; background-color:#f5f5f5; font-family:Arial, Helvetica, sans-serif;">
        <div style="max-width:640px; margin:0 auto; padding:40px 20px;">
          <div style="background:#ffffff; border:1px solid #e5e5e5; border-radius:16px; overflow:hidden;">
            <div style="padding:32px; border-bottom:1px solid #eeeeee; background:#111111;">
              <p style="margin:0; font-size:12px; letter-spacing:1.6px; text-transform:uppercase; color:#bbbbbb;">
                ATTOM AGENCY
              </p>
              <h1 style="margin:12px 0 0; font-size:28px; line-height:1.2; color:#ffffff;">
                You're on the list
              </h1>
            </div>
            <div style="padding:32px;">
              <p style="margin:0 0 16px; font-size:15px; line-height:1.7; color:#111111;">
                Hi ${name},
              </p>
              <p style="margin:0 0 16px; font-size:15px; line-height:1.7; color:#333333;">
                Thank you for your interest in ATTOM AGENCY.
              </p>
              <p style="margin:0 0 16px; font-size:15px; line-height:1.7; color:#333333;">
                We have limited spots available and will be in touch as soon as we're ready to take on new projects.
              </p>
              <p style="margin:0; font-size:15px; line-height:1.7; color:#333333;">
                Best regards,<br />
                ATTOM AGENCY
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    const leadEmail = await resend.emails.send({
      from: "ATTOM AGENCY <jessica@attom.agency>",
      to: "jessica@attom.agency",
      subject: `New waitlist — ${name}`,
      replyTo: email,
      html: leadHtml,
    });

    if (leadEmail.error) {
      console.error("LEAD EMAIL ERROR:", leadEmail.error);
      return Response.json(
        { success: false, error: leadEmail.error.message || "Failed to send lead email." },
        { status: 500 }
      );
    }

    const autoReply = await resend.emails.send({
      from: "ATTOM AGENCY <jessica@attom.agency>",
      to: email,
      subject: "You're on the list — ATTOM AGENCY",
      html: autoReplyHtml,
    });

    if (autoReply.error) {
      console.error("AUTO REPLY ERROR:", autoReply.error);
      return Response.json(
        { success: false, error: autoReply.error.message || "Failed to send auto reply." },
        { status: 500 }
      );
    }

    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name,
          email,
          company: phone || "—",
          date: new Date().toISOString(),
        }),
      });
    } catch (sheetsError) {
      console.error("GOOGLE SHEETS ERROR:", sheetsError);
    }

    return Response.json({
      success: true,
      leadId: leadEmail.data?.id,
      autoReplyId: autoReply.data?.id,
    });
  } catch (error) {
    console.error("API WAITLIST ERROR:", error);
    return Response.json(
      { success: false, error: "Failed to send email." },
      { status: 500 }
    );
  }
}