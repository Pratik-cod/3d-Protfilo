import React from 'react'
import CountUp from 'react-countup'   // ✅ Correct import
import { counterItems } from '../constants'

const AnimateCounter = () => {
  return (
    <div className='padding-x-lg xl:mt-0 mt-32' id='counter'>
      <div className='mx-auto grid grid-cols-4 gap-6'>
        {counterItems.map((items) => (
          <div key={items.label} className='bg-zinc-950 rounded-lg p-10 flex flex-col justify-center'>
            <div className='counter-number text-white text-5xl font-bold mb-2'>
              <CountUp suffix={items.suffix} end={items.value} duration={2} /> 
              {/* added duration for smooth animation */}
            </div>
            <div className='text-white/50 text-lg'>
              {items.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimateCounter