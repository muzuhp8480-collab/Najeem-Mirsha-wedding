import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Play, Pause, Navigation, Calendar, Clock, Sparkles } from 'lucide-react';

// Assets
const COUPLE_IMG = '/assets/couple.jpg';
const SEAL_IMG = '/assets/seal.png';
const PETAL_IMG = '/assets/petal.png';
const WEDDING_AUDIO = '/audio/wedding-invitation.mp3';

// Wedding Date & Location
const WEDDING_DATE = new Date('2026-11-08T11:00:00+05:30').getTime();
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=Sagar+Auditorium%2C+Kavumpuram%2C+Valanchery%2C+Kerala';

// Golden Foliage Branches (Matching the Reference Images)
function GoldFoliage({ className = '' }) {
  return (
    <svg viewBox="0 0 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d58f" />
          <stop offset="50%" stopColor="#dfba73" />
          <stop offset="100%" stopColor="#a8823c" />
        </linearGradient>
      </defs>
      {/* Branch stems */}
      <path d="M0,0 Q60,30 110,80 T150,150" stroke="url(#goldLeafGrad)" strokeWidth="1.8" fill="none" opacity="0.85" />
      <path d="M0,0 Q30,60 70,115 T120,160" stroke="url(#goldLeafGrad)" strokeWidth="1.4" fill="none" opacity="0.75" />
      <path d="M0,0 Q80,15 140,40" stroke="url(#goldLeafGrad)" strokeWidth="1.4" fill="none" opacity="0.8" />
      {/* Leaves */}
      <path d="M35,18 Q45,8 55,20 Q48,32 35,18 Z" fill="url(#goldLeafGrad)" opacity="0.9" />
      <path d="M65,36 Q80,24 90,38 Q80,52 65,36 Z" fill="url(#goldLeafGrad)" opacity="0.9" />
      <path d="M98,64 Q116,52 124,68 Q112,82 98,64 Z" fill="url(#goldLeafGrad)" opacity="0.95" />
      <path d="M125,100 Q145,88 152,106 Q138,120 125,100 Z" fill="url(#goldLeafGrad)" opacity="0.95" />
      <path d="M20,40 Q10,55 25,68 Q38,55 20,40 Z" fill="url(#goldLeafGrad)" opacity="0.9" />
      <path d="M45,75 Q32,92 50,105 Q62,90 45,75 Z" fill="url(#goldLeafGrad)" opacity="0.9" />
      <path d="M72,118 Q60,136 78,148 Q90,132 72,118 Z" fill="url(#goldLeafGrad)" opacity="0.9" />
      <path d="M70,15 Q88,5 98,18 Q86,28 70,15 Z" fill="url(#goldLeafGrad)" opacity="0.85" />
      <path d="M115,30 Q135,22 142,36 Q130,48 115,30 Z" fill="url(#goldLeafGrad)" opacity="0.85" />
      {/* Golden berry clusters */}
      <circle cx="50" cy="50" r="3.2" fill="url(#goldLeafGrad)" />
      <circle cx="85" cy="80" r="2.8" fill="url(#goldLeafGrad)" />
      <circle cx="115" cy="60" r="2.5" fill="url(#goldLeafGrad)" />
      <circle cx="35" cy="100" r="3" fill="url(#goldLeafGrad)" />
      <circle cx="138" cy="135" r="3.2" fill="url(#goldLeafGrad)" />
    </svg>
  );
}

// Center Floral Divider
function FloralDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-current opacity-60" />
      <svg viewBox="0 0 40 20" className="h-4 w-8" fill="currentColor">
        <path d="M20 2 c2 4 6 6 10 6 c-4 0-8 2-10 6 c-2-4-6-6-10-6 c4 0 8-2 10-6z" />
        <circle cx="4" cy="8" r="1.4" />
        <circle cx="36" cy="8" r="1.4" />
      </svg>
      <span className="h-px w-16 bg-current opacity-60" />
    </div>
  );
}

// Ornate Diamond Line
function OrnateDiamondLine({ className = '' }) {
  return (
    <svg viewBox="0 0 200 12" className={className} fill="none" stroke="currentColor" strokeWidth=".8" aria-hidden="true">
      <path d="M0 6 H80 M120 6 H200" />
      <path d="M100 0 L106 6 L100 12 L94 6 Z" />
      <path d="M86 6 L90 2 L94 6 L90 10 Z M106 6 L110 2 L114 6 L110 10 Z" />
    </svg>
  );
}

// 🌿 Varied Botanical Leaf Shapes for Tap Shower

// 1. Slender Golden Laurel Leaf
function SlenderGoldLeaf() {
  return (
    <svg viewBox="0 0 24 36" fill="none" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
      <defs>
        <linearGradient id="slenderGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff3d1" />
          <stop offset="35%" stopColor="#dfba73" />
          <stop offset="75%" stopColor="#b88f42" />
          <stop offset="100%" stopColor="#7a5a22" />
        </linearGradient>
      </defs>
      <path d="M12 2 C19 10 23 21 12 34 C1 21 5 10 12 2 Z" fill="url(#slenderGoldGrad)" />
      <path d="M12 4 Q12 18 12 32" stroke="#fff8e7" strokeWidth="0.8" opacity="0.65" strokeLinecap="round" />
    </svg>
  );
}

// 2. Curved Golden Botanical Leaf
function CurvedGoldLeaf() {
  return (
    <svg viewBox="0 0 32 36" fill="none" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
      <defs>
        <linearGradient id="curvedGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf3d6" />
          <stop offset="40%" stopColor="#dfba73" />
          <stop offset="85%" stopColor="#a37a30" />
          <stop offset="100%" stopColor="#5c4314" />
        </linearGradient>
      </defs>
      <path d="M4 33 C11 23 14 13 28 4 C25 18 18 29 4 33 Z" fill="url(#curvedGoldGrad)" />
      <path d="M6 31 Q15 20 25 8" stroke="#fff" strokeWidth="0.75" opacity="0.6" strokeLinecap="round" />
      <path d="M12 24 Q16 22 19 23" stroke="#fff" strokeWidth="0.6" opacity="0.4" />
      <path d="M17 18 Q21 16 23 17" stroke="#fff" strokeWidth="0.6" opacity="0.4" />
    </svg>
  );
}

