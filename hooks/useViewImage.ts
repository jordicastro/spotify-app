import { create } from "zustand";

type ViewImageStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    imageUrl: string;
    setImageUrl: (url: string) => void;
};

export const useViewImage = create<ViewImageStore>( (set, get) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    imageUrl: "",
    setImageUrl: (url) => set({ imageUrl: url })
}));