"use client";

import { getAlbumDuration, getYearFromReleaseDate } from "@/actions/actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AlbumContentProps {
    generalData: any;
    artistData: any;
}

const AlbumContent = ({ generalData, artistData }: AlbumContentProps) => {

    const imageUrl = generalData?.images?.[0]?.url || "/images/media_item_placeholder.svg";
    const artistImageUrl = artistData?.images?.[0]?.url || "/images/media_item_placeholder.svg";
    const artistName = artistData.name;
    const albumYear = getYearFromReleaseDate(generalData.release_date);
    const numSongs = generalData.total_tracks;
    const albumDuration = generalData.tracks && getAlbumDuration(generalData.tracks.items as []);
    const albumOrSingle = generalData.album_type === "album" ? "Album" : "Single";

    const router = useRouter();

    return (
        <div
            className="flex gap-x-8 h-full w-full mt-6"
        >
            <div
                className="relative rounded-lg min-h-[144px] min-w-[144px] md:min-h-[188px] md:min-w-[188px]  xl:min-w-[266px] xl:min-h-[266px] overflow-hidden"
            >
                <Image
                    fill
                    sizes="256px"
                    src={imageUrl}
                    alt="media item"
                    className="object-cover"
                />

            </div>

            <div
                className="flex flex-col items-start justify-start gap-y-6 h-full w-full"
            >
                    <p
                        className="mt-12 text-neutral-400 text-xs md:text-md xl:text-[16px] "
                    >
                        {albumOrSingle}
                    </p>

                    <h1 className="font-extrabold text-md md:text-2xl xl:text-3xl line-clamp-1">
                        {generalData.name}
                    </h1>

                    <div
                        className="flex items-center justify-start gap-x-4"
                    >
                        <div 
                            className="relative rounded-full min-h-[48px] min-w-[48px] overflow-hidden hover:scale-105 transition"
                            role="button"
                            onClick={() => router.push(`/artist/${artistData.id}`)}    
                        >
                            <Image
                                fill
                                sizes="48px"
                                src={artistImageUrl}
                                alt="media item"
                                className="object-cover rounded-full"
                            />
                        </div>

                        <div
                            className="flex items-center justify-center hover:underline underline-offset-2 transition"
                            role="button"
                            onClick={() => router.push(`/artist/${artistData.id}`)}
                        >
                            <p className="font-semibold text-whitee text-xs md:text-md xl:text-lg">
                                {artistName}
                            </p>
                        </div>

                        <div className="h-8 w-1 rounded-full bg-neutral-400" />

                        <span className="flex text-neutral-400 text-xs md:text-sm gap-x-2">
                            <p>{albumYear}</p>
                            <p>•</p>
                            <p>{numSongs}&nbsp;Songs</p>
                            <p>•</p>
                            <p>{albumDuration}</p>
                        </span>

                    </div>
            </div>
        </div>
    )
}

export default AlbumContent