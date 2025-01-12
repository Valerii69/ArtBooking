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
      spaceBetween={60} // Без проміжків між слайдами для плавності
      slidesPerView="auto" // Кількість видимих слайдів (можна використовувати "auto" для адаптивності)
      loop={true} // Безкінечний цикл
      autoplay={{
        delay: 0, // Нульова затримка між змінами
        disableOnInteraction: false, // Продовження після взаємодії
      }}
      speed={22000} // Загальна швидкість проходження (в мілісекундах, наприклад, 5000 — це 5 секунд)
      modules={[Autoplay]} // Підключаємо Autoplay
      className=" w-[100%] flex  h-auto mt-[50px]"
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
    >
      {artGalleryData.map((item, index) => (
      
        <SwiperSlide key={index} style={{ width: '300px' }}>
          <Image
            loading="lazy"
            src={item.src}
            width={300}
            height={200}
            layout="responsive"
            alt={item.alt || 'Artwork'}
            />
            <div className='h-10 z-999'>
            <p>pagination</p>
          </div>
        </SwiperSlide>
        
      ))}
    </Swiper>
  );
}
