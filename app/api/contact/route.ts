import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { success: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const body = await req.json();

    const {
      name,
      email,
      company,
      projectDetails,
      budget,
      timeline,
    } = body;

    if (!name || !email || !company || !projectDetails || !budget || !timeline) {
      return Response.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      return Response.json(
        { success: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const leadHtml = `
      <div style="font-family: Arial, sans-serif; background:#f7f7f7; padding:40px 20px;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; border:1px solid #e5e5e5; padding:32px; border-radius:12px;">
          <p style="font-size:12px; letter-spacing:1px; text-transform:uppercase; color:#666; margin:0 0 12px;">
            New Lead
          </p>

          <h1 style="font-size:28px; line-height:1.2; margin:0 0 24px; color:#111;">
            New contact form submission
          </h1>

          <table style="width:100%; border-collapse:collapse; font-size:15px; color:#111;">
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #eee; width:180px;"><strong>Name</strong></td>
              <td style="padding:10px 0; border-bottom:1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #eee;"><strong>Email</strong></td>
              <td style="padding:10px 0; border-bottom:1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #eee;"><strong>Company / Brand</strong></td>
              <td style="padding:10px 0; border-bottom:1px solid #eee;">${company}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #eee;"><strong>Budget</strong></td>
              <td style="padding:10px 0; border-bottom:1px solid #eee;">${budget}</td>
            </tr>
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #eee;"><strong>Timeline</strong></td>
              <td style="padding:10px 0; border-bottom:1px solid #eee;">${timeline}</td>
            </tr>
          </table>

          <div style="margin-top:24px;">
            <p style="font-size:15px; font-weight:bold; color:#111; margin:0 0 8px;">
              What are they looking to build?
            </p>
            <div style="font-size:15px; line-height:1.7; color:#333; padding:16px; background:#fafafa; border:1px solid #eee; border-radius:10px; white-space:pre-wrap;">
              ${projectDetails}
            </div>
          </div>
        </div>
      </div>
    `;

    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; background:#f7f7f7; padding:40px 20px;">
        <div style="max-width:600px; margin:0 auto; background:#ffffff; border:1px solid #e5e5e5; padding:32px; border-radius:12px;">
          <p style="font-size:12px; letter-spacing:1px; text-transform:uppercase; color:#666; margin:0 0 12px;">
            ATTOM Agency
          </p>

          <h1 style="font-size:28px; line-height:1.2; margin:0 0 20px; color:#111;">
            Thanks for getting in touch
          </h1>

          <p style="font-size:15px; line-height:1.7; color:#333; margin:0 0 16px;">
            Hi ${name},
          </p>

          <p style="font-size:15px; line-height:1.7; color:#333; margin:0 0 16px;">
            We have received your enquiry and will review the details carefully.
          </p>

          <p style="font-size:15px; line-height:1.7; color:#333; margin:0 0 16px;">
            We usually reply within 1 to 2 business days with the next steps.
          </p>

          <div style="margin:24px 0; padding:16px; background:#fafafa; border:1px solid #eee; border-radius:10px;">
            <p style="font-size:14px; color:#111; margin:0 0 8px;"><strong>Summary</strong></p>
            <p style="font-size:14px; color:#333; margin:0 0 6px;"><strong>Company / Brand:</strong> ${company}</p>
            <p style="font-size:14px; color:#333; margin:0 0 6px;"><strong>Budget:</strong> ${budget}</p>
            <p style="font-size:14px; color:#333; margin:0;"><strong>Timeline:</strong> ${timeline}</p>
          </div>

          <p style="font-size:15px; line-height:1.7; color:#333; margin:0;">
            Best,<br />
            ATTOM Agency
          </p>
        </div>
      </div>
    `;

    const leadEmail = await resend.emails.send({
      from: "ATTOM <jessica@attom.agency>",
      to: "jessica@attom.agency",
      subject: `New lead from ${name}`,
      replyTo: email,
      html: leadHtml,
    });

    if (leadEmail.error) {
      return Response.json(
        { success: false, error: leadEmail.error.message || "Failed to send lead email" },
        { status: 500 }
      );
    }

    const autoReply = await resend.emails.send({
      from: "ATTOM <jessica@attom.agency>",
      to: email,
      subject: "We received your enquiry",
      html: autoReplyHtml,
    });

    if (autoReply.error) {
      return Response.json(
        { success: false, error: autoReply.error.message || "Failed to send auto reply" },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      leadId: leadEmail.data?.id,
      autoReplyId: autoReply.data?.id,
    });
  } catch (error) {
    console.error("API CONTACT ERROR:", error);

    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}