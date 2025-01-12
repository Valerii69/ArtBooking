import * as React from 'react';
import { HeroImage } from './HeroImage';
import { HeroContent } from './HeroContent';
import {SwiperComponent} from '@/src/app/ui/components/SwiperComponent';

export function HeroSection() {
  return (
    <div className="main-container bg-body-gradient1 bg-cover bg-center h-auto">
      <div className="mb-[16px] mt-[100px] mx-[100px] flex justify-between gap-[10px]">
        <HeroImage />
        <HeroContent />
      </div>
      <div className='h-[500px]  flex items-center justify-center '>
        <SwiperComponent />
      </div>
    </div>
  );
}
