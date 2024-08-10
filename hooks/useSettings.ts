import { create } from "zustand";

type SettingsStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    currentTheme: string;
    setCurrentTheme: (theme: string) => void;
};

export const useSettings = create<SettingsStore>( (set, get) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    currentTheme: "indigo",
    setCurrentTheme: (theme) => { console.log("changing theme to :", theme); set({ currentTheme: theme })}
}))