'use client';

import { useState, useEffect, useRef } from 'react';

interface RSVPProps {
  initialName?: string;
}

export default function RSVP({ initialName = '' }: RSVPProps) {
  const [name, setName] = useState(initialName);
  const [presence, setPresence] = useState<'oui' | 'non' | ''>('');
  const [count, setCount] = useState('1');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const WHATSAPP = '237677136741';

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  const getMessage = () => {
    const displayName = name.trim() || '…';
    const lines = ['Bonjour Thierry et Grâce,'];

    if (presence === 'non') {
      lines.push('Je ne pourrai malheureusement pas être des vôtres pour votre mariage du samedi 12 décembre 2026.');
      lines.push(`Nom : ${displayName}`);
    } else {
      lines.push('Je confirme ma présence à votre mariage du samedi 12 décembre 2026.');
      lines.push(`Nom : ${displayName}`);
      lines.push(`Nombre de personnes : ${count}`);
    }

    if (note.trim()) {
      lines.push(`Message : ${note.trim()}`);
    }

    return lines.join('\n');
  };

  const validate = () => {
    if (!name.trim()) {
      setError('Indiquez votre nom.');
      return false;
    }
    if (!presence) {
      setError('Choisissez votre réponse : présent(e) ou absent(e).');
      return false;
    }
    setError('');
    return true;
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!validate()) {
      e.preventDefault();
    }
  };

  const handleCopy = async () => {
    if (!validate()) return;

    const text = getMessage();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      setCopied(true);
      setError('Copie impossible ici : sélectionnez le message ci-dessus et copiez-le.');
    }
  };

  const message = getMessage();
  const whatsappUrl = WHATSAPP
    ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
    : '#';

  return (
    <section
      ref={sectionRef}
      id="rsvp-sec"
      className="bg-[var(--color-wash)]"
      aria-labelledby="rsvp-title"
    >
      <div className="max-w-[1080px] mx-auto px-6 py-[72px] pb-20">
        <div className="grid gap-[34px] md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-20 md:items-start">
          <div>
            <p className="mb-[18px] text-base font-medium tracking-wide text-[var(--color-muted)]">
              Confirmer votre présence
            </p>
            <h2 className="m-0 text-[clamp(32px,7.6vw,48px)] font-light leading-[1.1] [text-wrap:balance]">
              Dites-nous si vous serez des nôtres.
            </h2>
            <p className="max-w-[26em] mt-4 mb-0 text-[var(--color-muted)]">
              Remplissez ce formulaire : le message est prêt, il ne reste qu&apos;à l&apos;envoyer à Thierry et Grâce sur WhatsApp.
            </p>
          </div>

          <form className="grid gap-7 max-w-[640px]" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-1.5 min-w-0">
              <label htmlFor="f-name" className="text-base font-medium tracking-wide text-[var(--color-muted)]">
                Votre nom
              </label>
              <input
                type="text"
                id="f-name"
                name="name"
                autoComplete="name"
                placeholder="Prénom et nom"
                maxLength={80}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                  setCopied(false);
                }}
                className="w-full text-xl text-[var(--color-ink)] bg-transparent border-0 border-b border-[var(--color-ink)] rounded-none p-2.5 pb-2.5 focus:outline-none focus:border-b-2 focus:border-[var(--color-accent)] focus:pb-2"
              />
            </div>

            <fieldset className="grid gap-1.5 min-w-0 border-0 m-0 p-0">
              <legend className="text-base font-medium tracking-wide text-[var(--color-muted)] p-0">
                Votre réponse
              </legend>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-2.5 mt-2.5">
                {[
                  { value: 'oui', label: 'Je serai présent(e)' },
                  { value: 'non', label: 'Je ne pourrai pas venir' },
                ].map((option) => (
                  <label key={option.value} className="relative block">
                    <input
                      type="radio"
                      name="presence"
                      value={option.value}
                      checked={presence === option.value}
                      onChange={(e) => {
                        setPresence(e.target.value as 'oui' | 'non');
                        setError('');
                        setCopied(false);
                      }}
                      className="absolute opacity-0 inset-0 w-full h-full m-0 cursor-pointer"
                    />
                    <span
                      className={`block p-4 px-3.5 text-center text-lg border rounded-[14px] transition-all ${
                        presence === option.value
                          ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white before:content-["✓_"]'
                          : 'bg-[var(--color-paper)] border-[var(--color-ink)]'
                      }`}
                    >
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {presence === 'oui' && (
              <div className="grid gap-1.5 min-w-0">
                <label htmlFor="f-count" className="text-base font-medium tracking-wide text-[var(--color-muted)]">
                  Nombre de personnes, vous compris
                </label>
                <select
                  id="f-count"
                  name="count"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  className="w-full text-xl text-[var(--color-ink)] bg-transparent border-0 border-b border-[var(--color-ink)] rounded-none p-2.5 pb-2.5 focus:outline-none focus:border-b-2 focus:border-[var(--color-accent)] focus:pb-2"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} personne{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="grid gap-1.5 min-w-0">
              <label htmlFor="f-note" className="text-base font-medium tracking-wide text-[var(--color-muted)]">
                Un mot pour les mariés (facultatif)
              </label>
              <textarea
                id="f-note"
                name="note"
                maxLength={300}
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                  setCopied(false);
                }}
                className="w-full resize-y min-h-[84px] text-xl text-[var(--color-ink)] bg-transparent border-0 border-b border-[var(--color-ink)] rounded-none p-2.5 pb-2.5 focus:outline-none focus:border-b-2 focus:border-[var(--color-accent)] focus:pb-2"
              />
            </div>

            <div className="grid gap-2">
              <span className="m-0 text-base font-medium tracking-wide text-[var(--color-muted)]">
                Message qui sera envoyé
              </span>
              <pre className="m-0 font-sans pl-3.5 border-l-2 border-[var(--color-line)] whitespace-pre-wrap break-words text-base leading-[1.5] text-[var(--color-muted)]">
                {message}
              </pre>
            </div>

            {error && (
              <p className="m-0 min-h-[1.5em] text-base text-[var(--color-alert)]" role="alert">
                {error}
              </p>
            )}

            <div className="flex flex-wrap gap-3 items-center">
              <a
                className="inline-flex items-center justify-center gap-2.5 min-h-[52px] px-[30px] py-4 font-medium text-base tracking-wide text-white bg-[var(--color-accent)] border border-[var(--color-accent)] rounded-full cursor-pointer transition-all hover:bg-[var(--color-accent-deep)] hover:border-[var(--color-accent-deep)] active:translate-y-px"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
              >
                Envoyer sur WhatsApp
              </a>

              <button
                className="inline-flex items-center justify-center gap-2.5 min-h-[52px] px-[30px] py-4 font-medium text-base tracking-wide text-[var(--color-ink)] bg-transparent border border-[var(--color-ink)] rounded-full cursor-pointer transition-all hover:bg-[var(--color-ink)] hover:text-white active:translate-y-px"
                type="button"
                onClick={handleCopy}
              >
                Copier le message
              </button>
            </div>

            {!WHATSAPP && (
              <p className="m-0 text-[15px] text-[var(--color-muted)]">
                Le numéro WhatsApp des mariés n&apos;est pas encore renseigné : en attendant, copiez le message et envoyez-le-leur.
              </p>
            )}

            {copied && (
              <p className="m-0 text-[15px] text-[var(--color-muted)]" role="status">
                Message copié.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
