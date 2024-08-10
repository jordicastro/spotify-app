"use client";

import Image from "next/image";
import PlayButton from "./PlayButton";
import { useRouter } from "next/navigation";

interface Artist {
    name: string;
    id: string;
}
interface MediaItemCardProps {
    albumType: "album" | "single";
    subtext: string;
    subtextIsArtists?: boolean;
    artists: Artist[];
    itemImageUrl: string;
    itemName: string;
    id?: string;
    onClick: (id: string | undefined) => void;
}

const MediaItemCard = ({ albumType, subtext, subtextIsArtists, artists, itemImageUrl, itemName, id, onClick }: MediaItemCardProps) => {
    const router = useRouter();

    const handleReroute = (path: string, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation();
        router.push(path);
    }

  return (
    <div
        className="relative group flex flex-col justify-center items-center rounded-xl overflow-hidden gap-x-4 p-3 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition"
        onClick={() => onClick(id)}
    >
        <div
            className="relative aspect-square w-full h-full rounded-[10px] overflow-hidden"
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
            {subtextIsArtists && artists ? (
            artists.map((artist, id) => (
                <span
                    key={id}
                    className="hover:underline cursor-pointer"
                    onClick={(e) => handleReroute(`/artist/${artist.id}`, e)}
                >
                    {artist.name}
                    {id < artists.length - 1 && ", "}
                </span>
                ))
            ) : (
                subtext
            )}
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