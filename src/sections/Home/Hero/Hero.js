import React from 'react';
import Header from '@components/Header/Header';
import Carousel from '@components/Carousel/Carousel';

const Hero = () => {
  return (
    <div className="p-[22px] lg:p-8 bg-secondary">
      <div className="bg-white">
        <Header />
        <div className="mt-[52px] pb-10">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Hero;
