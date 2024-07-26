"use client";

import { MediaItem, Song } from "@/types";
import { Play } from "lucide-react";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface MediaItemCardProps {
    albumType: "album" | "single";
    artists: string;
    itemImageUrl: string;
    itemName: string;
    onClick: (id: string) => void;
}

const MediaItemCard = ({ albumType, artists, itemImageUrl,itemName, onClick }: MediaItemCardProps) => {
  return (
    <div
        className="relative group flex flex-col justify-center items-center rounded-md overflow-hidden gap-x-4 p-3 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition"
    >
        <div
            className="relative aspect-square w-full h-wull rounded-md overflow-hidden"
        >
            <Image
                className="object-cover"
                src={itemImageUrl || "/images/media_item_placeholder.svg"}
                fill
                alt="image"
            />
        </div>

        <div
            className="flex flex-col items-start w-full p-4 gap-y-1"
        >
            <p className="font-semibold truncate w-full">
                {itemName}
            </p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">
                {artists}
            </p>
        </div>

        <div
            className="absolute right-3 bottom-3"
        >
            <PlayButton size="sm"/>
        </div>

    </div>
  )
}

export default MediaItemCard