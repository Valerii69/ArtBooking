import { Star } from '@/src/app/icons/star';

export function Logo() {
  return (
    <div className="flex min-h-[35px] items-center gap-2 text-xl font-bold text-neutral-500">
      {/* <Image
        // loading="lazy"
        // src="https://cdn.builder.io/api/v1/image/assets/b40a792e218b4f99b913d7201fce9b8b/19bc2c50c88e20c2b37784c44605b569f2f36fcaba0f7c59521e6dfcc1e30fd9?apiKey=b40a792e218b4f99b913d7201fce9b8b&"
        // alt=""
        // className="object-contain shrink-0 self-stretch my-auto aspect-square w-[35px]"
      
      /> */}
      <Star />
      <div className="my-auto self-stretch">Ink. House</div>
    </div>
  );
}
