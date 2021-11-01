import React from 'react';
import Image from 'next/image';
import { useGlobal } from '@stores/global-store';

const Header = () => {
  const setMenuOpen = useGlobal((state) => state.setMenuOpen);

  return (
    <div className="p-4 pb-0 lg:pt-[52px] lg:px-[72px]">
      <div className="pb-[44px] text-center lg:flex lg:justify-between lg:pb-6">
        <div className="hidden lg:flex lg:items-end">
          <div className="mr-8">
            <div className="flex justify-center">
              <Image
                src={'/assets/icons/icon-flag.svg'}
                alt="icon-flag"
                width={36}
                height={39}
              />
            </div>
            <p className="mt-1 text-sm font-bold uppercase text-secondary">
              Locations
            </p>
          </div>

          <div className="">
            <div className="flex justify-center">
              <Image
                src={'/assets/icons/icon-car.svg'}
                alt="icon-car"
                width={37}
                height={39}
              />
            </div>
            <p className="mt-1 text-sm font-bold uppercase text-secondary">
              Order Online
            </p>
          </div>
        </div>

        <div
          className="inline-flex items-center cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <div className="w-[62px] h-[58px] lg:w-[78px] lg:h-[73px]">
            <Image
              src={'/assets/icons/gsb-logo.svg'}
              alt="gsb-logo"
              width={62}
              height={58}
              layout="responsive"
            />
          </div>
          <div className="w-6 h-6 pt-2 ml-3 lg:w-8 lg:h-8">
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

      <div className="text-center">
        <div className="w-[238px] lg:w-[290px] inline-block">
          <Image
            src={'/assets/icons/gsb-wordmark.svg'}
            alt="gsb-logo"
            width={238}
            height={139}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
