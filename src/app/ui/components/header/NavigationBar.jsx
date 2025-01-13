import { NavigationLink, Logo } from '@/src/app/ui/components/header';

const navigationLinks = [
  { text: 'Painting', href: '/painting' },
  { text: 'News', href: '/news' },
  { text: 'About us', href: '/about-us' },
];

export function NavigationBar() {
  return (
    <nav className=" mb-0 flex flex-nowrap items-center justify-center overflow-hidden">
      <div className="flex w-full max-w-[700px] flex-nowrap items-center justify-between gap-5 rounded-full bg-[#1F2124] px-5 py-1 text-slate-100 max-md:max-w-full">
        <Logo />
        {/* <div className="my-auto flex items-start gap-10 max-md:max-w-full"> */}
        {navigationLinks.map((link, index) => (
          <NavigationLink key={index} text={link.text} href={link.href} />
        ))}
      </div>
    </nav>
  );
}
