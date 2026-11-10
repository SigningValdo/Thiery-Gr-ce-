'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import Story from '@/components/Story';
import Program from '@/components/Program';
import RSVP from '@/components/RSVP';
import Footer from '@/components/Footer';
import FloatingButton from '@/components/FloatingButton';

export default function Home() {
  const [guestName, setGuestName] = useState<string>('');

  useEffect(() => {
    const parseGuestFromHash = () => {
      const hash = window.location.hash.slice(1).toLowerCase();
      if (!/^[a-z0-9-]{2,60}$/.test(hash)) return '';

      const words: Record<string, string> = {
        m: 'M.',
        mr: 'M.',
        mme: 'Mme',
        mlle: 'Mlle',
        dr: 'Dr',
        pr: 'Pr',
        et: 'et',
        de: 'de',
        du: 'du',
        des: 'des',
        la: 'la',
        le: 'le',
        famille: 'Famille',
      };

      return hash
        .split('-')
        .filter(Boolean)
        .map((word) => words[word] || word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };

    const updateGuest = () => {
      const guest = parseGuestFromHash();
      setGuestName(guest);
    };

    updateGuest();
    window.addEventListener('hashchange', updateGuest);

    return () => window.removeEventListener('hashchange', updateGuest);
  }, []);

  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp-sec');
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Hero guestName={guestName} onRSVPClick={scrollToRSVP} />
      <main>
        <Countdown />
        <Story />
        <Program />
        <RSVP initialName={guestName} />
      </main>
      <FloatingButton onRSVPClick={scrollToRSVP} />
      <Footer />
    </>
  );
}
