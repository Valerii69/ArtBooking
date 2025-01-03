import  React from 'react';
// import Image from 'next/image';
import { Facebook, Instagram, Telegram } from '@/src/app/icons/';

export function SocialIcons() {
  const socialLinks = [
    {
      type: 'component',
      Component: Facebook, // Use the imported component directly
      alt: 'Facebook',
      href: 'https://www.instagram.com/esti.nails.pl?igsh=cnRxaTExbGx4cWd2',
    },
    {
      type: 'component',
      Component: Instagram, // Use the imported component directly
      alt: 'Instagram',
      href: 'https://www.instagram.com/esti.nails.pl?igsh=cnRxaTExbGx4cWd2',
    },
    {
      type: 'component',
      Component: Telegram, // Use the imported component directly
      alt: 'Telegram',
      href: 'https://www.instagram.com/esti.nails.pl?igsh=cnRxaTExbGx4cWd2',
    },
  ];

  return (
    <div className="flex items-start gap-8">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          className="flex aspect-square w-6 shrink-0 items-center justify-center"
          tabIndex="0"
          target="_blank"
          role="link"
          aria-label={link.alt}
          href={link.href}
        >
          <link.Component /> {/* Render the React component */}
        </a>
      ))}
    </div>
  );
};
