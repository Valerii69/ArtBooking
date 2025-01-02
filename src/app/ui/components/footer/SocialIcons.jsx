import  React from 'react';
// import Image from 'next/image';
import { Facebook, Instagram, Telegram } from '@/src/app/icons/';

export function SocialIcons() {
  const socialLinks = [
    {
      type: 'component',
      Component: Facebook, // Use the imported component directly
      alt: 'Facebook',
    },
    {
      type: 'component',
      Component: Instagram, // Use the imported component directly
      alt: 'Instagram',
    },
    {
      type: 'component',
      Component: Telegram, // Use the imported component directly
      alt: 'Telegram',
    },
  ];

  return (
    <div className="flex items-start gap-8">
      {socialLinks.map((link, index) => (
        <div
          key={index}
          className="flex aspect-square w-6 shrink-0 items-center justify-center"
          tabIndex="0"
          role="link"
          aria-label={link.alt}
        >
          <link.Component /> {/* Render the React component */}
        </div>
      ))}
    </div>
  );
};