// 3. Golden Rose Petal
function GoldPetalItem() {
  return (
    <img
      src={PETAL_IMG}
      alt=""
      className="w-full h-full object-contain"
      style={{
        filter: 'sepia(1) hue-rotate(5deg) saturate(2.8) brightness(1.28) drop-shadow(0 2px 5px rgba(0, 0, 0, 0.45))'
      }}
    />
  );
}

// 4. Royal Golden Sparkle Dust
function GoldSparkleItem() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-[0_0_6px_rgba(223,186,115,0.9)]">
      <defs>
        <linearGradient id="sparkleDustGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#f5d58f" />
          <stop offset="100%" stopColor="#dfba73" />
        </linearGradient>
      </defs>
      <path
        d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
        fill="url(#sparkleDustGrad)"
      />
      <circle cx="12" cy="12" r="2.2" fill="#ffffff" />
    </svg>
  );
}

// Interactive Rich Golden Leaves Shower on Tap/Click
function InteractivePetals({ onTap }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let idCounter = 0;
    const handlePointerDown = (e) => {
      // Trigger full-time falling on first tap
      if (onTap) onTap();

      // Don't clutter when typing in text fields
      if (e.target?.closest('input, textarea')) return;

      const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : window.innerWidth / 2);
      const clientY = e.clientY ?? (e.touches && e.touches[0] ? e.touches[0].clientY : window.innerHeight / 3);

      // Spawn 11 to 15 rich varied particles per tap
      const count = 11 + Math.floor(Math.random() * 5);
      const swayStyles = ['leaf-sway-1', 'leaf-sway-2', 'leaf-sway-3'];

      const newItems = Array.from({ length: count }, (_, idx) => {
        const rand = Math.random();
        let type = 'slender';
        let width = 16;
        let height = 24;

        if (rand < 0.38) {
          type = 'slender';
          const scale = 0.8 + Math.random() * 0.55;
          width = Math.round(18 * scale);
          height = Math.round(28 * scale);
        } else if (rand < 0.72) {
          type = 'curved';
          const scale = 0.8 + Math.random() * 0.55;
          width = Math.round(22 * scale);
          height = Math.round(26 * scale);
        } else if (rand < 0.88) {
          type = 'petal';
          const scale = 0.75 + Math.random() * 0.5;
          width = Math.round(19 * scale);
          height = Math.round(19 * scale);
        } else {
          type = 'sparkle';
          const scale = 0.65 + Math.random() * 0.45;
          width = Math.round(14 * scale);
          height = Math.round(14 * scale);
        }

        const swayClass = type === 'sparkle' ? 'sparkle-twinkle' : swayStyles[Math.floor(Math.random() * swayStyles.length)];
        const delaySec = (idx / count) * 0.28 + Math.random() * 0.08;
        const driftX = (Math.random() - 0.5) * 160;
        const fallY = 190 + Math.random() * 210;
        const fallDur = 2.6 + Math.random() * 1.2;
        const swayDur = 1.1 + Math.random() * 0.7;
        const swayDelay = -Math.random() * 1.5;

        return {
          id: ++idCounter,
          type,
          x: clientX + (Math.random() - 0.5) * 44,
          y: clientY + (Math.random() - 0.5) * 20,
          w: width,
          h: height,
          swayClass,
          delaySec,
          driftX,
          fallY,
          fallDur,
          swayDur,
          swayDelay,
        };
      });

      setParticles((prev) => {
        const trimmed = prev.length > 35 ? prev.slice(prev.length - 35) : prev;
        return [...trimmed, ...newItems];
      });

      const addedIds = new Set(newItems.map((item) => item.id));
      setTimeout(() => {
        setParticles((prev) => prev.filter((item) => !addedIds.has(item.id)));
      }, 4200);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, [onTap]);

  return (
    <div className="pointer-events-none fixed inset-0 z-60 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="leaf-particle"
          style={{
            left: p.x,
            top: p.y,
            width: p.w,
            height: p.h,
            '--drift-x': `${p.driftX}px`,
            '--fall-y': `${p.fallY}px`,
            '--fall-dur': `${p.fallDur}s`,
            '--delay': `${p.delaySec.toFixed(3)}s`,
          }}
        >
          <div
            className={p.swayClass}
            style={{
              '--sway-dur': `${p.swayDur}s`,
              '--sway-delay': `${p.swayDelay}s`,
            }}
          >
            {p.type === 'slender' && <SlenderGoldLeaf />}
            {p.type === 'curved' && <CurvedGoldLeaf />}
            {p.type === 'petal' && <GoldPetalItem />}
            {p.type === 'sparkle' && <GoldSparkleItem />}
          </div>
        </div>
      ))}
    </div>
  );
}

