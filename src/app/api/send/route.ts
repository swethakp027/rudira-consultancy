import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { subject, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject,
      html: `<p>Name:${message.name}</p><p>Mobile Number:${message.mobile}</p><p>Email address:${message.email}</p><p>Requested Service:${message.service}</p>`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log("Email error:", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
