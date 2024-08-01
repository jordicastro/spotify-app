"use client";

import { Ellipsis, Play } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";


interface albumData {

}

interface songData {

}
interface MediaItemProps {
    name: string;
    imageUrl?: string;
    subtext: string;
    subtextIsArtists?: boolean;
    id: string;
    enumerate?: boolean;
    index?: number;
    data?: albumData | songData;
    duration?: string;
    onClick: (id: string) => void;
}

const MediaItem = ({name, imageUrl, subtext, subtextIsArtists, id, enumerate, index, duration, onClick}: MediaItemProps) => {
    const imageRef = useRef<HTMLDivElement>(null);


    const handleClick = () => {
        if (onClick) return onClick(id);


        // TODO: Default turn on player
    }

    const handleRightClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        if (imageRef.current && imageRef.current.contains(event.target as Node)) return;

        event.preventDefault();
        console.log("Right Clicked");
        OpenMediaItemDropdown(event);
    }

    const OpenMediaItemDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        console.log("Open Dropdown");
    }

    return (
    <div
        onClick={handleClick}
        onContextMenu={handleRightClick}
        className="flex items-center relative gap-x-3 cusor-pointer group hover:bg-neutral-800/50 transition w-full p-2 rounded-md"
        role="button"
    >
        {enumerate && (
        <>
            <p className="flex group-hover:hidden items-center justify-center text-neutral-400 tracking-wider">
                        {/* @ts-ignore */}
                        {index + 1}.
            </p>
            <div
                className="hidden group-hover:flex items-center justify-center "
            >
                <Play className=" w-4 h-4 text-neutral-300 fill-neutral-300"/>
            </div>
        </>
        )}

        <div
            className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden"
        >
            { !!imageUrl && (

            <Image
                ref={imageRef}
                fill
                sizes="48px"
                src={imageUrl || "/images/media_item_placeholder.svg"}
                alt="media item"
                className="object-cover"
            />
            )}
        </div>
        <div
            className="flex flex-col gap-y-1 overflow-hidden w-full"
        >
            <p className="text-white w-full truncate">
                {name}
            </p>

            <p className={twMerge(
                    `text-neutral-400 text-sm w-full truncate`,
                    subtextIsArtists && "hover:underline underline-offset-2"
                )}>
                {subtext}
            </p>
        </div>

        <div
            className="absolute right-2"
            role="button"
            onClick={OpenMediaItemDropdown}
        >
            <Ellipsis
                className="hidden group-hover:flex transition ease-in-out text-neutral-400 hover:scale-105 p-1 bg-transparent hover:bg-white/10 rounded-full cursor-pointer "
            />
        </div>

        <div
            className="absolute right-14 text-xs text-neutral-400"
        >
            {duration && duration}
        </div>

    </div>
    )
}

export default MediaItem