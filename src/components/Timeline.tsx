"use client";

import React from 'react';

interface Step {
  id: string;
  title: string;
  desc: string;
}

export function Timeline({ items }: { items: Step[] }) {
  return (
    <section id="steps" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Етапи нашої допомоги</h2>
          <div className="w-20 h-1.5 bg-teal-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Центральна лінія (тільки для десктопа) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-teal-200" />

          <div className="space-y-12">
            {items.map((step, index) => (
              <div key={step.id} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 w-full" />
                
                {/* Кружечок з номером */}
                <div className="z-10 flex items-center justify-center w-12 h-12 bg-teal-600 rounded-full text-white font-bold shadow-xl border-4 border-white">
                  {index + 1}
                </div>

                <div className="md:w-1/2 w-full p-6">
                  <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}