export default function Footer() {
  return (
    <footer className="bg-[var(--color-night)] text-[var(--color-on-dark)] relative">
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-70"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
        }}
      />
      <div className="max-w-[1080px] mx-auto px-6 py-14 pb-16 grid gap-4 justify-items-start">
        <p className="m-0 font-serif italic font-semibold text-[clamp(40px,10vw,68px)] leading-[1.05] text-[var(--color-on-dark)]">
          Thierry <i className="font-medium text-[var(--color-gold)] px-[0.1em]">&amp;</i> Grâce
        </p>
        <p className="m-0 text-base font-normal tracking-wide text-[rgba(246,242,238,0.72)]">
          Samedi 12 décembre 2026, à Yaoundé
        </p>
        <p className="m-0 text-base font-normal tracking-wide text-[rgba(246,242,238,0.72)]">
          Photos : Air Force Studio
        </p>
      </div>
    </footer>
  );
}
