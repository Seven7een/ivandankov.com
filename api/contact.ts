import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || '';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (!CONTACT_EMAIL) {
    return res.status(500).json({ error: 'Contact email not configured.' });
  }

  try {
    await transporter.sendMail({
      from: `"${name} via ivandankov.com" <${process.env.GMAIL_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Contact from ${name} via ivandankov.com`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ error: 'Failed to send message.' });
  }
}
