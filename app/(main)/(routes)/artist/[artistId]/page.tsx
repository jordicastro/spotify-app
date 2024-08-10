"use client";

import ArtistContent from '@/components/ArtistContent';
import Header from '@/components/Header';
import { useSpotify } from '@/hooks/useSpotify';
import { useTwitter } from '@/hooks/useTwitter';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react'
import FunctionButtons from './_components/FunctionButtons';
import DataSection from './_components/DataSection';

const ArtistPage = () => {

    const { artistId } = useParams();
    const artistIdString = Array.isArray(artistId) ? artistId[0] : artistId;

    const { getArtistDataById } = useSpotify();
    const [generalData, setGeneralData] = useState<any>({});
    const [albums, setAlbums] = useState<any>({});
    const [topTracks, setTopTracks] = useState<any>([]);
    const { getUserData } = useTwitter();

    useEffect( () => {
        const fetchArtistData = async () => {
            const { generalData, albums, topTracks } = await getArtistDataById(artistIdString);
            setGeneralData(generalData);
            setAlbums(albums);
            setTopTracks(topTracks);
            //getUserData(generalData.name);
        }

        fetchArtistData();
    }, [])

    return (
    <div
        className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto'
    >
        <Header
            className="from-bg-neutral-900"
            twitterBannerUrl={""}
            isArtistPage
        >
            <ArtistContent  generalData={generalData} />
        </Header>

        <div className='pl-6'>
            <FunctionButtons />
            <DataSection title="Top tracks" data={topTracks} />
            <DataSection title="Discography" data={albums} />
        </div>
    </div>
    )
}

export default ArtistPage