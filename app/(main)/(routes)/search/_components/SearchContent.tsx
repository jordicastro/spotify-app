"use client";

import MediaItem from "@/components/MediaItem";
import { Song } from "@/types";
import { Ellipsis, Heart } from "lucide-react";


interface searchContentProps {
    songs: Song[];
}

const SearchContent = ({ songs }: searchContentProps) => {

    let songDuration = "2:51";

    if (songs.length === 0 ) {
        return (
            <div
                className="flex flex-col gap-y-2 w-full px-6 text-neutral-400"
            >
                No Songs found.
            </div>
        )
    }

    return (
        <div
            className="flex flex-col gap-y-2 w-full px-6"
        >
            {songs.map( (song) => (
                <div
                    key={song.id}
                    className="flex items-center gap-x-4 w-full"
                >
                    <div
                        className="flex-1"
                    >
                        <MediaItem data={song} onClick={() => {}} />
                    </div>

                </div>
            ))}
        </div>
    )
}

export default SearchContent