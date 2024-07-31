"use client";

import Button from "@/components/Button"
import PlayButton from "@/components/PlayButton"
import { Ellipsis, Play, Shuffle } from "lucide-react"
import { useState } from "react";
import { twMerge } from "tailwind-merge";


const FunctionButtons = () => {

    const [isFollowing, setIsFollowing] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);

    const buttonText = isFollowing ? "Following" : "Follow";

    const handleOpenEllipsisModal = () => {
        // TO DO: open modal
    }

    const handleOnPlay = () => {
        // TO DO: play
    }

    return (
        <div
            className="flex items-center justify-start gap-x-6 pt-8 pb-16 h-full w-full"
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
                        `w-10 h-10 text-neutral-400 hover:text-white transition`,
                        isShuffling && `text-indigo-500`
                        
                    )} />
            </div>

            <div>
                <Button
                    className={twMerge(
                        `p-3 px-5 font-bold text-md tracking-wider transition`,
                        isFollowing ? `bg-transparent border-2 border-indigo-500 text-neutral-400 font-medium` : `bg-neutral-700`
                        // isFollowing ? `bg-indigo-500` : `bg-neutral-700`
                    )}
                    onClick={() => setIsFollowing(!isFollowing)}>
                    {buttonText}
                </Button>
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