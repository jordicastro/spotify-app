"use client";

import Image from "next/image";

interface ImageAsIconProps {
    src: string;
    alt: string;
    size: number;
}

const ImageAsIcon = ({src, alt, size}: ImageAsIconProps) => {

    return (
        <Image
            src={src}
            alt={alt}
            width={size}
            height={size}
        />
    )
}

export default ImageAsIcon