'use client';

import React from 'react';
import {
  GrainOverlay,
  EntryLabel,
  LogDivider,
  useScrollSkew,
  ExhibitFrame,
  LiveOperationalSignal,
} from '@/components/ledger/LedgerPrimitives';
import ContactForm from './ContactForm';
import { MapPin, Phone, Mail, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export default function ContactClient() {
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
            SPECIFICATION REF: TG-2025 // SEC-07 // DIRECT DISPATCH &amp; REQUISITIONS
          </span>
          <LiveOperationalSignal text="DISPATCH DESK ACTIVE · DUBLIN &amp; LONDON" />
        </div>

        <div
          ref={wordmarkRef}
          className="transition-transform duration-100 ease-out will-change-transform"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1B1B18] font-[var(--font-display)] leading-[1.05] mb-4">
            Contact <span className="text-[#5C8200]">Direct</span>.
          </h1>
        </div>

        <div className="mt-4 flex items-center gap-4 flex-wrap text-xs sm:text-sm font-semibold text-[#8A8E82]">
          <span className="inline-flex items-center gap-1.5 text-[#5C8200] bg-[#DEEBC9] px-3 py-1 rounded-full uppercase tracking-wider text-xs">
            <Clock className="w-3.5 h-3.5" />
            2-Hour Review Protocol
          </span>
          <span className="uppercase tracking-wider">
            Managing Director: Steve Togher · Registered Practice
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          LOG 01 — Form & Engineering Drawing Exhibit
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 01" label="Dispatch Requisition Brief" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-6">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1B1B18] tracking-tight leading-tight mb-4">
              Transmit <span className="text-[#5C8200]">specification brief</span>.
            </h2>
            <p className="text-sm sm:text-base text-[#1B1B18]/75 leading-relaxed mb-8 max-w-xl">
              Whether you are an employer facing an immediate project deadline or a candidate seeking
              discreet representation, submit your requirements below.
            </p>

            <ContactForm />
          </div>

          {/* Right: Technical Exhibit & Details */}
          <div className="lg:col-span-5 space-y-6">
            <ExhibitFrame
              src="/images/exhibit-engineering-cad.jpg"
              alt="AutoCAD technical structural drawing showing footing elevation and rebar details"
              figureId="EXHIBIT CON-01"
              caption="AUTOCAD STRUCTURAL CROSS-SECTION · DETAIL SCHEDULE &amp; SPECIFICATION"
              refCode="COMMONS / MTPANCHAL"
              license="CC BY-SA 4.0"
              aspectRatio="4/3"
              priority
            />
            <div className="px-2 flex justify-between text-[11px] text-[#8A8E82] font-medium tracking-wide">
              <span>Technical Verification Desk</span>
              <span>Scale 1:50 Archive</span>
            </div>

            <div className="p-6 rounded-[24px] bg-[#DEEBC9] border border-[#C7E36B]/60">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2F4500] mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5C8200]" />
                Urgent Site Intervention
              </h3>
              <p className="text-xs sm:text-sm text-[#1B1B18]/80 leading-relaxed">
                If your site has an immediate Thursday-for-Monday emergency (e.g., loss of a certified
                M&amp;E coordinator, crane operator, or setting-out engineer), flag <strong>URGENT SITE REQUIREMENT</strong> in your message. Emergency requisitions are prioritised directly by managing leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LogDivider />

      {/* ═══════════════════════════════════════════════════════
          LOG 02 — Regional Dispatch Desks
      ═══════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 max-w-[1480px] mx-auto">
        <EntryLabel n="LOG 02" label="Regional Dispatch Desks" />

        <div className="mt-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1B18] tracking-tight mb-8">
            Dispatch offices &amp; <span className="text-[#523BA8]">operational centres</span>.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dublin Desk */}
            <div className="p-6 sm:p-7 rounded-[24px] bg-[#FAFBF7] border border-[#1B1B18]/8 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="text-[11px] font-bold text-[#5C8200] uppercase tracking-wider mb-3">
                  DESK 01 // DUBLIN (IRELAND HQ)
                </div>
                <h3 className="text-xl font-bold text-[#1B1B18] mb-3 font-[var(--font-display)]">
                  Dublin Operations
                </h3>
                <div className="space-y-2 text-xs text-[#8A8E82]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#5C8200] shrink-0 mt-0.5" />
                    <span>Fitzwilliam Square, Dublin 2, Ireland</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#5C8200] shrink-0" />
                    <span>+353 (0)1 905 3800</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#5C8200] shrink-0" />
                    <span>info@toghergroup.com</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#1B1B18]/6 text-[11px] font-semibold text-[#1B1B18]">
                Republic of Ireland &amp; European Mobility
              </div>
            </div>

            {/* London Desk */}
            <div className="p-6 sm:p-7 rounded-[24px] bg-[#FAFBF7] border border-[#1B1B18]/8 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="text-[11px] font-bold text-[#523BA8] uppercase tracking-wider mb-3">
                  DESK 02 // LONDON (UNITED KINGDOM)
                </div>
                <h3 className="text-xl font-bold text-[#1B1B18] mb-3 font-[var(--font-display)]">
                  London &amp; UK Desk
                </h3>
                <div className="space-y-2 text-xs text-[#8A8E82]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#523BA8] shrink-0 mt-0.5" />
                    <span>Central London Commercial Desk, United Kingdom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#523BA8] shrink-0" />
                    <span>uk@toghergroup.com</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#1B1B18]/6 text-[11px] font-semibold text-[#1B1B18]">
                England, Scotland &amp; Wales
              </div>
            </div>

            {/* Global Practice */}
            <div className="p-6 sm:p-7 rounded-[24px] bg-[#FAFBF7] border border-[#1B1B18]/8 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="text-[11px] font-bold text-[#1B1B18] uppercase tracking-wider mb-3">
                  DESK 03 // INTERNATIONAL MOBILITY
                </div>
                <h3 className="text-xl font-bold text-[#1B1B18] mb-3 font-[var(--font-display)]">
                  Transatlantic &amp; Pacific
                </h3>
                <div className="space-y-2 text-xs text-[#8A8E82]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#1B1B18] shrink-0 mt-0.5" />
                    <span>Frankfurt · Amsterdam · Sydney</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#1B1B18] shrink-0" />
                    <span>international@toghergroup.com</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#1B1B18]/6 text-[11px] font-semibold text-[#1B1B18]">
                Managing Director: Steve Togher
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
