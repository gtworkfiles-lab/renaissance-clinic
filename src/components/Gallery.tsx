"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  items: string[];
}

export function Gallery({ items }: GalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <section id="conditions" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Умови проживання</h2>
            <div className="w-20 h-1.5 bg-teal-600 rounded-full" />
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-gray-200 hover:bg-teal-600 hover:text-white transition-all shadow-sm"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-gray-200 hover:bg-teal-600 hover:text-white transition-all shadow-sm"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((url, index) => (
            <div 
              key={`gallery-image-${index}`} // Унікальний ключ тепер тут
              className="min-w-[85%] md:min-w-[45%] lg:min-w-[30%] h-[400px] snap-center shrink-0 rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50"
            >
              <img 
                src={url} 
                alt={`Фото клініки ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Photo+Not+Found';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}