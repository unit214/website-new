import { useEffect, useState } from 'react'
import { BsArrowDownShort } from 'react-icons/bs'
import { CgMouse } from 'react-icons/cg'

import { isMobile } from '@/lib/utils'

import CyanAmberHeaderBox from '@/components/CyanAmberHeaderBox'
import Header from '@/components/Header'
import MainClaim from '@/components/MainClaim'

export default function HeaderAndMainClaim() {
  const [headerOpacity, setHeaderOpacity] = useState(0)
  const [scrollDownButtonOpacity, setScrollDownButtonOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const offsetTop = isMobile() ? 390 : 540
      // Start increasing opacity of header once offsetTop is reached
      if (scrollTop >= offsetTop) {
        setHeaderOpacity(Math.min(1, (scrollTop - offsetTop) / 150))
      } else {
        setHeaderOpacity(0)
      }
      // Start decreasing opacity of scroll down button to 0 before offsetTop is reached
      if (scrollTop < offsetTop) {
        setScrollDownButtonOpacity(Math.min(1, (offsetTop - scrollTop) / 150))
      } else {
        setScrollDownButtonOpacity(0)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollDown() {
    const offsetTop = isMobile() ? 390 : 540
    window.scroll({
      top: offsetTop + 150,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <CyanAmberHeaderBox className='sticky'>
      <div className='flex h-full w-full flex-col justify-center'>
        <Header
          className='absolute top-0'
          clickOnLogoBehaviour='scrollUp'
          clickOnContactBehaviour='scrollDown'
        />
        {headerOpacity > 0 && (
          <Header
            opacity={headerOpacity}
            className='absolute bottom-[90px]'
            clickOnLogoBehaviour='scrollUp'
            clickOnContactBehaviour='scrollDown'
          />
        )}
        <MainClaim />
        {scrollDownButtonOpacity > 0 && (
          <button
            style={{ opacity: scrollDownButtonOpacity }}
            className='absolute bottom-[98px] flex max-w-[1300px] flex-col items-center gap-1 pl-6 text-white lg:gap-4 lg:pl-24'
            onClick={scrollDown}
          >
            <div className='text-xs font-light [writing-mode:vertical-lr]'>
              WHAT WE DO
            </div>
            <CgMouse className='hidden lg:flex' size={40} />
            <BsArrowDownShort className='flex lg:hidden' size={40} />
          </button>
        )}
      </div>
    </CyanAmberHeaderBox>
  )
}
