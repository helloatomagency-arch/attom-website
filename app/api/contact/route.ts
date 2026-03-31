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
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "ATTOM <jessica@attom.agency>",
      to: "jessica@attom.agency",
      subject: "New Contact Form Submission",
      replyTo: email,
      html: `
        <h3>New contact</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("RESEND DATA:", data);
    console.log("RESEND ERROR:", error);

    if (error) {
      return Response.json(
        { success: false, error: error.message || "Email failed to send" },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("API CONTACT ERROR:", error);

    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}