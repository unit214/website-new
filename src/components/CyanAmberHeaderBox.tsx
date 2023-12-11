import { ReactNode, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

const initBottomRightX = 1333.88
const initBottomRightY = 777.16
const initBottomLeftX = 90.69
const initBottomLeftY = 850

export default function CyanAmberHeaderBox({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) {
  const [bottomRightX, setBottomRightX] = useState(initBottomRightX)
  const [bottomRightY, setBottomRightY] = useState(initBottomRightY)
  const [bottomLeftX, setBottomLeftX] = useState(initBottomLeftX)
  const [bottomLeftY, setBottomLeftY] = useState(initBottomLeftY)

  useEffect(() => {
    let angle1 = 0,
      angle2 = 0

    // Idea: Let bottom corners rotate in circles with different radius and different cycling time
    function updateClipPath() {
      const radius1 = 15 // radius of the circle of bottom right
      const radius2 = 10 // radius of the circle of bottom left

      // Calculate new positions for the bottom corners and update clip path
      setBottomRightX(initBottomRightX + Math.cos(angle1) * radius1)
      setBottomRightY(initBottomRightY + Math.sin(angle1) * radius1)
      setBottomLeftX(initBottomLeftX + Math.cos(angle2) * radius2)
      setBottomLeftY(initBottomLeftY + Math.sin(angle2) * radius2)

      // Update angles for asynchronous movement
      angle1 += 0.00413
      angle2 -= 0.00652 // Different increment for asynchronous movement

      requestAnimationFrame(updateClipPath)
    }

    updateClipPath()
  }, [])

  return (
    <div className={cn('-top-[540px] z-10 lg:-top-[690px]', className)}>
      <div className='flex w-full justify-center'>
        <div className='bg-primary-amber custom-angled-rectangle-amber-header absolute h-[700px] w-full justify-center lg:h-[824px]' />
        <div
          className='bg-primary-cyan h-[700px] w-full px-[50px] pb-[50px] lg:h-[900px] lg:w-[1400px]'
          style={{
            clipPath: `polygon(50px 0px, 1350px 0px, ${bottomRightX}px ${bottomRightY}px, ${bottomLeftX}px ${bottomLeftY}px)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
