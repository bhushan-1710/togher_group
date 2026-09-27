'use client';

import React, { useState } from 'react';
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
import { ArrowUpRight, ChevronDown, ChevronUp, MapPin, Briefcase, DollarSign, CheckCircle2 } from 'lucide-react';

interface Vacancy {
  ref: string;
  title: string;
  location: string;
  type: string;
  sector: string;
  remuneration: string;
  postedDate: string;
  summary: string;
  requirements: string[];
}

const vacanciesData: Vacancy[] = [
  {
    ref: 'REQ-TG-2025-01',
    title: 'Senior Quantity Surveyor',
    location: 'Dublin 2 / Docklands, Ireland',
    type: 'Permanent',
    sector: 'Commercial High-Rise & Mixed-Use (€45M+)',
    remuneration: '€85,000 – €100,000 + Package',
    postedDate: 'LOGGED: 2025-09-24',
    summary:
      'Lead commercial management for a major Tier-1 city-centre commercial build. Responsible for procurement of key structural & M&E subcontracts, monthly cost value reconciliations (CVRs), client interim valuations, and final account agreement.',
    requirements: [
      'BSc in Quantity Surveying or Construction Economics (SCSI / RICS accredited)',
      'Minimum 6+ years post-graduate contractor experience on commercial RC/Steel builds',
      'Proven expertise administering RIAI / Irish Public Works / bespoke forms of contract',
      'Valid Safe Pass and full right to work in the Republic of Ireland',
    ],
  },
  {
    ref: 'REQ-TG-2025-02',
    title: 'M&E Services Coordinator',
    location: 'Central London (City), UK',
    type: 'Fixed-Term Contract (18 Months)',
    sector: 'Hyperscale Data Centre & Commercial Shell & Core',
    remuneration: '£450 – £520 / day (CIS / PAYE)',
    postedDate: 'LOGGED: 2025-09-23',
    summary:
      'Manage multi-disciplinary MEP services coordination through 3D BIM clash detection, technical design workshops, and site installation handover. Liaison between architectural lead, structural engineers, and specialist M&E subcontractors.',
    requirements: [
      'Degree or HND in Building Services / Electrical / Mechanical Engineering',
      '3+ years experience coordinating complex MEP packages on major projects',
      'Proficiency with Navisworks, Revit 3D BIM, and clash resolution workflows',
      'CSCS Professionally Qualified Person (PQP) or Black Management Card',
    ],
  },
  {
    ref: 'REQ-TG-2025-03',
    title: 'Site Project Manager (Substructure & Civils)',
    location: 'West Dublin / Kildare, Ireland',
    type: 'Permanent',
    sector: 'High-Tech Industrial & Advanced Manufacturing (€60M)',
    remuneration: '€90,000 – €105,000 + Executive Car',
    postedDate: 'LOGGED: 2025-09-22',
    summary:
      'Total site operational custody for a fast-track manufacturing facility. Overseeing heavy civil engineering, secant piling walls, deep concrete basements, and structural steel envelope.',
    requirements: [
      'Degree in Civil Engineering, Construction Management or equivalent trades background',
      '8+ years site delivery experience with leading Irish or UK main contractors',
      'Direct experience managing high-density concrete pours, jumpforms, and structural steel',
      'Current SMSTS / CIF Site Management Safety certification',
    ],
  },
  {
    ref: 'REQ-TG-2025-04',
    title: 'Senior Estimator (Main Contracting)',
    location: 'Manchester / North West, UK',
    type: 'Permanent',
    sector: 'Civil Infrastructure & Commercial Frames',
    remuneration: '£75,000 – £88,000 + Car Allowance',
    postedDate: 'LOGGED: 2025-09-20',
    summary:
      'Produce first-principle analytical tenders from initial enquiry to final settlement with board directors. Analyse subcontractor quotations, evaluate risk registers, and identify value-engineering options.',
    requirements: [
      'Strong analytical estimating background within tier-1 or tier-2 main contracting',
      'Working knowledge of Conquest, Causeway, or Candy estimating platforms',
      'Thorough familiarity with NEC4 Option A/C and JCT Design & Build forms',
      'Demonstrated tender conversion track record on schemes up to £40M',
    ],
  },
  {
    ref: 'REQ-TG-2025-05',
    title: 'RC Frame Formwork Supervisors & Steel Fixing Gangs',
    location: 'Sydney (NSW), Australia / Europe Relocation Option',
    type: 'Project Duration Contract (12–24 Months)',
    sector: 'Major Transport Hub & Station Infrastructure',
    remuneration: 'Competitive International Rates + Mobilisation',
    postedDate: 'LOGGED: 2025-09-18',
    summary:
      'Deploying experienced concrete structural gangs for major transport interchange works. Heavy formwork assembly (climbing systems, jumpform cores), high-density rebar cage installation, and fair-faced architectural finishes.',
    requirements: [
      'Demonstrated experience on complex multi-storey RC frame or civil infrastructure schemes',
      'Relevant national trade certifications (White Card for Australia / Safe Pass / CSCS)',
      'Proven safety track record with zero lost-time incidents',
      'Willingness to mobilise under international contractor rotation protocols',
    ],
  },
  {
    ref: 'REQ-TG-2025-06',
    title: 'Contracts Manager (Fit-Out & Refurbishment)',
    location: 'London & South East, UK',
    type: 'Permanent',
    sector: 'Commercial CAT-A / CAT-B Fast-Track Fit Out',
    remuneration: '£80,000 – £92,000 + Package',
    postedDate: 'LOGGED: 2025-09-16',
    summary:
      'Full operational responsibility for 3–4 concurrent high-spec corporate interior fit-out packages. Direct client liaison, commercial performance tracking, supply chain management, and programmatic delivery.',
    requirements: [
      'Proven background managing fast-track prime commercial fit-out projects',
      'SMSTS, First Aid at Work, and Black CSCS Manager Card',
      'Track record maintaining programme acceleration without compromising snag-free handover',
      'Strong commercial acumen with joint accountability alongside commercial teams',
    ],
  },
];

