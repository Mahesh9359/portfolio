import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type Body = { name?: string; email?: string; message?: string };

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body: Body = await req.json();

    // Basic server-side validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Compose email
    const mailOptions = {
      from: `"${body.name}" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New contact form message from ${body.name}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`,
      html: `<p><strong>Name:</strong> ${body.name}</p>
             <p><strong>Email:</strong> ${body.email}</p>
             <p><strong>Message:</strong><br/>${body.message.replace(/\n/g, '<br/>')}</p>`,
    };

    // send mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
