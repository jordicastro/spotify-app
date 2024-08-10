"use client";

import SettingsModal from "@/components/modals/SettingsModal";
import ViewImageModal from "@/components/modals/ViewImageModal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect( () => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <SettingsModal />
            <ViewImageModal />
        </>
    )
}