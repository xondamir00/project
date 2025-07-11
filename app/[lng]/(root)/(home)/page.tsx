"use client"


import React from 'react'
import Hero from './_comonents/hero';
import Mobile from '@/components/shared/mobile';

 function HomePage() {

return (
    <div className='mt-24 font-spaceGrotesk-mono font-medium'>

    <Mobile/>
        <Hero/>
    </div>
  )
}

export default HomePage