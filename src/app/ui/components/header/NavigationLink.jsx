import * as React from "react";
import Link from 'next/link';
export function NavigationLink({ text, href }) {
  return (
    <div className="flex items-start text-xl font-medium whitespace-nowrap ">
      <Link href={href} className="gap-2.5 self-stretch">
        {text}
      </Link>
    </div>
  );
}


