import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Не заповнені поля' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Тимчасово так, поки Resend не активує домен на 100%
      to: ['serega.cv@gmail.com'],
      subject: 'НОВА ЗАЯВКА: Консультація',
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0d9488;">Нова заявка з сайту reabilitacia.cv.ua</h2>
          <p><strong>Ім'я:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">Відправлено: ${new Date().toLocaleString('uk-UA')}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}