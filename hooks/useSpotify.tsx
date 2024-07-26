import { create } from "zustand";

type SpotifyStore = {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
    accessToken: string;
    setAccessToken: (token: string) => void;
    fetchAccessToken: (client_id: string, client_secret: string) => Promise<string>;
    getNewReleases: (token: string) => void;
}

export const useSpotify = create<SpotifyStore>( (set, get) => ({
    isLoggedIn: false,
    setIsLoggedIn: (loggedIn) => set({isLoggedIn: loggedIn}),
    accessToken: "",
    setAccessToken: (token) => set({accessToken: token}),
    fetchAccessToken: async (client_id, client_secret) => {


        let authParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "grant_type=client_credentials&client_id=" + client_id + "&client_secret=" + client_secret
        }

        const res = await fetch("https://accounts.spotify.com/api/token", authParams)
        
        if (!res.ok) throw new Error("Failed to fetch access token");

        const data = await res.json();

        set({accessToken: data.access_token});

        return data.access_token;
    },
    getNewReleases: async (token) => {
        let url = "https://api.spotify.com/v1/browse/new-releases";
        let auth_header = {"Authorization": "Bearer " + token};

        const res = await fetch(url, { headers: auth_header });

        if (!res.ok) throw new Error("Failed to fetch new releases");

        const data = await res.json();
        console.log("data.albums.items", data.albums.items);

        return data.albums.items;

    }
}))