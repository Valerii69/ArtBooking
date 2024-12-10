import * as React from 'react';

export default function FooterLinks ({ title, links }){
  return (
    <div className="flex flex-col whitespace-nowrap">
      <div className="flex items-start text-xl text-zinc-800">
        <div className="gap-2.5 self-stretch">{title}</div>
      </div>
      {links.map((link, index) => (
        <div
          key={index}
          className="mt-1.5 text-lg font-medium text-neutral-400"
        >
          {link}
        </div>
      ))}
    </div>
  );
};


