"use client";

import React from 'react';
import { Quote } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  text: string;
  date: string;
}

export function Reviews({ items }: { items: Review[] }) {
  if (!items) return null;

  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Відгуки наших клієнтів</h2>
          <div className="w-20 h-1.5 bg-teal-600 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <Quote className="text-teal-600 mb-4 opacity-20" size={40} />
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{item.text}"</p>
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <span className="font-bold text-gray-900">{item.name}</span>
                <span className="text-sm text-gray-400">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}