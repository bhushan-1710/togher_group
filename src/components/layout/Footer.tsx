'use client';

import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';

interface LocationRecord {
  city: string;
  country: string;
  tag: string;
  description: string;
}

const locations: LocationRecord[] = [
  {
    city: 'Dublin',
    country: 'Ireland',
    tag: 'Group HQ',
    description: 'Fitzwilliam Square, Dublin 2 · EU Compliance & Executive Search',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    tag: 'UK Desk',
    description: 'Commercial Tier-1 Projects · Structural & MEP Management',
  },
  {
    city: 'Frankfurt',
    country: 'Germany / EU',
    tag: 'Data Logistics',
    description: 'Hyperscale Data Campuses & Cross-Border Posted Rotations',
  },
  {
    city: 'Sydney',
    country: 'Australia',
    tag: 'Pacific Hub',
    description: 'Major Transit Infrastructure & Transatlantic Placements',
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1B1B18] text-white rounded-b-none sm:rounded-b-[28px] md:rounded-b-[32px] mt-10 sm:mt-16 overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 md:px-12 pt-10 sm:pt-14 pb-8 sm:pb-10 pb-[calc(2rem+env(safe-area-inset-bottom,0px))]">
        
        {/* Top CTA Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-white/10">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#C7E36B] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C7E36B] animate-pulse" />
              International Recruitment Network
            </span>
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              Ready to mobilise verified engineering leadership?
            </h3>
            <p className="text-[#8A8E82] text-xs sm:text-base mt-2 max-w-xl leading-relaxed">
              From individual MEP project leaders to 40-person self-sufficient trades rotations across Ireland, the UK, Europe, the USA and Australia.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 w-full sm:w-auto">
            <Link
              href="/contact"
              className="btn-pill bg-[#C7E36B] text-[#1B1B18] border-none font-semibold px-5 sm:px-6 py-3 text-xs sm:text-sm hover:bg-[#bce055] w-full xs:w-auto"
            >
              <span>Dispatch Requisition</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/vacancies"
              className="btn-pill bg-white/10 text-white border border-white/15 px-5 sm:px-6 py-3 text-xs sm:text-sm hover:bg-white/20 w-full xs:w-auto"
            >
              <span>Explore Roles</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Global Desks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 border-b border-white/10">
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="p-5 rounded-2xl bg-white/[0.04] border border-white/8 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-base font-bold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C7E36B]" />
                  {loc.city}, {loc.country}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#C7E36B]/15 text-[#C7E36B]">
                  {loc.tag}
                </span>
              </div>
              <p className="text-xs text-[#8A8E82] leading-relaxed">
                {loc.description}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation & Compliance Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-sm">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-[#8A8E82]">
              <li>
                <Link href="/services/management-professionals" className="hover:text-[#C7E36B] transition-colors">
                  Management Professionals
                </Link>
              </li>
              <li>
                <Link href="/services/trades-labour" className="hover:text-[#C7E36B] transition-colors">
                  Trades & Labour Deployment
                </Link>
              </li>
              <li>
                <Link href="/services/consultancy-investment" className="hover:text-[#C7E36B] transition-colors">
                  Consultancy & Investment
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C7E36B] transition-colors">
                  All Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Organisation
            </h4>
            <ul className="space-y-2.5 text-[#8A8E82]">
              <li>
                <Link href="/about" className="hover:text-[#C7E36B] transition-colors">
                  About Togher Group
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-[#C7E36B] transition-colors">
                  Client Delivery Framework
                </Link>
              </li>
              <li>
                <Link href="/candidates" className="hover:text-[#C7E36B] transition-colors">
                  Candidate Registry
                </Link>
              </li>
              <li>
                <Link href="/vacancies" className="hover:text-[#C7E36B] transition-colors">
                  Live Vacancies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Standards & Legal
            </h4>
            <ul className="space-y-2.5 text-[#8A8E82]">
              <li className="flex items-center gap-1.5 text-xs text-[#C7E36B]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>EU Posted Worker Compliant</span>
              </li>
              <li className="text-xs">
                SafePass & CPCS Blue Card
              </li>
              <li className="text-xs">
                Managing Director: Steve Togher
              </li>
              <li className="text-xs">
                Equal Opportunities Employer
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Direct Inquiries
            </h4>
            <div className="space-y-2.5 text-xs text-[#8A8E82]">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C7E36B]" />
                <span>info@toghergroup.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C7E36B]" />
                <span>+353 (0)1 905 3800</span>
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B9AEF0] hover:underline"
                >
                  <span>Open Contact Terminal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8E82]">
          <p>© {currentYear} Togher Group Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Dublin · London · Frankfurt · Sydney</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy & Compliance
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
