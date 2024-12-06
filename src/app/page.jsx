import { NavigationBar } from '@/src/app/ui/components/header/NavigationBar';

export default function Home() {
  return (
    <div className="main-container ">
      <header>
        <NavigationBar />
      </header>
      <main className=" flex flex-col items-center gap-8 sm:items-start">
        {/* <div className="flex flex-col items-center gap-4 sm:flex-row"></div> */}
      </main>
      {
        <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
      }
    </div>
  );
}
