import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { email, name, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_FORM_EMAIL,
      pass: process.env.CONTACT_FORM_PASSWORD,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "contact-form@secord.io",
      subject: `New contact from ${name}: ${email}`,
      text: message,
    });

    return Response.json({ status: "Ok" });
  } catch (err) {
    return Response.error();
    // res.status(500).json({ error: err.message });
  }
}
