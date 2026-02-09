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
      subject,
      message,
      meta,
    }: {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
      meta?: any;
    } = body;

    if (!email || !name) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    const toAddress = process.env.QUOTE_TO_EMAIL || process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
    if (!toAddress) {
      return NextResponse.json(
        { error: "Email destination is not configured." },
        { status: 500 },
      );
    }

    const metaText = meta ? `\n\nAdditional details:\n${JSON.stringify(meta, null, 2)}` : "";

    await transport.sendMail({
      from: `"VACEI Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: toAddress,
      subject: subject || `New quote request from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message || "(no message provided)"}${metaText}
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote form error:", error);
    return NextResponse.json(
      { error: "Failed to send quote request." },
      { status: 500 },
    );
  }
}

