export default function Program() {
  const events = [
    {
      title: 'Bénédiction nuptiale',
      time: '9h30',
      location: 'en la Chapelle Saint-Esprit de Mvolyé',
      mapQuery: 'Chapelle+Saint+Esprit+Mvoly%C3%A9+Yaound%C3%A9',
      calendarEvent: {
        title: 'Mariage+de+Thierry+et+Gr%C3%A2ce+-+B%C3%A9n%C3%A9diction+nuptiale',
        dates: '20261212T083000Z/20261212T103000Z',
        location: 'Chapelle+Saint+Esprit+de+Mvoly%C3%A9%2C+Yaound%C3%A9',
      },
    },
    {
      title: 'Réception',
      time: '19h00',
      timePrefix: 'à partir de',
      location: 'à la Salle Polyvalente de la Brigade, Quartier Général, Yaoundé',
      mapQuery: 'Salle+Polyvalente+de+la+Brigade+Quartier+G%C3%A9n%C3%A9ral+Yaound%C3%A9',
      calendarEvent: {
        title: 'Mariage+de+Thierry+et+Gr%C3%A2ce+-+R%C3%A9ception',
        dates: '20261212T180000Z/20261212T230000Z',
        location: 'Salle+Polyvalente+de+la+Brigade%2C+Quartier+G%C3%A9n%C3%A9ral%2C+Yaound%C3%A9',
      },
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[var(--color-emerald)] to-[var(--color-emerald-deep)] text-[var(--color-on-dark)]" aria-labelledby="prog">
      <div className="max-w-[1080px] mx-auto px-6 py-[72px] pb-[76px]">
        <p className="mb-[18px] text-base font-medium tracking-wide text-[var(--color-gold)]" id="prog">
          Ordre des événements
        </p>

        <ol className="m-0 p-0 list-none grid gap-0 md:grid-cols-2">
          {events.map((event, index) => (
            <li
              key={index}
              className={`py-[34px] border-t border-[rgba(201,169,97,0.4)] min-w-0 md:py-0 md:border-t-0 ${
                index === 0
                  ? 'border-t-0 pt-0 md:pr-12'
                  : 'md:pl-12 md:border-l md:border-[rgba(201,169,97,0.4)]'
              }`}
            >
              <h3 className="m-0 font-serif italic font-semibold text-[28px] leading-[1.1] text-[var(--color-gold)]">
                {event.title}
              </h3>

              <p className="mt-3.5 mb-0 flex flex-wrap items-baseline gap-x-3.5 gap-y-1 font-extralight text-[clamp(64px,17vw,104px)] leading-none tracking-wide tabular-nums">
                {event.timePrefix && (
                  <small className="font-serif italic font-medium text-2xl tracking-normal text-[var(--color-gold-soft)]">
                    {event.timePrefix}
                  </small>
                )}
                {event.time}
              </p>

              <p className="mt-4 mb-0 max-w-[16em] text-[23px] font-light leading-[1.35] [text-wrap:balance]">
                {event.location}
              </p>

              <div className="flex flex-wrap gap-x-7 gap-y-3.5 mt-[22px]">
                <a
                  className="inline-flex items-center gap-2.5 py-2 pb-1 text-base font-medium tracking-wide no-underline text-[var(--color-gold-soft)] border-b border-[var(--color-gold)] transition-colors hover:text-white hover:border-white"
                  href={`https://www.google.com/maps/search/?api=1&query=${event.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[17px] h-[17px] flex-none" aria-hidden="true">
                    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
                    <circle cx="12" cy="10" r="2.4" />
                  </svg>
                  Voir l&apos;itinéraire
                </a>

                <a
                  className="inline-flex items-center gap-2.5 py-2 pb-1 text-base font-medium tracking-wide no-underline text-[var(--color-gold-soft)] border-b border-[var(--color-gold)] transition-colors hover:text-white hover:border-white"
                  href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${event.calendarEvent.title}&dates=${event.calendarEvent.dates}&location=${event.calendarEvent.location}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-[17px] h-[17px] flex-none" aria-hidden="true">
                    <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
                    <path d="M3.5 10h17M8 3v4M16 3v4" />
                  </svg>
                  Ajouter à mon agenda
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
