import * as React from 'react';
import { useEffect, useState } from 'react';
import { BsArrowDownShort } from 'react-icons/bs';
import { CgMouse } from 'react-icons/cg';

import Header from '@/components/Header';
import MainClaim from '@/components/MainClaim';

export default function CyanBoxAndHeader() {
  const [headerOpacity, setHeaderOpacity] = useState(0);
  const [scrollDownButtonOpacity, setScrollDownButtonOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offsetTop = window.innerWidth < 1024 ? 390 : 540;
      // Start increasing opacity of header once offsetTop is reached
      if (scrollTop >= offsetTop) {
        setHeaderOpacity(Math.min(1, (scrollTop - offsetTop) / 150));
      } else {
        setHeaderOpacity(0);
      }
      // Start decreasing opacity of scroll down button to 0 before offsetTop is reached
      if (scrollTop < offsetTop) {
        setScrollDownButtonOpacity(Math.min(1, (offsetTop - scrollTop) / 150));
      } else {
        setScrollDownButtonOpacity(0);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollDown() {
    const offsetTop = window.innerWidth < 1024 ? 390 : 540;
    window.scroll({
      top: offsetTop + 150,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className='sticky -top-[540px] lg:-top-[690px]'>
      <div className='flex w-full justify-center'>
        <div className='bg-primary-cyan custom-angled-rectangle-cyan-animated-mobile lg:custom-angled-rectangle-cyan-animated flex h-[700px] w-full flex-col justify-center lg:h-[850px] lg:w-[1300px]'>
          <Header className='absolute top-0' />
          {headerOpacity > 0 && (
            <Header opacity={headerOpacity} className='fixed top-0 lg:mt-5' />
          )}
          <div className='flex h-full w-full flex-col justify-center'>
            <MainClaim />
            {scrollDownButtonOpacity > 0 && (
              <button
                style={{ opacity: scrollDownButtonOpacity }}
                className='absolute bottom-12 flex max-w-[1300px] flex-col items-center gap-1 pl-6 text-white lg:gap-4 lg:pl-24'
                onClick={scrollDown}
              >
                <div className='text-xs font-extralight [writing-mode:vertical-lr]'>
                  WHAT WE DO
                </div>
                <CgMouse className='hidden lg:flex' size={40} />
                <BsArrowDownShort className='flex lg:hidden' size={40} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
