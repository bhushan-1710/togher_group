'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Clock,
  Globe2,
  Users,
  HardHat,
  CheckCircle2,
  Building2,
  Sparkles,
  ChevronRight,
  Phone,
  Mail,
  RotateCw,
} from 'lucide-react';

/* ─── COUNT-UP STAT HOOK ─── */
function useCountUp(target: number, duration: number = 1200, active: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    let startTime: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration, active]);

  return count;
}

/* ─── STAGGERED CHARACTER COMPONENT (Section 3 & 6.1) ─── */
function StaggeredWord({ text, delayOffset = 0.3 }: { text: string; delayOffset?: number }) {
  return (
    <span className="inline-block break-words">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="char-fade-reveal"
          style={{
            animationDelay: `${delayOffset + i * 0.045}s`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

/* ─── CIRCULAR PROGRESS RING (Section 5.6) ─── */
function CircularProgress({ percentage, label }: { percentage: number; label: string }) {
  const animatedPercentage = useCountUp(percentage, 1400);
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-lg border border-[#1B1B18]/10 text-center">
      <div className="relative w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
          <circle
            cx="44"
            cy="44"
            r={radius}
            className="stroke-[#E3E6DC]"
            strokeWidth="6"
            fill="transparent"
          />
          <circle
            cx="44"
            cy="44"
            r={radius}
            className="stroke-[#C7E36B] transition-all duration-300"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <span className="absolute text-sm sm:text-lg font-bold text-[#1B1B18] font-[var(--font-display)]">
          {animatedPercentage}%
        </span>
      </div>
      <span className="text-[9px] sm:text-[11px] font-semibold text-[#8A8E82] uppercase tracking-wider mt-1 sm:mt-1.5 max-w-[80px] sm:max-w-[90px] leading-tight">
        {label}
      </span>
    </div>
  );
}

/* ─── ROTATING VERIFICATION STAMP / SEAL (Section 5.6) ─── */
function VerificationSeal() {
  return (
    <div className="relative w-18 h-18 sm:w-24 sm:h-24 flex items-center justify-center">
      {/* Outer rotating text ring */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            id="textPath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[9.5px] font-bold tracking-[0.22em] fill-[#1B1B18] uppercase">
            <textPath href="#textPath" startOffset="0%">
              • TOGHER VERIFIED • COMPLIANCE AUDIT
            </textPath>
          </text>
        </svg>
      </div>
      {/* Center badge */}
      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#1B1B18] text-[#C7E36B] flex items-center justify-center shadow-md">
        <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
      </div>
    </div>
  );
}

/* ─── SERVICES STACK DATA (Section 5.6) ─── */
interface ServiceCardData {
  id: string;
  tabLabel: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  href: string;
  percentage: number;
  percentageLabel: string;
  chips: { label: string; stat: string; position: string }[];
  bulletPoints: string[];
  metrics: { value: string; label: string }[];
}

const serviceCards: ServiceCardData[] = [
  {
    id: 'management',
    tabLabel: '01. Management & Executive',
    eyebrow: 'TIER-1 LEADERSHIP PLACEMENTS',
    title: 'Management & Technical Professionals',
    description:
      'Connecting major contractors with vetted Commercial Managers, Senior Project Managers, MEP Coordinators, Quantity Surveyors, and BIM leads.',
    image: '/images/services-management.jpg',
    href: '/services/management-professionals',
    percentage: 96,
    percentageLabel: 'Placement Retention',
    chips: [
      { label: 'Major Package Valuation', stat: '€45M Superstructure', position: 'top-4 left-4' },
      { label: 'Technical Screening', stat: '100% Degree / RICS', position: 'bottom-4 left-4' },
      { label: 'Mobilisation SLA', stat: '48h Emergency Lead', position: 'top-12 right-4' },
    ],
    bulletPoints: [
      'Commercial Directors & Senior Cost Planners',
      'Structural, Civil & MEP Project Directors',
      'Site Managers & Package Managers',
      'BIM 3D Coordinators & Digital Delivery Leads',
    ],
    metrics: [
      { value: '4,800+', label: 'Direct Placements' },
      { value: '96%', label: 'Retention Rate' },
      { value: '48h', label: 'Rapid Dispatch' },
    ],
  },
  {
    id: 'trades',
    tabLabel: '02. Trades & Site Labour',
    eyebrow: 'VERIFIED SKILLED SITE OPERATIVES',
    title: 'Trades & Self-Sufficient Site Labour',
    description:
      'Rapid mobilisation of verified tradesmen, certified formwork carpenters, steel fixers, plant operators, and coordinated site gangs across the UK and Europe.',
    image: '/images/services-trades.jpg',
    href: '/services/trades-labour',
    percentage: 94,
    percentageLabel: 'On-Time Rotation',
    chips: [
      { label: 'Steel Tonnage Custody', stat: '1,200T Structural Steel', position: 'top-4 left-4' },
      { label: 'Safety Certification', stat: 'SafePass & CPCS Blue', position: 'bottom-4 left-4' },
      { label: 'Crew Rotation Gangs', stat: '35-Man Data Rotation', position: 'top-12 right-4' },
    ],
    bulletPoints: [
      'Formwork Carpenters & Shuttering Specialists',
      'Steel Fixers & High-Density Rebar Gangs',
      'CPCS Certified Crane & Heavy Plant Operators',
      'Groundworkers, Concrete Finishers & M&E Trades',
    ],
    metrics: [
      { value: '35+', label: 'Operatives / Gang' },
      { value: '100%', label: 'Safety Induction' },
      { value: '3:1', label: 'Rotational Mobility' },
    ],
  },
  {
    id: 'consultancy',
    tabLabel: '03. Cross-Border Delivery',
    eyebrow: 'INTERNATIONAL COMPLIANCE & MOBILITY',
    title: 'Consultancy & Global Workforce Structuring',
    description:
      'Seamless posted worker logistics, payroll governance, tax structuring, and workforce compliance across Ireland, the UK, Europe, the USA and Australia.',
    image: '/images/hero-construction.jpg',
    href: '/services/consultancy-investment',
    percentage: 99,
    percentageLabel: 'Audit Compliance',
    chips: [
      { label: 'Jurisdiction Coverage', stat: 'EU & Transatlantic', position: 'top-4 left-4' },
      { label: 'Posted Worker A1', stat: '100% Legal Clearance', position: 'bottom-4 left-4' },
      { label: 'Client Audits', stat: 'Zero Compliance Gaps', position: 'top-12 right-4' },
    ],
    bulletPoints: [
      'EU Posted Workers Directive (A1 compliance)',
      'Cross-border travel, accommodation & logistics',
      'Local tax withholding & regulatory structuring',
      'Turnkey project mobilisation management',
    ],
    metrics: [
      { value: '5', label: 'Key Jurisdictions' },
      { value: '100%', label: 'EU Legal Clarity' },
      { value: '25+', label: 'Years Experience' },
    ],
  },
];

/* ─── FEATURED PROJECTS REPERTOIRE ─── */
const featuredProjects = [
  {
    code: 'PRJ-01',
    title: 'Dublin Docklands Commercial Superstructure',
    location: 'Dublin 2, Ireland',
    category: 'Commercial High-Rise',
    stat: '€45M VALUE',
    description: 'Jumpform core systems, post-tensioned slabs, and commercial management custody.',
    image: '/images/exhibit-cantilever-concrete.jpg',
  },
  {
    code: 'PRJ-02',
    title: 'Central London Shell & Core Steelwork',
    location: 'London, United Kingdom',
    category: 'Commercial Steel Tower',
    stat: '1,200T STEEL',
    description: 'Multi-tier structural steel framing, moment connections, and crane-assisted high-altitude rigging.',
    image: '/images/exhibit-steel-frame.jpg',
  },
  {
    code: 'PRJ-03',
    title: 'Frankfurt Hyperscale Data Campus',
    location: 'Frankfurt, Germany',
    category: 'Advanced Tech Facility',
    stat: '35-MAN CREW',
    description: 'Posted worker gangs deployed on 3:1 rotation. Fast-track shell, pre-cast modular assembly.',
    image: '/images/exhibit-tower-crane.jpg',
  },
];

export default function HomeClient() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16 md:gap-24 pb-12 sm:pb-16">
      
      {/* ========================================================
          1. HERO SECTION (Section 2 & 5.1 & 5.2)
          Split inside the app shell:
          Left ~45%: logo/nav-left, eyebrow, headline with 2 accents + staggered reveal, subcopy, two pill buttons, bottom proof.
          Right ~55%: full-bleed photo, overlaid nav/status pills, floating "team" card.
          ======================================================== */}
      <section className="px-4 sm:px-6 md:px-10 pt-3 sm:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column (~45% / 5.5 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2 sm:py-6 lg:pr-4">
            <div>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DEEBC9] text-[#2F4500] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-5">
                <span className="w-2 h-2 rounded-full bg-[#5C8200] animate-pulse" />
                <span>International Recruitment Partner</span>
              </div>

              {/* Headline with 2-accent colors & staggered character reveal */}
              <h1 className="text-[clamp(1.85rem,6.5vw,3.25rem)] font-bold text-[#1B1B18] tracking-tight leading-[1.12] mb-4 sm:mb-5">
                Supplying{' '}
                <span className="text-[#5C8200]">expert leaders</span>{' '}
                and specialist trades for global{' '}
                <span className="text-[#523BA8]">
                  <StaggeredWord text="infrastructure" delayOffset={0.35} />
                </span>
                .
              </h1>

              {/* Subcopy */}
              <p className="text-sm sm:text-base md:text-lg text-[#8A8E82] font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl">
                Togher Group connects Tier-1 construction contractors with verified engineering management professionals and self-sufficient trades across Ireland, the UK, Europe, the USA and Australia.
              </p>

              {/* Two Pill Buttons (Section 5.1) */}
              <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-3.5 mb-8 sm:mb-10">
                <Link
                  href="/contact"
                  className="btn-pill btn-pill-dark text-sm sm:text-base py-3 px-6 shadow-md w-full xs:w-auto"
                >
                  <span>Deploy Workforce</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C7E36B]" />
                </Link>

                <Link
                  href="/vacancies"
                  className="btn-pill btn-pill-white text-sm sm:text-base py-3 px-6 w-full xs:w-auto"
                >
                  <span>Explore Vacancies</span>
                  <ChevronRight className="w-4 h-4 text-[#8A8E82]" />
                </Link>
              </div>
            </div>

            {/* Bottom Proof Metric Row */}
            <div className="pt-4 sm:pt-6 border-t border-[#1B1B18]/10 grid grid-cols-3 gap-2 sm:gap-4">
              <div>
                <span className="block text-lg sm:text-2xl font-extrabold text-[#1B1B18] font-[var(--font-display)]">
                  48h
                </span>
                <span className="text-[10px] sm:text-xs text-[#8A8E82] font-medium uppercase tracking-wider block">
                  Rapid Dispatch
                </span>
              </div>
              <div>
                <span className="block text-lg sm:text-2xl font-extrabold text-[#1B1B18] font-[var(--font-display)]">
                  100%
                </span>
                <span className="text-[10px] sm:text-xs text-[#8A8E82] font-medium uppercase tracking-wider block">
                  Vetted Compliance
                </span>
              </div>
              <div>
                <span className="block text-lg sm:text-2xl font-extrabold text-[#1B1B18] font-[var(--font-display)]">
                  5 Regions
                </span>
                <span className="text-[10px] sm:text-xs text-[#8A8E82] font-medium uppercase tracking-wider block">
                  IE · UK · EU · US · AU
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (~55% / 6.5 cols): Full-bleed photo + overlaid pills & Pro Team card */}
          <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] rounded-[22px] sm:rounded-[28px] overflow-hidden shadow-inner group">
            <Image
              src="/images/exhibit-cantilever-concrete.jpg"
              alt="Tiered cantilevered reinforced concrete structural ribs — Togher Group delivery"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle organic gradient tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-black/30 pointer-events-none" />

            {/* Overlaid Top-Right Status Pills (Section 2) */}
            <div className="absolute top-3 right-3 sm:top-6 sm:right-6 flex flex-col sm:flex-row items-end sm:items-center gap-2">
              <div className="bg-white/95 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-md border border-[#1B1B18]/10 flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#1B1B18]">
                <span className="w-2 h-2 rounded-full bg-[#C7E36B] animate-pulse" />
                <span>Active Hubs: Dublin · London · Frankfurt</span>
              </div>
            </div>

            {/* Overlaid Bottom-Left Tag */}
            <div className="absolute bottom-6 left-6 hidden lg:block">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium border border-white/15 tracking-wide">
                Dublin Docklands Commercial Superstructure
              </span>
            </div>

            {/* Floating Info Card ("Pro Team" Style per Section 5.2) */}
            <div className="absolute bottom-3 right-3 left-3 sm:left-auto sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-5 rounded-[18px] sm:rounded-[20px] shadow-2xl border border-[#1B1B18]/10 max-w-full sm:max-w-[320px] animate-in fade-in zoom-in-95 duration-500">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                {/* Stacked avatar cluster */}
                <div className="flex -space-x-1.5 sm:-space-x-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2F4500] text-[#C7E36B] font-bold text-[10px] sm:text-xs flex items-center justify-center border-2 border-white shadow-xs">
                    ST
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#523BA8] text-white font-bold text-[10px] sm:text-xs flex items-center justify-center border-2 border-white shadow-xs">
                    PM
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1B1B18] text-[#C7E36B] font-bold text-[10px] sm:text-xs flex items-center justify-center border-2 border-white shadow-xs">
                    QS
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#DEEBC9] text-[#2F4500] font-bold text-[10px] sm:text-xs flex items-center justify-center border-2 border-white shadow-xs">
                    +4k
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#1B1B18] leading-tight">
                    Verified Leadership
                  </span>
                  <span className="text-[10px] text-[#5C8200] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    100% Vetted Personnel
                  </span>
                </div>
              </div>
              <p className="text-[11px] sm:text-[12px] text-[#8A8E82] leading-tight font-normal">
                Direct deployment of senior engineers, commercial leads and site rotations on critical path deadlines.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          2. STATEMENT / MISSION SECTION (Section 5.3 & 5.4)
          Large centered headline with 2-accent colors.
          Below: 3-column row (Social/International card · Floating Tag-Cloud card · Photo card)
          ======================================================== */}
      <section className="px-4 sm:px-6 md:px-10">
        <div className="text-center max-w-4xl mx-auto py-8 sm:py-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A8E82] block mb-3">
            Core Philosophy & Mission
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1B1B18] leading-[1.2] tracking-tight">
            We deliver the{' '}
            <span className="text-[#5C8200]">engineering leadership</span>{' '}
            and trades that build tomorrow’s{' '}
            <span className="text-[#523BA8]">sustainable assets</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8A8E82] max-w-2xl mx-auto">
            From Dublin to Frankfurt, Sydney to London — eliminating recruitment friction with verified competency, compliance custody, and rapid site mobilisation.
          </p>
        </div>

        {/* 3-Column Card Row (Section 5.3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-6">
          
          {/* Card 1: Social & International Hubs (Dark image + desk links) */}
          <div className="relative h-[360px] sm:h-[400px] rounded-[24px] overflow-hidden p-6 sm:p-7 flex flex-col justify-between text-white shadow-md group">
            <Image
              src="/images/exhibit-steel-frame.jpg"
              alt="Multi-storey structural steel frame"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-[#C7E36B] mb-2">
                International Desks
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Global Mobility Network
              </h3>
              <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
                Coordinated desks operating across Ireland, the UK, Continental Europe, and Australia.
              </p>
            </div>

            <div className="relative z-10 space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C7E36B]" />
                  Dublin HQ & London Desk
                </span>
                <span className="text-white/70">Management</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B9AEF0]" />
                  Frankfurt Data Logistics
                </span>
                <span className="text-white/70">Rotations</span>
              </div>
            </div>
          </div>

          {/* Card 2: Floating Tag-Cloud / Keyword Pills (Section 5.4) */}
          <div className="relative min-h-[380px] sm:h-[400px] rounded-[24px] bg-[#DEEBC9] p-5 sm:p-7 flex flex-col justify-between shadow-md border border-[#C7E36B]/40 overflow-hidden">
            
            {/* Top static heading & button */}
            <div className="text-center z-10">
              <span className="text-[11px] uppercase font-bold tracking-wider text-[#2F4500] block mb-1">
                Capability Spectrum
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1B1B18] tracking-tight">
                Vetted Talent Pool
              </h3>
              <div className="mt-3">
                <Link
                  href="/vacancies"
                  className="btn-pill btn-pill-dark text-xs py-2 px-4 shadow-sm inline-flex min-h-[40px]"
                >
                  <span>Explore Vacancies</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
                </Link>
              </div>
            </div>

            {/* Mobile Tag Cluster (Clean flex-wrap layout preventing overlapping) */}
            <div className="md:hidden flex flex-wrap gap-2 justify-center py-4 z-10">
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#C7E36B] text-[#1B1B18] shadow-xs border border-[#1B1B18]/10 animate-float-a">
                Senior Project Managers
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#B9AEF0] text-[#1B1B18] shadow-xs border border-[#1B1B18]/10 animate-float-b">
                Formwork Carpenters
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-[#1B1B18] shadow-xs border border-[#1B1B18]/10 animate-float-c">
                Commercial Directors
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#C7E36B] text-[#1B1B18] shadow-xs border border-[#1B1B18]/10 animate-float-d">
                MEP Coordinators
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#B9AEF0] text-[#1B1B18] shadow-xs border border-[#1B1B18]/10 animate-float-b">
                Steel Fixers
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-[#1B1B18] shadow-xs border border-[#1B1B18]/10 animate-float-a">
                BIM 3D Modellers
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#C7E36B] text-[#1B1B18] shadow-xs border border-[#1B1B18]/10 animate-float-c">
                Posted Worker A1
              </span>
            </div>

            {/* Desktop Drifting zero-gravity keyword pills (Section 5.4) */}
            <div className="hidden md:flex relative flex-1 w-full my-2 items-center justify-center overflow-hidden">
              {/* Tag 1 */}
              <div className="absolute top-1 left-2 animate-float-a">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#C7E36B] text-[#1B1B18] shadow-sm border border-[#1B1B18]/10 inline-block">
                  Senior Project Managers
                </span>
              </div>
              {/* Tag 2 */}
              <div className="absolute top-2 right-2 animate-float-b">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#B9AEF0] text-[#1B1B18] shadow-sm border border-[#1B1B18]/10 inline-block">
                  Formwork Carpenters
                </span>
              </div>
              {/* Tag 3 */}
              <div className="absolute top-14 left-8 animate-float-c">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-[#1B1B18] shadow-sm border border-[#1B1B18]/10 inline-block">
                  Commercial Directors
                </span>
              </div>
              {/* Tag 4 */}
              <div className="absolute top-16 right-4 animate-float-d">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#C7E36B] text-[#1B1B18] shadow-sm border border-[#1B1B18]/10 inline-block">
                  MEP Coordinators
                </span>
              </div>
              {/* Tag 5 */}
              <div className="absolute bottom-12 left-4 animate-float-b">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#B9AEF0] text-[#1B1B18] shadow-sm border border-[#1B1B18]/10 inline-block">
                  Steel Fixers
                </span>
              </div>
              {/* Tag 6 */}
              <div className="absolute bottom-10 right-6 animate-float-a">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-[#1B1B18] shadow-sm border border-[#1B1B18]/10 inline-block">
                  BIM 3D Modellers
                </span>
              </div>
              {/* Tag 7 */}
              <div className="absolute bottom-1 left-16 animate-float-c">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#C7E36B] text-[#1B1B18] shadow-sm border border-[#1B1B18]/10 inline-block">
                  Posted Worker A1
                </span>
              </div>
            </div>

            <div className="text-center z-10 text-[11px] font-medium text-[#2F4500]/80">
              Verified certifications: CPCS · SafePass · CIOB · RICS
            </div>

          </div>

          {/* Card 3: Plain Photo Card with Floating Data Chip */}
          <div className="relative min-h-[380px] sm:h-[400px] rounded-[24px] overflow-hidden p-5 sm:p-7 flex flex-col justify-between text-white shadow-md group">
            <Image
              src="/images/exhibit-tower-crane.jpg"
              alt="Heavy construction tower crane against sky"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-white mb-2">
                Proven Custody
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Complex Mega-Projects
              </h3>
            </div>

            {/* Overlaid Floating Chip */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl text-[#1B1B18] border border-white/20">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C8200]">
                  Critical Path SLA
                </span>
                <span className="text-xs font-bold text-[#1B1B18]">99.4% Delivery</span>
              </div>
              <p className="text-xs text-[#8A8E82]">
                Zero project downtime recorded across 35 data campus rotations.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          3. DIAGONAL MARQUEE BAND (Section 5.5)
          Full-width strip rotated ~2–3° off horizontal, lavender fill (#B9AEF0),
          infinite auto-scrolling line separated by ⟲ rotating icons.
          ======================================================== */}
      <div className="relative py-6 sm:py-8 overflow-hidden my-2 sm:my-4 select-none w-full max-w-full">
        <div className="w-full -rotate-1 sm:-rotate-2 scale-102 sm:scale-105 bg-[#B9AEF0] py-3 sm:py-3.5 shadow-lg border-y border-[#1B1B18]/10 overflow-hidden">
          <div className="animate-marquee-strip flex items-center gap-6 sm:gap-8 whitespace-nowrap text-xs sm:text-base font-extrabold uppercase tracking-[0.14em] text-[#1B1B18]">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span>TIER-1 RECRUITMENT PARTNER</span>
                <span className="animate-spin-glyph text-lg">⟲</span>
                <span>IRELAND · UK · EUROPE · USA · AUSTRALIA</span>
                <span className="animate-spin-glyph text-lg">⟲</span>
                <span>MANAGEMENT PROFESSIONALS</span>
                <span className="animate-spin-glyph text-lg">⟲</span>
                <span>TRADES & LABOUR DISPATCH</span>
                <span className="animate-spin-glyph text-lg">⟲</span>
                <span>POSTED WORKER COMPLIANCE</span>
                <span className="animate-spin-glyph text-lg">⟲</span>
                <span>48-HOUR MOBILISATION</span>
                <span className="animate-spin-glyph text-lg">⟲</span>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ========================================================
          4. STACKED SERVICE CARDS ("FOLDER TAB" CAROUSEL - Section 5.6)
          Series of full-width rounded cards in pale sage tint (#DEEBC9)
          peeking like folder tabs, crossfading on interaction/scroll.
          Left: Pill label + H2 + description + dot pagination.
          Right: Photo with circular progress ring + count-up,
          scattered floating pills, rotating seal badge, and compact mini-card.
          ======================================================== */}
      <section className="px-4 sm:px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DEEBC9] text-[#2F4500] text-xs font-semibold tracking-wider uppercase mb-2">
              <span>Section 03</span>
              <span>·</span>
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B1B18] tracking-tight">
              Specialist Recruitment Architecture
            </h2>
          </div>
          <p className="text-sm text-[#8A8E82] max-w-md">
            Click through our 3 specialist divisions below. Each division operates with direct industry experts and full compliance custody.
          </p>
        </div>

        {/* Folder Tabs (peeking above the main active card like real divider tabs) */}
        <div
          role="tablist"
          aria-label="Specialist divisions"
          className="flex items-end gap-2 px-4 sm:px-8 -mb-[1px] relative z-20 overflow-x-auto pb-1 sm:pb-0 scrollbar-none"
        >
          {serviceCards.map((card, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={card.id}
                role="tab"
                id={`tab-${card.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${card.id}`}
                tabIndex={isActive ? 0 : -1}
                type="button"
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    setActiveTab((idx + 1) % serviceCards.length);
                  } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    setActiveTab((idx - 1 + serviceCards.length) % serviceCards.length);
                  }
                }}
                onClick={() => setActiveTab(idx)}
                className={`px-5 sm:px-7 py-3 rounded-t-2xl font-bold text-xs sm:text-sm tracking-tight transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap cursor-pointer border-t border-x ${
                  isActive
                    ? 'bg-[#DEEBC9] text-[#1B1B18] border-[#C7E36B]/60 shadow-xs z-30 translate-y-0'
                    : 'bg-[#EBF3DC]/80 hover:bg-[#E4EED7] text-[#8A8E82] border-black/5 z-10 translate-y-1'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    isActive ? 'bg-[#5C8200]' : 'bg-[#8A8E82]/50'
                  }`}
                />
                <span>{card.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active Folder Card Shell (Section 5.6) */}
        <div
          role="tabpanel"
          id={`panel-${serviceCards[activeTab].id}`}
          aria-labelledby={`tab-${serviceCards[activeTab].id}`}
          className="relative rounded-[22px] sm:rounded-[32px] bg-[#DEEBC9] border border-[#C7E36B]/60 p-5 sm:p-10 lg:p-12 shadow-lg transition-all duration-500 overflow-hidden"
        >
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          {(() => {
            const activeCard = serviceCards[activeTab];
            return (
              <div
                key={activeCard.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10 animate-in fade-in duration-300"
              >
                {/* Left Side: Pill label + H2 + description + dot pagination */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Eyebrow Pill */}
                    <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-[#2F4500] text-xs font-bold tracking-wider uppercase mb-3 sm:mb-4 shadow-2xs">
                      {activeCard.eyebrow}
                    </span>

                    <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#1B1B18] tracking-tight leading-tight mb-3 sm:mb-4">
                      {activeCard.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#1B1B18]/75 leading-relaxed mb-5 sm:mb-6">
                      {activeCard.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                      {activeCard.bulletPoints.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1B1B18]">
                          <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#5C8200] shadow-2xs shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Metric Quick Stats */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 border border-white/60 mb-6 sm:mb-8 shadow-xs">
                      {activeCard.metrics.map((m, idx) => (
                        <div key={idx} className="text-center sm:text-left">
                          <span className="block text-base sm:text-xl font-extrabold text-[#1B1B18] font-[var(--font-display)]">
                            {m.value}
                          </span>
                          <span className="text-[9px] sm:text-xs text-[#8A8E82] font-semibold uppercase block leading-tight">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Pill Button */}
                    <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
                      <Link
                        href={activeCard.href}
                        className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 shadow-md w-full xs:w-auto"
                      >
                        <span>Explore Full Scope</span>
                        <ArrowRight className="w-4 h-4 text-[#C7E36B]" />
                      </Link>
                      <Link
                        href="/contact"
                        className="btn-pill btn-pill-white text-xs sm:text-sm py-2.5 sm:py-3 px-4 sm:px-5 w-full xs:w-auto"
                      >
                        <span>Requisition Talent</span>
                      </Link>
                    </div>
                  </div>

                  {/* Left-edge vertical dot pagination (Section 5.6) */}
                  <div className="flex items-center gap-2.5 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#1B1B18]/10">
                    <span className="text-xs font-bold text-[#8A8E82] uppercase tracking-wider mr-2">
                      Folder Tab {activeTab + 1} of {serviceCards.length}
                    </span>
                    {serviceCards.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setActiveTab(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          activeTab === dotIdx
                            ? 'w-8 bg-[#1B1B18]'
                            : 'w-2.5 bg-[#1B1B18]/25 hover:bg-[#1B1B18]/50'
                        }`}
                      />
                    ))}
                  </div>

                </div>

                {/* Right Side: Photo tile with floating data chips overlaid */}
                <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[500px] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-2xl border-2 sm:border-4 border-white group">
                  <Image
                    src={activeCard.image}
                    alt={activeCard.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* 1. Circular progress ring with animated count-up (Section 5.6) */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 animate-in fade-in zoom-in-95 duration-500">
                    <CircularProgress
                      percentage={activeCard.percentage}
                      label={activeCard.percentageLabel}
                    />
                  </div>

                  {/* 2. Rotating Seal / Verification Stamp near corner (Section 5.6) */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                    <VerificationSeal />
                  </div>

                  {/* 3. Scattered free-floating pill badge (hidden on smallest screens to prevent overlap with Why Us card) */}
                  <div className="hidden sm:block absolute bottom-24 left-4 z-20">
                    <div className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-[#1B1B18]/10 text-xs font-bold text-[#1B1B18] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#5C8200]" />
                      <span>{activeCard.chips[0].stat}</span>
                    </div>
                  </div>

                  {/* 4. Compact "Why Us?" Mini-Card with 3 small ring stats (Section 5.6) */}
                  <div className="absolute bottom-3 right-3 left-3 sm:left-auto sm:bottom-4 sm:right-4 sm:max-w-xs z-20 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl border border-white/40">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#1B1B18] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#5C8200]" />
                        Why Togher Group?
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase text-[#523BA8] bg-[#E3DEFC] px-2 py-0.5 rounded-full">
                        Tier-1 Ready
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center py-1">
                      <div className="p-1 sm:p-1.5 rounded-lg bg-[#DEEBC9]/50">
                        <span className="block text-[11px] sm:text-xs font-extrabold text-[#1B1B18]">100%</span>
                        <span className="text-[8px] sm:text-[9px] text-[#2F4500] font-bold">Vetted</span>
                      </div>
                      <div className="p-1 sm:p-1.5 rounded-lg bg-[#E3DEFC]/50">
                        <span className="block text-[11px] sm:text-xs font-extrabold text-[#1B1B18]">48h</span>
                        <span className="text-[8px] sm:text-[9px] text-[#523BA8] font-bold">SLA</span>
                      </div>
                      <div className="p-1 sm:p-1.5 rounded-lg bg-[#F6F7F2]">
                        <span className="block text-[11px] sm:text-xs font-extrabold text-[#1B1B18]">Zero</span>
                        <span className="text-[8px] sm:text-[9px] text-[#8A8E82] font-bold">Dispute</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>


      {/* ========================================================
          5. FEATURED REPERTOIRE / PROVEN EXHIBITS
          Rounded card layout showcasing verified projects
          ======================================================== */}
      <section className="px-4 sm:px-6 md:px-10">
        <div className="rounded-[28px] sm:rounded-[32px] bg-[#FAFBF7] border border-[#1B1B18]/8 p-6 sm:p-10 lg:p-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#8A8E82] block mb-2">
                Proven Delivery
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B1B18] tracking-tight">
                Featured Project Repertoire
              </h2>
            </div>
            <Link
              href="/clients"
              className="btn-pill btn-pill-white text-xs sm:text-sm py-2 px-5 self-start md:self-auto"
            >
              <span>View All Frameworks</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((prj) => (
              <div
                key={prj.code}
                className="rounded-2xl bg-white border border-[#1B1B18]/8 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={prj.image}
                    alt={prj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 450px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#1B1B18]/80 backdrop-blur-md text-white text-[11px] font-bold">
                    {prj.stat}
                  </div>
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1B1B18] text-[10px] font-bold uppercase tracking-wider">
                    {prj.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-[#8A8E82] font-semibold block mb-1">
                      {prj.location}
                    </span>
                    <h3 className="text-lg font-bold text-[#1B1B18] group-hover:text-[#5C8200] transition-colors leading-snug mb-2">
                      {prj.title}
                    </h3>
                    <p className="text-xs text-[#8A8E82] leading-relaxed">
                      {prj.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#1B1B18]/6 flex items-center justify-between text-xs font-semibold text-[#1B1B18]">
                    <span>{prj.code}</span>
                    <span className="flex items-center gap-1 text-[#5C8200] group-hover:translate-x-0.5 transition-transform">
                      Inspect Repertoire <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          6. DUAL TRACK CONVERSION (Clients vs Candidates)
          Two complementary rounded cards side-by-side
          ======================================================== */}
      <section className="px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Card A: For Main Contractors */}
          <div className="p-6 sm:p-10 rounded-[22px] sm:rounded-[28px] bg-[#DEEBC9] border border-[#C7E36B]/60 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-[#2F4500] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs">
                For Employers & Contractors
              </span>
              <h3 className="text-xl sm:text-3xl font-bold text-[#1B1B18] tracking-tight mb-2 sm:mb-3 leading-snug">
                Mobilise Verified Project Leadership
              </h3>
              <p className="text-xs sm:text-sm text-[#1B1B18]/75 leading-relaxed mb-5 sm:mb-6">
                Need an experienced Project Director, MEP Lead, or 35-operative trades crew on-site with 48-hour turnarounds? We manage all compliance, certification and logistics.
              </p>
            </div>

            <div className="relative z-10 pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
              <Link
                href="/contact"
                className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 shadow-md w-full xs:w-auto"
              >
                <span>Submit Requisition</span>
                <ArrowUpRight className="w-4 h-4 text-[#C7E36B]" />
              </Link>
              <Link
                href="/clients"
                className="btn-pill btn-pill-white text-xs sm:text-sm py-2.5 sm:py-3 px-5 w-full xs:w-auto"
              >
                <span>Client Framework</span>
              </Link>
            </div>
          </div>

          {/* Card B: For Candidates & Skilled Trades */}
          <div className="p-6 sm:p-10 rounded-[22px] sm:rounded-[28px] bg-[#E3DEFC] border border-[#B9AEF0]/60 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-[#523BA8] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs">
                For Engineers & Trades
              </span>
              <h3 className="text-xl sm:text-3xl font-bold text-[#1B1B18] tracking-tight mb-2 sm:mb-3 leading-snug">
                Access Tier-1 International Roles
              </h3>
              <p className="text-xs sm:text-sm text-[#1B1B18]/75 leading-relaxed mb-5 sm:mb-6">
                Take your career to leading infrastructure, commercial superstructures, and hyperscale data campus contracts across Ireland, the UK, Europe and Australia.
              </p>
            </div>

            <div className="relative z-10 pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
              <Link
                href="/candidates"
                className="btn-pill bg-[#523BA8] text-white hover:bg-[#432F8E] text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-6 shadow-md w-full xs:w-auto"
              >
                <span>Register with Togher</span>
                <ArrowUpRight className="w-4 h-4 text-[#C7E36B]" />
              </Link>
              <Link
                href="/vacancies"
                className="btn-pill btn-pill-white text-xs sm:text-sm py-2.5 sm:py-3 px-5 w-full xs:w-auto"
              >
                <span>Search Live Jobs</span>
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================
          7. DIRECT REQUISITION / CONTACT STRIP
          Clean pill form terminal inside a soft pale sage card
          ======================================================== */}
      <section className="px-4 sm:px-6 md:px-10">
        <div className="rounded-[22px] sm:rounded-[32px] bg-[#1B1B18] text-white p-6 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 text-[#C7E36B] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C7E36B] animate-pulse" />
              <span>Direct Recruitment Terminal</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-4 leading-tight">
              Start your <span className="text-[#C7E36B]">workforce deployment</span> today.
            </h2>

            <p className="text-xs sm:text-base text-white/75 leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
              Connect with our Dublin Headquarters or London Operations desk. Our directors review all requisitions within two business hours.
            </p>

            <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="btn-pill bg-[#C7E36B] text-[#1B1B18] hover:bg-[#b5d74c] font-bold text-xs sm:text-base py-3 sm:py-3.5 px-6 sm:px-8 shadow-xl w-full xs:w-auto"
              >
                <span>Open Direct Requisition</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+35319053800"
                className="btn-pill bg-white/10 text-white hover:bg-white/20 border border-white/20 text-xs sm:text-base py-3 sm:py-3.5 px-5 sm:px-6 w-full xs:w-auto"
              >
                <Phone className="w-4 h-4 text-[#C7E36B]" />
                <span>+353 (0)1 905 3800</span>
              </a>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-[#8A8E82]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C7E36B] shrink-0" />
                Managing Director Steve Togher
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C7E36B] shrink-0" />
                Dublin 2 & London Desks
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C7E36B] shrink-0" />
                Full EU A1 Compliance
              </span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
