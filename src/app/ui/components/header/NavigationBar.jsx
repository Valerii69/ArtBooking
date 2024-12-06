import { NavigationLink, Logo } from '@/src/app/ui/components/header';

const navigationLinks = [
  { text: 'Картини', href: '#' },
  { text: 'Новинки', href: '#' },
  { text: 'О нас', href: '#' },
];

export function NavigationBar() {
  return (
    <nav className="flex flex-col items-center justify-center overflow-hidden bg-gray-200 px-16 py-8 max-md:px-5">
      <div className="flex w-full max-w-[1110px] flex-wrap justify-between gap-5 max-md:max-w-full">
        <Logo />
        <div className="my-auto flex items-start gap-10 max-md:max-w-full">
          {navigationLinks.map((link, index) => (
            <NavigationLink key={index} text={link.text} href={link.href} />
          ))}
          <div className="flex w-6 items-start gap-8"></div>
        </div>
      </div>
    </nav>
  );
}
