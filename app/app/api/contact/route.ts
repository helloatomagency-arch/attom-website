import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("API contact: started");

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      return Response.json(
        { success: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const body = await req.json();
    console.log("BODY:", body);

    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hello.atomagency@gmail.com",
      subject: "New Contact Form Submission",
      replyTo: email,
      html: `
        <h3>Novo contacto</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
    });

    console.log("RESEND RESPONSE:", data);

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("API CONTACT ERROR:", error);
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}