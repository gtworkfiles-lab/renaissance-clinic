"use client";

import React from 'react';
import { HeartHandshake, CheckCircle2, BookOpen, Phone } from 'lucide-react';

interface FamilyHelpProps {
  content: {
    title: string;
    subtitle: string;
    guideUrl: string;
    advice: string[];
  };
}

export function FamilyHelp({ content }: FamilyHelpProps) {
  return (
    <section className="py-24 bg-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-800 text-teal-300 mb-6 text-sm font-medium">
              <HeartHandshake size={18} />
              <span>Допомога родині</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {content.title}
            </h2>
            <p className="text-teal-100 text-lg mb-8 italic">
              {content.subtitle}
            </p>
            <div className="space-y-4">
              {content.advice.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-teal-400 mt-1 shrink-0" size={20} />
                  <p className="text-teal-50/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[40px] border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-center">Безкоштовна пам'ятка</h3>
            <p className="text-teal-100 text-center mb-8 text-sm leading-relaxed">
              Ми підготували покрокову інструкцію: <br/>
              <strong className="text-white text-base">"Як розмовляти з людиною, що має залежність"</strong>
            </p>
            
            <div className="space-y-4">
              <a 
                href={content.guideUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-white text-teal-900 font-extrabold rounded-2xl hover:bg-teal-50 transition-all shadow-xl flex items-center justify-center gap-3 text-lg group"
              >
                <BookOpen className="group-hover:scale-110 transition-transform" />
                Читати гайд зараз
              </a>
              
              <button 
                onClick={() => window.location.href = `tel:0684209440`}
                className="w-full py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                Консультація спеціаліста
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}