import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Ініціалізуємо Resend з перевіркою наявності ключа
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Отримуємо дані з форми
    const body = await req.json();
    const { name, phone } = body;

    // Перевірка, чи прийшли дані
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Ім\'я та телефон обов\'язкові' },
        { status: 400 }
      );
    }

    // Відправка листа через Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Поки що залишаємо цей, він найнадійніший для тесту
      to: ['gt.workfiles@gmail.com'], // Ваша пошта
      subject: `Заявка: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 10px;">
          <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">Нова заявка на консультацію</h2>
          <p style="font-size: 16px;">Ви отримали нове повідомлення з сайту <strong>reabilitacia.cv.ua</strong>:</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>👤 Ім'я:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>📞 Телефон:</strong> ${phone}</p>
          </div>
          <p style="font-size: 12px; color: #888; margin-top: 20px;">
            Дата відправки: ${new Date().toLocaleString('uk-UA')}
          </p>
        </div>
      `,
    });

    // Якщо Resend повернув помилку
    if (error) {
      console.error('Помилка Resend API:', error);
      return NextResponse.json({ success: false, error }, { status: 400 });
    }

    // Успішна відповідь
    return NextResponse.json({ success: true, data });

  } catch (err: any) {
    // Помилка сервера (наприклад, невірний JSON або відсутність ключа)
    console.error('Критична помилка сервера:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Внутрішня помилка сервера' },
      { status: 500 }
    );
  }
}