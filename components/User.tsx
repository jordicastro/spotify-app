"use client";
import Image from 'next/image'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation';
import { ScrollArea } from './ui/scroll-area';
import { HomeIcon, LogOut, Search, Settings } from 'lucide-react';
import { useSpotify } from '@/hooks/useSpotify';
import { useSettings } from '@/hooks/useSettings';
import { useEffect } from 'react';

interface UserProps {
    profileImageUrl: string;
}

const User = ({profileImageUrl}: UserProps) => {
  const router = useRouter();
  const { setIsLoggedIn } = useSpotify();
  const settings = useSettings();

  const fetchedUsername = ""; // fetch from spotify
  const username = fetchedUsername ? fetchedUsername : "Jordi"

  const onRedirectProfilePage = () => {
    //TODO:
    // router.push("profile") || www.spotify.com/profile
  }

  const handleLogout = () => {
    //TODO: handle logout

    // change theme back to default
    settings.setCurrentTheme("indigo");
    // change state
    setIsLoggedIn(false);
  }

  const onRedirectToPage = (pageName: string) => {


    router.push(`/${pageName}`);
  }

  return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>

      <div className='rounded-full'
          role="button"
      >
          <Image
              src={profileImageUrl}
              width={40}
              height={40}
              className='rounded-full object-cover  hover:scale-110 transition'
              alt='profile'
          />
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      className="w-60 h-68 bg-neutral-800 rounded-xl shadow-lg border-none transform -translate-x-2"
    >
    <ScrollArea className='w-60 h-full'>
      <div
        className='p-4 flex justify-start items-center gap-x-2'
      >
        <div className='flex gap-x-4 justify-start items-center'>
          <Image
              src={profileImageUrl}
              width={40}
              height={40}
              className='rounded-full object-cover'
              alt='profile'
          />

          <div className='flex flex-col'>
            <h1 className='font-bold text-md'>
              {username}
            </h1>
            <div role="button" onClick={onRedirectProfilePage}>
              <p className='text-neutral-400 text-xs hover:underline '>
                View profile
              </p>
            </div>
          </div>
        </div>
      </div>

      <DropdownMenuSeparator  className="mx-4 mb-2" />

      <div role="button" onClick={() => settings.onOpen()}>
        <div className='flex items-center justify-start h-8 w-full rounded-xl hover:bg-neutral-700 group/settings cursor-pointer gap-x-2 pl-4'>
          <Settings className='h-5 w-5 text-neutral-200 group-hover/settings:text-white group-hover/settings:rotate-90'/>
          <p className='text-neutral-200 font-normal group-hover/settings:text-white '>
            Settings
          </p>
        </div>
      </div>

      <div role="button" onClick={() => onRedirectToPage("")}>
        <div className='flex items-center justify-start h-8 w-full rounded-xl hover:bg-neutral-700 group/home transition cursor-pointer gap-x-2 pl-4'>
          <HomeIcon className='h-5 w-5 text-neutral-200 group-hover/home:text-white group-hover/home:scale-95'/>
          <p className='text-neutral-200 font-normal group-hover/home:text-white '>
            Home
          </p>
        </div>
      </div>

      <div role="button" onClick={() => onRedirectToPage("search")}>
        <div className='relative flex items-center justify-start h-8 w-full rounded-xl hover:bg-neutral-700 group/home transition cursor-pointer gap-x-2 pl-4'>
          <Search className='h-5 w-5 text-neutral-200 group-hover/home:text-white group-hover/home:scale-95'/>
          <p className='text-neutral-200 font-normal group-hover/home:text-white '>
            Search
          </p>
          <div className='absolute right-4'>
            <p className='text-xs font-light text-neutral-500'>
              ⌘ <span className='font-medium'>+ K</span>
            </p>
          </div>
        </div>

      </div>

      <DropdownMenuSeparator  className="mx-4 my-2" />
      

    <div
      className=' mx-4 my-4 flex justify-center group/logout items-center gap-x-2 rounded-xl hover:bg-neutral-700 py-1'
      role="button"
      onClick={handleLogout}
    >
        <LogOut className='h-5 w-5 text-neutral-200 group-hover/logout:text-red-400 group-hover/logout:scale-90 transition'/>
        <p className='text-neutral-200 group-hover/logout:text-red-400'>Log out</p>
    </div>

    </ScrollArea>
    </DropdownMenuContent>

  </DropdownMenu>
  )
}

export default User;