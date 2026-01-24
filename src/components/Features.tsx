"use client";

import React from 'react';
import { ShieldCheck, UserCheck, Home, Clock } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  desc: string;
}

interface FeaturesProps {
  items: Feature[];
}

export function Features({ items }: FeaturesProps) {
  // Масив іконок для блоків
  const icons = [
    <ShieldCheck className="w-8 h-8 text-teal-600" />,
    <UserCheck className="w-8 h-8 text-teal-600" />,
    <Home className="w-8 h-8 text-teal-600" />,
    <Clock className="w-8 h-8 text-teal-600" />
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Чому обирають «Ренесанс Клінік»?
            </h2>
            <div className="w-20 h-1.5 bg-teal-600 rounded-full" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <p className="text-gray-600">
              Ми створили безпечне середовище, де кожен пацієнт отримує шанс на повне одужання та соціальну адаптацію.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((feature, index) => (
            <div key={feature.id} className="relative">
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-teal-50 rounded-2xl">
                {icons[index] || <ShieldCheck />}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}