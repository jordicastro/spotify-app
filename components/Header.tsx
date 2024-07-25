"use client";

import { ChevronLeft, ChevronRight, House as HomeIcon, Search as SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { twMerge } from 'tailwind-merge';
import Button from './Button';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({children, className}: HeaderProps) => {

    const router = useRouter();

    const handleLogout = () => {
        //TODO:
    }


    return (
        <div
            className={twMerge(`
                h-fit bg-gradient-to-b from-indigo-800 p-6
            `,
                className
            )}
        >
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
                    <button
                        className='hover:scale-110 group/home active:scale-125 ease-in-out transition'
                    >
                        <HomeIcon className='w-5 h-5 text-neutral-500 group-hover/home:text-neutral-300'/>
                    </button>

                    <button
                        className='hover:scale-110 group/search active:scale-125 ease-in-out transition'
                    >
                        <SearchIcon className='w-5 h-5 text-neutral-500 group-hover/search:text-neutral-300'/>
                    </button>

                </div>

                <div
                    className='flex justify-between items-center gap-x-4'
                >
                    <>
                        <div>
                            <Button
                                onClick={() => {}}
                                className='bg-transparent text-neutral-300 font-medium'
                            >
                                Sign up
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={() => {}}
                                className='bg-black text-neutral-300 px-6 py-2'
                            >
                                Log in
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Header