"use client";

import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';

export function Articles({ items }: { items: any[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section id="articles" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-sm font-bold mb-4">
              <BookOpen size={16} />
              <span>Блог</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Варто знати</h2>
            <p className="text-gray-500 max-w-xl">Корисні матеріали та поради від наших фахівців для тих, хто шукає шлях до одужання.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((article) => (
            <a 
              key={article.id} 
              href={article.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gray-50 rounded-[32px] border border-transparent hover:border-teal-200 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors pr-8">
                    {article.title}
                  </h3>
                  <div className="p-2 bg-white rounded-full text-gray-400 group-hover:text-teal-600 group-hover:bg-teal-50 shadow-sm transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
              </div>
              <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">Читати статтю</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}