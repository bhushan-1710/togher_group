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
import { ArrowUpRight, ShieldCheck, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';

const liveRoleHighlights = [
  {
    ref: 'REQ-TG-2025-01',
    role: 'Senior Quantity Surveyor',
    market: 'Dublin 2, Ireland',
    contract: 'Permanent',
    discipline: 'Commercial & Residential High-Rise',
    verified: 'Verified Active Requisition',
  },
  {
    ref: 'REQ-TG-2025-02',
    role: 'M&E Services Coordinator',
    market: 'Central London, UK',
    contract: 'Fixed-Term (18 Mos)',
    discipline: 'Data Centre & Commercial Shell & Core',
    verified: 'Verified Active Requisition',
  },
  {
    ref: 'REQ-TG-2025-03',
    role: 'Site Project Manager (Civil / Substructure)',
    market: 'West Dublin / Kildare',
    contract: 'Permanent',
    discipline: 'Industrial & Manufacturing Campus',
    verified: 'Verified Active Requisition',
  },
];

export default function CandidatesClient() {
  const wordmarkRef = useScrollSkew();

  return (
    <div className="w-full bg-white text-[#1B1B18] overflow-x-hidden relative min-h-screen pb-16">
      <GrainOverlay />

      {/* ═══════════════════════════════════════════════════════
          COVER — Specification Header Block
      ═══════════════════════════════════════════════════════ */}
      <section className="pt-8 sm:pt-10 pb-8 px-4 sm:px-6 md:px-10 relative border-b border-[#1B1B18]/8">
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
          <span className="text-[11px] font-semibold text-[#8A8E82] uppercase tracking-wider">
            SPECIFICATION REF: TG-2025 // SEC-05 // CANDIDATE DEPLOYMENT &amp; REGISTRY
          </span>
          <LiveOperationalSignal text="CANDIDATE DISPATCH: ACTIVE REGISTRATION OPEN" />
        </div>

        <div
          ref={wordmarkRef}
          className="transition-transform duration-100 ease-out will-change-transform"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1B1B18] font-[var(--font-display)] leading-[1.05] mb-4">
            For <span className="text-[#523BA8]">Candidates</span>.
          </h1>
        </div>

        <div className="mt-4 flex items-center gap-4 flex-wrap text-xs sm:text-sm font-semibold text-[#8A8E82]">
          <span className="inline-flex items-center gap-1.5 text-[#5C8200] bg-[#DEEBC9] px-3 py-1 rounded-full uppercase tracking-wider text-xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Direct Placement Custody
          </span>
          <span className="uppercase tracking-wider">
            Permanent &amp; Interim // Ireland · UK · Europe · US · Australia
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LOG 01 — Candidate Practice + Exhibit CND-01
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 01" label="The Candidate Commitment" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1B1B18] tracking-tight leading-tight mb-6">
              Projects worth your <span className="text-[#523BA8]">signature</span>.
            </h2>
            
            <div className="border-l-2 border-[#1B1B18] pl-5 sm:pl-6 space-y-4 text-sm sm:text-base text-[#1B1B18]/75 leading-relaxed">
              <p>
                If you are a Senior QS, Project Manager, M&amp;E Coordinator, or skilled tradesman, you
                know the frustration of recruiters who don't know the difference between pre-cast and
                in-situ, or who submit your details blindly without your consent.
              </p>
              <p>
                At Togher Group, we operate with strict confidentiality, explicit candidate consent, and
                peer-level technical dialogue. We represent real, funded openings on Tier-1 and Tier-2 projects.
              </p>
              <div className="pt-2">
                <Link
                  href="/vacancies"
                  className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-5 shadow-xs"
                >
                  <span>Explore all live roles in the Vacancies Ledger</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
                </Link>
              </div>
            </div>
          </div>

          {/* EXHIBIT CND-01 */}
          <div className="lg:col-span-5">
            <ExhibitFrame
              src="/images/exhibit-formwork-shuttering.jpg"
              alt="Engineered modular formwork system for cast vault concrete construction"
              figureId="EXHIBIT CND-01"
              caption="ENGINEERED MODULAR FORMWORK SYSTEM · LOGISTICS ARCHITECTURE"
              refCode="COMMONS / STALFORM"
              license="CC BY-SA 3.0"
              aspectRatio="16/10"
              priority
            />
            <div className="mt-3 px-2 flex justify-between text-[11px] text-[#8A8E82] font-medium tracking-wide">
              <span>Temporary Works Specification</span>
              <span>Site Assembly Execution</span>
            </div>
          </div>
        </div>
      </section>

      <LogDivider />

      {/* ═══════════════════════════════════════════════════════
          LOG 02 — Live Roles Snapshot
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
          <EntryLabel n="LOG 02" label="Active Live Role Signal Snapshot" />
          <Link
            href="/vacancies"
            className="btn-pill btn-pill-white text-xs py-1.5 px-4 shadow-2xs"
          >
            <span>View Full Vacancies Spec Sheet (6 Roles)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {liveRoleHighlights.map((role) => (
            <div
              key={role.ref}
              className="p-6 rounded-[22px] bg-[#FAFBF7] border border-[#1B1B18]/8 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-bold text-[#8A8E82] uppercase tracking-wider">
                    {role.ref}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#DEEBC9] text-[#2F4500] text-[10px] font-bold uppercase">
                    Live Req
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1B1B18] font-[var(--font-display)] mb-3 leading-snug">
                  {role.role}
                </h3>

                <div className="space-y-1.5 text-xs text-[#8A8E82]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#5C8200]" />
                    <span>{role.market}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#523BA8]" />
                    <span>{role.contract} · {role.discipline}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1B1B18]/6">
                <Link
                  href={`/contact?role=${encodeURIComponent(role.role)}&ref=${role.ref}`}
                  className="btn-pill btn-pill-dark text-xs py-2 px-4 w-full justify-between"
                >
                  <span>Apply for Requisition</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Candidate Registration Callout Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-[28px] bg-[#1B1B18] text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
          <div>
            <div className="text-[11px] font-bold text-[#C7E36B] uppercase tracking-wider mb-2">
              Direct Candidate Registry
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-[var(--font-display)]">
              Looking for your next appointment or project deployment?
            </h3>
          </div>
          <Link
            href="/contact?type=candidate"
            className="btn-pill bg-[#C7E36B] text-[#1B1B18] hover:bg-[#b8dc4c] font-bold text-sm py-3 px-6 shadow-md shrink-0"
          >
            <span>Register With Togher Group</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <LogDivider />

      {/* ═══════════════════════════════════════════════════════
          LOG 03 — Global Deployment Pathways
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 03" label="Global Deployment Pathways & Jurisdictional Hubs" />

        <div className="mt-4">
          <ScrollableDossierStrip
            label="DEPLOYMENT HUBS"
            tag="JURISDICTIONAL SPECIFICATION // DRAG OR SCROLL ↔"
          >
            {/* Pathway 01 */}
            <DossierCard
              refCode="HUB // 01"
              statusBadge="IRELAND HQ"
              imageSrc="/images/exhibit-cantilever-concrete.jpg"
              imageAlt="Cantilevered concrete structure"
              title="DUBLIN & IRELAND REGIONAL"
              subtitle="COMMERCIAL · INDUSTRIAL · PHARMA"
              summary="Direct placement with Ireland's top Tier-1 and Tier-2 main contractors on high-profile schemes across Dublin Docklands, Kildare, Cork, and Galway."
              specs={[
                { label: 'KEY DISCIPLINES', value: 'Senior QS, Project Managers, BCAR Leads' },
                { label: 'CERTIFICATIONS', value: 'Safe Pass, SCSI / RICS, CIF Member' },
                { label: 'CONTRACT TYPES', value: 'Permanent & Executive Search' },
              ]}
              linkHref="/vacancies"
              linkText="View Irish Opportunities ↗"
            />

            {/* Pathway 02 */}
            <DossierCard
              refCode="HUB // 02"
              statusBadge="UK MAIN CONTRACTING"
              imageSrc="/images/exhibit-structural-steel.jpg"
              imageAlt="Structural steel roof frame"
              title="LONDON & UK URBAN METROPOLIS"
              subtitle="SHELL & CORE · FIT-OUT · INFRASTRUCTURE"
              summary="Senior management and site coordinator appointments across prime London developments, Birmingham, Manchester, and major transit schemes."
              specs={[
                { label: 'KEY DISCIPLINES', value: 'Commercial Managers, M&E BIM Leads' },
                { label: 'CERTIFICATIONS', value: 'CSCS Black / Gold Card, SMSTS' },
                { label: 'CONTRACT TYPES', value: 'PAYE & CIS Fixed Contracts' },
              ]}
              linkHref="/vacancies"
              linkText="Inspect UK Openings ↗"
            />

            {/* Pathway 03 */}
            <DossierCard
              refCode="HUB // 03"
              statusBadge="EUROPEAN ROTATIONS"
              isLive={true}
              imageSrc="/images/exhibit-tower-crane.jpg"
              imageAlt="Heavy construction crane against sky"
              title="EUROPEAN DATA CENTRES & ADVANCED TECH"
              subtitle="FRANKFURT · AMSTERDAM · STOCKHOLM"
              summary="High-earning European project rotations with Irish contractors delivering major cloud infrastructure and pharmaceutical campuses."
              specs={[
                { label: 'ROTATION SCHEDULE', value: '3 Weeks On / 1 Week Home' },
                { label: 'LOGISTICS', value: 'Flights, Living Allowance, Local Payroll' },
                { label: 'DISCIPLINES', value: 'Package Managers, Trade Gang Foremen' },
              ]}
              linkHref="/contact?type=candidate"
              linkText="Register for European Rotations ↗"
            />

            {/* Pathway 04 */}
            <DossierCard
              refCode="HUB // 04"
              statusBadge="TRANSATLANTIC / PACIFIC"
              imageSrc="/images/exhibit-steel-frame.jpg"
              imageAlt="Steel frame structure under construction"
              title="AUSTRALIA & USA TRANSIT MEGA-PROJECTS"
              subtitle="SYDNEY (NSW) · NEW YORK METRO"
              summary="Support for Irish engineering professionals and master tradesmen seeking international career progression on multi-billion dollar transit programmes."
              specs={[
                { label: 'KEY SECTORS', value: 'Metro Rail, Tunnels, Deep Civil Works' },
                { label: 'VISA SUPPORT', value: 'TSS 482 / E-3 Sponsorship Routes' },
                { label: 'TENURE', value: '18–36 Month Major Project Terms' },
              ]}
              linkHref="/contact?type=candidate"
              linkText="Enquire International Deployment ↗"
            />
          </ScrollableDossierStrip>
        </div>
      </section>
    </div>
  );
}
