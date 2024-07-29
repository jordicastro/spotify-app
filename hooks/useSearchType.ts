import { create } from "zustand";

type SearchTypeStore = {
    isArtist: boolean;
    setIsArtist: (isArtist: boolean) => void;
}

export const useSearchType = create<SearchTypeStore>( (set) => ({
    isArtist: true,
    setIsArtist: (isArtist) => set({ isArtist: isArtist})
}))