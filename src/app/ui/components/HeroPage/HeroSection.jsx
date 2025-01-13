import * as React from 'react';
import { HeroImage } from '@/src/app/ui/components/heroPage/HeroImage';
import { HeroContent } from '@/src/app/ui/components/heroPage/HeroContent';
import {SwiperComponent} from '@/src/app/ui/components/SwiperComponent';

export function HeroSection() {
  return (
    <div className="main-container bg-body-gradient1 bg-cover bg-center h-auto">
      <div className="mb-[16px] mt-[100px] mx-[100px] flex justify-between gap-[10px]">
        <HeroImage />
        <HeroContent />
      </div>
      <div className='h-[400px]  flex items-center justify-center'>
        <SwiperComponent />
      </div>
    </div>
  );
}
