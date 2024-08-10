"use client";

import { removeQuotesFromUrl } from "@/actions/actions";
import { useSpotify } from "@/hooks/useSpotify";
import { useViewImage } from "@/hooks/useViewImage";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ArtistContentProps {
  generalData: any;
}

const ArtistContent = ({ generalData }: ArtistContentProps) => {

  const imageUrl = !!generalData.images && generalData.images[0].url || "/images/media_item_placeholder.svg";
  const artistName = generalData.name;
  const numFollowers: number = generalData.followers?.total || 0;
  const isVerified = numFollowers > 1000000;
  const formattedNumFollowers = numFollowers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const viewImage = useViewImage();

  const handleOpenViewImageModal = () => {
    viewImage.setImageUrl(imageUrl);
    viewImage.onOpen();
  }

  return (
    <div
      className="flex flex-col items-start justify-start gap-y-6 h-full w-full mt-6 z-[2]"
    >

      <div
        className="flex items-baseline justify-start gap-x-6 h-full w-full"
      >
        <div
            className="relative rounded-xl min-h-[144px] min-w-[144px] overflow-hidden hover:scale-105 transition active:scale-100"
            role="button"
            onClick={() => handleOpenViewImageModal()}
        >
            <Image
                fill
                sizes="144px"
                src={imageUrl}
                alt="media item"
                className="object-cover"
            />
        </div>

        <div className="font-medium text-sm truncate">
          insert twitter description (bio)
        </div>
      </div>

      <div className="font-bold text-5xl ">
        {artistName}
      </div>

      <div
        className="flex items-center justify-start gap-x-6 h-full w-full"
      >
        {isVerified && (
          <>
            <div
              className="flex items-center justify-center gap-x-2"
            >
              <BadgeCheck
                className="w-8 h-8 text-blue-500"
              />
              <p className="text-md font-medium">
                verified artist
              </p>
            </div>

            <div className="h-8 w-1 rounded-full bg-neutral-400" />
          </>
        )}

        <div className="text-md font-medium">
          {formattedNumFollowers} followers
        </div>

      </div>

    </div>
  )
}

export default ArtistContent