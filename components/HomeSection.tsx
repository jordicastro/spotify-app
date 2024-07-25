"use client";

import { Song } from "@/types";
import { twMerge } from "tailwind-merge";
import SongItem from "./SongItem";


interface HomeSectionProps {
    title: string;
    songs: Song[];
    type: string;
}

const HomeSection = ({title, songs, type}: HomeSectionProps) => {
  return (
    <div
          className="mt-2 mb-7 px-6"
      >
        <div
          className="flex justify-between items-center"
        >
          <h1 className="text-white text-2xl font-semibold">
            {title}
          </h1>
        </div>

        <div
          className="mt-4"
        >
          {songs.length === 0 ? (
            <div className=" text-neutral-400">
                No songs available
            </div>
          ) : (
            <div
                className={twMerge(`

                `,
                    type === "carousel" && "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4",
                    type === "grid" && "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4"
                )}
            >
                {songs.map( (song) => (
                    <SongItem
                        key={song.id}
                        onClick={() => {}}
                        data={song}
                    />
                ))}
            </div>
          )}
        </div>

      </div>
  )
}

export default HomeSection