"use client";

import React, { useState } from 'react';

export function ContactForm({ content }: { content: any }) {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Дякуємо! Ми зв'яжемося з вами найближчим часом.");
  };

  // Створюємо стандартні значення на випадок, якщо content чомусь не прийшов
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
            <div className="p-6 bg-teal-100 text-teal-800 rounded-2xl text-center font-bold">
              {status}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Ваше ім'я" 
                required 
                className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-teal-600 outline-none transition-all text-black" 
              />
              <input 
                type="tel" 
                placeholder="Номер телефону" 
                required 
                className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-teal-600 outline-none transition-all text-black" 
              />
              <button 
                type="submit" 
                className="md:col-span-2 py-5 bg-teal-600 text-white font-bold rounded-2xl hover:bg-teal-700 transition-all shadow-lg"
              >
                {buttonText}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}