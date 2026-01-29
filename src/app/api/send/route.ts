import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone } = await req.json();

    const data = await resend.emails.send({
      from: 'Reabilitacia Site <onboarding@resend.dev>',
      to: ['sereg...gmail.com'], // ВПИШІТЬ СЮДИ ВАШ GMAIL (де зараз sereg)
      subject: 'НОВА ЗАЯВКА: Консультація',
      html: `
        <h2>Нова заявка з сайту reabilitacia.cv.ua</h2>
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p>---</p>
        <p>Це повідомлення надіслано автоматично з форми зворотного зв'язку.</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Помилка відправки' }, { status: 500 });
  }
}