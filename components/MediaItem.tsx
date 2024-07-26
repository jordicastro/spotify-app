"use client";

import { Song } from "@/types";
import { Ellipsis } from "lucide-react";
import Image from "next/image";

interface MediaItemProps {
    name: string;
    imageUrl: string;
    genres: string;
    id: string;
    onClick: (id: string) => void;
}

const MediaItem = ({name, imageUrl, genres, id, onClick}: MediaItemProps) => {

    const handleClick = (id: string) => {
        if (onClick) return onClick(id);


        // TODO: Default turn on player

    }

    const handleRightClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        console.log("Right Clicked");
        OpenMediaItemDropdown();
    }

    const OpenMediaItemDropdown = () => {
        console.log("Open Dropdown");
    }

    return (
    <div
        // onClick={handleClick(id)}
        onContextMenu={handleRightClick}
        className="flex items-center relative gap-x-3 cusor-pointer group hover:bg-neutral-800/50 transition w-full p-2 rounded-md"
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
                {genres}
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