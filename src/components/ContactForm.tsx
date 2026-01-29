"use client";

import React, { useState } from 'react';

export function ContactForm({ content }: { content: any }) {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Додаємо стан завантаження

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Дякуємо! Ми зв'яжемося з вами найближчим часом.");
      } else {
        setStatus("Сталася помилка. Спробуйте ще раз або зателефонуйте нам.");
      }
    } catch (error) {
      setStatus("Помилка з'єднання. Перевірте інтернет.");
    } finally {
      setLoading(false);
    }
  };

  const title = content?.title || "Потрібна допомога?";
  const subtitle = content?.subtitle || "Залиште заявку для анонімної консультації";
  const buttonText = content?.buttonText || "Замовити консультацію";

  return (
    <section id="callback" className="py-24 bg-teal-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-teal-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>

          {status ? (
            <div className={`p-6 rounded-2xl text-center font-bold ${status.includes('Дякуємо') ? 'bg-teal-100 text-teal-800' : 'bg-red-100 text-red-800'}`}>
              {status}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                name="name" // Обов'язково додаємо name
                type="text" 
                placeholder="Ваше ім'я" 
                required 
                className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-teal-600 outline-none transition-all text-black" 
              />
              <input 
                name="phone" // Обов'язково додаємо name
                type="tel" 
                placeholder="Номер телефону" 
                required 
                className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-teal-600 outline-none transition-all text-black" 
              />
              <button 
                type="submit" 
                disabled={loading} // Вимикаємо кнопку під час відправки
                className={`md:col-span-2 py-5 text-white font-bold rounded-2xl shadow-lg transition-all ${loading ? 'bg-gray-400' : 'bg-teal-600 hover:bg-teal-700'}`}
              >
                {loading ? "Відправляємо..." : buttonText}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}