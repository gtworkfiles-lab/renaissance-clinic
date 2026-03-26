"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import type { MenuItem, SiteMetadata } from "@/types/content";

interface NavigationProps {
  menuItems: MenuItem[];
  metadata: SiteMetadata;
}

export function Navigation({ menuItems, metadata }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Визначаємо поточну мову
  const currentLang = pathname.split('/')[1] || 'ua';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages = [
    { code: 'ua', label: 'UA' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ];

  const getLangPath = (langCode: string) => {
    const segments = pathname.split('/');
    segments[1] = langCode;
    return segments.join('/');
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <Link href={`/${currentLang}`} className="flex items-center space-x-2 group">
          <span className={`text-2xl font-bold transition-colors ${
            scrolled ? "text-slate-800" : "text-white drop-shadow-lg"
          }`}>
            Ренесанс <span className="text-red-500 italic">Центр</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {menuItems?.map((item) => (
            <div 
              key={item.id || item.label} 
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.id)}
              onMouseLeave={() => item.children && setOpenDropdown(null)}
            >
              {item.children ? (
                <button className={`flex items-center px-4 py-2 font-medium transition-colors ${
                  scrolled ? "text-slate-600 hover:text-red-500" : "text-white/90 hover:text-white drop-shadow-md"
                }`}>
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`px-4 py-2 font-medium transition-colors ${
                    scrolled ? "text-slate-600 hover:text-red-500" : "text-white/90 hover:text-white drop-shadow-md"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && (
                <div className={`absolute top-full left-0 w-48 bg-white rounded-lg shadow-xl py-2 transition-all duration-200 ${
                  openDropdown === item.id ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}>
                  {item.children.map((child) => (
                    <Link
                      key={child.id || child.label}
                      href={child.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Language Switcher Desktop */}
          <div className="flex items-center gap-1 ml-4 pl-4 border-l border-gray-300">
            <Globe size={14} className={scrolled ? "text-slate-400" : "text-white/70"} />
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={getLangPath(lang.code)}
                className={`text-xs font-bold px-2 py-1 rounded transition-all ${
                  currentLang === lang.code 
                  ? "bg-red-500 text-white" 
                  : scrolled ? "text-slate-400 hover:text-slate-800" : "text-white/60 hover:text-white"
                }`}
              >
                {lang.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? "text-slate-800" : "text-white"} /> : <Menu className={scrolled ? "text-slate-800" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0"
      }`}>
        <div className="px-4 space-y-2">
          {menuItems?.map((item) => (
            <div key={`mobile-${item.id}`}>
              <Link
                href={item.href}
                className="block px-4 py-3 text-gray-800 font-bold hover:bg-red-50 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-6 space-y-1 border-l-2 border-red-100">
                  {item.children.map((child) => (
                    <Link
                      key={`mobile-child-${child.id}`}
                      href={child.href}
                      className="block px-4 py-2 text-gray-600 hover:text-red-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Mobile Languages */}
          <div className="flex gap-3 px-4 pt-4 border-t border-gray-100">
            {languages.map((lang) => (
              <Link
                key={`mobile-lang-${lang.code}`}
                href={getLangPath(lang.code)}
                onClick={() => setIsOpen(false)}
                className={`flex-1 text-center py-2 rounded-lg font-bold ${
                  currentLang === lang.code ? "bg-red-500 text-white" : "bg-gray-100 text-gray-600"
                }`}
              >
                {lang.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}