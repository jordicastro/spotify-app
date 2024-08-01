"use client";

import { Heart, LucideIcon } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface LikeButtonProps {
    icon: LucideIcon;
    activeIcon?: LucideIcon;
    size: "sm" | "md" | "lg";
    children?: React.ReactNode;
    onClick?: (isActive:boolean) => void;
}

const LikeButton = ({size, children, icon: InactiveIcon, activeIcon: ActiveIcon, onClick}: LikeButtonProps) => {

    const [isActive, setIsActive] = useState(false);

    const Icon: LucideIcon = isActive && ActiveIcon ? ActiveIcon : InactiveIcon;

    const handleClick = () => {
        setIsActive(!isActive);
        onClick && onClick(isActive);
    }

    return (
        <div
            className="cursor-pointer"
            role="button"
            onClick={() => handleClick()}
        >
            <Icon
                className={twMerge(
                    `w-10 h-10 rounded-full text-neutral-400 hover:text-white transition`,
                    size === "sm" && `w-6 h-6`,
                    size === "md" && `w-8 h-8`,
                    size === "lg" && `w-12 h-12`,
                    isActive && `bg-indigo-500 text-white p-2 transition`
                )} 
            />
        </div>
    )
}

export default LikeButton