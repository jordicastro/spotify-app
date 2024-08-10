"use client";

import { Ellipsis, Plus, PlusCircle, UserRound } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Disc3 } from 'lucide-react'
import MenuItem from './MenuItem';
import { usePathname, useRouter } from 'next/navigation';
import { useSearchType } from '@/hooks/useSearchType';

interface ItemMenuProps {
    artistId: string;
    albumId: string;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ItemMenu = ({artistId, albumId, onClick}: ItemMenuProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const { isArtist } = useSearchType();

    const items = [
        {
            icon: Disc3,
            title: "Go to album",
            onClick: () => router.push(`/album/${albumId}`),
            notAllowed: pathname.includes('album') || isArtist && !pathname.includes('artist')
        },
        {
            icon: UserRound,
            title: "Go to artist",
            onClick: () => router.push(`/artist/${artistId}`),
            notAllowed: pathname.includes('artist')
        },
        {
            icon: PlusCircle,
            title: "Save to Liked Songs",
            onClick: () => {},
            notAllowed: true,
        },
        {
            icon: Plus,
            title: "Add to playlist",
            onClick: () => {},
            notAllowed: true,
            dropdown: true,
            dropdownContent: []
        }
        
    ]

    const sortedItems = items.sort( (a, b) => Number(a.notAllowed) - Number(b.notAllowed) );

    return (
        <DropdownMenu
            // open={isOpen}
            // onOpenChange={setIsOpen}
        >
            <DropdownMenuTrigger asChild>
                <div
                    className="absolute right-2"
                    role="button"
                    onClick={onClick}
                >
                    <Ellipsis
                        className="hidden group-hover:flex transition ease-in-out text-neutral-400 hover:scale-105 p-1 bg-transparent hover:bg-white/10 rounded-full cursor-pointer "
                    />
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-48 h-80 overflow-y-auto transform -translate-x-2 rounded-xl bg-neutral-800 shadow-lg"
                align="center"
                alignOffset={8}
                forceMount
            >
                <div
                    className='w-full flex flex-col justify-start items-center mt-2'
                >
                    {sortedItems.map( (item, index) => (
                        <MenuItem key={index} icon={item.icon} title={item.title} onClick={item.onClick} notAllowed={item.notAllowed} dropdown={item.dropdown} />
                    ))}
                </div>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ItemMenu