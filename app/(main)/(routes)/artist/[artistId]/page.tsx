"use client";

import ArtistContent from '@/components/ArtistContent';
import Header from '@/components/Header';
import { useSpotify } from '@/hooks/useSpotify';
import { useTwitter } from '@/hooks/useTwitter';
import { useParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react'
import FunctionButtons from './_components/FunctionButtons';
import DataSection from './_components/DataSection';
import { removeQuotesFromUrl } from '@/actions/actions';
import MediaItemSkeleton from '@/components/MediaItemSkeleton';
import HeaderSkeleton from '@/components/HeaderSkeleton';

const ArtistPage = () => {

    const { artistId } = useParams();
    const artistIdString = Array.isArray(artistId) ? artistId[0] : artistId;

    const { getArtistDataById } = useSpotify();
    const [generalData, setGeneralData] = useState<any>({});
    const [albums, setAlbums] = useState<any>({});
    const [topTracks, setTopTracks] = useState<any>([]);
    const [spotifyHref, setSpotifyHref] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const isArtistPage = true;
    const { getUserData } = useTwitter();

    useEffect( () => {
        const fetchArtistData = async () => {
            const { generalData, albums, topTracks } = await getArtistDataById(artistIdString);
            setGeneralData(generalData);
            if (isArtistPage)
                setSpotifyHref(removeQuotesFromUrl(generalData.external_urls.spotify));
            setAlbums(albums);
            setTopTracks(topTracks);
            setLoading(false);
            //getUserData(generalData.name);
        }

        fetchArtistData();
    }, [])

    return (
        <div
            className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto'
        >
            {loading ? (
                <>
                    <Header
                        className="from-bg-neutral-900"
                        twitterBannerUrl={""}
                        isArtistPage
                    >
                        <HeaderSkeleton type="artist" />
                    </Header>
                    <div className='pl-6'>
                        <FunctionButtons spotifyHref={spotifyHref}/>

                        <div className='flex flex-col gap-y-6 mb-32'>
                            <h1 className='text-4xl font-white font-semibold pt-16'>
                                Top tracks
                            </h1>

                            <MediaItemSkeleton type="media_item" num={5} enumerate />
                        </div>

                        <div className='flex flex-col gap-y-6'>
                            <h1 className='text-4xl font-white font-semibold pt-16'>
                                Discography
                            </h1>

                            <MediaItemSkeleton type="media_item_card" num={5} />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Header
                        className="from-bg-neutral-900"
                        twitterBannerUrl={""}
                        isArtistPage
                    >
                        <ArtistContent  generalData={generalData} />
                    </Header>

                    <div className='pl-6'>
                        <FunctionButtons spotifyHref={spotifyHref}/>
                        <DataSection title="Top tracks" data={topTracks} />
                        <DataSection title="Discography" data={albums} />
                    </div>
                </>
            )}
        </div>

    )
}

export default ArtistPage