"use client";

import { getGenresByItem, removeQuotesFromUrl } from "@/actions/actions";
import MediaItem from "@/components/MediaItem";
import { useSearch } from "@/hooks/useSearchValue";
import { useSpotify } from "@/hooks/useSpotify";
import { Song } from "@/types";
import { Ellipsis, Heart } from "lucide-react";
import { useEffect, useState } from "react";


interface searchContentProps {
    songs: Song[];
}

const SearchContent = ({ songs }: searchContentProps) => {

    const [data, setData] = useState<any[]>([]);

    const { searchValue } = useSearch();
    const { getArtistBySearchValue } = useSpotify();



    useEffect( () => {

        const fetchArtistBySearchValue = async (searchValue: string) => {
            const artists: string[] = await getArtistBySearchValue(searchValue);
            setData(artists);
            console.log("artists", artists);
        }

        if (searchValue !== "")
            fetchArtistBySearchValue(searchValue);

    }, [searchValue])

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
            {data.map( (item) => (
                <div
                    key={item.id}
                    className="flex items-center gap-x-4 w-full"
                >
                    <div
                        className="flex-1"
                    >
                        <MediaItem name={item.name} imageUrl={removeQuotesFromUrl(item.images[0].url)} genres={getGenresByItem(item.genres)} id={item.id} onClick={() => {}} />
                    </div>

                </div>
            ))}
        </div>
    )
}

export default SearchContent