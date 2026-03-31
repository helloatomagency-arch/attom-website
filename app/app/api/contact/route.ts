import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("BODY RECEBIDO:", body);

    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hello.atomagency@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h3>Novo contacto</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    console.log("RESEND OK:", data);

    return Response.json({ success: true });
  } catch (error) {
    console.error("ERRO API CONTACT:", error);
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}