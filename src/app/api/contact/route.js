import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phoneNumber, message } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // або свій SMTP сервер
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: "Новая заявка с сайта",
      text: `
Имя: ${firstName}
Фамилия: ${lastName}
Email: ${email}
Телефон: ${phoneNumber}
Сообщение: ${message}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Ошибка отправки:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
