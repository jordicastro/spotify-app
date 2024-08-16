"use client";

import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Aperture, CircleCheck, CirclePlus, Ellipsis, ListMusic, LucideIcon, Plus, Share } from "lucide-react";

import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ImageAsIcon from "./ImageAsIcon";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getThemeClass } from "@/actions/actions";
import { useSettings } from "@/hooks/useSettings";

interface MediaPageMenuProps {
    onClick: () => void;
    spotifyHref: string;
}

const MediaPageMenu = ({ onClick, spotifyHref }: MediaPageMenuProps) => {

    const router = useRouter();
    const { currentTheme: theme } = useSettings();

    const [isInLibrary, setIsInLibrary] = useState<boolean>(false);

    const addLibraryTitle: string = isInLibrary ? "Remove from Library" : "Add to Library";
    const addLibraryIcon: LucideIcon = isInLibrary ? CircleCheck : CirclePlus;
    const addLibraryStyle: string = isInLibrary ? getThemeClass("text", theme, "500") : "text-neutral-400";

    const items = [
        {
            imageIconHref: "/images/spotify_icon.svg",
            icon: Aperture,
            title: "View in Spotify",
            onClick: () => router.push(spotifyHref),
            notAllowed: false,
            imageAsIcon: true,
        },
        {
            icon: addLibraryIcon,
            title: addLibraryTitle,
            onClick: () => setIsInLibrary(!isInLibrary),
            className: addLibraryStyle,
        },
        {
            icon: ListMusic,
            title: "Add to queue",
            notAllowed: true,
            onClick: () => {},
        },
        {
            icon: Plus,
            title: "Add to playlist",
            dropdown: true,
            notAllowed: true,
            onClick: () => {},
        },
        {
            icon: Share,
            title: "Share",
            dropdown: true,
            notAllowed: true,
            onClick: () => {},
        }
    ]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <div
                role="button"
                onClick={onClick}
            >
                <Ellipsis className="w-10 h-10 text-neutral-400 hover:text-white transition" />
            </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-48 h-80 overflow-y-auto transform -translate-x-2 rounded-xl bg-neutral-800 shadow-lg"
                align="center"
                alignOffset={8}
                forceMount
            >
                <div
                    className="flex flex-col justify-start items-center mt-2"
                >
                    {items.map( (item, index) => (
                        <MenuItem key={index} icon={item.icon} imageIconHref={item.imageIconHref} title={item.title} onClick={item.onClick} notAllowed={item.notAllowed} imageAsIcon={item.imageAsIcon} className={item.className} />
                    ))}

                </div>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MediaPageMenu