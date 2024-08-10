"use client";

import { useSettings } from "@/hooks/useSettings";

import {
    Dialog,
    DialogContent,
    DialogHeader
} from "@/components/ui/dialog";
import { Settings } from "lucide-react";
import ThemeCarousel from "../ThemeCarousel";



const SettingsModal = () => {

    const settings = useSettings();
    //const { currentTheme, setCurrentTheme } = settings;

    return (
        <Dialog
            open={settings.isOpen}
            onOpenChange={settings.onClose}
        >
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                    <div className="flex gap-x-2 align-center justify-start">
                        <Settings className="h-6 w-6 hover:rotate-90" />
                        <h2 className="text-lg font-medium">
                            Settings
                        </h2>
                    </div>
                </DialogHeader>

                <div className="flex flex-col justify-start items-start gap-y-8">
                    <p className="text-md font-medium">
                        Theme
                    </p>
                    
                    <ThemeCarousel settings={settings} />
                </div>

            </DialogContent>
        </Dialog>
    )
}

export default SettingsModal