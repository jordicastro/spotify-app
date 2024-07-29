"use client";

import ArtistContent from '@/components/ArtistContent';
import Header from '@/components/Header';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

const ArtistPage = () => {

    const { artistId } = useParams();

    useEffect( () => {
        // TODO: fetch artist data using artistId
        // fetch top artist songs limit=5
        // fetch top artist albums limit=5
        // pass them into the ArtistContent component for styling
    }, [artistId])

    return (
    <div
        className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto'
    >
        <Header
            className="from-bg-neutral-900"
        >
            <ArtistContent artistData={""} artistAlbums={""} artistSongs={""} />
        </Header>
    </div>
    )
}

export default ArtistPage