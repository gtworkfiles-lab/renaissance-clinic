import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone } = body;

    if (!name || !phone) {
      return NextResponse.json({ success: false, error: 'Данні не заповнені' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      // Тепер використовуємо вашу підтверджену пошту для відправки
      from: 'Renaissance Clinic <info@reabilitacia.cv.ua>', 
      // Масив адрес для отримання
      to: ['gt.workfiles@gmail.com', 'Maxrenes2020@gmail.com'], 
      subject: `Нова заявка: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0d9488;">Нова заявка з сайту</h2>
          <p><strong>Ім'я:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">Повідомлення надіслано автоматично.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}