// Full-Time Continuous Falling Leaves (Activated after tap / open)
function ContinuousFallingLeaves({ count = 18 }) {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const swayStyles = ['leaf-sway-1', 'leaf-sway-2', 'leaf-sway-3'];
    const items = Array.from({ length: count }, (_, i) => {
      const rand = Math.random();
      let type = 'slender';
      let w = 17;
      let h = 26;

      if (rand < 0.38) {
        type = 'slender';
        const s = 0.8 + Math.random() * 0.45;
        w = Math.round(18 * s);
        h = Math.round(28 * s);
      } else if (rand < 0.72) {
        type = 'curved';
        const s = 0.8 + Math.random() * 0.45;
        w = Math.round(22 * s);
        h = Math.round(26 * s);
      } else if (rand < 0.88) {
        type = 'petal';
        const s = 0.75 + Math.random() * 0.4;
        w = Math.round(19 * s);
        h = Math.round(19 * s);
      } else {
        type = 'sparkle';
        const s = 0.65 + Math.random() * 0.4;
        w = Math.round(13 * s);
        h = Math.round(13 * s);
      }

      // Distribute evenly across viewport width with slight jitter
      const baseLeft = (i / count) * 100;
      const left = Math.max(2, Math.min(95, baseLeft + (Math.random() - 0.5) * (100 / count)));
      const fallDur = 7 + Math.random() * 5.5; // 7s to 12.5s gentle downward drift
      const fallDelay = -Math.random() * fallDur; // Negative delay so leaves are already across screen
      const driftX = (Math.random() - 0.5) * 80;
      const swayClass = type === 'sparkle' ? 'sparkle-twinkle' : swayStyles[Math.floor(Math.random() * swayStyles.length)];
      const swayDur = 1.3 + Math.random() * 1.0;
      const swayDelay = -Math.random() * 2;

      return {
        id: i,
        type,
        left,
        w,
        h,
        fallDur,
        fallDelay,
        driftX,
        swayClass,
        swayDur,
        swayDelay,
      };
    });

    setLeaves(items);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-35 overflow-hidden" aria-hidden="true">
      {leaves.map((l) => (
        <div
          key={l.id}
          className="continuous-leaf-wrapper"
          style={{
            left: `${l.left}%`,
            width: l.w,
            height: l.h,
            '--drift-x': `${l.driftX}px`,
            '--fall-dur': `${l.fallDur}s`,
            '--fall-delay': `${l.fallDelay}s`,
          }}
        >
          <div
            className={l.swayClass}
            style={{
              '--sway-dur': `${l.swayDur}s`,
              '--sway-delay': `${l.swayDelay}s`,
            }}
          >
            {l.type === 'slender' && <SlenderGoldLeaf />}
            {l.type === 'curved' && <CurvedGoldLeaf />}
            {l.type === 'petal' && <GoldPetalItem />}
            {l.type === 'sparkle' && <GoldSparkleItem />}
          </div>
        </div>
      ))}
    </div>
  );
}

// Scratch to Reveal Wedding Date
const DATE_BLOCKS = [
  { v: '08', l: 'Date' },
  { v: 'NOV', l: 'Month' },
  { v: '2026', l: 'Year' },
  { v: '11:00 AM', l: 'Onwards' },
];

// =========================================================================
// 🌟 INTERACTIVE ROYAL 3D "SAVE THE DATE" CALENDAR REVEAL 🌟
// =========================================================================
const CALENDAR_LINK =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding:+Muhammed+Najeem+%26+Fathima+Mirsha&dates=20261108T053000Z/20261108T093000Z&details=With+the+blessings+of+our+families,+you+are+warmly+invited+to+celebrate+the+wedding+of+Muhammed+Najeem+%26+Fathima+Mirsha.&location=Sagar+Auditorium,+Kavumpuram,+Valanchery,+Kerala";

