import * as React from "react";
import { ArtCard } from "./ArtCard";
import {artGalleryData} from '@/src/app/ui/data/artGalleryData';


export function Gallery() {
  return (
    <div className="main-container">
      <div className="flex flex-wrap items-start gap-8 max-md:max-w-full">
        {artGalleryData.map((item, index) => (
          <ArtCard
            key={index}
            artist={item.artist}
            title={item.title}
            medium={item.medium}
            price={item.price}
            src={item.src}
          />
        ))}
      </div>
    </div>
  );
}