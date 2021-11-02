import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { menuObj, bottomLinks } from '@components/FullPageMenu/constant';

const Footer = () => {
  return (
    <div className="bg-secondary pt-5 pb-[72px] lg:pt-20 lg:pb-14">
      <div className="container">
        <div className="lg:flex-row-reverse lg:flex lg:items-center lg:justify-center">
          <ul className="lg:flex lg:items-center">
            {menuObj?.map((el, id) => (
              <li
                key={id}
                className="mb-4 text-center last:mb-0 lg:mb-0 lg:mr-16 last:mr-0"
              >
                <Link href={el.link}>
                  <a className="text-[26px] leading-tight font-semibold text-white uppercase ">
                    {el.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <div className="w-[172px] mt-10 mx-auto lg:m-0 lg:mr-16">
            <Image
              src={'/assets/icons/gsb-wordmark-slogan.svg'}
              alt="gsb-wordmark-slogan"
              width={172}
              height={126}
              layout="responsive"
            />
          </div>
        </div>

        <div className="mt-5">
          <ul className="lg:flex lg:items-center lg:justify-center">
            {bottomLinks?.map((el, id) => (
              <li
                key={id}
                className="mb-4 text-center last:mb-0 lg:mb-0 lg:px-3 lg:border-r lg:border-white last:border-none"
              >
                <Link href={el.link}>
                  <a className="text-xl font-semibold text-white lowercase">
                    {el.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
