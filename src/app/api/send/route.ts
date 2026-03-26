import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Ініціалізуємо ключ ТІЛЬКИ при виклику, а не при збірці
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const body = await req.json();
    const { name, phone } = body;

    if (!name || !phone) {
      return NextResponse.json({ success: false, error: 'Данні не заповнені' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Renaissance Clinic <info@reabilitacia.cv.ua>', 
      to: ['gt.workfiles@gmail.com', 'Maxrenes2020@gmail.com'], 
      subject: `Нова заявка: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #0d9488;">Нова заявка з сайту</h2>
          <p><strong>Ім'я:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
        </div>
      `,
    });

    if (error) return NextResponse.json({ success: false, error }, { status: 400 });
    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}