import './globals.css';
import {
  // montserratRegular400,
  montserratMedium500,
  // courgetteRegular400,
} from './fonts/index';
import './globals.css';

export const metadata = {
  title: {
    template: '%s | ArtBooking',
    default: 'ArtBooking',
  },

  //Dev
  // robots: "noindex, nofollow", //Delete this line in Prod
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserratMedium500.className} text-body1`}>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
