"use client";

import { useViewImage } from "@/hooks/useViewImage";

import {
    Dialog,
    DialogContent,
    DialogHeader
} from "@/components/ui/dialog";
import Image from "next/image";

const ViewImageModal = () => {

    const viewImage = useViewImage();
    const { imageUrl } = viewImage;

    return (
        <Dialog
            open={viewImage.isOpen}
            onOpenChange={viewImage.onClose}
        >
            <DialogContent
                className="w-[355px] h-[355px] sm:w-[512px] sm:h-[512px] lg:w-[640px] lg:h-[640px] p-0 border-none bg-transparent"
                style={{ maxWidth: 'none', maxHeight: 'none' }} // Debugging styles
            >
                <Image
                    src={imageUrl}
                    alt="media item"
                    className="object-cover h-full w-full rounded-[8px]"
                    width={512}
                    height={512}
                />
            </DialogContent>
        </Dialog>
    )
}

export default ViewImageModal