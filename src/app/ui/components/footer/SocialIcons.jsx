import * as React from 'react';
import Image from 'next/image';

export default function SocialIcons() {
  const socialLinks = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/b40a792e218b4f99b913d7201fce9b8b/1bd70eb1a39925808d957cab562738532812123a7a103f598f8c19253a3f3f60?apiKey=b40a792e218b4f99b913d7201fce9b8b&',
      alt: 'Social media icon',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/b40a792e218b4f99b913d7201fce9b8b/6d6dfbae50c3d30e92d157c0cae6d2ebf9869f456b22ac85b8a8742bd412122a?apiKey=b40a792e218b4f99b913d7201fce9b8b&',
      alt: 'Social media icon',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/b40a792e218b4f99b913d7201fce9b8b/5a290861df75e85e1bd23be85a2aa05dc6f228e246707605f3d711476d4009ff?apiKey=b40a792e218b4f99b913d7201fce9b8b&',
      alt: 'Social media icon',
    },
  ];

  return (
    <div className="flex items-start gap-8">
      {socialLinks.map((link, index) => (
        <Image
          key={index}
          loading="lazy"
          src={link.src}
          alt={link.alt}
          className="aspect-square w-6 shrink-0 object-contain"
          tabIndex="0"
          role="link"
        />
      ))}
    </div>
  );
};
