'use client';

import { useState } from 'react';
import { HeroModal } from '@/src/app/ui/components/modals/heroModal/HeroModal';
import Image from 'next/image';

export function ArtCard({ artist, title, medium, price, src }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = imageSrc => {
    setCurrentImage(imageSrc); //поточне зображення
    setIsModalOpen(true); // модалка
  };

  return (
    <div className="flex w-[370px] min-w-[240px] flex-col items-start overflow-hidden bg-gray-200 px-5 py-6">
      {/* Изображение */}
      <Image
        loading="lazy"
        src={src}
        alt={`Artwork ${title} by ${artist}`}
        className="hover:z-100 aspect-[1] w-full cursor-pointer self-stretch object-contain transition-transform duration-300 hover:scale-110"
        width={370} 
        height={370} 
        onClick={() => openModal(src)} 
      />

      {/* Информация об арте */}
      <div className="mt-5 text-lg text-neutral-400">{artist}</div>
      <div className="mt-2.5 text-3xl">{title}</div>
      <div className="mt-2 text-lg">{medium}</div>
      <div className="mt-8 text-2xl text-neutral-500">₴ {price}</div>

      {/* Кнопка открытия модального окна */}
      <button
        className="mt-5 min-h-[65px] gap-1.5 self-stretch border border-solid border-neutral-500 px-16 py-5 text-xl text-neutral-500 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-neutral-500 hover:text-white hover:shadow-lg max-md:px-5"
        aria-label={`View ${title} in modal`}
        onClick={() => openModal(src)}
      >
        View in Modal
      </button>

      {/* Модальное окно */}
      <HeroModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {currentImage && (
          <Image
            src={currentImage}
            alt="Selected artwork"
            className="h-auto w-full rounded-lg"
            width={1000}
            height={1000}
          />
        )}
        <button
          onClick={() => setIsModalOpen(false)}
          className="hover:bg-red-600 my-10 rounded-lg bg-red px-4 py-2 text-white"
        >
          Close
        </button>
      </HeroModal>
    </div>
  );
}
