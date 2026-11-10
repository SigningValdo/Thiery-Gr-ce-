import Image from 'next/image';

export default function Story() {
  const photos = [
    {
      src: '/img/couple-2.jpg',
      alt: 'Thierry et Grâce face à face, elle une jambe levée, dans la même tenue sombre et bordeaux',
      width: 853,
      height: 1280,
    },
    {
      src: '/img/couple-3.jpg',
      alt: 'Thierry, en chemise verte, tient le menton de Grâce, qui rit, en haut vert et pantalon bordeaux',
      width: 853,
      height: 1280,
      extraClass: 'md:mt-14',
    },
    {
      src: '/img/couple-4.jpg',
      alt: 'Thierry et Grâce enlacés, en tenues bordeaux brodées de motifs dorés',
      width: 853,
      height: 1280,
      extraClass: 'col-span-2 md:col-span-1 md:mt-[22px]',
      aspectRatio: 'md:aspect-[2/3]',
    },
  ];

  return (
    <section className="bg-[var(--color-paper)]" aria-labelledby="hist">
      <div className="max-w-[1080px] mx-auto px-6 py-[72px] pb-[76px]">
        <p className="mb-[18px] text-base font-medium tracking-wide text-[var(--color-muted)]" id="hist">
          Notre histoire
        </p>

        <p className="m-0 max-w-[22em] font-serif italic font-medium text-[clamp(28px,6.6vw,44px)] leading-[1.28] text-[var(--color-ink)] [text-wrap:pretty] before:content-[''] before:block before:w-14 before:h-px before:mb-7 before:bg-[var(--color-accent)]">
          Deux âmes qui se sont mises au diapason, deux cœurs qui battent à l&apos;unisson, ils se sont promis une vie de bonheur ensemble et se sont dit oui sous une pluie de belles fleurs.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-4 mt-11 items-start">
          {photos.map((photo, index) => (
            <figure
              key={index}
              className={`m-0 overflow-hidden bg-[var(--color-night)] rounded-2xl group ${photo.extraClass || ''}`}
            >
              <Image
                loading="lazy"
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className={`block w-full h-auto ${photo.aspectRatio ? photo.aspectRatio : 'aspect-[2/3]'} object-cover object-[50%_20%] transition-transform duration-[0.9s] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105 ${index === 2 ? 'md:object-[50%_20%] aspect-[4/3]' : ''}`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
