"use client";

import { Song } from "@/types";
import { Play } from "lucide-react";
import Image from "next/image";

interface SongItemProps {
    data: Song;
    onClick: (id: string) => void;
}

const SongItem = ({data, onClick}: SongItemProps) => {
  return (
    <div
        className="relative group flex flex-col justify-center items-center rounded-md overflow-hidden gap-x-4 p-3 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition"
    >
        <div
            className="relative aspect-square w-full h-wull rounded-md overflow-hidden"
        >
            <Image
                className="object-cover"
                src={data.album_cover_href || "/images/album_placeholder.png"}
                fill
                alt="image"
            />
        </div>

        <div
            className="flex flex-col items-start w-full p-4 gap-y-1"
        >
            <p className="font-semibold truncate w-full">
                {data.title}
            </p>
            <p className="text-neutral-400 text-sm pb-4 w-full truncate">
                {data.artist}
            </p>
        </div>

        <div
            className="hidden group-hover:flex hover:scale-105 absolute transition p-3 rounded-full bg-indigo-500 items-center justify-center drop-shadow-md right-3 bottom-3"
        >
            <Play className="w-5 h-5 text-black fill-black"/>
        </div>

    </div>
  )
}

export default SongItem