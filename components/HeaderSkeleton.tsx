"use client";

interface HeaderSkeletonProps {
    type: "artist" | "album" | "playlist";
}

const HeaderSkeleton = ({type}: HeaderSkeletonProps) => {
  return (
    <div
        className="relative flex flex-col items-start justify-start gap-y-9 h-full w-full mt-6 z-[2] border border-slate-500"
    >
        <div
            className="flex items-baseline justify-start gap-x-6 h-full w-full border border-slate-500"
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
            className="h-4 w-[300px] bg-neutral-500 rounded-full animate-pulse-fast mt-2 mb-0.5"
            style={{
                animationDelay: "0.30s"
            }}
        />


    </div>
  )
}

export default HeaderSkeleton