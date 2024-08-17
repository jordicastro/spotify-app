"use client";

import { Song } from "@/types";
import { twMerge } from "tailwind-merge";
import MediaItemCard from "./MediaItemCard";
import { useSpotify } from "@/hooks/useSpotify";
import { useState, useEffect } from "react";
import { getArtistsByItem, removeQuotesFromUrl } from "@/actions/actions";
import { on } from "events";
import { useRouter } from "next/navigation";
import MediaItemSkeleton from "./MediaItemSkeleton";


interface HomeSectionProps {
    title: string;
    type: string;
}

const HomeSection = ({title, type}: HomeSectionProps) => {
  const { isLoggedIn, accessToken } = useSpotify();
  const [newReleases, setNewReleases] = useState<any[]>([]);
  const router = useRouter();

  const spotify = useSpotify();

  useEffect( () => {

    const fetchNewReleases = async (token: string) => {
      const data: any = await spotify.getNewReleases(token);
      setNewReleases(data);
    }

    if (accessToken !== "")
      fetchNewReleases(accessToken);
  }, [accessToken, spotify])

  const onRedirectAlbumPage = (id: string) => {
    router.push(`/album/${id}`);
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
          {newReleases.length === 0 ? (
              <MediaItemSkeleton type="media_item_card" num={10} />
          ) : (
            <div
                className={twMerge(`

                `,
                    type === "carousel" && "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4",
                    type === "grid" && "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4"
                )}
            >

                {title === "New Releases" && newReleases.map( (item) => (
                  <MediaItemCard
                    key={item.id}
                    subtext={getArtistsByItem(item.artists)}
                    subtextIsArtists
                    artists={item.artists}
                    albumType={item.album_type}
                    onClick={() => onRedirectAlbumPage(item.id)}
                    itemImageUrl={removeQuotesFromUrl(item.images[2].url)}
                    itemName={item.name}
                  />
                ))}
            </div>
          )}
        </div>

      </div>
  )
}

export default HomeSection