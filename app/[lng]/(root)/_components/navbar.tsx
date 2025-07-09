import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Globalsearch from './GlobalSearch'
import Languagemenu from '@/components/shared/language-menu'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Modetoggle from '@/components/shared/mode-toggle'




const Navbar = () => {
  return (
    <div className='fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl'>
        <div className='container mx-auto flex h-full max-w-7xl items-center justify-between border-b '>
            <div className='flex items-center gap-4 '>
                <h1 className='text-xl text-foreground'>OnlyCourses</h1>
                <div className='flex items-center gap-3  pl-2 '>
                    {navLinks.map(nav =>(
                        <Link href={`/${nav.route}`} key={nav.route} className='font-medium transition-all hover:text-blue-500 hover:underline'>
                            {nav.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex items-center gap-2 '>
                <div className='flex items-center gap-2 border-r pr-3'>
                    <Globalsearch/>
                    <Languagemenu/>
                    <Button size={'icon'} variant={'ghost'}>
                        <ShoppingCart/>
                    </Button>
                </div>
                <Modetoggle/>
                <Button variant={'ghost'} size={'lg'}  className='rounded-full'>
                    Log in
                </Button>
                <Button variant={'ghost'} size={'lg'}  className='rounded-full'>
                    Sign in
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar