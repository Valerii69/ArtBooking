import { HeroSection } from './ui/components/heroPage/HeroSection';
import { Gallery } from './ui/components/artGallery/';

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 bg-purple-50 top-8">
          <HeroSection />
          <Gallery />
        </div>
      </div>
    </>
  );
}
