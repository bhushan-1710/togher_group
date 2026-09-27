import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GrainOverlay,
  EntryLabel,
  LogDivider,
  ExhibitFrame,
  LiveOperationalSignal,
} from '@/components/ledger/LedgerPrimitives';
import { ArrowUpRight, HardHat, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trades & Labour Recruitment | Togher Group',
  description:
    'Skilled trades and labour workforce solutions for construction contractors across Ireland, the UK, Europe, the USA and Australia.',
};

const trades = [
  { trade: 'Formwork / Shuttering Carpenters', detail: 'PERI, Doka, MEVA, and traditional timber shuttering systems; wall, column, and suspended slab formwork.' },
  { trade: 'Steel Fixers & Benders', detail: 'High-density foundation mats, diaphragm walls, retaining cores, and post-tensioned cable installation to BS 8666.' },
  { trade: 'Concrete Finishers', detail: 'Power-floating, brush finishing, architectural fair-faced concrete repair, slab leveling.' },
  { trade: 'Groundworkers & Pipelayers', detail: 'Deep drainage, trench box excavation support, service ducting, concrete pipe installation, road construction.' },
  { trade: 'Tower & Crawler Crane Operators', detail: 'CPCS / CSCS blue-card certified lifting professionals with blind-lift and radio-banked credentials.' },
  { trade: 'Slingers, Signallers & Banksmen', detail: 'Rigorous tandem-lift protocol compliance, pre-use rigging inspection, heavy equipment direction.' },
  { trade: 'Dryliners & Ceiling Fixers', detail: 'Acoustic partitioning, fire-rated MF ceiling framing, high-spec commercial interior packages.' },
  { trade: 'General & Skilled Operatives', detail: 'Site logistics, perimeter security, material distribution, edge protection maintenance.' },
];

export default function TradesLabourPage() {
  return (
    <div className="w-full bg-white text-[#1B1B18] overflow-x-hidden relative min-h-screen pb-16">
      <GrainOverlay />

      <section className="pt-8 sm:pt-10 pb-8 px-4 sm:px-6 md:px-10 relative border-b border-[#1B1B18]/8">
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
          <span className="text-[11px] font-semibold text-[#8A8E82] uppercase tracking-wider">
            SPECIFICATION REF: TG-2025 // SEC-03-B // TRADES &amp; LABOUR
          </span>
          <LiveOperationalSignal text="DISCIPLINE B · SITE MOBILISATION" />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1B1B18] font-[var(--font-display)] leading-[1.05] mb-4">
          Trades &amp; <span className="text-[#523BA8]">Site Labour</span>.
        </h1>

        <div className="mt-4 flex items-center gap-4 flex-wrap text-xs sm:text-sm font-semibold text-[#8A8E82]">
          <span className="inline-flex items-center gap-1.5 text-[#523BA8] bg-[#E3DEFC] px-3 py-1 rounded-full uppercase tracking-wider text-xs">
            <HardHat className="w-3.5 h-3.5" />
            Verified Trades &amp; Gang Mobilisation
          </span>
          <span className="uppercase tracking-wider">
            SafePass · CPCS · CSCS · A1 Posted Worker Cleared
          </span>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 01" label="Operative Capabilities & Gang Deployments" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1B1B18] tracking-tight leading-tight mb-6">
              Skilled tradesmen with <span className="text-[#523BA8]">site-ready</span> cards.
            </h2>
            <div className="border-l-2 border-[#1B1B18] pl-5 sm:pl-6 space-y-4 text-sm sm:text-base text-[#1B1B18]/75 leading-relaxed">
              <p>
                From rapid 48-hour individual specialist backfills to coordinated 35-operative self-sufficient
                trades rotation gangs, Togher Group supplies certified operatives who arrive fully ticketed,
                inducted, and equipped.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact?type=trades"
                  className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-5 shadow-xs"
                >
                  <span>Request workforce gang schedule</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ExhibitFrame
              src="/images/exhibit-formwork-shuttering.jpg"
              alt="Engineered modular formwork system for concrete construction"
              figureId="EXHIBIT TRD-01"
              caption="MODULAR FORMWORK SYSTEM · REINFORCED CONCRETE CORE"
              refCode="COMMONS / STALFORM"
              license="CC BY-SA 3.0"
              aspectRatio="16/10"
            />
          </div>
        </div>

        {/* Trades Grid */}
        <div className="mt-12">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#8A8E82] mb-6">
            Verified Trades &amp; Labour Registry:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trades.map((t, idx) => (
              <div
                key={t.trade}
                className="p-5 rounded-2xl bg-[#FAFBF7] border border-[#1B1B18]/8 flex flex-col justify-between hover:shadow-sm transition-shadow"
              >
                <div>
                  <div className="text-[10px] font-bold text-[#523BA8] uppercase tracking-wider mb-2">
                    TRADE // 0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-[#1B1B18] mb-2 font-[var(--font-display)]">
                    {t.trade}
                  </h4>
                  <p className="text-xs text-[#8A8E82] leading-relaxed">
                    {t.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-[28px] bg-[#1B1B18] text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
          <div>
            <div className="text-[11px] font-bold text-[#C7E36B] uppercase tracking-wider mb-2">
              Workforce Dispatch Protocol
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-[var(--font-display)]">
              Need verified trades or labour squads for your site?
            </h3>
          </div>
          <Link
            href="/contact?type=trades"
            className="btn-pill bg-[#C7E36B] text-[#1B1B18] hover:bg-[#b8dc4c] font-bold text-sm py-3 px-6 shadow-md shrink-0"
          >
            <span>Request Operatives Requisition</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
