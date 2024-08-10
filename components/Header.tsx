"use client";

import { ChevronLeft, ChevronRight, House as HomeIcon, Search as SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';
import User from './User';
import { useSpotify } from '@/hooks/useSpotify';
import { useSettings } from '@/hooks/useSettings';
import { getThemeClass } from '@/actions/actions';

interface HeaderProps {
  children: React.ReactNode;
  twitterBannerUrl?: string;
  isArtistPage?: boolean;
  className?: string;
}

const Header = ({children, twitterBannerUrl, isArtistPage, className}: HeaderProps) => {

    const router = useRouter();
    const defaultBannerUrl = "/images/default_banner.jpeg";
    const { isLoggedIn, setIsLoggedIn } = useSpotify();
    const { currentTheme } = useSettings();
    const fetchedProfileImageUrl = ""; // fetch from spotify
    const profileImageUrl = isLoggedIn && fetchedProfileImageUrl ? fetchedProfileImageUrl : "https://avatars.githubusercontent.com/u/98429724?v=4";
    const [gradientClass, setGradientClass] = useState<string>("");
    // const currentThemeColor = getCurrentTheme(currentTheme, "800");

    useEffect( () => {
        setGradientClass(getThemeClass("gradient", currentTheme, "800"));
    }, [currentTheme])

    const redirectLoginPage = () => {
        // TODO: router.push("https://accounts.spotify.com/authorize")

        // change state
        setIsLoggedIn(true);
    }

    const onOpenUserMenu = () => {

    }


    return (
        <div
            className={twMerge(`
                h-fit p-6 relative
            `,
                !isArtistPage && gradientClass,
                className
            )}
        >
            {isArtistPage && <Image
                className='inset-0 absolute object-cover opacity-10 pointer-events-none'
                src={twitterBannerUrl || defaultBannerUrl}
                layout='fill'
                alt='banner'

            />}
            <div
                className='w-full mb-4 flex items-center justify-between'
            >

                <div
                    className='hidden md:flex gap-x-2 items-center'
                >
                    <button
                        onClick={() => router.back()}
                        className='rounded-full p-1 bg-black flex items-center justify-center hover:opacity-75 transition'
                    >
                        <ChevronLeft className='w-6 h-6 '/>
                    </button>

                    <button
                        onClick={() => router.forward()}
                        className='rounded-full p-1 bg-black flex items-center justify-center hover:opacity-75 transition'
                    >
                        <ChevronRight className='w-6 h-6 '/>
                    </button>
                </div>
                <div
                    className='flex md:hidden gap-x-6 items-center p-3 bg-black rounded-xl'
                >
                    <Link
                        className='hover:scale-110 group/home active:scale-125 ease-in-out transition'
                        href='/'
                    >
                        <HomeIcon className='w-5 h-5 text-neutral-300 group-hover/home:text-neutral-100'/>
                    </Link>

                    <Link
                        className='hover:scale-110 group/search active:scale-125 ease-in-out transition'
                        href="/search"
                    >
                        <SearchIcon className='w-5 h-5 text-neutral-300 group-hover/search:text-neutral-100'/>
                    </Link>

                </div>

                <div
                    className='flex justify-between items-center gap-x-4'
                >
                    {isLoggedIn ? (
                        <User profileImageUrl={profileImageUrl} />
                    ) : (

                    <>
                        <div>
                            <Button
                                onClick={redirectLoginPage}
                                className='bg-transparent text-neutral-300 font-medium'
                            >
                                Sign up
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={redirectLoginPage}
                                className='bg-black text-neutral-300 px-6 py-2'
                            >
                                Log in
                            </Button>
                        </div>
                    </>
                    )}
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header