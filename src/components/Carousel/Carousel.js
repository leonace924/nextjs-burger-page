import Image from 'next/image';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imagesList } from './constant';
import 'swiper/css';

const Carousel = () => {
  SwiperCore.use([Navigation]);

  return (
    <div className="container mx-auto">
      <Swiper
        className="px-4"
        spaceBetween={14}
        slidesPerView={'auto'}
        centeredSlides={true}
        navigation={true}
        breakpoints={{
          768: {
            spaceBetween: 32
          },
          1024: {
            centeredSlides: false,
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
  );
};

export default Carousel;
