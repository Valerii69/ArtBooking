import { NavigationBar } from '@/src/app/ui/components/header/NavigationBar';
import Head from 'next/head';
import { montserratMedium500 } from './fonts/index';
import { Footer } from '@/src/app/ui/components/footer/Footer';

import './globals.css';
// import Image from 'next/image';


export const metadata = {
  
  title: {
    template: 'ArtBooking',
    default: 'ArtBooking',
  },
  httpEquiv: {
    'content-type': 'text/html; charset=UTF-8',
    'cache-control': 'no-cache, no-store, must-revalidate',
  },

  //Dev
  // robots: "noindex, nofollow", //Delete this line in Prod
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserratMedium500.className} text-body1`}>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' https://cdn.example.net; child-src 'none'; object-src 'none';"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="flex min-h-screen flex-col bg-custom-image">
             <NavigationBar />
        <header className="main-container fixed top-0 mt-5 w-full items-center justify-center">
     
        </header>
        <main className="mt-0 flex flex-col">{children}</main>
        <footer className="bg-gray-200">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
