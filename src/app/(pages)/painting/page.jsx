import * as React from 'react';
import { Gallery } from '@/src/app/ui/components/artGallery';

export default function PaintingPage() {
  return (

      <div className="flex flex-col items-center gap-8">
        <div className="top-8 flex flex-col items-center gap-4 bg-purple-50">
    
          <Gallery />
        </div>
      </div>
   
  );
}
