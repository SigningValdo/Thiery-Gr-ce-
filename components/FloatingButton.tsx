'use client';

import { useState, useEffect } from 'react';

interface FloatingButtonProps {
  onRSVPClick: () => void;
}

export default function FloatingButton({ onRSVPClick }: FloatingButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroElement = document.querySelector('header');
    const rsvpElement = document.getElementById('rsvp-sec');
    const footerElement = document.querySelector('footer');

    const seen = {
      hero: true,
      rsvp: false,
      footer: false,
    };

    const updateVisibility = () => {
      setIsVisible(!seen.hero && !seen.rsvp && !seen.footer);
    };

    if ('IntersectionObserver' in window) {
      if (heroElement) {
        new IntersectionObserver((entries) => {
          seen.hero = entries[0].isIntersecting;
          updateVisibility();
        }).observe(heroElement);
      }

      if (rsvpElement) {
        new IntersectionObserver((entries) => {
          seen.rsvp = entries[0].isIntersecting;
          updateVisibility();
        }).observe(rsvpElement);
      }

      if (footerElement) {
        new IntersectionObserver((entries) => {
          seen.footer = entries[0].isIntersecting;
          updateVisibility();
        }).observe(footerElement);
      }
    }
  }, []);

  return (
    <button
      className={`fixed z-30 left-1/2 bottom-4 shadow-[0_12px_32px_rgba(43,8,18,0.4)] border-[rgba(255,226,168,0.7)] whitespace-nowrap inline-flex items-center justify-center gap-2.5 min-h-[52px] px-[30px] py-4 font-medium text-base tracking-wide text-white bg-[var(--color-accent)] border border-[var(--color-accent)] rounded-full cursor-pointer transition-all duration-[0.4s] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:bg-[var(--color-accent-deep)] hover:border-[var(--color-accent-deep)] active:translate-y-px ${
        isVisible
          ? '-translate-x-1/2 opacity-100 visible'
          : '-translate-x-1/2 translate-y-[140%] opacity-0 invisible'
      }`}
      type="button"
      onClick={onRSVPClick}
    >
      Confirmer ma présence
    </button>
  );
}
