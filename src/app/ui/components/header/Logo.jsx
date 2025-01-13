import { Star } from '@/src/app/icons/star';
import Link from 'next/link';

export function Logo() {
  return (
    <div className="flex min-h-[35px] flex-row items-center gap-2 text-xl font-bold ">
      <Star />
      <Link href="/" className="my-auto self-stretch">
        Home
      </Link>
    </div>
  );
}
