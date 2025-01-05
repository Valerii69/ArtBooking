import * as React from "react";
import { ArtCard } from "./ArtCard";
import {artGalleryData} from '@/src/app/ui/data/artGalleryData';


export function Gallery() {
  return (
    <div className="main-container">
      <div className="flex flex-wrap justify-between items-center gap-10 w-full mb-4 ">
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