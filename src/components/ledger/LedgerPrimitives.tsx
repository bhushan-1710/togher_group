'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

export const GRAIN_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E")`;

export function GrainOverlay() {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: GRAIN_BG,
        backgroundRepeat: 'repeat',
        backgroundSize: '300px 300px',
        pointerEvents: 'none',
        opacity: 0.4,
        zIndex: 1,
      }}
    />
  );
}

export function EntryLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-3">
      <span className="px-2.5 py-0.5 rounded-full bg-[#DEEBC9] text-[#2F4500] text-[11px] font-bold uppercase tracking-wider">
        {n}
      </span>
      <span className="text-xs uppercase font-semibold text-[#8A8E82] tracking-wider">
        {label}
      </span>
    </div>
  );
}

export function LogDivider() {
  return (
    <div className="h-[1px] bg-[#1B1B18]/10 my-8 w-full" />
  );
}

export function useScrollSkew() {
  const wordmarkRef = useRef<HTMLHeadingElement | HTMLDivElement>(null);
  const lastY = useRef(0);
  const velocity = useRef(0);
  const rafId = useRef<number>(0);

  const trackVelocity = useCallback(() => {
    // Disable scroll skew on mobile & touch screens to prevent jitter
    if (typeof window !== 'undefined' && (window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches)) {
      if (wordmarkRef.current) {
        wordmarkRef.current.style.transform = 'none';
      }
      return;
    }

    const y = window.scrollY;
    velocity.current = (y - lastY.current) * 0.05;
    lastY.current = y;

    if (wordmarkRef.current) {
      const clampedSkew = Math.max(-1.5, Math.min(1.5, velocity.current * -0.3));
      wordmarkRef.current.style.transform = `skewX(${clampedSkew}deg)`;
    }

    velocity.current *= 0.85;
    rafId.current = requestAnimationFrame(trackVelocity);
  }, []);

  useEffect(() => {
    rafId.current = requestAnimationFrame(trackVelocity);
    return () => cancelAnimationFrame(rafId.current);
  }, [trackVelocity]);

  return wordmarkRef;
}

export function useCounter(target: number, duration: number = 1000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);

  return { count, ref };
}

export function LiveOperationalSignal({ text = 'ACTIVE NETWORK DESKS' }: { text?: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DEEBC9] text-[#2F4500] text-xs font-semibold tracking-wider uppercase shadow-2xs">
      <span className="w-2 h-2 rounded-full bg-[#5C8200] animate-pulse" />
      <span>{text}</span>
    </span>
  );
}

interface ExhibitFrameProps {
  src: string;
  alt: string;
  figureId: string;
  caption: string;
  refCode: string;
  license: string;
  aspectRatio?: string;
  maxHeight?: string;
  priority?: boolean;
}

export function ExhibitFrame({
  src,
  alt,
  figureId,
  caption,
  refCode,
  license,
  aspectRatio = '16/10',
  maxHeight = '460px',
  priority = false,
}: ExhibitFrameProps) {
  return (
    <figure className="m-0 rounded-2xl bg-white border border-[#1B1B18]/10 overflow-hidden shadow-sm group">
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio, maxHeight }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#1B1B18]/80 backdrop-blur-md text-white text-[10px] font-bold">
          {refCode}
        </div>
      </div>
      <figcaption className="p-3.5 bg-[#FAFBF7] border-t border-[#1B1B18]/8 flex justify-between items-center flex-wrap gap-2 text-xs">
        <span className="font-semibold text-[#1B1B18]">
          {figureId} · {caption}
        </span>
        <span className="text-[11px] text-[#8A8E82] uppercase tracking-wider font-medium">
          {license}
        </span>
      </figcaption>
    </figure>
  );
}

/* ─── SCROLLABLE DOSSIER STRIP ─── */
interface ScrollableDossierStripProps {
  label: string;
  tag?: string;
  children: React.ReactNode;
}

