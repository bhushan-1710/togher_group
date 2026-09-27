import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full p-8 sm:p-12 rounded-[28px] bg-[#FAFBF7] border border-[#1B1B18]/10 text-center shadow-xs">
        <span className="inline-block px-3 py-1 rounded-full bg-[#DEEBC9] text-[#2F4500] text-xs font-bold uppercase tracking-wider mb-4">
          404 // Page Not Found
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1B1B18] font-[var(--font-display)] tracking-tight mb-3">
          Specification Not Located.
        </h1>
        <p className="text-sm text-[#8A8E82] leading-relaxed mb-8">
          The recruitment ledger or project requisition you are seeking may have completed, moved, or been archived.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-pill btn-pill-dark text-xs sm:text-sm py-2.5 px-5 shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Overview</span>
          </Link>
          <Link
            href="/vacancies"
            className="btn-pill btn-pill-white text-xs sm:text-sm py-2.5 px-5"
          >
            <span>Live Vacancies</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
