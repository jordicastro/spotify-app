"use client";

import { ChevronRight, LucideIcon } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface MenuItemProps {
    icon: LucideIcon;
    title: string;
    onClick: () => void;
    notAllowed?: boolean;
    dropdown?: boolean;
}

const MenuItem = ({icon: Icon, title, onClick, notAllowed, dropdown}: MenuItemProps) => {

    const [isActiveDropdown, setIsActiveDropdown] = useState(false);

    return (
        <div
            className={twMerge(
                `w-full h-full flex items-center gap-x-3 cursor-pointer  px-2 py-2 rounded-[5px] hover:bg-neutral-700 transition`,
                notAllowed && "opacity-50 cursor-not-allowed"
            )}
            role="button"
            onClick={onClick}
        >
            <Icon className="h-5 w-5 text-neutral-400" />
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