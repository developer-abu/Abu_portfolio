import { sendContactEmails } from "../emailService/emailService.js";



export const heathCheckController = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Server Is Running. Health Check Point",
  });
};

export const contactMessageController = async (req, res) => {
  try {
    const { name, subject, email, message } = req.body;

    await sendContactEmails({
      name,
      subject,
      email,
      message,
    });

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact email error:", error.message);

    return res.status(502).json({
      success: false,
      message: "Unable to send your message. Please try again later.",
    });
  }
};
