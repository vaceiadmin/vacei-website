import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      message,
      subject,
      context,
    }: {
      name?: string;
      email?: string;
      message?: string;
      subject?: string;
      context?: string;
    } = body;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const toAddress = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
    if (!toAddress) {
      return NextResponse.json(
        { error: "Email destination is not configured." },
        { status: 500 },
      );
    }

    await transport.sendMail({
      from: `"VACEI Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: toAddress,
      subject: subject || `New contact from ${name || "VACEI website"}`,
      replyTo: email,
      text: `
Name: ${name || "N/A"}
Email: ${email}
Context: ${context || "General contact"}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }
}

