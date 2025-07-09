'use client'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Languages } from 'lucide-react'
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu'
import { lngs } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useParams } from 'next/navigation'

const Languagemenu = () => {
    const {lng} = useParams();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} size={'icon'}>
                    <Languages />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {lngs.map(item => (
                       <Link key={item.route} href={item.route} >
                        <DropdownMenuItem   className={cn('cursor-pointer',lng === item.route && 'bg-secondary')}>
                            <Image src={`/assets/${item.route}.png`} alt={item.label} width={30} height={30}/>
                            <span className='ml-2 font-spaceGrotesk-mono font-medium'>{item.label}</span>
                        </DropdownMenuItem>
                       </Link>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Languagemenu