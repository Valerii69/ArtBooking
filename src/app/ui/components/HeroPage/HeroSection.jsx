import * as React from 'react';
import { HeroImage } from './HeroImage';
import { HeroContent } from './HeroContent';

export function HeroSection() {
  return (
    <div className="main-container bg-body-gradient1 bg-cover bg-center">
      <div className="mb-[16px] mt-[100px] flex justify-between gap-[10px]">
        <HeroImage />
        <HeroContent />
      </div>
    </div>
  );
}
