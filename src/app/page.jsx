import { HeroSection } from './ui/components/heroPage/HeroSection';
import { Gallery } from './ui/components/artGallery/';
// import {SwiperSection} from '@/src/app/ui/components/SwiperComponent'

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <div className="top-8 flex flex-col items-center gap-4 bg-purple-50">
          <HeroSection />
          {/* <SwiperSection /> */}
          {/* <Gallery /> */}
        </div>
      </div>
    </>
  );
}
