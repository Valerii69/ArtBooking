import { Star } from '@/src/app/icons/star';

export function Logo() {
  return (
    <div className="flex flex-row  min-h-[35px] items-center gap-2 text-xl font-bold text-neutral-500">
      <Star />
      <div className="my-auto self-stretch">Ink. House</div>
    </div>
  );
}
