"use client";

import { ListMusic as PlaylistIcon, Plus as PlusIcon } from "lucide-react";

const Library = () => {

    const onClick = () => {
        // Handle upload later
    }

  return (
    <div
        className="flex flex-col"
    >
        <div
            className="flex items-center justify-between px-5 pt-4"
        >
            <div
                className="inline-flex items-center gap-x-2"
            >
                <PlaylistIcon className="h-6 w-6 text-neutral-400" />
                <p className="text-neutral-400 font-medium text-md">
                    Your Library
                </p>
            </div>
            <PlusIcon
                className="w-6 h-6 text-neutral-400 cursor-pointer hover:text-white transition"
                onClick={onClick}
            />
        </div>

        <div
            className="flex flex-col gap-y-2 mt-4 px-3"
        >
            List of Songs
        </div>
    </div>
  )
}

export default Library