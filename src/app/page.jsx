import { HeroSection } from '../app/ui/components/HeroPage/HeroSection';
export default function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <HeroSection />
        </div>
      </main>
    </>
  );
}
