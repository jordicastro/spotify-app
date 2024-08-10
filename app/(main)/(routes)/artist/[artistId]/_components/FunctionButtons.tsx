"use client";

import { getThemeClass } from "@/actions/actions";
import Button from "@/components/Button"
import FunctionButton from "@/components/FunctionButton";
import PlayButton from "@/components/PlayButton"
import { useSettings } from "@/hooks/useSettings";
import { Check, Ellipsis, Heart, Play, PlusCircle, Shuffle } from "lucide-react"
import { defaultOverrides } from "next/dist/server/require-hook";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface FunctionButtonsProps {
    isAlbum?: boolean;
}

const FunctionButtons = ({isAlbum}: FunctionButtonsProps) => {

    const [isFollowing, setIsFollowing] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);
    const { currentTheme } = useSettings();
    const buttonText = isFollowing ? "Following" : "Follow";

    const handleOpenEllipsisModal = () => {
        // TO DO: open modal
    }

    const handleOnPlay = () => {
        // TO DO: play
    }

    const onAddAlbumToLibrary = (isActive: boolean) => {
        // TO DO: add album to library
            // if not logged in, redirect to login modal
        console.log("isActive: ", isActive);
        // toast("Album added to library");
    }

    return (
        <div
            className={twMerge(
                `flex items-center justify-start gap-x-6 pt-0 sm:pt-6 h-full w-full`,
                !isAlbum && `pt-6`
            )}
        >
            <div
                className=""
                role="button"
                onClick={handleOnPlay}
            >
                <PlayButton size="lg" className="flex" />
            </div>

            <div
                role="button"
                onClick={() => setIsShuffling(!isShuffling)}
            >
                <Shuffle
                    className={twMerge(
                        `w-10 h-10 text-neutral-400 hover:text-white transition `,
                        isShuffling && getThemeClass("text", currentTheme, "500")
                        
                    )} />
            </div>

            <div>
                {isAlbum ? (
                    <FunctionButton size="lg" icon={PlusCircle} activeIcon={Check} onClick={onAddAlbumToLibrary} />
                ) : (
                    <Button
                        className={twMerge(
                            `p-3 px-5 font-bold text-md tracking-wider transition`,
                            isFollowing ? `bg-transparent border-2 ` + getThemeClass("border", currentTheme, "500") + ` text-neutral-400 font-medium` : `bg-neutral-700`
                            // isFollowing ? `bg-indigo-500` : `bg-neutral-700`
                        )}
                        onClick={() => setIsFollowing(!isFollowing)}>
                        {buttonText}
                    </Button>
                )}
            </div>

            <div
                role="button"
                onClick={handleOpenEllipsisModal}
            >
                <Ellipsis className="w-10 h-10 text-neutral-400 hover:text-white transition" />
            </div>

        </div>
    )
}

export default FunctionButtons