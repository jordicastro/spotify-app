"use client";

interface MediaItemSkeletonProps {
    type: "media_item" | "media_item_card";
    num?: number;
    enumerate?: boolean;
}

const MediaItemSkeleton = ({type, num = 1, enumerate}: MediaItemSkeletonProps) => {
  return (
    <>
    
        {type === "media_item" && (
            <div
                className="flex items-center gap-x-4 w-full"
            >
                <div className="flex-1">
                    {Array.from({length: num}).map( (_, index) => (
                        <div
                            key={index}
                            className="flex items-center relative gap-x-3 p-8 h-12 rounded-md w-full"
                        >
                            {enumerate && (
                                <p className="flex group-hover:hidden items-center justify-center text-neutral-400 tracking-wider">
                                    {/* @ts-ignore */}
                                    {index + 1}.
                                </p>
                            )}

                            <div
                                className="relative rounded-[5px] min-h-[48px] min-w-[48px] overflow-hidden bg-neutral-500 animate-pulse-fast"
                                style={{
                                    animationDelay: `${index * 0.05}s`
                                }}
                            />

                            <div
                                className="flex flex-col gap-y-2 overflow-hidden w-full"
                            >
                                <div
                                    className="w-16 h-2 rounded-full bg-neutral-500 animate-pulse-fast "
                                    style={{
                                        animationDelay: `${index * 0.05}s`
                                    }}
                                />

                                <div
                                    className="w-12 h-2 bg-neutral-500 rounded-full animate-pulse-fast"
                                />
                            </div>

                            <div
                                className="absolute right-[80px] w-6 h-2 rounded-full bg-neutral-500 animate-pulse-fast"
                                style={{
                                    animationDelay: `${index * 0.05}s`
                                }}
                            />
                        </div>
                    ))}
                </div>

            </div>
        )}

        {type === "media_item_card" && (
            <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4"
            >
                {Array.from({length: num}).map( (_, index) => (
                    <div
                    className="relative group flex flex-col justify-center items-center rounded-xl overflow-hidden gap-x-4 p-4 bg-neutral-400/5"
                    key={index}>
                        <div
                            className="relative aspect-square w-full h-full rounded-[10px] overflow-hidden bg-neutral-700 animate-pulse-fast"
                            style={{
                                animationDelay: `${index * 0.05}s`
                            }}
                        >

                        </div>

                        <div
                            className="flex flex-col items-start w-full p-4 gap-y-4"
                        >
                            <div
                                className="w-full h-2 rounded-full bg-neutral-700 animate-pulse-fast "
                                style={{
                                    animationDelay: `${index * 0.05}s`
                                }}
                            />
                            <div
                                className="w-10 h-2 rounded-full bg-neutral-700 animate-pulse-fast "
                                style={{
                                    animationDelay: `${index * 0.05}s`
                                }}
                            />
                        </div>

                    </div>
                ))}

            </div>

        )}

    </>
  )
}

export default MediaItemSkeleton