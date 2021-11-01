import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="p-4 pb-0">
      <div className="pb-[44px] text-center">
        <div className="inline-flex items-center">
          <Image
            src={'/assets/icons/gsb-logo.svg'}
            alt="gsb-logo"
            width={62}
            height={58}
          />
          <div className="w-6 h-6 pt-2 ml-3">
            <Image
              src={'/assets/icons/icon-menu-burger.svg'}
              alt="icon-menu-burger"
              width={32}
              height={32}
              layout="responsive"
            />
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default Header;
