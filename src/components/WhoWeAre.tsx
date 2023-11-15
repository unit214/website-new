import Link from 'next/link';
import * as React from 'react';
import { ReactElement } from 'react';

import NextImage from '@/components/NextImage';

function EmployeeField({
  imgSource,
  name,
  description,
  linkedInLink,
  gitHubLink,
}: {
  imgSource: string;
  name: string;
  description: ReactElement;
  linkedInLink: string;
  gitHubLink: string;
}) {
  return (
    <div className='flex items-center gap-16'>
      <NextImage
        src={imgSource}
        alt='logo'
        width='85'
        height='72'
        className='hidden lg:inline-flex'
        useSkeleton
      />
      <div className='flex flex-col gap-2.5'>
        <div className='flex items-center gap-2'>
          <div className='font-primary text-xl font-semibold'>{name}</div>
          <div className='flex gap-1'>
            <Link href={linkedInLink} target='_blank'>
              <NextImage
                src='/svg/linkedin.svg'
                alt='linkedin-logo'
                width='16'
                height='16'
                useSkeleton
              />
            </Link>
            <Link href={gitHubLink} target='_blank'>
              <NextImage
                src='/svg/github.svg'
                alt='github-logo'
                width='16'
                height='16'
                useSkeleton
              />
            </Link>
          </div>
        </div>
        <span className='font-primary text-xs font-light'>{description}</span>
      </div>
      <div />
    </div>
  );
}

export default function WhoWeAre() {
  return (
    <div className='flex h-[600px] w-full items-center justify-center px-10'>
      <div className='flex flex-wrap items-start gap-10 lg:flex-nowrap lg:gap-20'>
        <h1 className='whitespace-nowrap'>Who We Are</h1>
        <div className='flex flex-col gap-10'>
          <EmployeeField
            imgSource='/svg/who-we-are-tom.svg'
            name='Tom Graupner'
            description={
              <>
                Co-Founder, Backend Developer
                <br />
                and Cloud-Native Specialist
              </>
            }
            linkedInLink='https://www.linkedin.com/in/tom-graupner/'
            gitHubLink='https://github.com/tgraupne'
          />
          <EmployeeField
            imgSource='/svg/who-we-are-keno.svg'
            name='Keno Dreßel'
            description={
              <>
                Co-Founder, Full-Stack Engineer
                <br />
                and Machine Learning Specialist
              </>
            }
            linkedInLink='https://www.linkedin.com/in/kenodressel/'
            gitHubLink='https://github.com/kenodressel'
          />
          <EmployeeField
            imgSource='/svg/who-we-are-philipp.svg'
            name='Philipp Piwowarsky'
            description={
              <>
                Co-Founder, Full-Stack Engineer
                <br />
                and Blockchain Specialist
              </>
            }
            linkedInLink='https://www.linkedin.com/in/philipp-piwowarsky/'
            gitHubLink='https://github.com/thepiwo'
          />
          <EmployeeField
            imgSource='/svg/who-we-are-timo.svg'
            name='Timo Erdelt'
            description={
              <>
                Full-Stack Engineer, Green IT, Functional
                <br />
                Programming, User-Centered Design
              </>
            }
            linkedInLink='https://www.linkedin.com/in/timoerdelt/'
            gitHubLink='https://github.com/tmrdlt'
          />
        </div>
      </div>
    </div>
  );
}
