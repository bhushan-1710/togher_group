'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Vacancies', href: '/vacancies' },
  { label: 'Candidates', href: '/candidates' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-[#1B1B18]/6 z-50 sticky top-0 transition-all">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Logo / Brand Mark */}
          <Link
            href="/"
            aria-label="Togher Group — Home"
            className="flex items-center gap-2.5 group focus-visible:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-[#1B1B18] flex items-center justify-center text-white font-bold text-xs tracking-wider transition-transform group-hover:scale-105">
              TG
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-[#1B1B18] font-[var(--font-display)] flex items-center gap-1.5 leading-none">
                TOGHER
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7E36B] inline-block" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-[#8A8E82] leading-tight">
                GROUP · IRELAND & UK
              </span>
            </div>
          </Link>

          {/* Desktop Pill Navigation (Section 5.1: active is lime-green, inactive is ghost/outline) */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1.5 bg-[#F6F7F2] p-1.5 rounded-full border border-[#1B1B18]/8">
            {navItems.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200 tracking-tight ${
                    isActive
                      ? 'bg-[#C7E36B] text-[#1B1B18] font-semibold shadow-xs'
                      : 'text-[#1B1B18]/80 hover:text-[#1B1B18] hover:bg-white/70'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/contact"
              className="btn-pill btn-pill-dark text-xs sm:text-sm py-2 px-4 sm:px-5"
            >
              <span>Hire Talent</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              className="lg:hidden p-2 rounded-full border border-[#1B1B18]/10 text-[#1B1B18] hover:bg-[#F3F6EC] transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#1B1B18]/6 bg-white px-5 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-wider text-[#8A8E82] font-semibold px-2 mb-1">
                Navigation
              </span>
              {navItems.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#C7E36B] text-[#1B1B18] font-semibold'
                        : 'text-[#1B1B18] hover:bg-[#F6F7F2]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#1B1B18]/6 flex flex-col gap-2">
                <Link
                  href="/vacancies"
                  className="btn-pill btn-pill-white justify-between w-full text-sm"
                >
                  <span>Browse Vacancies</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-pill btn-pill-dark justify-between w-full text-sm"
                >
                  <span>Direct Workforce Dispatch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
