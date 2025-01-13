'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { artGalleryData } from '@/src/app/ui/data/artGalleryData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// modules
import { Autoplay } from 'swiper/modules';

export function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={100} // Без проміжків між слайдами для плавності
      slidesPerView="auto" // Кількість видимих слайдів (можна використовувати "auto" для адаптивності)
      loop={true} // Безкінечний цикл
      autoplay={{
        delay: 0, // Нульова затримка між змінами
        disableOnInteraction: false, // Продовження після взаємодії
      }}
      speed={20000} // Загальна швидкість проходження (в мілісекундах, наприклад, 5000 — це 5 секунд)
      modules={[Autoplay]} // Підключаємо Autoplay
      className="mx-auto my-0 mt-[50px] flex h-[100%] w-[100%] items-center justify-center"
      // style={{
      //   '--swiper-navigation-color': '#fff',
      //   '--swiper-pagination-color': '#fff',
      // }}
    >
      {artGalleryData.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{
            width: '200px',
            height: '300px',
            position: 'center',
            display: 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'justify-content': 'center',
          }}
        >
          <div className="tremor">
            <Image
              src={item.src}
              width={300}
              height={300}
              alt={item.alt || 'Artwork'}
              priority
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="z-999 h-10">
            <p className="mt-5 rounded-full bg-[#1F2124] px-5 py-2 text-slate-100">
              {item.artist}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
