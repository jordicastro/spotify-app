"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Play } from "lucide-react";
import PlayButton from "./PlayButton";

interface ListItemProps {
    image: string;
    name: string;
    href: string;

}

const ListItem = ({image, name, href}: ListItemProps) => {

    const router = useRouter();

    const onClick = () => {
        // add auth before push
        router.push(href);
    }

    return (
    <div
        role="button"
        onClick={onClick}
        className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
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

export default ListItem