function RoyalSaveTheDateReveal() {
  const [isFlipped, setIsFlipped] = useState(false);
  const containerRef = useRef(null);

  // Auto flip when scrolled into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsFlipped(true), 650);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-md px-2 text-center">
      {/* Subtitle */}
      <p className="font-serif text-lg sm:text-xl italic text-[#dfba73] mb-3">
        By the grace of the Almighty
      </p>

      {/* 3D Flip Card Container */}
      <div
        className="card-flip-container relative min-h-[380px] w-full cursor-pointer select-none"
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        <div className={`card-flip-inner min-h-[380px] w-full ${isFlipped ? 'flipped' : ''}`}>
          {/* ========================================= */}
          {/* FRONT FACE: Royal Sealed Medallion Card   */}
          {/* ========================================= */}
          <div className="card-face-front absolute inset-0 rounded-sm border border-[#dfba73]/40 bg-[#041c16]/90 p-6 sm:p-8 flex flex-col justify-between items-center shadow-2xl overflow-hidden">
            {/* Inner Border Frame */}
            <div className="pointer-events-none absolute inset-2.5 border border-[#dfba73]/50" />
            <div className="pointer-events-none absolute inset-4 border border-[#dfba73]/25" />

            {/* Corner Foliage */}
            <GoldFoliage className="absolute left-1 top-1 h-20 w-20 text-[#dfba73] pointer-events-none opacity-85" />
            <GoldFoliage className="absolute right-1 top-1 h-20 w-20 -scale-x-100 text-[#dfba73] pointer-events-none opacity-85" />

            {/* Top Label */}
            <div className="pt-2">
              <p className="font-['Cinzel'] text-xs tracking-[0.4em] text-[#dfba73] uppercase font-semibold">
                SAVE THE DATE
              </p>
              <div className="mt-1 flex items-center justify-center gap-1.5">
                <span className="h-px w-8 bg-[#dfba73]/40" />
                <span className="h-1 w-1 rotate-45 bg-[#dfba73]" />
                <span className="h-px w-8 bg-[#dfba73]/40" />
              </div>
            </div>

            {/* Center Royal Medallion */}
            <div className="pulse-gold relative flex items-center justify-center my-auto">
              <div className="relative flex h-32 w-32 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-gradient-to-br from-[#dfba73] via-[#05261e] to-[#031812] p-2 shadow-2xl border-2 border-[#dfba73]">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#05261e] border border-[#dfba73]/70 p-2 text-center shadow-inner">
                  <span className="font-['Cinzel'] text-[10px] tracking-widest text-[#f5d58f] uppercase">
                    ✦ NOV ✦
                  </span>
                  <span className="font-['Cinzel'] text-3xl sm:text-4xl font-bold text-[#dfba73] leading-none my-0.5 drop-shadow">
                    08
                  </span>
                  <span className="font-['Cinzel'] text-[9px] tracking-widest text-[#dfba73] uppercase">
                    SUNDAY
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Tap Hint */}
            <div className="pb-2">
              <p className="font-['Cinzel'] text-[11px] tracking-[0.3em] text-[#f5d58f] uppercase flex items-center gap-1.5 justify-center font-medium">
                <Sparkles className="h-3 w-3 text-[#dfba73]" />
                TAP TO VIEW CALENDAR
                <Sparkles className="h-3 w-3 text-[#dfba73]" />
              </p>
            </div>
          </div>

          {/* ========================================= */}
          {/* BACK FACE: Royal Calendar & Date Badges   */}
          {/* ========================================= */}
          <div className="card-face-back absolute inset-0 rounded-sm border border-[#dfba73]/45 bg-[#041c16]/95 p-5 sm:p-6 flex flex-col justify-between items-center shadow-2xl overflow-hidden">
            {/* Inner Border Frame */}
            <div className="pointer-events-none absolute inset-2 border border-[#dfba73]/40" />

            {/* 4 Golden Date Blocks */}
            <div className="w-full">
              <div className="grid grid-cols-4 divide-x divide-[#dfba73]/30 rounded-sm border border-[#dfba73]/40 bg-[#05261e]/80 py-3 shadow-lg">
                {DATE_BLOCKS.map((item) => (
                  <div key={item.l} className="px-1 text-center">
                    <div className="font-['Cinzel'] text-lg sm:text-xl text-[#fdfbf7] font-bold">
                      {item.v}
                    </div>
                    <div className="mt-0.5 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#dfba73]">
                      {item.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* November 2026 Mini Calendar Grid */}
            <div className="w-full my-auto px-1">
              <div className="flex items-center justify-between pb-1.5 border-b border-[#dfba73]/30">
                <span className="font-['Cinzel'] text-xs font-bold tracking-widest text-[#dfba73]">
                  NOVEMBER 2026
                </span>
                <span className="font-serif text-xs italic text-[#f5d58f]">
                  Sunday · The Wedding Day
                </span>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 text-center pt-2 text-[10px] font-['Cinzel'] font-bold text-[#dfba73]/80">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                  <div key={i} className={i === 0 ? 'text-[#f5d58f]' : ''}>
                    {d}
                  </div>
                ))}
              </div>

              {/* Calendar days grid (Nov 1 is Sunday) */}
              <div className="grid grid-cols-7 gap-1 pt-1.5 text-center text-xs font-serif text-[#fdfbf7]/80">
                {Array.from({ length: 30 }, (_, idx) => {
                  const day = idx + 1;
                  const isWedding = day === 8;
                  return (
                    <div
                      key={day}
                      className={`h-6 sm:h-7 flex items-center justify-center rounded-full transition-all ${
                        isWedding
                          ? 'pulse-gold bg-[#dfba73] text-[#041c16] font-bold font-["Cinzel"] shadow-md scale-110 z-10'
                          : 'hover:bg-[#dfba73]/10'
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action buttons */}
            <div className="w-full flex items-center justify-center gap-3 pt-1">
              <a
                href={CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#dfba73] bg-[#0b3a2d] px-5 py-2 font-['Cinzel'] text-[11px] tracking-widest text-[#f5d58f] transition hover:bg-[#072920] shadow-md cursor-pointer"
              >
                <Calendar className="h-3.5 w-3.5 text-[#dfba73]" />
                ADD TO CALENDAR
              </a>
              <span className="text-[10px] font-['Cinzel'] tracking-widest text-[#dfba73]/60 uppercase">
                ✦ Click to Flip ✦
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Live Countdown Timer
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const diff = Math.max(0, WEDDING_DATE - Date.now());
      setTimeLeft({
        Days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((diff / (1000 * 60)) % 60),
        Seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mx-auto grid max-w-md grid-cols-4 gap-2.5 px-2">
      {['Days', 'Hours', 'Minutes', 'Seconds'].map((unit) => (
        <div key={unit} className="rounded-sm border border-[#dfba73]/40 bg-[#05241c]/80 py-3.5 sm:py-4 text-center shadow-lg">
          <div className="font-['Cinzel'] text-xl sm:text-2xl text-[#fdfbf7] font-bold">
            {timeLeft === null ? '--' : String(timeLeft[unit]).padStart(2, '0')}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#dfba73]">{unit}</div>
        </div>
      ))}
    </div>
  );
}

// Guest Wishes Guestbook (Local Storage + Initial Blessings)
const INITIAL_WISHES = [
  {
    id: 'w1',
    guest_name: 'Uncle & Family',
    message: 'May Allah bless this beautiful union with endless love, peace, and prosperity. Baarakallaahu lakuma!',
  },
  {
    id: 'w2',
    guest_name: 'Hisham & Sarah',
    message: 'Heartiest congratulations to dearest Najeem & Mirsha! Wishing you both a lifetime of eternal happiness.',
  },
];

function WishesSection() {
  const [wishes, setWishes] = useState([]);
  const [guestName, setGuestName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('najeem_mirsha_wishes');
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch {
        setWishes(INITIAL_WISHES);
      }
    } else {
      setWishes(INITIAL_WISHES);
      localStorage.setItem('najeem_mirsha_wishes', JSON.stringify(INITIAL_WISHES));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestName.trim() || !message.trim()) return;

    setSubmitting(true);
    let updated;
    if (editId) {
      updated = wishes.map((w) => (w.id === editId ? { ...w, guest_name: guestName.trim(), message: message.trim() } : w));
      setEditId(null);
    } else {
      const newWish = {
        id: 'wish_' + Date.now(),
        guest_name: guestName.trim(),
        message: message.trim(),
      };
      updated = [newWish, ...wishes];
    }

    setWishes(updated);
    localStorage.setItem('najeem_mirsha_wishes', JSON.stringify(updated));
    setGuestName('');
    setMessage('');
    setSubmitting(false);
  };

  const handleDelete = (id) => {
    if (confirm('Delete this wish?')) {
      const updated = wishes.filter((w) => w.id !== id);
      setWishes(updated);
      localStorage.setItem('najeem_mirsha_wishes', JSON.stringify(updated));
    }
  };

  return (
    <div className="mx-auto w-full max-w-md px-2">
      <form onSubmit={handleSubmit} className="space-y-3.5 rounded-sm border border-[#dfba73]/40 bg-[#041c16]/80 p-5 shadow-2xl">
        <input
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          maxLength={60}
          placeholder="Your name"
          required
          className="w-full border-b border-[#dfba73]/40 bg-transparent px-1 py-2 text-base sm:text-lg text-[#fdfbf7] placeholder:text-[#fdfbf7]/40 focus:border-[#dfba73] focus:outline-none"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          rows={3}
          placeholder="Write your wishes & du'a for Najeem & Mirsha"
          required
          className="w-full resize-none border-b border-[#dfba73]/40 bg-transparent px-1 py-2 text-base sm:text-lg text-[#fdfbf7] placeholder:text-[#fdfbf7]/40 focus:border-[#dfba73] focus:outline-none"
        />
        <div className="flex gap-2 pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="flex-1 rounded-full border border-[#dfba73] bg-[#0b3a2d] px-5 py-3 font-['Cinzel'] text-xs tracking-[0.3em] text-[#fdfbf7] transition hover:bg-[#072920] disabled:opacity-60 shadow-md cursor-pointer"
          >
            {editId ? 'UPDATE WISH' : 'SEND WISH'}
          </button>
          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null);
                setGuestName('');
                setMessage('');
              }}
              className="rounded-full border border-[#dfba73]/50 px-4 text-xs tracking-widest text-[#dfba73] cursor-pointer"
            >
              CANCEL
            </button>
          )}
        </div>
      </form>

      <div className="mt-6 space-y-3.5">
        {wishes.map((w) => (
          <div key={w.id} className="emerald-card rounded-sm p-4 text-[#fdfbf7] shadow-lg text-left">
            <p className="whitespace-pre-wrap text-base sm:text-lg leading-relaxed font-serif text-[#fdfbf7]/90">{w.message}</p>
            <div className="mt-3 flex items-center justify-between border-t border-[#dfba73]/20 pt-2">
              <span className="font-['Cinzel'] text-xs tracking-[0.2em] text-[#dfba73] font-medium">— {w.guest_name}</span>
              <div className="flex gap-3 text-xs tracking-widest text-[#dfba73]/80">
                <button
                  type="button"
                  onClick={() => {
                    setEditId(w.id);
                    setGuestName(w.guest_name);
                    setMessage(w.message);
                  }}
                  className="hover:underline cursor-pointer"
                >
                  EDIT
                </button>
                <button type="button" onClick={() => handleDelete(w.id)} className="hover:underline cursor-pointer">
                  DELETE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Reference Date Block Component (Matching Reference Card Exactly)
function ReferenceDateBlock() {
  return (
    <div className="mx-auto max-w-xs text-center py-2">
      <p className="font-['Cinzel'] text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-medium">
        N O V E M B E R
      </p>

      {/* Top divider line with diamond */}
      <div className="my-2.5 flex items-center justify-center gap-2">
        <span className="h-px flex-1 bg-[#dfba73]/50" />
        <span className="h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" />
        <span className="h-px flex-1 bg-[#dfba73]/50" />
      </div>

      {/* Middle row: SUNDAY   08   AT 11 AM */}
      <div className="flex items-center justify-between px-2 py-1">
        <span className="font-['Cinzel'] text-xs sm:text-[13px] tracking-[0.25em] text-[#dfba73] uppercase font-medium">
          S U N D A Y
        </span>
        <span className="font-['Cinzel'] text-3xl sm:text-4xl text-[#dfba73] font-bold px-3">
          08
        </span>
        <span className="font-['Cinzel'] text-xs sm:text-[13px] tracking-[0.25em] text-[#dfba73] uppercase font-medium">
          AT 11 AM
        </span>
      </div>

      {/* Bottom divider line with diamond */}
      <div className="my-2.5 flex items-center justify-center gap-2">
        <span className="h-px flex-1 bg-[#dfba73]/50" />
        <span className="h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" />
        <span className="h-px flex-1 bg-[#dfba73]/50" />
      </div>

      <p className="font-['Cinzel'] text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-medium">
        2 0 2 6
      </p>
    </div>
  );
}

// =========================================================================
// 🌟 ULTRA-PREMIUM 3D ROYAL GATEFOLD OPENING EXPERIENCE 🌟
// =========================================================================
function RoyalGatefoldOpening({ stage, onStartOpen }) {
  const [unsealing, setUnsealing] = useState(false);
  const [doorsOpen, setDoorsOpen] = useState(false);

  // Trigger sequence
  const handleOpenClick = () => {
    if (stage !== 'closed' || unsealing) return;
    setUnsealing(true);
    onStartOpen(); // start audio immediately with fade-in

    // 350ms: doors start swinging wide open in 3D
    setTimeout(() => {
      setDoorsOpen(true);
    }, 380);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-3 sm:p-6 overflow-hidden">
      <div className="relative flex flex-col items-center">
        {/* Top Header */}
        <div
          className={`mb-5 text-center transition-all duration-700 ${
            unsealing ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <p className="font-['Cinzel'] text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-semibold">
            WEDDING INVITATION
          </p>
          <p className="font-serif text-sm sm:text-base italic text-[#fdfbf7]/75 mt-0.5">
            Najeem &amp; Mirsha
          </p>
        </div>

        {/* 3D Folio Box Container */}
        <div
          className="gatefold-perspective relative w-[90vw] max-w-[420px] sm:max-w-[450px] h-[580px] sm:h-[630px] rounded-sm shadow-[0_35px_100px_-15px_rgba(0,0,0,0.98)] cursor-pointer select-none"
          onClick={handleOpenClick}
        >
          {/* ======================================================= */}
          {/* INNER CARD (Nestled Inside, Revealed when Doors Open)  */}
          {/* ======================================================= */}
          <div
            className="emerald-texture absolute inset-0 rounded-sm border border-[#dfba73]/40 p-6 sm:p-7 text-center overflow-hidden flex flex-col justify-between transition-transform duration-1000"
            style={{
              transform: doorsOpen ? 'scale(1.02)' : 'scale(0.96)',
            }}
          >
            {/* Inner Gold Borders */}
            <div className="pointer-events-none absolute inset-2.5 border border-[#dfba73]/60" />
            <div className="pointer-events-none absolute inset-4 border border-[#dfba73]/25" />

            {/* Corner Foliage */}
            <GoldFoliage className="absolute left-1 top-1 h-24 w-24 text-[#dfba73] pointer-events-none" />
            <GoldFoliage className="absolute right-1 top-1 h-24 w-24 -scale-x-100 text-[#dfba73] pointer-events-none" />

            {/* Shimmer Light Beam Effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="animate-gold-beam absolute -top-1/2 left-0 h-[200%] w-24 bg-gradient-to-r from-transparent via-[#f5d58f]/20 to-transparent" />
            </div>

            {/* Card Content */}
            <div className="relative pt-3">
              <p className="font-['Amiri'] text-2xl text-[#dfba73] leading-relaxed drop-shadow" dir="rtl" lang="ar">
                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </p>
              <div className="my-1 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" />
              </div>
              <p className="font-['Cinzel'] text-[11px] tracking-[0.35em] text-[#dfba73] font-semibold uppercase">
                WEDDING INVITATION
              </p>
            </div>

            {/* Couple Reference Illustration inside card */}
            <div className="relative mx-auto my-2 max-w-[210px] sm:max-w-[240px] overflow-hidden rounded-sm border border-[#dfba73]/50 shadow-2xl">
              <img
                src={COUPLE_IMG}
                alt="Najeem & Mirsha Couple"
                width={853}
                height={1024}
                className="w-full object-cover"
              />
            </div>

            {/* Couple Name & Date inside */}
            <div className="relative pb-3">
              <h2 className="font-['Great_Vibes'] text-3xl sm:text-4xl text-[#dfba73] leading-tight drop-shadow">
                Najeem &amp; Mirsha
              </h2>
              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="h-px w-10 bg-[#dfba73]/40" />
                <span className="font-['Cinzel'] text-[10px] sm:text-[11px] tracking-[0.3em] text-[#fdfbf7]/80 uppercase">
                  08 NOVEMBER 2026
                </span>
                <span className="h-px w-10 bg-[#dfba73]/40" />
              </div>
              <p className="mt-1 font-serif text-[11px] sm:text-xs text-[#dfba73] italic">
                Sagar Auditorium, Kavumpuram
              </p>
            </div>
          </div>

          {/* ======================================================= */}
          {/* LEFT GATEFOLD DOOR (Swings Outward to Left in 3D)       */}
          {/* ======================================================= */}
          <div
            className={`gatefold-left-door velvet absolute inset-y-0 left-0 w-1/2 border-y border-l border-[#dfba73]/60 rounded-l-sm shadow-2xl overflow-hidden z-20 ${
              doorsOpen ? 'open' : ''
            }`}
          >
            {/* Inner Border Frame */}
            <div className="pointer-events-none absolute inset-2.5 border border-[#dfba73]/50" />
            <div className="pointer-events-none absolute inset-4 border border-[#dfba73]/25" />

            {/* Gold Corner Foliage */}
            <GoldFoliage className="absolute left-1 top-1 h-28 w-28 text-[#dfba73] pointer-events-none opacity-90" />
            <GoldFoliage className="absolute left-1 bottom-1 h-28 w-28 -scale-y-100 text-[#dfba73] pointer-events-none opacity-90" />

            {/* Split Silk Ribbon (Left Half - Exactly Centered) */}
            <div
              className="silk-gold-ribbon absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 border-y border-[#dfba73]/70 flex items-center justify-end pr-2 transition-all duration-700 ease-out"
              style={{
                transform: unsealing ? 'translateX(-115%)' : 'none',
                opacity: unsealing ? 0 : 1,
              }}
            >
              <span className="h-0.5 w-8 bg-[#8f6a2b]/35 rounded-full" />
            </div>

            {/* Right edge shadow for door depth */}
            <div className="absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-black/60 to-transparent pointer-events-none" />
          </div>

          {/* ======================================================= */}
          {/* RIGHT GATEFOLD DOOR (Swings Outward to Right in 3D)     */}
          {/* ======================================================= */}
          <div
            className={`gatefold-right-door velvet absolute inset-y-0 right-0 w-1/2 border-y border-r border-[#dfba73]/60 rounded-r-sm shadow-2xl overflow-hidden z-20 ${
              doorsOpen ? 'open' : ''
            }`}
          >
            {/* Inner Border Frame */}
            <div className="pointer-events-none absolute inset-2.5 border border-[#dfba73]/50" />
            <div className="pointer-events-none absolute inset-4 border border-[#dfba73]/25" />

            {/* Gold Corner Foliage (Flipped) */}
            <GoldFoliage className="absolute right-1 top-1 h-28 w-28 -scale-x-100 text-[#dfba73] pointer-events-none opacity-90" />
            <GoldFoliage className="absolute right-1 bottom-1 h-28 w-28 -scale-x-100 -scale-y-100 text-[#dfba73] pointer-events-none opacity-90" />

            {/* Split Silk Ribbon (Right Half - Exactly Centered) */}
            <div
              className="silk-gold-ribbon absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 border-y border-[#dfba73]/70 flex items-center justify-start pl-2 transition-all duration-700 ease-out"
              style={{
                transform: unsealing ? 'translateX(115%)' : 'none',
                opacity: unsealing ? 0 : 1,
              }}
            >
              <span className="h-0.5 w-8 bg-[#8f6a2b]/35 rounded-full" />
            </div>

            {/* Left edge shadow for door depth */}
            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
          </div>

          {/* ======================================================= */}
          {/* ROYAL 3D WAX SEAL (Centered with Flexbox Inset-0)       */}
          {/* ======================================================= */}
          <div
            className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none transition-all duration-700"
            style={{
              opacity: unsealing ? 0 : 1,
              transform: `scale(${unsealing ? 1.3 : 1})`,
            }}
          >
            {/* Concentric Golden Halo Glow */}
            <div className="pulse-gold relative flex items-center justify-center rounded-full">
              {/* Outer Golden Wax Edge */}
              <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#dfba73] via-[#05241c] to-[#041c16] p-1.5 shadow-[0_14px_32px_rgba(0,0,0,0.9)] border-2 border-[#dfba73]">
                {/* Inner Wax Texture */}
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#05261e] border border-[#dfba73]/70 shadow-inner">
                  {/* Decorative Wreath Ring */}
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-[#dfba73]/40" />

                  {/* Clean Monogram Stamp: N ♡ M */}
                  <div className="text-center select-none">
                    <p className="font-['Cinzel'] text-sm sm:text-base font-bold tracking-widest text-[#dfba73] drop-shadow-md">
                      N ♡ M
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Section Title with Ornate Line
function SectionTitle({ children }) {
  return (
    <div className="mb-8 text-center">
      <p className="font-['Cinzel'] text-xs sm:text-sm tracking-[0.45em] text-[#dfba73] uppercase font-semibold">{children}</p>
      <OrnateDiamondLine className="mx-auto mt-3 h-3 w-40 text-[#dfba73]/70" />
    </div>
  );
}

// Section Container with Scroll Reveal
function RevealSection({ children, className = '' }) {
  return <section className={`reveal relative px-4 sm:px-6 py-16 text-center ${className}`}>{children}</section>;
}

// Main Opened Invitation Page (Emerald & Gold Theme)
function OpenedInvitation() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="mx-auto max-w-[560px] animate-fade-in emerald-texture border-x border-[#dfba73]/25 lg:max-w-none lg:border-x-0 shadow-2xl relative overflow-hidden">
      {/* Golden Foliage in Top Corners of Main Page */}
      <GoldFoliage className="absolute left-0 top-0 h-40 w-40 text-[#dfba73] pointer-events-none opacity-85" />
      <GoldFoliage className="absolute right-0 top-0 h-40 w-40 -scale-x-100 text-[#dfba73] pointer-events-none opacity-85" />

      {/* 1. Islamic Invocation & Couple Announcement (Exact Reference Card Styling) */}
      <RevealSection className="pt-20 pb-12 relative">
        {/* Bismillah */}
        <p className="font-['Amiri'] text-3xl sm:text-4xl leading-loose text-[#dfba73] drop-shadow" dir="rtl" lang="ar">
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>
        <div className="my-2 flex items-center justify-center">
          <span className="h-1.5 w-1.5 rotate-45 border border-[#dfba73] bg-[#dfba73]" />
        </div>

        {/* Invitation Text from Reference */}
        <p className="mt-6 text-base sm:text-lg text-[#fdfbf7]/90 max-w-sm mx-auto font-serif leading-relaxed">
          With hearts full of joy,
          <br />
          we warmly invite you to celebrate
          <br />
          the wedding of
        </p>

        {/* Couple Names in Calligraphic Script */}
        <div className="mt-8 space-y-1">
          <h2 className="font-['Great_Vibes'] text-5xl sm:text-7xl leading-tight text-[#dfba73] drop-shadow-lg">
            Najeem
          </h2>
          <p className="font-serif text-2xl sm:text-3xl text-[#f5d58f] italic py-1">&amp;</p>
          <h2 className="font-['Great_Vibes'] text-5xl sm:text-7xl leading-tight text-[#dfba73] drop-shadow-lg">
            Mirsha
          </h2>
        </div>

        {/* Reference Date Block: NOVEMBER | SUNDAY 08 AT 11 AM | 2026 */}
        <div className="mt-8">
          <ReferenceDateBlock />
        </div>

        {/* Venue Text from Reference */}
        <div className="mt-4 font-['Cinzel'] tracking-wider text-[#dfba73]">
          <p className="text-sm sm:text-base font-bold">SAGAR AUDITORIUM</p>
          <p className="text-xs sm:text-sm text-[#fdfbf7]/80">KAVUMPURAM, VALANCHERY</p>
        </div>

        <FloralDivider className="mt-12 text-[#dfba73]" />
      </RevealSection>

      {/* 2. Save The Date Reveal */}
      <RevealSection className="py-12">
        <RoyalSaveTheDateReveal />
      </RevealSection>

      {/* 3. Live Countdown */}
      <RevealSection className="py-12">
        <SectionTitle>COUNTING THE MOMENTS</SectionTitle>
        <CountdownTimer />
      </RevealSection>

      {/* 4. The Celebration & Venue Card */}
      <RevealSection className="py-12">
        <SectionTitle>THE CELEBRATION</SectionTitle>
        <div className="emerald-card mx-auto max-w-md rounded-sm p-6 sm:p-8 text-[#fdfbf7] shadow-2xl bg-[#041c16]/75 border border-[#dfba73]/40">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#dfba73]/15 text-[#dfba73]">
            <MapPin className="h-6 w-6 text-[#dfba73]" />
          </div>
          <p className="mt-3 font-['Cinzel'] text-xl sm:text-2xl tracking-wider text-[#dfba73] font-bold">
            Sagar Auditorium
          </p>
          <p className="mt-1 text-base sm:text-lg font-serif text-[#fdfbf7]/90">
            Kavumpuram, Valanchery, Kerala
          </p>

          <OrnateDiamondLine className="mx-auto my-4 h-3 w-32 text-[#dfba73]/70" />

          <div className="space-y-1 font-serif text-lg">
            <p className="flex items-center justify-center gap-2 text-[#dfba73] font-medium">
              <Calendar className="h-4 w-4" /> Sunday, 8 November 2026
            </p>
            <p className="flex items-center justify-center gap-2 text-[#fdfbf7]/80">
              <Clock className="h-4 w-4" /> 11:00 AM onwards
            </p>
          </div>

          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-[#dfba73] bg-[#072920] px-7 py-3 font-['Cinzel'] text-xs tracking-[0.3em] text-[#f5d58f] transition hover:bg-[#0b3a2d] shadow-lg cursor-pointer"
          >
            <Navigation className="h-3.5 w-3.5" />
            VENUE LOCATION
          </a>
        </div>
      </RevealSection>

      {/* 5. With the Blessings of Our Families */}
      <RevealSection className="py-12">
        <SectionTitle>WITH THE BLESSINGS OF OUR FAMILIES</SectionTitle>
        <div className="space-y-8 max-w-md mx-auto">
          <div>
            <p className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#dfba73]">Muhammed Najeem</p>
            <p className="mt-1 text-base sm:text-lg text-[#fdfbf7]/85 font-serif">
              Son of Hamza &amp; Ayisha
            </p>
            <p className="text-sm text-[#dfba73] font-serif italic">Chenakkattil (H), Vengad</p>
          </div>

          <FloralDivider className="text-[#dfba73]/70" />

          <div>
            <p className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#dfba73]">Fathima Mirsha</p>
            <p className="mt-1 text-base sm:text-lg text-[#fdfbf7]/85 font-serif">
              Daughter of Abdul Vahab &amp; Sameera
            </p>
            <p className="text-sm text-[#dfba73] font-serif italic">Pullat (H), Vaniyanoor</p>
          </div>
        </div>
      </RevealSection>

      {/* 6. Quranic Verse (Surah Ar-Rum 30:21) */}
      <RevealSection className="py-12">
        <SectionTitle>A SACRED COVENANT</SectionTitle>
        <div className="space-y-6 max-w-lg mx-auto">
          <div className="rounded-sm border border-[#dfba73]/40 bg-[#041c16]/75 p-6 shadow-2xl">
            <p className="font-['Amiri'] text-xl sm:text-2xl leading-loose text-[#dfba73]" dir="rtl" lang="ar">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm sm:text-base italic text-[#fdfbf7]/90 font-serif">
              “And among His signs is that He created for you spouses from among yourselves so that you may find tranquility in them, and He placed between you affection and mercy.”
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-[#dfba73] font-['Cinzel']">— Surah Ar-Rum (30:21)</p>
          </div>
        </div>
      </RevealSection>

      {/* 7. Interactive Guest Wishes Guestbook */}
      <RevealSection className="py-12">
        <SectionTitle>WISHES &amp; BLESSINGS</SectionTitle>
        <WishesSection />
      </RevealSection>

      {/* 8. Warm Closing Message with Prophetic Du'a */}
      <RevealSection className="pt-12 pb-28">
        <FloralDivider className="text-[#dfba73]" />
        <div className="mt-8 space-y-4 max-w-md mx-auto">
          {/* Prophetic Du'a */}
          <p className="font-['Amiri'] text-2xl sm:text-3xl leading-loose text-[#dfba73]" dir="rtl" lang="ar">
            بَارَكَ ٱللَّٰهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm sm:text-base italic text-[#fdfbf7]/85 font-serif">
            “May Allah bless you both, shower His blessings upon you, and unite you in goodness.”
          </p>
          <p className="font-serif text-lg text-[#dfba73] pt-2">
            Your presence and prayers will make our day even more special.
          </p>
          <div className="pt-6">
            <p className="font-['Great_Vibes'] text-5xl sm:text-6xl text-[#dfba73]">
              Najeem &amp; Mirsha
            </p>
          </div>
        </div>
      </RevealSection>
    </main>
  );
}

// Top-Level App Component
export default function App() {
  const [stage, setStage] = useState('closed'); // 'closed' | 'opening' | 'open'
  const [hasTapped, setHasTapped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Once user taps or opens the invitation, continuous leaves fall full-time
  const isLeafFallingActive = hasTapped || stage !== 'closed';

  // Audio start & volume fade-in
  const handleStartAudio = () => {
    setHasTapped(true);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          let vol = 0;
          const fadeTimer = setInterval(() => {
            vol = Math.min(0.7, vol + 0.035);
            audio.volume = vol;
            if (vol >= 0.7) clearInterval(fadeTimer);
          }, 120);
        })
        .catch(() => {
          // Autoplay policy prevented playback, user can toggle later
        });
    }

    // After 3D doors swing open, transition to full opened invitation view
    setTimeout(() => {
      setStage('open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1850);
  };

  // Music toggle handler
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#031812] text-[#fdfbf7] selection:bg-[#0b3a2d] selection:text-[#f5d58f] relative">
      {/* Background Wedding Invitation Music */}
      <audio ref={audioRef} src={WEDDING_AUDIO} loop preload="auto" />

      {/* Full-Time Continuous Falling Leaves (Activated after tap / open) */}
      {isLeafFallingActive && <ContinuousFallingLeaves count={18} />}

      {/* Interactive Golden Leaves Shower on Tap/Click */}
      <InteractivePetals onTap={() => setHasTapped(true)} />

      {/* Dynamic View: Royal 3D Gatefold Opening vs Opened Invitation */}
      {stage === 'open' ? (
        <OpenedInvitation />
      ) : (
        <RoyalGatefoldOpening stage={stage} onStartOpen={handleStartAudio} />
      )}

      {/* Floating Music Button (Available once opened) */}
      {stage === 'open' && (
        <button
          onClick={toggleMusic}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          className="pulse-gold fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#dfba73] bg-[#072920]/95 text-[#dfba73] shadow-2xl backdrop-blur transition hover:scale-105 cursor-pointer"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
        </button>
      )}
    </div>
  );
}
