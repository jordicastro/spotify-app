"use client";

interface HeaderSkeletonProps {
    type: "artist" | "album" | "playlist";
}

const HeaderSkeleton = ({type}: HeaderSkeletonProps) => {
  return (
    <>
        {type === "artist" && (
            <div
                className="relative flex flex-col items-start justify-start gap-y-9 h-full w-full mt-6 z-[2]"
            >
                <div
                    className="flex items-baseline justify-start gap-x-6 h-full w-full"
                >

                    <div
                        className="relative rounded-xl min-h-[144px] min-w-[144px] overflow-hidden bg-neutral-500 animate-pulse-fast"
                        style={{
                            animationDelay: "0.05s"
                        }}
                    />

                    <div className="absolute left-[170px] bottom-[129px] flex flex-col items-center justify-start gap-y-2">
                        <div
                            className="h-2 w-32 bg-neutral-500 rounded-full animate-pulse-fast"
                            style={{
                                animationDelay: "0.10s"
                            }}
                        />
                        <div
                            className="h-2 w-32 bg-neutral-500 rounded-full animate-pulse-fast"
                            style={{
                                animationDelay: "0.15s"
                            }}
                        />
                        <div
                            className="h-2 w-32 bg-neutral-500 rounded-full animate-pulse-fast"
                            style={{
                                animationDelay: "0.20s"
                            }}
                        />

                    </div>



                </div>

                <div
                    className="h-8 w-[300px] bg-neutral-500 rounded-full animate-pulse-fast"
                    style={{
                        animationDelay: "0.25s"
                    }}
                />

                <div
                    className="h-4 w-[300px] bg-neutral-500 rounded-full animate-pulse-fast mt-2 mb-1"
                    style={{
                        animationDelay: "0.30s"
                    }}
                />


            </div>
        )}

        {type === "album" && (
            <div
                className="flex items-center flex-col sm:flex-row gap-x-8 h-full w-full mt-6 gap-y-2"
            >
                <div
                    className="relative flex rounded-xl aspezct-square mx-auto min-h-[256px] min-w-[256px] md:min-h-[188px] md:min-w-[188px]  xl:min-w-[266px] xl:min-h-[266px] overflow-hidden bg-neutral-500 animate-pulse-fast"
                    style={{
                        animationDelay: "0.05s"
                    }}
                />

                <div
                    className="flex flex-col items-start justify-start gap-y-4 sm:gap-y-6 mt-3 sm:mt-12 h-full w-full pl-2"
                >
                    <div
                        className="h-5 w-[188px] sm:h-3 sm:w-8 bg-neutral-500 rounded-full animate-pulse-fast"
                    />
                    <div
                        className="h-3 w-[75px] sm:h-5 sm:w-[188px] bg-neutral-500 rounded-full animate-pulse-fast"
                    />

                    <div
                        className="flex items-center justify-start gap-x-4"
                    >
                        <div
                            className="relative rounded-full aspect-square mx-auto min-h-[30px] min-w-[30px] sm:min-h-[48px] sm:min-w-[48px] overflow-hidden bg-neutral-500 animate-pulse-fast"
                        />

                        <div
                            className="h-3 w-[123px] bg-neutral-500 rounded-full animate-pulse-fast"
                        />
                    </div>
                </div>


            </div>
        )}

    </>
  )
}

export default HeaderSkeleton