export function ScrollableDossierStrip({
  label,
  tag = 'SPECIFICATION CAROUSEL',
  children,
}: ScrollableDossierStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const max = scrollWidth - clientWidth;
    setScrollProgress(max > 0 ? (scrollLeft / max) * 100 : 0);
  };

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <div className="relative w-full overflow-hidden my-6">
      {/* Reel Header / Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 px-1">
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
          <span className="text-sm sm:text-base font-bold text-[#1B1B18] tracking-tight">
            {label}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#E3DEFC] text-[#523BA8] text-[10px] font-bold uppercase tracking-wider">
            {tag}
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => scrollBy(-320)}
            aria-label="Scroll left"
            className="btn-pill btn-pill-white text-xs py-2 px-4 min-h-[38px] sm:min-h-[44px]"
          >
            ← PREV
          </button>
          <button
            onClick={() => scrollBy(320)}
            aria-label="Scroll right"
            className="btn-pill btn-pill-dark text-xs py-2 px-4 min-h-[38px] sm:min-h-[44px]"
          >
            NEXT →
          </button>
        </div>
      </div>

      {/* Progress Track */}
      <div className="w-full h-1 bg-[#1B1B18]/10 rounded-full mb-6 relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 bg-[#C7E36B] rounded-full transition-all duration-150"
          style={{ width: `${Math.max(15, scrollProgress)}%` }}
        />
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-4 sm:gap-5 overflow-x-auto select-none pb-4 scrollbar-none touch-pan-x"
        style={{
          scrollSnapType: isDragging ? 'none' : 'x mandatory',
          cursor: isDragging ? 'grabbing' : 'grab',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ─── DOSSIER CARD COMPONENT ─── */
export interface DossierCardProps {
  refCode: string;
  statusBadge?: string;
  isLive?: boolean;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  specs: { label: string; value: string }[];
  summary: string;
  linkHref?: string;
  linkText?: string;
  width?: string;
}

export function DossierCard({
  refCode,
  statusBadge,
  isLive = false,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  specs,
  summary,
  linkHref,
  linkText = 'Inspect Details ↗',
  width = 'clamp(260px, 82vw, 360px)',
}: DossierCardProps) {
  return (
    <article
      className="flex-shrink-0 rounded-2xl bg-white border border-[#1B1B18]/10 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
      style={{ width, scrollSnapAlign: 'start' }}
    >
      <div>
        {/* Top Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#E3E6DC]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 85vw, 400px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#1B1B18]/80 backdrop-blur-md text-white text-[10px] font-bold">
            {refCode}
          </div>

          {statusBadge && (
            <div
              className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                isLive
                  ? 'bg-[#C7E36B] text-[#1B1B18]'
                  : 'bg-white/90 text-[#1B1B18]'
              }`}
            >
              {statusBadge}
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5">
          {subtitle && (
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#8A8E82] block mb-1">
              {subtitle}
            </span>
          )}

          <h3 className="text-base font-bold text-[#1B1B18] group-hover:text-[#5C8200] transition-colors leading-snug mb-2 font-[var(--font-display)]">
            {title}
          </h3>

          <p className="text-xs text-[#8A8E82] leading-relaxed mb-4">
            {summary}
          </p>

          {/* Specs List */}
          <div className="border-t border-[#1B1B18]/8 pt-3 space-y-1.5 text-[11px]">
            {specs.map((s, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span className="text-[#8A8E82]">{s.label}:</span>
                <span className="font-semibold text-[#1B1B18]">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      {linkHref && (
        <div className="p-3.5 bg-[#FAFBF7] border-t border-[#1B1B18]/8">
          <a
            href={linkHref}
            className="flex items-center justify-between text-xs font-bold text-[#1B1B18] group-hover:text-[#5C8200] transition-colors"
          >
            <span>{linkText}</span>
            <span className="text-[#5C8200] group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      )}
    </article>
  );
}
