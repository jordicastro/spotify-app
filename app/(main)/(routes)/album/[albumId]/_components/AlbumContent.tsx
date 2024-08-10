"use client";

import { getAlbumDuration, getYearFromReleaseDate } from "@/actions/actions";
import { useViewImage } from "@/hooks/useViewImage";
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
    const viewImage = useViewImage();

    const handleOpenViewImageModal = () => {
        viewImage.setImageUrl(imageUrl);
        viewImage.onOpen();
    }

    return (
        <div
            className="flex flex-col sm:flex-row gap-x-8 h-full w-full mt-6 gap-y-2"
        >
            <div
                className="relative flex rounded-xl aspezct-square mx-auto min-h-[256px] min-w-[256px] md:min-h-[188px] md:min-w-[188px]  xl:min-w-[266px] xl:min-h-[266px] overflow-hidden hover:scale-105 transition active:scale-100"
                role="button"
                onClick={() => handleOpenViewImageModal()}
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
                className="flex flex-col items-start justify-start gap-y-2 sm:gap-y-6 mt-2 sm:mt-12 h-full w-full pl-2"
            >
                    <p
                        className="text-neutral-400 text-xs md:text-md xl:text-[16px] hidden sm:block "
                    >
                        {albumOrSingle}
                    </p>

                    <h1 className="font-extrabold text-xl md:text-2xl xl:text-3xl line-clamp-1">
                        {generalData.name}
                    </h1>

                    <p
                        className="flex gap-x-1 text-neutral-400 text-xs md:text-md xl:text-[16px] mb-2 sm:hidden"
                    >
                        {/* only renders on small screens */}
                        {albumOrSingle}
                        <p>•</p>
                        <p>{albumYear}</p>
                    </p>

                    <div
                        className="flex items-center justify-start gap-x-4"
                    >
                        <div 
                            className="relative rounded-full aspect-square mx-auto min-h-[30px] min-w-[30px] sm:min-h-[48px] sm:min-w-[48px] overflow-hidden hover:scale-105 transition"
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

                        <div className="hidden sm:flex h-8 w-1 rounded-full bg-neutral-400" />

                        <span className="hidden sm:flex text-neutral-400 text-xs md:text-sm gap-x-2 truncate overflow-hidden">
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