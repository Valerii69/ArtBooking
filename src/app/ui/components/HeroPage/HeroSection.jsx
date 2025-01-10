import * as React from 'react';
import { HeroImage } from './HeroImage';
import { HeroContent } from './HeroContent';
import { NavigationBar } from '@/src/app/ui/components/header/';
// import BgDesk from '@/src/app/images/BgDesk.jpg';

export function HeroSection() {
  return (
    <div className="main-container bg-custom-image bg-cover bg-center">
      <NavigationBar />
      <div className="my-[10px] flex justify-between gap-[10px]">
        <HeroImage />
        <HeroContent />
      </div>
    </div>
  );
}
