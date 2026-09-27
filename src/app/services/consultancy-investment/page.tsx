import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GrainOverlay,
  EntryLabel,
  LogDivider,
  LiveOperationalSignal,
} from '@/components/ledger/LedgerPrimitives';
import { ArrowUpRight, TrendingUp, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Consultancy & Investment Advisory | Togher Group',
  description:
    'Strategic construction workforce advisory, joint-venture labour planning, and resourcing consultancy across international construction markets.',
};

export default function ConsultancyInvestmentPage() {
  return (
    <div className="w-full bg-white text-[#1B1B18] overflow-x-hidden relative min-h-screen pb-16">
      <GrainOverlay />

      <section className="pt-6 sm:pt-10 pb-6 sm:pb-8 px-4 sm:px-6 md:px-10 relative border-b border-[#1B1B18]/8">
        <div className="flex justify-between items-center flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#8A8E82] uppercase tracking-wider">
            SPECIFICATION REF: TG-2025 // SEC-03-C // CONSULTANCY &amp; ADVISORY
          </span>
          <LiveOperationalSignal text="DISCIPLINE C · ADVISORY TRACK" />
        </div>

        <h1 className="text-[clamp(2.2rem,7.5vw,5rem)] font-bold tracking-tight text-[#1B1B18] font-[var(--font-display)] leading-[1.05] mb-3 sm:mb-4">
          Consultancy &amp; <span className="text-[#5C8200]">Investment</span>.
        </h1>

        <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4 flex-wrap text-xs sm:text-sm font-semibold text-[#8A8E82]">
          <span className="inline-flex items-center gap-1.5 text-[#5C8200] bg-[#DEEBC9] px-3 py-1 rounded-full uppercase tracking-wider text-xs">
            <TrendingUp className="w-3.5 h-3.5" />
            Strategic Resourcing &amp; Tender Advisory
          </span>
          <span className="uppercase tracking-wider">
            Workforce Modelling &amp; Risk Mitigation
          </span>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 01" label="Strategic Workforce Consulting" />

        <div className="mt-6 p-8 sm:p-12 rounded-[28px] bg-[#FAFBF7] border border-[#1B1B18]/10 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1B18] tracking-tight leading-tight mb-6">
            Long-range capacity forecasting for <span className="text-[#5C8200]">major capital</span> programmes.
          </h2>

          <div className="border-l-2 border-[#1B1B18] pl-5 sm:pl-6 space-y-4 text-sm sm:text-base text-[#1B1B18]/75 leading-relaxed">
            <p>
              For Tier-1 joint ventures and developers preparing major multi-year capital tenders,
              accurate workforce forecasting is critical to mitigate project margin slippage.
              Togher Group advises on labour rate volatility, cross-border workforce availability,
              and mobilisation sequencing.
            </p>
            <p className="text-xs text-[#8A8E82]">
              Note: This advisory scope is documented per Togher Group operational records. Commercial frameworks and workforce advisory parameters are customized per client project agreement.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?type=advisory"
                className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-6 shadow-xs"
              >
                <span>Initiate Strategic Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C7E36B]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
