
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Languages } from 'lucide-react'
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu'
import { lngs } from '@/constants'
import Image from 'next/image'

const Languagemenu = () => {
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
                        <DropdownMenuItem key={item.route} className='cursor-pointer'>
                            <Image src={`/assets/${item.route}.png`} alt={item.label} width={30} height={30}/>
                            <span className='ml-2 font-spaceGrotesk-mono font-medium'>{item.label}</span>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Languagemenu