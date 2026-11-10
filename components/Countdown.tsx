'use client';

import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  } | null>(null);
  const [isToday, setIsToday] = useState(false);
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2026-12-12T09:30:00+01:00').getTime();
    const endOfDay = new Date('2026-12-12T23:59:59+01:00').getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        if (now <= endOfDay) {
          setIsToday(true);
        } else {
          setIsPast(true);
        }
        return;
      }

      const seconds = Math.floor(diff / 1000);
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      setTimeLeft({
        days: String(days),
        hours: hours < 10 ? `0${hours}` : String(hours),
        minutes: minutes < 10 ? `0${minutes}` : String(minutes),
        seconds: secs < 10 ? `0${secs}` : String(secs),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[var(--color-night)] text-[var(--color-on-dark)] relative z-[3] -mt-[30px] rounded-t-[30px]" aria-labelledby="cd-title">
      <div className="max-w-[1080px] mx-auto px-6 py-[60px]">
        <p className="mb-[18px] text-base font-medium tracking-wide text-[var(--color-gold)]" id="cd-title">
          {isToday ? "C'est aujourd'hui" : isPast ? "Merci" : "Le grand jour approche"}
        </p>

        {!isToday && !isPast && timeLeft && (
          <>
            <div className="grid grid-cols-4 max-w-[680px]" role="timer" aria-live="off">
              <div className="pl-0 border-l-0">
                <b className="block font-extralight text-[clamp(40px,11.5vw,80px)] leading-none tabular-nums text-[var(--color-on-dark)]">
                  {timeLeft.days}
                </b>
                <span className="block mt-2.5 text-[15px] sm:text-[15px] font-normal tracking-wide text-[var(--color-gold)]">
                  Jours
                </span>
              </div>
              <div className="pl-3.5 sm:pl-3.5 border-l border-[rgba(201,169,97,0.38)]">
                <b className="block font-extralight text-[clamp(40px,11.5vw,80px)] leading-none tabular-nums text-[var(--color-on-dark)]">
                  {timeLeft.hours}
                </b>
                <span className="block mt-2.5 text-[13px] sm:text-[15px] font-normal tracking-wide text-[var(--color-gold)]">
                  Heures
                </span>
              </div>
              <div className="pl-3.5 sm:pl-3.5 border-l border-[rgba(201,169,97,0.38)]">
                <b className="block font-extralight text-[clamp(40px,11.5vw,80px)] leading-none tabular-nums text-[var(--color-on-dark)]">
                  {timeLeft.minutes}
                </b>
                <span className="block mt-2.5 text-[13px] sm:text-[15px] font-normal tracking-wide text-[var(--color-gold)]">
                  Minutes
                </span>
              </div>
              <div className="pl-2.5 sm:pl-3.5 border-l border-[rgba(201,169,97,0.38)]">
                <b className="block font-extralight text-[clamp(40px,11.5vw,80px)] leading-none tabular-nums text-[var(--color-on-dark)]">
                  {timeLeft.seconds}
                </b>
                <span className="block mt-2.5 text-[13px] sm:text-[15px] font-normal tracking-wide text-[var(--color-gold)]">
                  Secondes
                </span>
              </div>
            </div>
            <p className="mt-[26px] mb-0 text-[rgba(246,242,238,0.72)]">
              avant la bénédiction nuptiale, le samedi 12 décembre à 9h30.
            </p>
          </>
        )}

        {isToday && (
          <p className="m-0 text-[32px] font-extralight leading-[1.3]">
            Thierry et Grâce se disent oui.
          </p>
        )}

        {isPast && (
          <p className="m-0 text-[32px] font-extralight leading-[1.3]">
            Merci d&apos;avoir partagé ce jour avec nous.
          </p>
        )}
      </div>
    </section>
  );
}
