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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-3">
          
          {/* Logo / Brand Mark */}
          <Link
            href="/"
            aria-label="Togher Group — Home"
            className="flex items-center gap-2 sm:gap-2.5 group focus-visible:outline-none shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1B1B18] flex items-center justify-center text-white font-bold text-xs tracking-wider transition-transform group-hover:scale-105 shrink-0">
              TG
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#1B1B18] font-[var(--font-display)] flex items-center gap-1.5 leading-none">
                TOGHER
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7E36B] inline-block" />
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.18em] font-medium text-[#8A8E82] leading-tight mt-0.5">
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
          <div className="flex items-center gap-2 sm:gap-2.5">
            <Link
              href="/contact"
              className="btn-pill btn-pill-dark text-xs sm:text-sm py-2 px-3.5 sm:px-5 min-h-[40px] sm:min-h-[44px]"
            >
              <span>Hire Talent</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
            </Link>

            {/* Mobile Hamburger Button (44x44 minimum touch target) */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-[#1B1B18]/12 text-[#1B1B18] hover:bg-[#F3F6EC] active:scale-95 transition-all cursor-pointer shrink-0"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Backdrop Overlay */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-0 top-[57px] sm:top-[65px] z-40 bg-black/40 backdrop-blur-xs flex flex-col justify-start animate-in fade-in duration-200">
            <div
              className="bg-white border-b border-[#1B1B18]/10 shadow-2xl px-5 sm:px-6 pt-5 pb-8 max-h-[calc(100vh-65px)] overflow-y-auto animate-in slide-in-from-top-3 duration-250 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#1B1B18]/6">
                  <span className="text-[11px] uppercase tracking-wider text-[#8A8E82] font-bold">
                    Site Navigation
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#5C8200] font-bold bg-[#DEEBC9] px-2 py-0.5 rounded-full">
                    Live Desks Open
                  </span>
                </div>

                <div className="flex flex-col gap-1.5">
                  {navItems.map((item) => {
                    const isActive =
                      item.href === '/'
                        ? pathname === '/'
                        : pathname.startsWith(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`px-4 py-3 rounded-2xl text-base font-semibold transition-all flex items-center justify-between min-h-[48px] ${
                          isActive
                            ? 'bg-[#C7E36B] text-[#1B1B18]'
                            : 'text-[#1B1B18] hover:bg-[#F6F7F2] active:bg-[#ECEFE6]'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive ? (
                          <span className="w-2 h-2 rounded-full bg-[#1B1B18]" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4 text-[#8A8E82]" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Actions & Contact in Drawer */}
              <div className="pt-6 mt-6 border-t border-[#1B1B18]/8 flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-pill btn-pill-dark justify-between w-full text-sm py-3 px-5"
                >
                  <span>Direct Workforce Dispatch</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C7E36B]" />
                </Link>

                <Link
                  href="/vacancies"
                  onClick={() => setMenuOpen(false)}
                  className="btn-pill btn-pill-white justify-between w-full text-sm py-3 px-5 border-[#1B1B18]/15"
                >
                  <span>Search 6 Live Vacancies</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8A8E82]" />
                </Link>

                <div className="pt-3 flex items-center justify-between text-xs text-[#8A8E82] px-2">
                  <a
                    href="tel:+35319053800"
                    className="hover:text-[#1B1B18] font-medium py-1"
                  >
                    📞 +353 (0)1 905 3800
                  </a>
                  <a
                    href="mailto:info@toghergroup.com"
                    className="hover:text-[#1B1B18] font-medium py-1"
                  >
                    ✉️ info@toghergroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
