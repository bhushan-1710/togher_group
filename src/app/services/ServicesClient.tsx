'use client';

import React from 'react';
import Link from 'next/link';
import {
  GrainOverlay,
  EntryLabel,
  LogDivider,
  useScrollSkew,
  ExhibitFrame,
  LiveOperationalSignal,
  ScrollableDossierStrip,
  DossierCard,
} from '@/components/ledger/LedgerPrimitives';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';

export default function ServicesClient() {
  const wordmarkRef = useScrollSkew();

  return (
    <div className="w-full bg-white text-[#1B1B18] overflow-x-hidden relative min-h-screen pb-16">
      <GrainOverlay />

      {/* ═══════════════════════════════════════════════════════
          COVER — Specification Header Block
      ═══════════════════════════════════════════════════════ */}
      <section className="pt-6 sm:pt-10 pb-6 sm:pb-8 px-4 sm:px-6 md:px-10 relative border-b border-[#1B1B18]/8">
        <div className="flex justify-between items-center flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#8A8E82] uppercase tracking-wider">
            SPECIFICATION REF: TG-2025 // SEC-03 // CAPABILITY ARCHITECTURE
          </span>
          <LiveOperationalSignal text="SERVICES SPECIFICATION // VERIFIED" />
        </div>

        <div
          ref={wordmarkRef}
          className="transition-transform duration-100 ease-out will-change-transform"
        >
          <h1 className="text-[clamp(2.2rem,7.5vw,5.5rem)] font-bold tracking-tight text-[#1B1B18] font-[var(--font-display)] leading-[1.05] mb-3 sm:mb-4">
            Service <span className="text-[#5C8200]">Architecture</span>.
          </h1>
        </div>

        <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4 flex-wrap text-xs sm:text-sm font-semibold text-[#8A8E82]">
          <span className="inline-flex items-center gap-1.5 text-[#5C8200] bg-[#DEEBC9] px-3 py-1 rounded-full uppercase tracking-wider text-xs">
            <Layers className="w-3.5 h-3.5" />
            Two Core Delivery Tracks
          </span>
          <span className="uppercase tracking-wider">
            Ireland · UK · Europe · USA · Australia
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LOG 01 — Track A: Management Professionals + Exhibit SRV-01
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 01" label="Track A — Management & Engineering Professionals" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1B1B18] tracking-tight leading-tight mb-6">
              Technical leadership for <span className="text-[#5C8200]">critical packages</span>.
            </h2>
            
            <div className="border-l-2 border-[#1B1B18] pl-5 sm:pl-6 space-y-4 text-sm sm:text-base text-[#1B1B18]/75 leading-relaxed">
              <p>
                Specialist recruitment for construction and engineering management. We supply permanent
                and project-fixed appointments for Tier-1 and Tier-2 contractors managing major commercial,
                civil infrastructure, hyperscale data centre, and pharmaceutical developments.
              </p>

              <div className="p-5 rounded-2xl bg-[#DEEBC9]/50 border border-[#C7E36B]/40 text-xs sm:text-sm my-4">
                <div className="text-[11px] font-bold text-[#2F4500] uppercase tracking-wider mb-2">
                  Discipline Specification:
                </div>
                <p className="text-[#1B1B18] font-medium leading-relaxed">
                  Project Directors · Commercial Managers · Senior Quantity Surveyors ·
                  Site Agents &amp; Managers · M&amp;E Services Coordinators · Design Managers ·
                  Planning Engineers · Health &amp; Safety Officers (EHS)
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact?type=management"
                  className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-5 shadow-xs"
                >
                  <span>Brief a management requirement with Togher</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
                </Link>
              </div>
            </div>
          </div>

          {/* EXHIBIT SRV-01 */}
          <div className="lg:col-span-5">
            <ExhibitFrame
              src="/images/exhibit-steel-frame.jpg"
              alt="Heavy structural steel frame erection with diagonal bracing and crane hoist"
              figureId="EXHIBIT SRV-01"
              caption="STRUCTURAL STEEL FRAMEWORK · MULTI-STOREY ASSEMBLY"
              refCode="COMMONS / WIKIDEAS1"
              license="CC0 PUBLIC DOMAIN"
              aspectRatio="16/10"
              priority
            />
            <div className="mt-3 px-2 flex justify-between text-[11px] text-[#8A8E82] font-medium tracking-wide">
              <span>Structural Tolerance: EN 1090-2 EXC3</span>
              <span>Steel Package Supervision</span>
            </div>
          </div>
        </div>
      </section>

      <LogDivider />

      {/* ═══════════════════════════════════════════════════════
          LOG 02 — Track B: Trades & Labour + Exhibit SRV-02
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 02" label="Track B — Skilled Trades & Site Workforce" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
          {/* EXHIBIT SRV-02 placed first for alternating rhythm */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ExhibitFrame
              src="/images/exhibit-rebar-cage.jpg"
              alt="Circular steel reinforcement cage for deep foundation pile"
              figureId="EXHIBIT SRV-02"
              caption="HIGH-DENSITY TIED REBAR REINFORCEMENT CAGE · PILE FOUNDATIONS"
              refCode="COMMONS / MATTES"
              license="PUBLIC DOMAIN"
              aspectRatio="4/3"
            />
            <div className="mt-3 px-2 flex justify-between text-[11px] text-[#8A8E82] font-medium tracking-wide">
              <span>Steel Fixing Spec: BS 8666 / EN 1992</span>
              <span>Substructure Foundation Rebar</span>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1B1B18] tracking-tight leading-tight mb-6">
              Site teams with <span className="text-[#523BA8]">proven hands</span> and certified cards.
            </h2>
            
            <div className="border-l-2 border-[#1B1B18] pl-5 sm:pl-6 space-y-4 text-sm sm:text-base text-[#1B1B18]/75 leading-relaxed">
              <p>
                A dedicated workforce solution for main contractors requiring reliable site trades.
                We deploy experienced crews who understand formwork systems, concrete placement, steel
                tying, and earthwork logistics.
              </p>

              <div className="p-5 rounded-2xl bg-[#E3DEFC]/50 border border-[#B9AEF0]/40 text-xs sm:text-sm my-4">
                <div className="text-[11px] font-bold text-[#523BA8] uppercase tracking-wider mb-2">
                  Operative Specification:
                </div>
                <p className="text-[#1B1B18] font-medium leading-relaxed">
                  Shuttering / Formwork Carpenters · Steel Fixers &amp; Benders · Concrete Finishers ·
                  Groundworkers (Pipelaying, Deep Drainage) · Crane Operators &amp; Slinger/Signallers ·
                  Scaffolders · Dryliners &amp; Ceiling Fixers
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact?type=trades"
                  className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-5 shadow-xs"
                >
                  <span>Request workforce mobilisation schedule</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogDivider />

      {/* ═══════════════════════════════════════════════════════
          LOG 03 — Consultancy & Strategic Staffing
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 03" label="Track C — Consultancy & Strategic Advisory" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-6 p-8 sm:p-10 rounded-[28px] bg-[#FAFBF7] border border-[#1B1B18]/8">
          <div className="md:col-span-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1B1B18] tracking-tight mb-2">
              Workforce Planning &amp; Tender Support.
            </h3>
            <span className="text-[11px] uppercase tracking-wider text-[#8A8E82] font-semibold">
              Strategic Contractor Advisory
            </span>
          </div>

          <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-[#1B1B18]/12 pt-6 md:pt-0 md:pl-8">
            <p className="text-sm sm:text-base text-[#1B1B18]/80 leading-relaxed mb-6">
              Beyond reactive placement, Togher Group consults with contractor commercial leadership during
              pre-tender stages to model realistic labour rates, availability bottlenecks, and international
              mobilization requirements for major capital investments.
            </p>
            <Link
              href="/contact"
              className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-5 shadow-xs"
            >
              <span>Discuss Specific Project Scope</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
            </Link>
          </div>
        </div>
      </section>

      <LogDivider />

      {/* ═══════════════════════════════════════════════════════
          LOG 04 — Active Package Profiles & Sector Dossiers
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 04" label="Active Sector Package Profiles & Dossiers" />

        <div className="mt-4">
          <ScrollableDossierStrip
            label="SECTOR CAPABILITY REEL"
            tag="5 ACTIVE DOSSIERS // DRAG OR SCROLL ↔"
          >
            {/* Dossier 01 */}
            <DossierCard
              refCode="DOSSIER // 01"
              statusBadge="RC FRAME"
              imageSrc="/images/exhibit-cantilever-concrete.jpg"
              imageAlt="Cantilevered reinforced concrete structural ribs"
              title="COMMERCIAL HIGH-RISE & RC CORE"
              subtitle="SECTOR SPECIFICATION // DUBLIN & LONDON"
              summary="Multi-storey reinforced concrete structures, climbing jumpform cores, post-tensioned slabs, and architectural fair-faced perimeters."
              specs={[
                { label: 'JURISDICTIONS', value: 'Ireland & UK' },
                { label: 'KEY ROLES', value: 'Project Directors, QSs, Shuttering Gangs' },
                { label: 'TYPICAL SCALE', value: '€40M – €120M Capital Builds' },
              ]}
              linkHref="/contact?type=management"
              linkText="Inspect Package Requirements ↗"
            />

            {/* Dossier 02 */}
            <DossierCard
              refCode="DOSSIER // 02"
              statusBadge="ACTIVE MOBILISATION"
              isLive={true}
              imageSrc="/images/exhibit-tower-crane.jpg"
              imageAlt="Heavy construction tower crane against dramatic sky"
              title="HYPERSCALE DATA CENTRES & INDUSTRIAL"
              subtitle="EUROPEAN MOBILISATION // AMSTERDAM & FRANKFURT"
              summary="Fast-track shell and core, prefabricated heavy modules, cleanroom containment, and synchronized crane logistics."
              specs={[
                { label: 'JURISDICTIONS', value: 'Europe & UK' },
                { label: 'KEY ROLES', value: 'M&E Coordinators, BIM Leads, Riggers' },
                { label: 'DISPATCH MODEL', value: 'Cross-Border Posted Teams' },
              ]}
              linkHref="/contact?type=trades"
              linkText="Mobilise Specialist Team ↗"
            />

            {/* Dossier 03 */}
            <DossierCard
              refCode="DOSSIER // 03"
              statusBadge="HEAVY STEEL"
              imageSrc="/images/exhibit-steel-frame.jpg"
              imageAlt="Structural steel frame erection"
              title="STRUCTURAL STEELWORK & TRUSS ERECTION"
              subtitle="SUPERSTRUCTURE SPEC // TIER-1 CONTRACTORS"
              summary="Precision bolted connections, heavy beam erection, cantilevered podiums, and crane-coordinated high-altitude rigging."
              specs={[
                { label: 'STANDARD', value: 'EN 1090-2 EXC3' },
                { label: 'KEY ROLES', value: 'Steel Fixers, Site Managers, Banksmen' },
                { label: 'AUDIT', value: '100% CSCS / CPCS Verified' },
              ]}
              linkHref="/contact?type=trades"
              linkText="Deploy Superstructure Gangs ↗"
            />

            {/* Dossier 04 */}
            <DossierCard
              refCode="DOSSIER // 04"
              statusBadge="SUBSTRUCTURE"
              imageSrc="/images/exhibit-rebar-cage.jpg"
              imageAlt="Circular rebar foundation pile cage"
              title="DEEP PILING & SUBSTRUCTURE MATRIX"
              subtitle="FOUNDATION ENGINEERING // TRANSIT & PORTS"
              summary="High-density rebar cages, secant and contiguous retaining walls, deep basement excavation, and ground stabilization."
              specs={[
                { label: 'STANDARD', value: 'BS 8666 / EN 1992' },
                { label: 'KEY ROLES', value: 'Steel Benders, Piling Crews, Groundworkers' },
                { label: 'TICKETS', value: 'Safe Pass, CPCS, Rigging Cards' },
              ]}
              linkHref="/contact?type=trades"
              linkText="Substructure Briefing ↗"
            />

            {/* Dossier 05 */}
            <DossierCard
              refCode="DOSSIER // 05"
              statusBadge="ENGINEERED SYSTEM"
              imageSrc="/images/exhibit-formwork-shuttering.jpg"
              imageAlt="Engineered modular formwork system"
              title="MODULAR FORMWORK & SHUTTERING"
              subtitle="SYSTEM WORK // PERI · DOKA · MEVA"
              summary="Rapid cycle wall, slab, and climbing table systems. High-tolerance architectural concrete finishes with minimum rework."
              specs={[
                { label: 'SYSTEMS', value: 'Modular & Traditional Timber' },
                { label: 'KEY ROLES', value: 'Master Carpenters, Formwork Foremen' },
                { label: 'MOBILISATION', value: 'Within 48h for Emergency Gaps' },
              ]}
              linkHref="/contact?type=trades"
              linkText="Request Formwork Squad ↗"
            />
          </ScrollableDossierStrip>
        </div>
      </section>
    </div>
  );
}
