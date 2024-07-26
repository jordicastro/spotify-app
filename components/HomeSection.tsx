"use client";

import { Song } from "@/types";
import { twMerge } from "tailwind-merge";
import MediaItemCard from "./MediaItemCard";
import { useSpotify } from "@/hooks/useSpotify";
import { useState, useEffect } from "react";


interface HomeSectionProps {
    title: string;
    songs: Song[];
    type: string;
}

const HomeSection = ({title, songs, type}: HomeSectionProps) => {
  const { isLoggedIn } = useSpotify();
  const [newReleases, setNewReleases] = useState<any[]>([]);

  const spotify = useSpotify();
  // REPLACE WITH process.env.NEXT_PUBLIC_CLIENT_ID and process.env.NEXT_PUBLIC_CLIENT_SECRET before deploying
  const CLIENT_ID = ""
  const CLIENT_SECRET = "";
  if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new Error("CLIENT_ID or CLIENT_SECRET is undefined");
  }

  useEffect( () => {
    const fetchToken = async () => {
      const token: string = await spotify.fetchAccessToken(CLIENT_ID, CLIENT_SECRET);
      console.log("token", token);
      fetchNewReleases(token);
    }

    const fetchNewReleases = async (token: string) => {
      const data: any = await spotify.getNewReleases(token);
      setNewReleases(data);
    }

    fetchToken();
  }, [])

  const getArtistsByItem = (data: any[]): string => {
    return data.map((artist: any) => artist.name).join(", ");
  }

  const removeQuotesFromUrl = (url: string): string => {
    return url.replace(/"/g, "");
  }


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
                {/* {title !== "New Releases" && songs.map( (song) => (
                    <MediaItemCard
                        key={song.id}
                        onClick={() => {}}
                        data={song}
                    />
                ))} */}

                {title === "New Releases" && newReleases.map( (item) => (
                  <MediaItemCard
                    key={item.id}
                    artists={getArtistsByItem(item.artists)}
                    albumType={item.album_type}
                    onClick={() => {}}
                    itemImageUrl={removeQuotesFromUrl(item.images[2].url)}
                    itemName={item.name}
                  >
                  </MediaItemCard>
                ))}
            </div>
          )}
        </div>

      </div>
  )
}

export default HomeSection