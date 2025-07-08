import React from 'react'
import { Children } from '../../type'
import Navbar from './_components/navbar'

const Layout = ({children} :Children) => {
  return (
    <div>
      <Navbar/>
        {children}
    </div>
  )
}

export default Layout