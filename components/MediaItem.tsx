"use client";

import { Song } from "@/types";
import { Ellipsis } from "lucide-react";
import Image from "next/image";

interface MediaItemProps {
    name: string;
    imageUrl: string;
    subtext: string;
    id: string;
    onClick: (id: string) => void;
}

const MediaItem = ({name, imageUrl, subtext, id, onClick}: MediaItemProps) => {

    const handleClick = () => {
        if (onClick) return onClick(id);


        // TODO: Default turn on player
    }

    const handleRightClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

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
        <div
            className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden"
        >
            <Image
                fill
                src={imageUrl || "/images/media_item_placeholder.svg"}
                alt="media item"
                className="object-cover"


            />
        </div>

        <div
            className="flex flex-col gap-y-1 overflow-hidden"
        >
            <p className="text-white truncate">
                {name}
            </p>

            <p className="text-neutral-400 text-sm truncate">
                {subtext}
            </p>
        </div>

        <div
            className="absolute right-2"
            role="button"
            onClick={OpenMediaItemDropdown}
        >
            <Ellipsis
                className="hidden group-hover:flex transition ease-in-out text-neutral-400 hover:scale-105 p-1 rounded-full cursor-pointer "
            />

            
        </div>

    </div>
    )
}

export default MediaItem