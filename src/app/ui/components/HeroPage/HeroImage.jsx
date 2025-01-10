import * as React from 'react';
import Image from 'next/image';
import Abstrakt from'@/src/app/public/Abstrakt.png';

export function HeroImage() {
  return (
    <div className="flex max-md:ml-0 ">
      <Image
        loading="lazy"
        src={Abstrakt}
        alt="Ink House art collection showcase"
        width={400}
        height={400}

      />
    </div>
  );
}
