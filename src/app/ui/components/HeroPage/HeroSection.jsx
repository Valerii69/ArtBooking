import * as React from 'react';
import {HeroImage} from './HeroImage';
import {HeroContent} from './HeroContent';

export  function HeroSection() {
  return (
    <div className="main-container">
      <div className="flex-between flex gap-5">
        <HeroImage />
        <HeroContent />
      </div>
    </div>
  );
}
