"use client";

import { convertMStoMinutes, getArtistsByItem, getThemeClass, getYearFromReleaseDate, removeQuotesFromUrl } from "@/actions/actions";
import Button from "@/components/Button";
import MediaItem from "@/components/MediaItem";
import MediaItemCard from "@/components/MediaItemCard";
import { useSettings } from "@/hooks/useSettings";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";


interface DataSectionProps {
  title?: string;
  data: any;
  isAlbum?: boolean
  albumImageUrl?: string;
}

const onClick = (id: string) => {
  // TODO:
}

const DataSection = ({ title, data, isAlbum, albumImageUrl}: DataSectionProps) => {
  const router = useRouter();
  const { albumId } = useParams();

  const [isAlbums, setIsAlbums] = useState(true);
  const [isExpanded, setExpanded] = useState(false);
  const { currentTheme } = useSettings();

  const expandText = isExpanded ? "see less" : "see more";
  const dataArray = Array.isArray(data) ? data : [];
  const topTracksData = isExpanded ? dataArray : dataArray.slice(0,5);
  const discographyData = isAlbums ? dataArray.filter((item: any) => item.album_type === "album") : dataArray.filter((item: any) => item.album_type === "single");

  const onSongClick = (id: string) => {
    // TODO:
    // play the item.preview_url
    // this should be a global action
  }

  const onRedirectAlbumPage = (id: string) => {
    router.push(`/album/${id}`);
  }

  return (
    <div
        className={twMerge(
          `flex flex-col items-start justiify-start gap-y-6 mb-16 mt-6`,
          !isAlbum && `mt-0`
        )}
    >

        {title && (
          <h1 className="text-4xl font-white font-semibold pt-16">
              {title}
          </h1>
        )}

        {title === "Discography" && (
              <div
                className="flex ml-0 gap-x-4 -mx-6 px-0"
              >
                <Button
                  className={twMerge(
                    `w-24 h-10 bg-neutral-700 text-neutral-300`,
                    isAlbums && getThemeClass("background", currentTheme, "500") + " text-black"
                  )}
                  onClick={() => setIsAlbums(true)}
                >
                  Albums
                </Button>

                <Button
                  className={twMerge(
                    `w-24 h-10 bg-neutral-700 text-neutral-300`,
                    !isAlbums && getThemeClass("background", currentTheme, "500") + " text-black"
                  )}
                  onClick={() => setIsAlbums(false)}
                >
                  Singles
                </Button>
              </div>
            )}

        <div
          className="flex flex-col gap-y-2 w-full px-6"
        >
            {title === "Top tracks" && topTracksData.map( (item: any, index: number) => (
              <div
                key={item.id}
                className="flex items-center gap-x-4 w-full"
              >
                <div className="flex-1">
                    <MediaItem name={item.name} imageUrl={removeQuotesFromUrl(item.album.images[0].url)} artists={item.artists} subtextIsArtists subtext="" id={item.id} artistId={item.artists[0].id} albumId={item.album.id} enumerate index={index} duration={convertMStoMinutes(item.duration_ms)} onClick={onSongClick} />
                </div>

              </div>

            ))
            }

            {title === "Top tracks" && (
              <div
                role="button"
                onClick={() => setExpanded(!isExpanded)}
              >
                <p className="text-neutral-400 text-sm mt-2 hover:underline underline-offset-4">
                  {expandText}
                </p>
              </div>
            )}

            {title === "Discography" && (
              <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4"
              >
                {discographyData.map( (item: any) => (
                  <MediaItemCard
                    key={item.id}
                    subtext={getYearFromReleaseDate(item.release_date)}
                    itemName={item.name}
                    itemImageUrl={removeQuotesFromUrl(item.images[0].url)}
                    albumType={item.album_type}
                    artists={item.artists}
                    id={item.id}
                    onClick={() => onRedirectAlbumPage(item.id)}
                  />
                ))}
              </div>

            )}
        </div>

        {isAlbum && dataArray.map( (item: any, index: number) => (
              <div
                key={item.id}
                className="flex items-center gap-x-4 w-full"
              >
                <div className="flex-1">
                    <MediaItem name={item.name} imageUrl={albumImageUrl} subtext="" subtextIsArtists artists={item.artists} id={item.id} artistId={item.artists[0].id} albumId={albumId as string} enumerate index={index} duration={convertMStoMinutes(item.duration_ms)} onClick={onSongClick} />
                    {/* imageUrl={albumImageUrl as string} */}
                </div>

              </div>

            ))
        }

    </div>
  )
}

export default DataSection