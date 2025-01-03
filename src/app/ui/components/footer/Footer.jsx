import * as React from 'react';
// import Image from 'next/image';
import { FooterLinks } from '@/src/app/ui/components/footer/FooterLinks';
import { SocialIcons } from '@/src/app/ui/components/footer/';

 const footerSections = [
   {
     title: 'Paintings',
     links: ['Ukraine', 'Germany', 'England'],
   },
   {
     title: 'New paintings',
     links: ['2021', '2020'],
   },
   {
     title: 'About us',
     links: ['Artists', 'Managers'],
   },
 ];

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden px-16 py-6 max-md:px-5">
      <div className="w-full max-w-[1110px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex w-[85%] flex-col max-md:ml-0 max-md:w-full">
            <div className="w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex w-[28%] flex-col max-md:ml-0 max-md:w-full">
                  <div className="flex w-full flex-col max-md:mt-10">
                    <div className="flex min-h-[35px] items-center gap-2 self-start text-xl font-bold text-neutral-500">
                      {/* <Image
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/b40a792e218b4f99b913d7201fce9b8b/19bc2c50c88e20c2b37784c44605b569f2f36fcaba0f7c59521e6dfcc1e30fd9?apiKey=b40a792e218b4f99b913d7201fce9b8b&"
                        alt="Ink House Logo"
                        className="my-auto aspect-square w-[35px] shrink-0 self-stretch object-contain"
                        fill
                        style={{ objectFit: 'cover' }} // Adjust the image fit if needed
                      /> */}
                      <div className="my-auto self-stretch">Ink. House</div>
                    </div>
                    <div className="mt-9 flex flex-col font-medium">
                      <div className="text-xl text-zinc-800">
                        +38 (067) 000-00-00
                      </div>
                      <div className="mt-2 text-lg text-neutral-400">
                        Workshop
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-5 flex w-[72%] flex-col max-md:ml-0 max-md:w-full">
                  <div className="flex grow items-start gap-10 text-lg font-medium text-neutral-400 max-md:mt-10 max-md:max-w-full">
                    {footerSections.map((section, index) => (
                      <FooterLinks
                        key={index}
                        title={section.title}
                        links={section.links}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 flex w-[15%] flex-col max-md:ml-0 max-md:w-full">
            <div className="flex w-full flex-col max-md:mt-10">
              <SocialIcons />
              <div className="mt-2.5 flex w-[132px] max-w-full flex-col text-xs font-medium leading-tight text-neutral-400">
                <div>Ink. House ®</div>
                <div className="mt-1.5">All rights reserved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

