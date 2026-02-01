"use client";

import { useState } from "react";
import Link from "next/link";
import type { MenuItem, SiteMetadata } from "@/types/content";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavigationProps {
  menuItems: MenuItem[];
  metadata: SiteMetadata;
}

export function Navigation({ menuItems = [], metadata }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Захист від порожніх даних
  const siteName = metadata?.siteName || "Ренесанс Центр";

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white drop-shadow-lg">
              {siteName}
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
                  <button
                    type="button"
                    className="flex items-center px-4 py-2 text-white/90 hover:text-white font-medium transition-colors drop-shadow-md"
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="px-4 py-2 text-white/90 hover:text-white font-medium transition-colors drop-shadow-md"
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 w-48 bg-white rounded-lg shadow-xl py-2 transition-all duration-200 ${
                      openDropdown === item.id
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.id || child.label}
                        href={child.href || "#"}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-600 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {menuItems?.map((item) => (
            <div key={`mobile-${item.id || item.label}`}>
              <Link
                href={item.href || "#"}
                className="block px-4 py-3 text-gray-800 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 mt-1 space-y-1 border-l-2 border-teal-100">
                  {item.children.map((child) => (
                    <Link
                      key={`mobile-child-${child.id || child.label}`}
                      href={child.href || "#"}
                      className="block px-4 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}