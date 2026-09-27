import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GrainOverlay,
  EntryLabel,
  LogDivider,
  ExhibitFrame,
  LiveOperationalSignal,
} from '@/components/ledger/LedgerPrimitives';
import { ArrowUpRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Management Professionals Recruitment | Togher Group',
  description:
    'Specialist permanent and temporary recruitment for construction and engineering management professionals across Ireland, the UK, Europe, the USA and Australia.',
};

const sectors = [
  'Residential Construction & High-Rise',
  'Commercial Shell & Core',
  'Commercial Refurbishment & CAT-A/B',
  'Major Retail & Aviation Fit Out',
  'Heavy Civil & Rail Infrastructure',
  'Hyperscale Data Centres',
  'Pharmaceutical & Cleanroom Plants',
  'Renewable Energy & Substation Engineering',
];

const roles = [
  { title: 'Project Directors', desc: 'Overarching operational accountability for €50M+ capital construction programmes.' },
  { title: 'Senior Project Managers', desc: 'Package execution, client handover, sectional completion delivery.' },
  { title: 'Senior Quantity Surveyors', desc: 'Subcontract procurement, monthly valuations, contract variations, final account settlement.' },
  { title: 'Site Managers & Agents', desc: 'Direct site supervision, subcontractor coordination, safety inspections.' },
  { title: 'M&E Services Coordinators', desc: 'Mechanical, electrical, public health and BMS integration with 3D BIM/Revit clash detection.' },
  { title: 'Commercial Managers', desc: 'Risk mitigation, dispute minimization, procurement compliance.' },
  { title: 'Estimators & Planners', desc: 'Analytical cost estimating from first principles; Primavera P6 critical-path programming.' },
  { title: 'Environmental, Health & Safety Managers', desc: 'Statutory HSA / HSE compliance, zero-harm policies, site audits.' },
];

export default function ManagementProfessionalsPage() {
  return (
    <div className="w-full bg-white text-[#1B1B18] overflow-x-hidden relative min-h-screen pb-16">
      <GrainOverlay />

      <section className="pt-6 sm:pt-10 pb-6 sm:pb-8 px-4 sm:px-6 md:px-10 relative border-b border-[#1B1B18]/8">
        <div className="flex justify-between items-center flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#8A8E82] uppercase tracking-wider">
            SPECIFICATION REF: TG-2025 // SEC-03-A // MANAGEMENT PROFESSIONALS
          </span>
          <LiveOperationalSignal text="DISCIPLINE A · ACTIVE RECRUITMENT" />
        </div>

        <h1 className="text-[clamp(2.2rem,7.5vw,5rem)] font-bold tracking-tight text-[#1B1B18] font-[var(--font-display)] leading-[1.05] mb-3 sm:mb-4">
          Management <span className="text-[#5C8200]">Professionals</span>.
        </h1>

        <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4 flex-wrap text-xs sm:text-sm font-semibold text-[#8A8E82]">
          <span className="inline-flex items-center gap-1.5 text-[#5C8200] bg-[#DEEBC9] px-3 py-1 rounded-full uppercase tracking-wider text-xs">
            <Award className="w-3.5 h-3.5" />
            Permanent Appointments &amp; Interim Leads
          </span>
          <span className="uppercase tracking-wider">
            Ireland · UK · Europe · USA · Australia
          </span>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 01" label="Discipline Scope & Verified Roles" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1B1B18] tracking-tight leading-tight mb-6">
              Leadership where delays are <span className="text-[#5C8200]">unacceptable</span>.
            </h2>
            <div className="border-l-2 border-[#1B1B18] pl-5 sm:pl-6 space-y-4 text-sm sm:text-base text-[#1B1B18]/75 leading-relaxed">
              <p>
                In construction and engineering, management isn't administrative overhead — it's the
                difference between a project making margin or accumulating catastrophic delay penalties.
                Togher Group connects contractors with leaders who have proven track records on tier-one
                developments.
              </p>
              <div className="pt-2">
                <Link
                  href="/vacancies"
                  className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-5 shadow-xs"
                >
                  <span>View active live management vacancies</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ExhibitFrame
              src="/images/exhibit-steel-frame.jpg"
              alt="High-altitude steel frame assembly with crane hoist"
              figureId="EXHIBIT MGT-01"
              caption="STRUCTURAL STEEL FRAMEWORK · SITE SUPERVISION"
              refCode="COMMONS / WIKIDEAS1"
              license="CC0 PUBLIC DOMAIN"
              aspectRatio="16/10"
            />
          </div>
        </div>

        {/* Roles Grid */}
        <div className="mt-12">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#8A8E82] mb-6">
            Core Management Discipline Registry:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map((r, i) => (
              <div
                key={r.title}
                className="p-5 rounded-2xl bg-[#FAFBF7] border border-[#1B1B18]/8 flex flex-col justify-between hover:shadow-sm transition-shadow"
              >
                <div>
                  <div className="text-[10px] font-bold text-[#5C8200] uppercase tracking-wider mb-2">
                    SPEC // 0{i + 1}
                  </div>
                  <h4 className="text-base font-bold text-[#1B1B18] mb-2 font-[var(--font-display)]">
                    {r.title}
                  </h4>
                  <p className="text-xs text-[#8A8E82] leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors Pills */}
        <div className="mt-12">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#8A8E82] mb-4">
            Verified Sector Expertise:
          </h3>
          <div className="flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-xs font-semibold bg-[#DEEBC9] text-[#2F4500] border border-[#C7E36B]/40"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-[28px] bg-[#1B1B18] text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
          <div>
            <div className="text-[11px] font-bold text-[#C7E36B] uppercase tracking-wider mb-2">
              Engagement Protocol
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-[var(--font-display)]">
              Require management professionals for your site?
            </h3>
          </div>
          <Link
            href="/contact?type=management"
            className="btn-pill bg-[#C7E36B] text-[#1B1B18] hover:bg-[#b8dc4c] font-bold text-sm py-3 px-6 shadow-md shrink-0"
          >
            <span>Submit Requisition Brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
