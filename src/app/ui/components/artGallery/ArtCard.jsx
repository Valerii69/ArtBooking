import Image from 'next/image';

export function ArtCard ({ artist, title, medium, price, src }) {
  return (
    <div className="flex w-[370px] min-w-[240px] flex-col items-start overflow-hidden bg-gray-200 px-5 py-6">
      <Image
        loading="lazy"
        src={src}
        alt={`Artwork ${title} by ${artist}`}
        className="aspect-[0.90] w-full self-stretch object-contain"
      />
      <div className="mt-5 text-lg text-neutral-400">{artist}</div>
      <div className="mt-2.5 text-3xl">{title}</div>
      <div className="mt-2 text-lg">{medium}</div>
      <div className="mt-8 text-2xl text-neutral-500"> ₴ {price} </div>
      <button
        className="mt-5 min-h-[65px] gap-1.5 self-stretch border border-solid border-neutral-500 px-16 py-5 text-xl text-neutral-500 max-md:px-5"
        aria-label={`Add ${title} to cart`}
      >
        Bay
      </button>
    </div>
  );
};
