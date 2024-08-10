"use client";
import { getThemeClass } from '@/actions/actions';
import { useSettings } from '@/hooks/useSettings';
import { Play } from 'lucide-react'
import { twMerge } from 'tailwind-merge';

interface PlayButtonProps {
    size?: "sm" | "md" | "lg";
    className?: string;
}

const PlayButton = ({size, className}: PlayButtonProps) => {

    const { currentTheme } = useSettings();

  return (
    <button
        className={twMerge(
            `hidden group-hover:flex hover:scale-105  transition p-3 rounded-full items-center justify-center drop-shadow-md`,
            size === "sm" && "p-3",
            size === "md" && "p-4",
            size === "lg" && "p-5",
            currentTheme && getThemeClass("background", currentTheme, "500"),

            className,
        )}
    >
        <Play className={twMerge(
            `w-4 h-4 text-black fill-black`,
            size === "sm" && "w-4 h-4",
            size === "md" && "w-5 h-5",
            size === "lg" && "w-6 h-6",
        )}/>
    </button>
  )
}

export default PlayButton