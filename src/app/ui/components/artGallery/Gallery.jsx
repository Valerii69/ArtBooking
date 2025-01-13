import * as React from 'react';
import { ArtCard } from '@/src/app/ui/components/artGallery/ArtCard';
import { artGalleryData } from '@/src/app/ui/data/artGalleryData';

export function Gallery() {
  return (
    <div className="main-container">
      <div className="mb-4 flex  flex-wrap items-center justify-between gap-10">
        {artGalleryData.map((item, index) => (
          <ArtCard
            key={index}
            artist={item.artist}
            title={item.title}
            size={item.size}
            price={item.price}
            src={item.src}
            width={item.width}
            height={item.height}
          />
        ))}
      </div>
    </div>
  );
}
