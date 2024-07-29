"use client";

import { getArtistsByItem, getGenresByItem, removeQuotesFromUrl } from "@/actions/actions";
import MediaItem from "@/components/MediaItem";
import { useSearchType } from "@/hooks/useSearchType";
import { useSearch } from "@/hooks/useSearchValue";
import { useSpotify } from "@/hooks/useSpotify";
import { Song } from "@/types";
import { get } from "http";
import { Ellipsis, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


interface searchContentProps {

}

const SearchContent = ({  }: searchContentProps) => {

    const { isArtist } = useSearchType();

    const [artistsData, setArtistsData] = useState<any[]>([]);
    const [tracksData, setTracksData] = useState<any[]>([]);

    const { searchValue } = useSearch();
    const { getDataBySearchValue } = useSpotify();

    const router = useRouter();



    useEffect( () => {

        if (isArtist) {
            const fetchArtistBySearchValue = async (searchValue: string) => {
                const artists: string[] = await getDataBySearchValue(searchValue, "artist");
                setArtistsData(artists);
                console.log("artists", artists);
            }
            if (searchValue !== "")
                fetchArtistBySearchValue(searchValue);
        } else {
            console.log("searching for songs");
            const fetchSongsBySearchValue = async (searchValue: string) => {
                const songs: string[] = await getDataBySearchValue(searchValue, "track");
                setTracksData(songs);
                console.log("songs", songs);
            }
            if (searchValue !== "")
                fetchSongsBySearchValue(searchValue);
        }


    }, [searchValue, isArtist, getDataBySearchValue])

    // if (data.length === 0 ) {
    //     return (
    //         <div
    //             className="flex flex-col gap-y-2 w-full px-6 text-neutral-400"
    //         >
    //             No Songs found.
    //         </div>
    //     )
    // }

    const onRedirectToArtistPage = (id: string) => {
        console.log("Redirect to artist page", id);

        router.push("/artist/" + id);
    }

    return (
        <div
            className="flex flex-col gap-y-2 w-full px-6"
        >
            {isArtist ? (artistsData.map( (item) => (
                <div
                    key={item.id}
                    className="flex items-center gap-x-4 w-full"
                >
                    <div
                        className="flex-1"
                    >
                            <MediaItem name={item.name} imageUrl={removeQuotesFromUrl(item.images[0].url)} subtext={getGenresByItem(item.genres)} id={item.id} onClick={onRedirectToArtistPage} />
                    </div>

                </div>
                ))) : (
                tracksData.map( (item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-x-4 w-full"
                    >
                        <div
                            className="flex-1"
                        >
                            <MediaItem name={item.name} imageUrl={removeQuotesFromUrl(item.album.images[0].url)} subtext={getArtistsByItem(item.artists)} id={item.id} onClick={onRedirectToArtistPage} />
                        </div>
                    </div>
                )
            ))}
        </div>
    )
}

export default SearchContent