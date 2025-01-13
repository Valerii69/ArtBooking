import { HeroSection } from '@/src/app/ui/components/heroPage/HeroSection';

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <div className="top-8 flex flex-col items-center gap-4 bg-purple-50">
          <HeroSection />
        </div>
      </div>
    </>
  );
}
