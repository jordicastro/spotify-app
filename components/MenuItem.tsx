"use client";

import { ChevronRight, LucideIcon } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import ImageAsIcon from "./ImageAsIcon";

interface MenuItemProps {
    icon: LucideIcon;
    imageIconHref?: string;
    title: string;
    onClick: () => void;
    notAllowed?: boolean;
    dropdown?: boolean;
    imageAsIcon?: boolean;
    className?: string;
}

const MenuItem = ({icon: Icon, imageIconHref, title, onClick, notAllowed, dropdown, imageAsIcon, className}: MenuItemProps) => {

    const [isActiveDropdown, setIsActiveDropdown] = useState(false);

    if (className) console.log("className: ", className);

    return (
        <div
            className={twMerge(
                `w-full h-full flex items-center gap-x-3 cursor-pointer  px-2 py-2 rounded-[5px] hover:bg-neutral-700 transition`,
                notAllowed && "opacity-50 cursor-not-allowed"
            )}
            role="button"
            onClick={onClick}
        >
            {imageAsIcon ? (
                // @ts-ignore
                <ImageAsIcon src={imageIconHref} alt="Spotify logo" size={20} />
            ) : (
                <Icon className={twMerge(
                    `h-5 w-5 text-neutral-400`,
                    className
                )} />)
            }
            <p className="h-full w-full text-neutral-400 font-normal text-sm">{title}</p>
            {dropdown && (
                    <ChevronRight
                        className={twMerge(
                            `h-5 w-5 text-neutral-400`,
                            isActiveDropdown && "rotate-90 transition"
                        )}

                        onClick={() => setIsActiveDropdown(!isActiveDropdown)}
                    />

            )}
        </div>
    )
}

export default MenuItem