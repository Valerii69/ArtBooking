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
      <body className="flex min-h-screen flex-col">
        <header className="bg-gray-200">
          <NavigationBar />
         </header>

        <main className="main-container">{children}</main>
        <footer className="bg-gray-200">
          <Footer className="main-container" />
        </footer>
      </body>
    </html>
  );
}
