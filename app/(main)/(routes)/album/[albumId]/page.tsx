"use client";

import Header from "@/components/Header";
import { useSpotify } from "@/hooks/useSpotify";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import AlbumContent from "./_components/AlbumContent";
import FunctionButtons from "../../artist/[artistId]/_components/FunctionButtons";
import DataSection from "../../artist/[artistId]/_components/DataSection";
import { getDominantColor } from "@/utils/getDominantColor";


const AlbumPage = () => {
    const { albumId } = useParams()
    const [generalData, setGeneralData] = useState<any>({});
    const [tracks, setTracks] = useState<any>([]);
    const { getAlbumDataById, getArtistDataById } = useSpotify();
    const [artistData, setArtistData] = useState<any>({});
    const [albumImageUrl, setAlbumImageUrl] = useState<string>("/images/media_item_placeholder.svg");


    useEffect( () => {
        const fetchAlbumData = async () => {
            const { generalData, tracks } = await getAlbumDataById(albumId as string);
            setGeneralData(generalData);
            setTracks(tracks);

            const artistId = generalData.artists[0].id;
            const { generalData: artistData } = await getArtistDataById(artistId);
            setArtistData(artistData);
            setAlbumImageUrl(generalData?.images?.[0]?.url)
            // const hex = getDominantColor(albumImageUrl);
            // console.log("hex", hex);

        }

        fetchAlbumData();
    }, [])


    return (
        <div
            className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto"
        >
            <Header
                className="from-bg-neutral-900"
            >
                <AlbumContent generalData={generalData} artistData={artistData} />
            </Header>

            <div
                className="pl-6"
            >
                <FunctionButtons isAlbum/>
                <DataSection data={tracks} isAlbum albumImageUrl={albumImageUrl}/>
            </div>

        </div>
    )
}

export default AlbumPage