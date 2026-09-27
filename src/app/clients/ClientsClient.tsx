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
import { ArrowUpRight, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

const protocols = [
  {
    step: 'PHASE // 01',
    title: 'Precision Requisition Intake',
    desc: 'Direct consultation with contractor directors or project managers. We analyse site programme drawings, milestone dates, package values, and exact ticket/CSCS requirements.',
  },
  {
    step: 'PHASE // 02',
    title: 'Technical Verification & Screening',
    desc: 'Candidate credentials, ticket validity (Safe Pass, CPCS, CSCS), past contractor references, and Right to Work / EU A1 compliance are verified before any CV or operative profile is sent.',
  },
  {
    step: 'PHASE // 03',
    title: 'Rapid Mobilisation & Travel Custody',
    desc: 'Contractors cannot afford delayed site inductions. We coordinate travel, accommodation, tools, and mandatory PPE for prompt arrival on site.',
  },
  {
    step: 'PHASE // 04',
    title: 'Continuous Account & Site Stewardship',
    desc: 'We conduct regular site visits, manage rotational shift schedules, handle tax/payroll compliance, and ensure zero disruption through package completion.',
  },
];

const auditStandards = [
  {
    code: 'SAFE-01',
    title: 'Statutory Safety Tickets',
    body: 'Safe Pass (Ireland), CSCS / CPCS (UK), and equivalent national safety tickets verified directly with issuing registers prior to site dispatch.',
  },
  {
    code: 'COMP-02',
    title: 'EU Posted Workers Directive',
    body: 'A1 certificates, host nation notifications, local minimum wage compliance, and tax withholding managed seamlessly for all cross-border teams.',
  },
  {
    code: 'TECH-03',
    title: 'Technical Competency Verification',
    body: 'Past project references verified with previous main contractor package managers. Drawings interpretation and trade capability pre-tested.',
  },
  {
    code: 'INS-04',
    title: 'Liability & Insurance Custody',
    body: 'Comprehensive employer and public liability coverage aligned with Tier-1 main contractor subcontracting framework standards.',
  },
];

export default function ClientsClient() {
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
            SPECIFICATION REF: TG-2025 // SEC-04 // WORKFORCE DEPLOYMENT PROTOCOL
          </span>
          <LiveOperationalSignal text="CLIENT REQUISITION DESK ACTIVE" />
        </div>

        <div
          ref={wordmarkRef}
          className="transition-transform duration-100 ease-out will-change-transform"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1B1B18] font-[var(--font-display)] leading-[1.05] mb-4">
            For <span className="text-[#5C8200]">Clients</span>.
          </h1>
        </div>

        <div className="mt-4 flex items-center gap-4 flex-wrap text-xs sm:text-sm font-semibold text-[#8A8E82]">
          <span className="inline-flex items-center gap-1.5 text-[#5C8200] bg-[#DEEBC9] px-3 py-1 rounded-full uppercase tracking-wider text-xs">
            <Building2 className="w-3.5 h-3.5" />
            Tier-1 Contractor Solutions
          </span>
          <span className="uppercase tracking-wider">
            Dublin · London · Amsterdam · Sydney
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LOG 01 — Deployment Protocol + Exhibit CLI-01
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 01" label="The Contractor Requisition Protocol" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1B1B18] tracking-tight leading-tight mb-6">
              Zero friction <span className="text-[#5C8200]">workforce deployment</span>.
            </h2>
            
            <div className="border-l-2 border-[#1B1B18] pl-5 sm:pl-6 space-y-4 text-sm sm:text-base text-[#1B1B18]/75 leading-relaxed">
              <p>
                Whether you need a Senior QS to step in on month-end commercial valuations or two full
                shuttering gangs for a high-rise core pour starting Monday, Togher Group eliminates
                uncertainty. We match contractor specifications with proven, vetted construction professionals.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact?type=client"
                  className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-5 shadow-xs"
                >
                  <span>Register a live contractor requirement</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
                </Link>
              </div>
            </div>
          </div>

          {/* EXHIBIT CLI-01 */}
          <div className="lg:col-span-5">
            <ExhibitFrame
              src="/images/exhibit-rebar-detail.jpg"
              alt="High-contrast close-up of ribbed rebar steel rods showing structural texture"
              figureId="EXHIBIT CLI-01"
              caption="HIGH-TENSILE RIBBED REBAR MATRIX · MATERIAL INTEGRITY"
              refCode="COMMONS / W.CARTER"
              license="CC BY-SA 4.0"
              aspectRatio="16/10"
              priority
            />
            <div className="mt-3 px-2 flex justify-between text-[11px] text-[#8A8E82] font-medium tracking-wide">
              <span>Material Grade: 500B High-Yield Rebar</span>
              <span>Site Compliance Checked</span>
            </div>
          </div>
        </div>

        {/* 4 Protocol Steps (Clean Rounded Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {protocols.map((p) => (
            <div
              key={p.step}
              className="p-6 rounded-[22px] bg-[#FAFBF7] border border-[#1B1B18]/8 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="text-[11px] font-bold text-[#5C8200] uppercase tracking-wider mb-3">
                  {p.step}
                </div>
                <h3 className="text-base font-bold text-[#1B1B18] mb-2 font-[var(--font-display)]">
                  {p.title}
                </h3>
                <p className="text-xs text-[#8A8E82] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LogDivider />

      {/* ═══════════════════════════════════════════════════════
          LOG 02 — Vetting & Statutory Compliance Ledger
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 02" label="Vetting & Statutory Compliance Ledger" />

        <div className="mt-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1B18] tracking-tight mb-8">
            Audited compliance before <span className="text-[#523BA8]">foot hits site</span>.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {auditStandards.map((item) => (
              <div
                key={item.code}
                className="p-6 rounded-[22px] bg-white border border-[#1B1B18]/10 hover:border-[#5C8200] transition-colors shadow-xs"
              >
                <div className="text-[11px] font-bold text-[#523BA8] uppercase tracking-wider mb-2">
                  AUDIT STANDARD // {item.code}
                </div>
                <h3 className="text-lg font-bold text-[#1B1B18] mb-2 font-[var(--font-display)]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8A8E82] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-[28px] bg-[#1B1B18] text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
          <div>
            <div className="text-[11px] font-bold text-[#C7E36B] uppercase tracking-wider mb-2">
              Direct Contractor Dispatch
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-[var(--font-display)]">
              Have an immediate workforce shortfall?
            </h3>
          </div>
          <Link
            href="/contact?type=client"
            className="btn-pill bg-[#C7E36B] text-[#1B1B18] hover:bg-[#b8dc4c] font-bold text-sm py-3 px-6 shadow-md shrink-0"
          >
            <span>Submit Requisition Requirements</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <LogDivider />

      {/* ═══════════════════════════════════════════════════════
          LOG 03 — Mobilisation Case Dossiers
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 03" label="Contractor Mobilisation Case Dossiers" />

        <div className="mt-4">
          <ScrollableDossierStrip
            label="SITE INTERVENTION STREAM"
            tag="VERIFIED CASE MANIFESTS // DRAG OR SCROLL ↔"
          >
            {/* Case 01 */}
            <DossierCard
              refCode="CASE // 01"
              statusBadge="48H RESCUE"
              isLive={true}
              imageSrc="/images/exhibit-engineering-cad.jpg"
              imageAlt="AutoCAD engineering drawing showing structural cross section"
              title="EMERGENCY M&E COORDINATION DISPATCH"
              subtitle="DUBLIN DOCKLANDS // COMMERCIAL TOWER"
              summary="Lead MEP coordinator exited site 4 days prior to basement slab pour. Togher deployed an accredited services engineer within 48h to resolve BIM clashes."
              specs={[
                { label: 'JURISDICTION', value: 'Dublin 2, Ireland' },
                { label: 'RESPONSE WINDOW', value: '48 Hours to Site Custody' },
                { label: 'OUTCOME', value: 'Critical Pour Completed On Schedule' },
              ]}
              linkHref="/contact?type=client"
              linkText="Brief Similar Emergency Requisition ↗"
            />

            {/* Case 02 */}
            <DossierCard
              refCode="CASE // 02"
              statusBadge="INTERNATIONAL ROTATION"
              imageSrc="/images/exhibit-tower-crane.jpg"
              imageAlt="Tower crane against sky over construction frame"
              title="35-OPERATIVE FORMWORK MOBILISATION"
              subtitle="FRANKFURT // HYPERSCALE DATA CAMPUS"
              summary="Irish Tier-1 main contractor secured a fast-track shell package in Europe. Togher mobilized 35 certified shuttering carpenters on structured project rotations."
              specs={[
                { label: 'JURISDICTION', value: 'Frankfurt, Germany' },
                { label: 'COMPLIANCE', value: 'Full Posted Worker & EU Tax Clearance' },
                { label: 'RETENTION', value: '94% Retention Through Handover' },
              ]}
              linkHref="/contact?type=client"
              linkText="Request Cross-Border Crew Briefing ↗"
            />

            {/* Case 03 */}
            <DossierCard
              refCode="CASE // 03"
              statusBadge="COMMERCIAL DISCIPLINE"
              imageSrc="/images/exhibit-structural-steel.jpg"
              imageAlt="Structural steel roof frame network"
              title="SENIOR COMMERCIAL INTERIM LEAD"
              subtitle="CENTRAL LONDON // COMMERCIAL SHELL & CORE"
              summary="Senior Quantity Surveyor brought in to take custody of delayed month-end valuations and resolve disputed subcontractor variations on €55M commercial scheme."
              specs={[
                { label: 'JURISDICTION', value: 'London, United Kingdom' },
                { label: 'CREDENTIALS', value: 'BSc Hons + SCSI / RICS Accredited' },
                { label: 'DURATION', value: '8 Months Interim Appointment' },
              ]}
              linkHref="/contact?type=client"
              linkText="Request Commercial Specialist ↗"
            />

            {/* Case 04 */}
            <DossierCard
              refCode="CASE // 04"
              statusBadge="SUBSTRUCTURE"
              imageSrc="/images/exhibit-rebar-cage.jpg"
              imageAlt="Circular rebar foundation pile cage"
              title="DEEP PILING & GROUNDWORK SQUAD"
              subtitle="MANCHESTER // TRANSPORT INTERCHANGE"
              summary="Full foundation crew deployed under CPCS supervision for bored piling works, continuous secant wall installation, and tied steel cages."
              specs={[
                { label: 'JURISDICTION', value: 'North West, United Kingdom' },
                { label: 'SAFETY AUDIT', value: 'Zero Lost-Time Incidents (LTIs)' },
                { label: 'SUPERVISION', value: 'SMSTS & CPCS Blue Card Leads' },
              ]}
              linkHref="/contact?type=client"
              linkText="Inspect Foundation Capabilities ↗"
            />
          </ScrollableDossierStrip>
        </div>
      </section>
    </div>
  );
}
