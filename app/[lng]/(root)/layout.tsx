import React from 'react'
import { Children } from '../../../type'
import Navbar from './_components/navbar'
import Userbox from '@/components/shared/user-box'




const Layout = ({children} :Children) => {
  return (
    <div>
      <Navbar/>
        {children}
  <Userbox/>
    </div>
  )
}

export default Layout