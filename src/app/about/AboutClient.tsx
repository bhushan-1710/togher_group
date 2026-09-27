'use client';

import React from 'react';
import Link from 'next/link';
import {
  GrainOverlay,
  EntryLabel,
  LogDivider,
  useScrollSkew,
  useCounter,
  ExhibitFrame,
  LiveOperationalSignal,
  ScrollableDossierStrip,
  DossierCard,
} from '@/components/ledger/LedgerPrimitives';
import { CheckCircle2, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';

export default function AboutClient() {
  const wordmarkRef = useScrollSkew();
  const markets = useCounter(5);

  return (
    <div className="w-full bg-white text-[#1B1B18] overflow-x-hidden relative min-h-screen pb-16">
      <GrainOverlay />

      {/* ═══════════════════════════════════════════════════════
          COVER — Specification Header Block
      ═══════════════════════════════════════════════════════ */}
      <section className="pt-6 sm:pt-10 pb-6 sm:pb-8 px-4 sm:px-6 md:px-10 relative border-b border-[#1B1B18]/8">
        {/* Top metadata row */}
        <div className="flex justify-between items-center flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#8A8E82] uppercase tracking-wider">
            SPECIFICATION REF: TG-2025 // SEC-02 // CORPORATE DISCIPLINE
          </span>
          <LiveOperationalSignal text="ACTIVE · IRELAND & UK REGISTERED" />
        </div>

        {/* Display headline with scroll-velocity skew */}
        <div
          ref={wordmarkRef}
          className="transition-transform duration-100 ease-out will-change-transform"
        >
          <h1 className="text-[clamp(2.2rem,7.5vw,5.5rem)] font-bold tracking-tight text-[#1B1B18] font-[var(--font-display)] leading-[1.05] mb-3 sm:mb-4">
            About <span className="text-[#5C8200]">Togher</span> Group.
          </h1>
        </div>

        <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4 flex-wrap text-xs sm:text-sm font-semibold text-[#8A8E82]">
          <span className="inline-flex items-center gap-1.5 text-[#5C8200] bg-[#DEEBC9] px-3 py-1 rounded-full uppercase tracking-wider text-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            Specialist Construction Recruitment
          </span>
          <span className="uppercase tracking-wider">
            Managing Director: Steve Togher · Dublin & London Desks
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LOG 01 — The Mandate + Exhibit ABT-01
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 01" label="The Operational Mandate" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1B1B18] tracking-tight leading-tight mb-6">
              Construction runs on <span className="text-[#5C8200]">deadlines</span>, not excuses.
            </h2>
            
            <div className="border-l-2 border-[#1B1B18] pl-5 sm:pl-6 space-y-4 text-sm sm:text-base text-[#1B1B18]/75 leading-relaxed">
              <p>
                Togher Group is an international construction recruitment consultancy led by Managing
                Director <strong>Steve Togher</strong>. We specialize exclusively in the sectors that build
                critical physical infrastructure — commercial construction, civil engineering, major
                fit-out, and mechanical &amp; electrical services.
              </p>
              <p>
                We do not operate as a generalized CV clearing house. Every placement recommendation is
                backed by direct technical understanding of project schedules, sectional completions,
                and statutory site safety.
              </p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-5 shadow-xs"
                >
                  <span>Explore service pathways: Management &amp; Trades</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
                </Link>
              </div>
            </div>
          </div>

          {/* EXHIBIT ABT-01 */}
          <div className="lg:col-span-5">
            <ExhibitFrame
              src="/images/exhibit-shuttered-concrete.jpg"
              alt="Raw board-marked shuttered concrete showing high-contrast grain and tie bolt indents"
              figureId="EXHIBIT ABT-01"
              caption="BOARD-MARKED SHUTTERED CONCRETE · STRUCTURAL SUBSTRATE"
              refCode="NT-LDN / COMMONS"
              license="CC BY-SA 4.0"
              aspectRatio="4/3"
              priority
            />
            <div className="mt-3 px-2 flex justify-between text-[11px] text-[#8A8E82] font-medium tracking-wide">
              <span>Architectural Concrete Reference</span>
              <span>Tolerance: BS EN 13670</span>
            </div>
          </div>
        </div>
      </section>

      <LogDivider />

      {/* ═══════════════════════════════════════════════════════
          LOG 02 — Four Core Values (Clean Rounded Cards)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 02" label="Verified Operating Values" />

        <div className="mt-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1B18] tracking-tight mb-8">
            Four rules governing every <span className="text-[#523BA8]">placement</span>.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                id: '01',
                title: 'Trust & Candour',
                desc: 'Uncompromising honesty regarding candidate availability, experience depth, and wage expectations. If a role cannot be realistically filled within a required window, we state that plainly.',
              },
              {
                id: '02',
                title: 'Passion for Excellence',
                desc: 'Every candidate is vetted against rigorous technical and statutory criteria. We inspect certified tickets, verify past employer references, and test domain capability before dispatch.',
              },
              {
                id: '03',
                title: 'People Focused',
                desc: 'Construction is delivered by people. We treat site engineers, project managers, and tradesmen as career partners, fostering long-term continuity across major European programmes.',
              },
              {
                id: '04',
                title: 'Results Orientated',
                desc: 'Our work is measured strictly by site outcomes: packages completed on schedule, zero contractor delay claims, and high retention through completion of commissioning.',
              },
            ].map((v) => (
              <div
                key={v.id}
                className="p-6 rounded-[22px] bg-[#FAFBF7] border border-[#1B1B18]/8 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="text-[11px] font-bold text-[#5C8200] uppercase tracking-wider mb-3">
                    RULE // {v.id}
                  </div>
                  <h3 className="text-lg font-bold text-[#1B1B18] mb-2 font-[var(--font-display)]">
                    {v.title}
                  </h3>
                  <p className="text-xs text-[#8A8E82] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogDivider />

      {/* ═══════════════════════════════════════════════════════
          LOG 03 — Geographic Scope & Counter
      ═══════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 03" label="Jurisdictions & Cross-Border Delivery" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center mt-6 p-6 sm:p-10 rounded-[22px] sm:rounded-[28px] bg-[#DEEBC9] border border-[#C7E36B]/60">
          <div className="md:col-span-4">
            <div className="text-5xl sm:text-7xl font-extrabold text-[#1B1B18] font-[var(--font-display)] leading-none">
              0{markets.count}
            </div>
            <div className="text-xs uppercase font-bold text-[#2F4500] tracking-wider mt-2">
              Verified Active Jurisdictions
            </div>
          </div>

          <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-[#1B1B18]/12 pt-5 md:pt-0 md:pl-8">
            <p className="text-sm sm:text-base text-[#1B1B18]/80 leading-relaxed mb-6">
              Togher Group connects organisations and personnel across <strong>Ireland, the United
              Kingdom, Europe, the USA, and Australia</strong>. We support Irish and UK main contractors
              delivering complex civil, data centre, pharmaceutical, and high-density residential works
              domestically and internationally.
            </p>
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
              <Link
                href="/clients"
                className="btn-pill btn-pill-white text-xs sm:text-sm py-2.5 px-5 shadow-xs w-full xs:w-auto"
              >
                <span>Client Framework</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/vacancies"
                className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-5 shadow-xs w-full xs:w-auto"
              >
                <span>Inspect Live Vacancies</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LogDivider />

      {/* ═══════════════════════════════════════════════════════
          LOG 04 — Jurisdictional Practice Reel
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 04" label="Jurisdictional Evolution & Operational Scale" />

        <div className="mt-4">
          <ScrollableDossierStrip
            label="INTERNATIONAL PRACTICE REEL"
            tag="5 JURISDICTIONAL FOOTPRINTS // DRAG OR SCROLL ↔"
          >
            {/* Stage 01 */}
            <DossierCard
              refCode="STAGE // 01"
              statusBadge="FOUNDATION"
              imageSrc="/images/exhibit-shuttered-concrete.jpg"
              imageAlt="Raw board-marked shuttered concrete"
              title="DUBLIN & IRISH MAIN CONTRACTING"
              subtitle="HQ PRACTICE // FITZWILLIAM SQUARE"
              summary="Formed to resolve site leadership and specialist shuttering carpenter deficits for Tier-1 contractors across Ireland."
              specs={[
                { label: 'DISCIPLINES', value: 'Commercial PMs, Senior QSs, Trade Foremen' },
                { label: 'STATUTORY', value: 'Safe Pass / CIF / SCSI Accreditations' },
                { label: 'PROJECT SCALE', value: '€20M – €150M Irish Schemes' },
              ]}
              linkHref="/clients"
              linkText="Inspect Irish Delivery ↗"
            />

            {/* Stage 02 */}
            <DossierCard
              refCode="STAGE // 02"
              statusBadge="EXPANSION"
              imageSrc="/images/exhibit-steel-frame.jpg"
              imageAlt="Steel frame structure"
              title="LONDON & UK CIVIL INFRASTRUCTURE"
              subtitle="UK DESK // CENTRAL LONDON & MANCHESTER"
              summary="Established continuous UK presence deploying package managers, commercial directors, and certified steel squads on complex urban developments."
              specs={[
                { label: 'FRAMEWORKS', value: 'Major Commercial & Transport Hubs' },
                { label: 'COMPLIANCE', value: 'UK CIS, PAYE & CSCS Card Standards' },
                { label: 'INTERVENTIONS', value: 'Interim Management & Gang Mobilisation' },
              ]}
              linkHref="/services"
              linkText="Review UK Services ↗"
            />

            {/* Stage 03 */}
            <DossierCard
              refCode="STAGE // 03"
              statusBadge="EUROPEAN ROTATIONS"
              isLive={true}
              imageSrc="/images/exhibit-tower-crane.jpg"
              imageAlt="Heavy construction crane"
              title="EUROPEAN ADVANCED TECHNOLOGY & CLOUD"
              subtitle="CONTINENTAL EUROPE // FRANKFURT & AMSTERDAM"
              summary="Mobilizing Irish contractor teams on mission-critical hyperscale data centres, logistics terminals, and cleanroom facilities across the continent."
              specs={[
                { label: 'JURISDICTIONS', value: 'Germany, Netherlands, Scandinavia' },
                { label: 'DEPLOYMENT', value: 'Structured 3:1 Site Rotations' },
                { label: 'LOGISTICS', value: 'Full Posted Worker Clearance' },
              ]}
              linkHref="/candidates"
              linkText="Explore European Rotations ↗"
            />

            {/* Stage 04 */}
            <DossierCard
              refCode="STAGE // 04"
              statusBadge="PACIFIC MOBILITY"
              imageSrc="/images/exhibit-cantilever-concrete.jpg"
              imageAlt="Cantilevered concrete structure"
              title="AUSTRALIA INFRASTRUCTURE PRACTICE"
              subtitle="PACIFIC HUB // SYDNEY (NSW)"
              summary="Facilitating skilled trade squads and engineering leadership for major transport megaprojects and underground metro construction in Australia."
              specs={[
                { label: 'SECTORS', value: 'Metro Rail, Deep Tunnels, Civil Bridges' },
                { label: 'CREDENTIALS', value: 'Australian White Card & Rail Safety' },
                { label: 'SPONSORSHIP', value: 'TSS 482 / Project Rotation Visas' },
              ]}
              linkHref="/vacancies"
              linkText="View Australian Requisitions ↗"
            />
          </ScrollableDossierStrip>
        </div>
      </section>
    </div>
  );
}
