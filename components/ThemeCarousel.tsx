"use client";

import { twMerge } from "tailwind-merge";

interface ThemeCarouselProps {
    settings: any;
}

const ThemeCarousel = ({settings}: ThemeCarouselProps) => {

    const { currentTheme } = settings;

    const themes = [
        {
            theme: "indigo",
        },
        {
            theme: "green",
        },
        {
            theme: "blue",
        },
        {
            theme: "red",
        },
    ]

    return (
        <div
            className="grid grid-cols-4 gap-8"
        >
            {themes.map( (item, index) => (
                <div className={twMerge(`
                        flex flex-col items-center justify-center gap-y-4  py-4 px-6 hover:bg-primary/10 rounded-3xl cursor-pointer transition`,
                        currentTheme === item.theme && "bg-primary/10"
                    )}
                    key={index}
                    role="button"
                    onClick={() => settings.setCurrentTheme(item.theme)}
                >
                    <div
                        className={twMerge(
                            `p-8 rounded-full aspect-square shadow-lg `,
                            item.theme === "indigo" && "bg-indigo-500",
                            item.theme === "green" && "bg-green-500",
                            item.theme === "blue" && "bg-blue-500",
                            item.theme === "red" && "bg-red-500",
                        )}
                    >
                    </div>

                    <div className={twMerge(
                            `flex justify-center items-center`,
                            currentTheme === item.theme && "font-sans font-medium"
                        )}>
                        {item.theme}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ThemeCarousel