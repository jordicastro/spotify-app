"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import PlayButton from "./PlayButton";

interface PlaylistItemProps {
    image: string;
    name: string;
    href: string;

}

const PlaylistItem = ({image, name, href}: PlaylistItemProps) => {

    const router = useRouter();

    const onClick = () => {
        // add auth before push
        router.push(href);
    }

    return (
    <div
        role="button"
        onClick={onClick}
        className="relative group flex items-center rounded-[8px] overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
        <div
            className="relative min-h-[64px] min-w-[64px]"
        >
            <Image
                className="object-cover"
                fill
                src={image}
                alt="image"
            />
        </div>
            <p className="font-medium truncate py-5">
                {name}
            </p>

            <div
                className="absolute right-2"
            >
                <PlayButton />
            </div>
    </div>
    )
}

export default PlaylistItem