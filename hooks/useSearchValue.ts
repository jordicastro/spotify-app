import { create } from "zustand";

type SearchStore = {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export const useSearch = create<SearchStore>( (set) => ({
    searchValue: "",
    setSearchValue: (value) => set({ searchValue: value})
}))