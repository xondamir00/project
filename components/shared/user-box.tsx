'use client'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import useTranslate from '@/hooks/use-translate'

import { SignOutButton, useUser } from '@clerk/nextjs'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

import React from 'react'


const Userbox = () => {
    const {user} = useUser();
    const {t} =useTranslate()
    return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Avatar className='size-10 cursor-pointer'>
                <AvatarImage src={user?.imageUrl}/>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-80' align="start" alignOffset={11} forceMount>
    <div className='flex flex-col space-y-4 p-2'>
        <p className='text-xs font-medium leading-none text-muted-foreground'>
            {user?.emailAddresses[0].emailAddress}
        </p>
        <div className='flex items-center gap-x-2'>
            <div className='rounded-md bg-secondary p-1'>
        <Avatar className='size-8'>
            <AvatarImage src={user?.imageUrl}/>
        </Avatar>
            </div>
            <div className='space-y-1'>
                <p className='line-clamp-1 font-spaceGrotesk-mono text-sm'>
                    {user?.fullName}
                </p>
            </div>
        </div>
    </div>
    <DropdownMenuSeparator>
        <Link href={'user-profile'}>
        <DropdownMenuItem className='w-full cursor-pointer text-muted-foreground'>
            {t("manageAccount")}
        </DropdownMenuItem>
        </Link>
        <DropdownMenuItem asChild className='w-full cursor-pointer text-muted-foreground'>
        <SignOutButton>{t('logout')}</SignOutButton>
        </DropdownMenuItem>
    </DropdownMenuSeparator>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Userbox