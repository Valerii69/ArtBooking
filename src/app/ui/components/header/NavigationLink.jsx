// import * as React from "react";

export  function NavigationLink({ text, href }) {
  return (
    <div className="flex items-start text-xl font-medium whitespace-nowrap text-zinc-800">
      <a href={href} className="gap-2.5 self-stretch">
        {text}
      </a>
    </div>
  );
}


