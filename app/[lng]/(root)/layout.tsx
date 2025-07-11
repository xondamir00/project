import React from 'react'
import { Children } from '../../../type'
import Navbar from './_components/navbar'
import Hero from './(home)/_comonents/hero'
import Mobile from '@/components/shared/mobile'

const Layout = ({children} :Children) => {
  return (
    <div>
      <Navbar/>
        {children}
  
    </div>
  )
}

export default Layout