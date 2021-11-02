import React, { useRef } from 'react';
import Image from 'next/image';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imagesList } from './constant';
import 'swiper/css';

const Carousel = () => {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="container mx-auto">
      <div className="relative">
        <div
          ref={navigationPrevRef}
          className="absolute left-[-35px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hidden lg:block xl:left-[-61px] 2xl:left-[-71px]"
        >
          <Image
            src="/assets/icons/icon-arrow-left.svg"
            alt="arrow-left"
            width={57}
            height={57}
          />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute right-[-35px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer hidden lg:block xl:right-[-61px] 2xl:right-[-71px]"
        >
          <Image
            src="/assets/icons/icon-arrow-right.svg"
            alt="arrow-right"
            width={57}
            height={57}
          />
        </div>

        <Swiper
          className="px-4"
          spaceBetween={14}
          slidesPerView={'auto'}
          centeredSlides={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            768: {
              centeredSlides: false
            },
            1024: {
              spaceBetween: 32
            }
          }}
        >
          {imagesList?.map((image, id) => (
            <SwiperSlide
              key={id}
              className="max-w-[250px] max-h-[250px] md:max-w-[300px] md:max-h-[300px]"
            >
              <div className="w-[250px] h-[250px] relative md:w-[300px] md:h-[300px] rounded-[10px] overflow-hidden">
                <Image
                  src={image.imageUrl}
                  alt={`image-${id}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
