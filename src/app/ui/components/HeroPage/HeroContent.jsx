import * as React from "react";

export function HeroContent() {
  return (
    <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
      <div className="z-10 my-auto flex w-full flex-col items-start self-stretch font-medium max-md:mr-0 max-md:mt-10 max-md:max-w-full">
        <div className="text-6xl leading-[66px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
          Paintings from <span className="text-neutral-500"> Ink.House</span>
        </div>
        <div className="mt-5 self-stretch text-lg leading-7 text-neutral-400 max-md:max-w-full">
          Rare works, reasonably priced.
        </div>
        <button
          className="mt-16 min-h-[65px] gap-1.5 self-stretch whitespace-nowrap border border-solid border-neutral-500 px-16 py-5 text-xl text-neutral-500 max-md:mt-10 max-md:px-5"
          aria-label="View Products"
        >
          Products
        </button>
      </div>
    </div>
  );
}
