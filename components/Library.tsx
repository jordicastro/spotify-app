"use client";
import { Song } from "@/types";
import { ListMusic as PlaylistIcon, Plus as PlusIcon } from "lucide-react";
import MediaItem from "./MediaItem";
import { useSpotify } from "@/hooks/useSpotify";

interface LibraryProps {
    songs: Song[];
}

const Library = ({songs}: LibraryProps) => {

    const { isLoggedIn } = useSpotify();

    const onClick = () => {
        // Handle upload later
    }

  return (
    <div
        className="flex flex-col"
    >
        <div
            className="flex items-center justify-between px-5 pt-4"
        >
            <div
                className="inline-flex items-center gap-x-2"
            >
                <PlaylistIcon className="h-6 w-6 text-neutral-400" />
                <p className="text-neutral-400 font-medium text-md">
                    Your Library
                </p>
            </div>
            <PlusIcon
                className="w-6 h-6 text-neutral-400 cursor-pointer hover:text-white transition"
                onClick={onClick}
            />
        </div>

        <div
            className="flex flex-col gap-y-2 mt-4 px-3"
        >
            {/* {isLoggedIn && songs.map ( (song) => (
                <MediaItem
                    onClick={() => {}}
                    key={song.id}
                    data={song}
                />
            ))} */}
        </div>
    </div>
  )
}

export default Library