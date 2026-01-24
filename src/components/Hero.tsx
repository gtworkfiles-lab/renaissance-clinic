"use client";

import React from 'react';

interface HeroProps {
  content: {
    title: string;
    subtitle?: string;
    cta: string;
    backgroundImage?: string;
  };
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: `url('${content.backgroundImage}')`,
        }}
      >
        {/* Затемнення фону (Overlay) як на скриншоті */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          {content.title}
        </h1>
        
        {content.subtitle && (
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            {content.subtitle}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
          >
            {content.cta}
            <span className="absolute inset-0 rounded-full bg-white/5 blur-xl group-hover:bg-white/10 transition-colors" />
          </button>
        </div>
      </div>

      {/* Ефект градієнта знизу для плавного переходу до наступного блоку */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10" />
    </section>
  );
}