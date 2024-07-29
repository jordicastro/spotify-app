"use client";

import { useSearchType } from "@/hooks/useSearchType";
import { CircleUserRound, Music } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";


const ToggleArtistOrSongSearch = () => {

    const { isArtist, setIsArtist } = useSearchType();


    return (
    <div
        className="flex items-center justify-between  w-28 h-4 px-4 py-5 gap-x-4 bg-neutral-800 rounded-full shadow-md"
    >
        <div
            className=""
            role="button"
            onClick={() => setIsArtist(true)}
        >
            <CircleUserRound className={twMerge(`w-6 h-6 text-neutral-400 hover:scale-110 transition`,
                isArtist ? "text-indigo-800" : "text-neutral-400"
            )} />
        </div>


        <div className="h-4 w-0.5 rounded-full border border-neutral-400" />

        <div
            className=""
            role="button"
            onClick={() => setIsArtist(false)}
        >
            <Music className={twMerge(`w-6 h-6 text-neutral-400 hover:scale-110 transition`,
                isArtist ? "text-neutral-400" : "text-indigo-800"
            )} />
        </div>
    </div>
    )
}

export default ToggleArtistOrSongSearch