export default function VacanciesClient() {
  const wordmarkRef = useScrollSkew();
  const [filter, setFilter] = useState<'all' | 'permanent' | 'contract'>('all');
  const [expandedRef, setExpandedRef] = useState<string | null>(vacanciesData[0].ref);

  const filtered = vacanciesData.filter((v) => {
    if (filter === 'permanent') return v.type.toLowerCase().includes('permanent');
    if (filter === 'contract') return v.type.toLowerCase().includes('contract');
    return true;
  });

  return (
    <div className="w-full bg-white text-[#1B1B18] overflow-x-hidden relative min-h-screen pb-16">
      <GrainOverlay />

      {/* ═══════════════════════════════════════════════════════
          COVER — Specification Header Block
      ═══════════════════════════════════════════════════════ */}
      <section className="pt-8 sm:pt-10 pb-8 px-4 sm:px-6 md:px-10 relative border-b border-[#1B1B18]/8">
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
          <span className="text-[11px] font-semibold text-[#8A8E82] uppercase tracking-wider">
            SPECIFICATION REF: TG-2025 // SEC-06 // ACTIVE SITE REQUISITIONS
          </span>
          <LiveOperationalSignal text="STATUS: 6 LIVE VERIFIED REQUISITIONS" />
        </div>

        <div
          ref={wordmarkRef}
          className="transition-transform duration-100 ease-out will-change-transform"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1B1B18] font-[var(--font-display)] leading-[1.05] mb-4">
            Live <span className="text-[#5C8200]">Vacancies</span>.
          </h1>
        </div>

        <div className="mt-4 flex items-center gap-4 flex-wrap text-xs sm:text-sm font-semibold text-[#8A8E82]">
          <span className="inline-flex items-center gap-1.5 text-[#5C8200] bg-[#DEEBC9] px-3 py-1 rounded-full uppercase tracking-wider text-xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified Contractor Postings
          </span>
          <span className="uppercase tracking-wider">
            Dublin · London · Manchester · Sydney
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LOG 01 — Priority Requisitions Reel
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 01" label="Immediate Site Mobilisations & Priority Roles" />

        <div className="mt-4">
          <ScrollableDossierStrip
            label="PRIORITY REQUISITIONS STREAM"
            tag="6 LIVE OPENINGS // DRAG OR SCROLL ↔"
          >
            {/* Vacancy Card 01 */}
            <DossierCard
              refCode="REQ-TG-2025-01"
              statusBadge="LIVE REQ"
              isLive={true}
              imageSrc="/images/exhibit-cantilever-concrete.jpg"
              imageAlt="Commercial cantilever concrete structure"
              title="SENIOR QUANTITY SURVEYOR"
              subtitle="DUBLIN DOCKLANDS // €45M HIGH-RISE"
              summary="Lead commercial management for Tier-1 city-centre commercial build. Managing procurement of RC frame, structural steel, and envelope subcontracts."
              specs={[
                { label: 'REMUNERATION', value: '€85K – €100K + Pkg' },
                { label: 'TERMS', value: 'Permanent Appointment' },
                { label: 'CRITERIA', value: 'BSc Hons + SCSI / RICS (5+ Yrs)' },
              ]}
              linkHref="/contact?role=Senior%20Quantity%20Surveyor&ref=REQ-TG-2025-01"
              linkText="Apply for Requisition ↗"
            />

            {/* Vacancy Card 02 */}
            <DossierCard
              refCode="REQ-TG-2025-02"
              statusBadge="LIVE REQ"
              isLive={true}
              imageSrc="/images/exhibit-engineering-cad.jpg"
              imageAlt="AutoCAD engineering drawing"
              title="M&E SERVICES COORDINATOR"
              subtitle="CENTRAL LONDON // HYPERSCALE DATA CENTRE"
              summary="Direct multi-disciplinary MEP services coordination, 3D BIM clash detection in Navisworks/Revit, and site installation handover."
              specs={[
                { label: 'REMUNERATION', value: '£450 – £520 / Day (CIS)' },
                { label: 'TERMS', value: 'Fixed-Term Contract (18 Mos)' },
                { label: 'CRITERIA', value: 'BIM 360, CSCS Black / PQP Card' },
              ]}
              linkHref="/contact?role=M%26E%20Services%20Coordinator&ref=REQ-TG-2025-02"
              linkText="Apply for Requisition ↗"
            />

            {/* Vacancy Card 03 */}
            <DossierCard
              refCode="REQ-TG-2025-03"
              statusBadge="LIVE REQ"
              isLive={true}
              imageSrc="/images/exhibit-steel-frame.jpg"
              imageAlt="Structural steel frame erection"
              title="SITE PROJECT MANAGER"
              subtitle="WEST DUBLIN // €60M INDUSTRIAL CAMPUS"
              summary="Full site custody for high-tech manufacturing development. Overseeing deep piling, reinforced concrete basement structures, and structural envelope."
              specs={[
                { label: 'REMUNERATION', value: '€90K – €105K + Pkg' },
                { label: 'TERMS', value: 'Permanent Appointment' },
                { label: 'CRITERIA', value: 'Degree + SMSTS (8+ Yrs)' },
              ]}
              linkHref="/contact?role=Site%20Project%20Manager&ref=REQ-TG-2025-03"
              linkText="Apply for Requisition ↗"
            />

            {/* Vacancy Card 04 */}
            <DossierCard
              refCode="REQ-TG-2025-04"
              statusBadge="LIVE REQ"
              isLive={true}
              imageSrc="/images/exhibit-tower-crane.jpg"
              imageAlt="Heavy construction crane"
              title="SENIOR ESTIMATOR (MAIN CONTRACTING)"
              subtitle="MANCHESTER // £40M CIVIL SCHEMES"
              summary="Analytical first-principle cost estimating from enquiry to board settlement. Analyzing subcontractor bid packages and risk registers."
              specs={[
                { label: 'REMUNERATION', value: '£75K – £88K + Car Allowance' },
                { label: 'TERMS', value: 'Permanent Appointment' },
                { label: 'CRITERIA', value: 'NEC4 & JCT D&B (5+ Yrs)' },
              ]}
              linkHref="/contact?role=Senior%20Estimator&ref=REQ-TG-2025-04"
              linkText="Apply for Requisition ↗"
            />
          </ScrollableDossierStrip>
        </div>
      </section>

      <LogDivider />

      {/* ═══════════════════════════════════════════════════════
          LOG 02 — Filterable Interactive Schedule
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
          <EntryLabel n="LOG 02" label="Live Requisition Schedule" />

          {/* Filter Pills (Section 5.1: active lime-green) */}
          <div className="flex items-center gap-2 bg-[#F6F7F2] p-1.5 rounded-full border border-[#1B1B18]/10">
            {(['all', 'permanent', 'contract'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  filter === t
                    ? 'bg-[#C7E36B] text-[#1B1B18] shadow-xs'
                    : 'text-[#1B1B18]/70 hover:text-[#1B1B18] hover:bg-white/60'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Vacancies List */}
        <div className="space-y-4">
          {filtered.map((item) => {
            const isExpanded = expandedRef === item.ref;
            return (
              <div
                key={item.ref}
                className={`rounded-[22px] border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#FAFBF7] border-[#C7E36B] shadow-md'
                    : 'bg-white border-[#1B1B18]/10 hover:border-[#1B1B18]/30 hover:shadow-xs'
                }`}
              >
                <div
                  onClick={() => setExpandedRef(isExpanded ? null : item.ref)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] font-bold text-[#8A8E82] uppercase tracking-wider">
                        {item.ref}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#DEEBC9] text-[#2F4500] text-[10px] font-bold uppercase">
                        {item.type}
                      </span>
                      <span className="text-[11px] text-[#8A8E82]">
                        {item.postedDate}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1B1B18] font-[var(--font-display)]">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-[#8A8E82] flex-wrap">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#5C8200]" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-[#1B1B18]">
                        <Briefcase className="w-3.5 h-3.5 text-[#523BA8]" />
                        {item.sector}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-[#1B1B18]/6">
                    <span className="text-sm font-extrabold text-[#1B1B18]">
                      {item.remuneration}
                    </span>
                    <button
                      type="button"
                      aria-label={isExpanded ? 'Collapse role' : 'Expand role'}
                      className="w-8 h-8 rounded-full bg-[#F6F7F2] flex items-center justify-center text-[#1B1B18] shrink-0"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#1B1B18]/8 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-sm text-[#1B1B18]/80 leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    <div className="p-4 rounded-xl bg-white border border-[#1B1B18]/8 mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B1B18] mb-2.5">
                        Mandatory Candidate Requirements:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#1B1B18]/80">
                        {item.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#5C8200] shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/contact?role=${encodeURIComponent(item.title)}&ref=${item.ref}`}
                        className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-6 shadow-sm"
                      >
                        <span>Apply for Requisition {item.ref}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote on verified data */}
        <div className="mt-8 p-4 rounded-2xl bg-[#DEEBC9]/50 border border-[#C7E36B]/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs">
          <span className="text-[#2F4500] font-medium leading-relaxed">
            * All vacancies listed represent live funded contractor requisitions handled through Togher
            Group Dublin &amp; London dispatch desks.
          </span>
          <span className="font-bold text-[#2F4500] uppercase tracking-wider shrink-0 bg-white px-2.5 py-1 rounded-full shadow-2xs">
            Data Audit: Passed
          </span>
        </div>
      </section>

      <LogDivider />

      {/* ═══════════════════════════════════════════════════════
          LOG 03 — Technical Matching Baseline
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 03" label="Requisition Technical Baseline" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6">
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1B18] tracking-tight leading-tight mb-6">
              Technical matching driven by <span className="text-[#5C8200]">drawings</span>, not keywords.
            </h3>
            
            <div className="border-l-2 border-[#1B1B18] pl-5 sm:pl-6 space-y-4 text-sm sm:text-base text-[#1B1B18]/75 leading-relaxed">
              <p>
                We inspect structural drawings, connection details, and sectional milestones before
                qualifying any candidate. If an engineering coordinator or QS cannot interpret the
                reinforcement cross-section, they are not submitted for the job.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-5 shadow-xs"
                >
                  <span>Register unlisted vacancy with Togher dispatch</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ExhibitFrame
              src="/images/exhibit-engineering-cad.jpg"
              alt="AutoCAD technical structural drawing showing reinforced concrete column footing detail"
              figureId="EXHIBIT VAC-01"
              caption="AUTOCAD STRUCTURAL CROSS-SECTION · DETAIL SCHEDULE & REBAR SPECIFICATION"
              refCode="COMMONS / MTPANCHAL"
              license="CC BY-SA 4.0"
              aspectRatio="4/3"
            />
            <div className="mt-3 px-2 flex justify-between text-[11px] text-[#8A8E82] font-medium tracking-wide">
              <span>Structural Footing Detail (Scale 1:50)</span>
              <span>Verified CAD Archive</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
