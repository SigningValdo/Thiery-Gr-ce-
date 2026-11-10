'use client';

import Image from 'next/image';

interface HeroProps {
  guestName?: string;
  onRSVPClick: () => void;
}

export default function Hero({ guestName, onRSVPClick }: HeroProps) {
  return (
    <header className="relative isolate overflow-hidden text-center min-h-screen text-[#FFF6E6] pt-14"
      style={{
        background: `
          radial-gradient(90% 20% at 50% 100%, rgba(255, 205, 110, 0.6) 0%, rgba(255, 205, 110, 0) 100%),
          linear-gradient(180deg, #0B0709 0%, #0B0709 44%, #5E0B34 59%, #A3154F 72%, #E03472 86%, #FF9A55 100%)
        `
      }}
    >
      {/* Monogram */}
      <div className="absolute z-[5] top-0 left-0 right-0 flex justify-center pt-3.5">
        <span className="grid place-items-center w-10 h-10 border border-[rgba(255,226,168,0.85)] rounded-full font-serif italic font-semibold text-[17px] tracking-wider text-[#FFE2A8]"
          aria-hidden="true">
          T&amp;G
        </span>
      </div>

      {/* Hero Photo */}
      <figure className="relative z-0 mx-auto w-full max-w-[520px]">
        <Image
          src="/img/couple-1.jpg"
          alt="Grâce, en robe bordeaux à paillettes, sourit les yeux fermés dans les bras de Thierry, en veste noire"
          width={1024}
          height={1536}
          priority
          className="block w-full h-auto object-cover object-[50%_0%] animate-[fade_1.4s_ease_both]"
          style={{
            aspectRatio: '5 / 7',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0, #000 7%, #000 62%, transparent 100%)',
            maskImage: 'linear-gradient(180deg, transparent 0, #000 7%, #000 62%, transparent 100%)',
          }}
        />
      </figure>

      {/* Glow Effects */}
      <div className="absolute z-[1] inset-0 pointer-events-none mix-blend-screen"
        style={{
          background: `
            radial-gradient(46% 30% at 4% 5%, rgba(255, 184, 64, 0.6) 0%, rgba(255, 184, 64, 0) 100%),
            radial-gradient(48% 32% at 98% 8%, rgba(255, 64, 138, 0.55) 0%, rgba(255, 64, 138, 0) 100%)
          `
        }}
        aria-hidden="true"
      />

      {/* Bokeh */}
      <div className="absolute z-[1] left-0 right-0 top-0 h-[62%] pointer-events-none mix-blend-screen blur-[0.8px]"
        style={{
          background: `
            radial-gradient(circle at 11% 34%, rgba(255, 205, 120, .20) 0 24px, rgba(255, 205, 120,0) 31px),
            radial-gradient(circle at 24% 13%, rgba(255, 205, 120, .34) 0 9px, rgba(255, 205, 120,0) 16px),
            radial-gradient(circle at 7% 66%, rgba(255, 120, 170, .24) 0 13px, rgba(255, 120, 170,0) 20px),
            radial-gradient(circle at 29% 50%, rgba(255, 240, 220, .30) 0 6px, rgba(255, 240, 220,0) 13px),
            radial-gradient(circle at 89% 30%, rgba(255, 120, 170, .22) 0 21px, rgba(255, 120, 170,0) 28px),
            radial-gradient(circle at 77% 9%, rgba(255, 205, 120, .32) 0 11px, rgba(255, 205, 120,0) 18px),
            radial-gradient(circle at 95% 64%, rgba(255, 205, 120, .28) 0 9px, rgba(255, 205, 120,0) 16px),
            radial-gradient(circle at 71% 44%, rgba(255, 240, 220, .30) 0 5px, rgba(255, 240, 220,0) 12px),
            radial-gradient(circle at 42% 5%, rgba(255, 205, 120, .24) 0 7px, rgba(255, 205, 120,0) 14px)
          `
        }}
        aria-hidden="true"
      />

      {/* Grain */}
      <div className="absolute z-[2] inset-0 pointer-events-none opacity-16 mix-blend-soft-light bg-[length:180px_180px]"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .6 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
        aria-hidden="true"
      />

      {/* Sparkles */}
      {[
        { className: 's1', style: { left: '9%', top: '24%' } },
        { className: 's2', style: { right: '8%', top: '17%', width: '15px', height: '15px', animationDelay: '-1.1s' } },
        { className: 's3', style: { right: '6%', top: '40%', width: '24px', height: '24px', animationDelay: '-2s' } },
        { className: 's4', style: { left: '5%', top: '46%', width: '13px', height: '13px', animationDelay: '-0.6s' } },
      ].map((sparkle, i) => (
        <svg
          key={i}
          className={`absolute z-[2] w-5 h-5 pointer-events-none animate-[twinkle_3.2s_ease-in-out_infinite]`}
          style={sparkle.style}
          viewBox="-12 -12 24 24"
          aria-hidden="true"
        >
          <path
            d="M0 -10 C 1 -3 3 -1 10 0 C 3 1 1 3 0 10 C -1 3 -3 1 -10 0 C -3 -1 -1 -3 0 -10 Z"
            fill="#FFD66B"
          />
        </svg>
      ))}

      {/* Hero Text */}
      <div className="relative z-[3] -mt-[118px] pb-[100px] flex flex-col items-center min-w-0 md:-mt-[140px] md:pb-32">
        <p className="mb-0.5 font-serif italic font-semibold text-[23px] tracking-wide text-[#FFE2A8] [text-shadow:0_1px_12px_rgba(40,0,20,0.6)] animate-[rise_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] [animation-delay:0.1s]">
          Faire-part de mariage
        </p>

        <h1 className="m-0 flex flex-wrap justify-center items-baseline gap-x-[0.2em] font-serif italic font-semibold text-[clamp(40px,12.4vw,112px)] leading-[1.04] tracking-[-0.005em] text-[#FFF6E6] [text-shadow:0_2px_28px_rgba(60,0,30,0.55)] animate-[rise_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] [animation-delay:0.22s]">
          <span>Thierry</span>
          <span className="font-medium text-[#FFD66B]">&amp;</span>
          <span>Grâce</span>
        </h1>

        <svg className="block w-[min(280px,70%)] h-[22px] my-3 mx-auto animate-[rise_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] [animation-delay:0.32s]" aria-hidden="true">
          <use href="#orn" />
        </svg>

        <p className="mt-3 mb-0 flex flex-wrap justify-center gap-x-[18px] gap-y-0.5 items-baseline text-2xl font-light leading-[1.3] [text-shadow:0_1px_14px_rgba(60,0,30,0.45)] animate-[rise_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] [animation-delay:0.42s]">
          <strong className="font-medium text-white">Samedi 12 décembre 2026</strong>
          <span className="text-[rgba(255,246,230,0.92)]">Yaoundé, Cameroun</span>
        </p>

        <p className="max-w-[26em] mt-5 mb-7 text-[21px] font-normal leading-[1.5] text-[rgba(255,246,230,0.96)] [text-wrap:balance] [text-shadow:0_1px_14px_rgba(60,0,30,0.45)] animate-[rise_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] [animation-delay:0.52s]">
          {guestName && <span className="text-[#FFE2A8] font-medium">{guestName}, </span>}
          Thierry et Grâce vous invitent à célébrer leur union.
        </p>

        <button
          className="inline-flex items-center justify-center gap-2.5 min-h-[52px] px-[30px] py-4 font-medium text-base tracking-wide text-[var(--color-wine-ink)] bg-[#FFF1CF] border border-[#FFF1CF] rounded-full cursor-pointer transition-all duration-[0.25s] hover:bg-white hover:border-white hover:-translate-y-px shadow-[0_12px_30px_rgba(70,0,35,0.35)] active:translate-y-px animate-[rise_0.9s_cubic-bezier(0.2,0.7,0.2,1)_both] [animation-delay:0.62s]"
          type="button"
          onClick={onRSVPClick}
        >
          Confirmer ma présence
        </button>
      </div>

      {/* SVG Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="goldLine" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="320" y2="0">
            <stop offset="0" stopColor="#B8801F" stopOpacity="0" />
            <stop offset="0.3" stopColor="#C9962E" />
            <stop offset="0.5" stopColor="#E5AE3F" />
            <stop offset="0.7" stopColor="#C9962E" />
            <stop offset="1" stopColor="#B8801F" stopOpacity="0" />
          </linearGradient>
          <symbol id="orn" viewBox="0 0 320 24">
            <g fill="none" stroke="url(#goldLine)" strokeWidth="1.5" strokeLinejoin="miter">
              <path d="M0 12H118M202 12H320" />
              <path d="M160 1L180 12L160 23L140 12Z" />
              <path d="M160 6L172 12L160 18L148 12Z" />
              <path d="M124 12L132 7M124 12L132 17M196 12L188 7M196 12L188 17" />
            </g>
            <circle cx="160" cy="12" r="2.2" fill="#E5AE3F" />
          </symbol>
        </defs>
      </svg>
    </header>
  );
}
