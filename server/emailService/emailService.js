
import { BrevoClient } from "@getbrevo/brevo";

import dotenv from "dotenv"

dotenv.config()

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

const sender = {
  name: "Abu Huraira Shaikh",
  email: process.env.MAIL_FROM,
};

export const sendContactEmails = async ({
  name,
  subject,
  email,
  message,
}) => {
  // Send visitor's message to you
  const ownerResult =
    await brevo.transactionalEmails.sendTransacEmail({
      sender,
      to: [{ email: process.env.CONTACT_TO }],
      replyTo: { email, name },
      subject: `Portfolio Contact: ${subject}`,
      textContent: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

  if (!ownerResult.messageId) {
    throw new Error("Failed to send contact notification.");
  }

  // Send confirmation to the visitor
  const visitorResult =
    await brevo.transactionalEmails.sendTransacEmail({
      sender,
      to: [{ email, name }],
      subject: "We received your message",
      textContent: `
Hi ${name},

Thank you for contacting me through my portfolio.
I have received your message and will reply as soon as possible.

Best regards,
Abu Huraira Shaikh
© ${new Date().getFullYear()} Copyright reserved to Abu Huraira Shaikh
      `,
    });

  if (!visitorResult.messageId) {
    throw new Error("Confirmation email could not be sent.");
  }

  return true;
};
