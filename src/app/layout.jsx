import { NavigationBar } from '@/src/app/ui/components/header/NavigationBar';
import { montserratMedium500 } from './fonts/index';
import { Footer } from '@/src/app/ui/components/footer/Footer';
import './globals.css';

export const metadata = {
  title: {
    template: 'ArtBooking',
    default: 'ArtBooking',
  },

  //Dev
  // robots: "noindex, nofollow", //Delete this line in Prod
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserratMedium500.className} text-body1`}>
      <body>
        <div className="bg-gray-200">
          <header className="main-container">
            <NavigationBar />
          </header>
        </div>

        <main className="">{children}</main>
        <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"> footer</footer>
        <Footer/>
      </body>
    </html>
  );
}
