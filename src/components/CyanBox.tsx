import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export default function CyanBox({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <div className={cn('-top-[540px] z-10 lg:-top-[690px]', className)}>
      <div className='flex w-full justify-center'>
        <div className='bg-primary-cyan custom-angled-rectangle-cyan-animated-mobile lg:custom-angled-rectangle-cyan-animated h-[700px] w-full lg:h-[850px] lg:w-[1300px]'>
          {children}
        </div>
      </div>
    </div>
  );
}
