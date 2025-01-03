import * as React from 'react';
import Image from 'next/image';
import Abstrakt from'@/src/app/images/Abstrakt.png';

export function HeroImage() {
  return (
    <div className="flex w-140px h-140px  max-md:ml-0 ">
      <Image
        loading="lazy"
        src={Abstrakt}
        alt="Ink House art collection showcase"
        // fill
      />
    </div>
  );
}
