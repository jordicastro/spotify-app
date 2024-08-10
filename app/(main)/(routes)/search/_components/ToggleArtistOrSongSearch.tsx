"use client";

import { getThemeClass } from "@/actions/actions";
import { useSearchType } from "@/hooks/useSearchType";
import { useSettings } from "@/hooks/useSettings";
import { CircleUserRound, Music } from "lucide-react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";


const ToggleArtistOrSongSearch = () => {

    const { isArtist, setIsArtist } = useSearchType();
    const { currentTheme } = useSettings();

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
                isArtist ? getThemeClass("text", currentTheme, "500") : "text-neutral-400"
            )} />
        </div>


        <div className="h-4 w-0.5 rounded-full border border-neutral-400" />

        <div
            className=""
            role="button"
            onClick={() => setIsArtist(false)}
        >
            <Music className={twMerge(`w-6 h-6 text-neutral-400 hover:scale-110 transition`,
                isArtist ? "text-neutral-400" : getThemeClass("text", currentTheme, "500")
            )} />
        </div>
    </div>
    )
}

export default ToggleArtistOrSongSearch