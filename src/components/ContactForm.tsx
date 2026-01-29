"use client";

import React, { useState } from 'react';
import { PatternFormat } from 'react-number-format'; // Нова бібліотека

export function ContactForm({ content }: { content: any }) {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("Дякуємо! Ми зв'яжемося з вами найближчим часом.");
      } else {
        setStatus("Сталася помилка. Спробуйте ще раз.");
      }
    } catch (error) {
      setStatus("Помилка з'єднання.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="callback" className="py-24 bg-teal-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-teal-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{content?.title || "Потрібна допомога?"}</h2>
            <p className="text-gray-600">{content?.subtitle || "Залиште заявку"}</p>
          </div>

          {status ? (
            <div className="p-6 rounded-2xl text-center font-bold bg-teal-100 text-teal-800">
              {status}
              <button onClick={() => setStatus(null)} className="block mx-auto mt-4 text-sm underline opacity-70">Надіслати ще раз</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                name="name"
                type="text" 
                placeholder="Ваше ім'я" 
                required 
                className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-teal-600 outline-none transition-all text-black" 
              />
              
              {/* НОВА МАСКА ТУТ */}
              <PatternFormat
                format="+38 (0##) ### ## ##"
                allowEmptyFormatting
                mask="_"
                name="phone"
                required
                className="px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-teal-600 outline-none transition-all text-black"
              />

              <button 
                type="submit" 
                disabled={loading}
                className={`md:col-span-2 py-5 text-white font-bold rounded-2xl shadow-lg transition-all ${loading ? 'bg-gray-400' : 'bg-teal-600 hover:bg-teal-700'}`}
              >
                {loading ? "Відправляємо..." : content?.buttonText || "Замовити консультацію"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}