import React, { useEffect } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { useGlobal } from '@stores/global-store';
import IconButton from '@components/IconButton/IconButton';
import { menuObj } from './constant';

const FullPageMenu = () => {
  const isMenuOpen = useGlobal((state) => state.isMenuOpen);
  const setMenuOpen = useGlobal((state) => state.setMenuOpen);

  useEffect(() => {
    const body = document.querySelector('body');
    if (!body) return;

    if (isMenuOpen) {
      body.classList.add('fixed');
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('fixed');
      body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  return (
    <div
      className={cx(
        'fixed top-0 left-0 w-full opacity-0 h-0 transition-all duration-300 p-[22px] lg:p-[32px] before:absolute before:block before:bg-cover before:bg-secondary before:bg-menu-pattern-mobile before:inset-[22px] lg:before:bg-menu-pattern lg:before:inset-[32px]',
        {
          'h-screen visible opacity-100 z-50 overflow-auto bg-white flex flex-col':
            isMenuOpen,
          invisible: !isMenuOpen
        }
      )}
    >
      {/* <div className="container relative grid flex-1 grid-rows-menu"> */}
      <div className="w-full pt-4 text-center lg:flex lg:items-center lg:justify-between md:pt-16">
        <div className="relative justify-center hidden lg:gap-10 lg:inline-grid lg:items-end lg:grid-cols-2">
          <IconButton
            color="white"
            icon={
              <Image
                src={'/assets/icons/icon-flag.svg'}
                alt="icon-flag"
                width={36}
                height={39}
              />
            }
            label="Locations"
          />

          <IconButton
            color="white"
            icon={
              <Image
                src={'/assets/icons/icon-car.svg'}
                alt="icon-car"
                width={37}
                height={39}
              />
            }
            label="Order Online"
          />
        </div>

        <div
          className="inline-flex items-center cursor-pointer"
          onClick={() => setMenuOpen(false)}
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
              src={'/assets/icons/icon-menu-close.svg'}
              alt="icon-menu-close"
              width={32}
              height={32}
              layout="responsive"
            />
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center flex-1">
        <ul className="pt-[46px] px-4 lg:py-[72px]">
          {menuObj?.map((el, id) => (
            <li
              key={id}
              className="text-center mb-[22px] last:mb-0 lg:mb-10"
              onClick={() => setMenuOpen(false)}
            >
              <Link href={el.link}>
                <a className="text-4xl font-semibold text-white uppercase lg:text-5xl">
                  {el.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative pt-10 pb-4 text-center md:pb-8 lg:hidden">
        <div className="inline-grid items-end justify-center grid-cols-2 gap-10">
          <IconButton
            color="white"
            icon={
              <Image
                src={'/assets/icons/icon-flag.svg'}
                alt="icon-flag"
                width={36}
                height={39}
              />
            }
            label="Locations"
          />

          <IconButton
            color="white"
            icon={
              <Image
                src={'/assets/icons/icon-car.svg'}
                alt="icon-car"
                width={37}
                height={39}
              />
            }
            label="Order Online"
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default FullPageMenu;
