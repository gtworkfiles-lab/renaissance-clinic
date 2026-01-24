"use client";

import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Services({ items }: { items: any[] }) {
  if (!items) return null;

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наші послуги</h2>
          <div className="w-20 h-1.5 bg-teal-600 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((service) => (
            <Link 
              key={service.id} 
              href={`/services/${service.id}`}
              className="group p-8 rounded-[32px] bg-gray-50 border border-gray-100 hover:border-teal-500 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm flex-grow">{service.desc}</p>
              <div className="flex items-center gap-2 text-teal-600 font-bold group-hover:gap-3 transition-all">
                Детальніше <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}