import * as React from 'react';
import {HeroImage} from './HeroImage';
import {HeroContent} from './HeroContent';

export  function HeroSection() {
  return (
    <div className="main-container">
      <div className="flex-between flex gap-10px my-[10px]">
        <HeroImage />
        <HeroContent />
      </div>
    </div>
  );
}
