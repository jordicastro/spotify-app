import { create } from "zustand";

type dataType = "artist" | "track" | "playlist"

type SpotifyStore = {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
    accessToken: string;
    setAccessToken: (token: string) => void;
    fetchAccessToken: (client_id: string, client_secret: string) => Promise<string>;
    getNewReleases: (token: string) => void;
    getDataBySearchValue: (searchValue: string, type: dataType, limit?: number) => Promise<string[]>;
    getArtistDataById: (id: string) => Promise<{ generalData: any; albums: any; topTracks: any }>;
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

    },
    getDataBySearchValue: async (searchValue, type, limit=5) => {
        // fetch artist ID
        let searchParams = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + get().accessToken
            }
        }

        const res = await fetch("https://api.spotify.com/v1/search?q=" + searchValue + `&type=${type}&limit=${limit}`, searchParams);

        if (!res.ok) throw new Error(`Failed to fetch ${type} data `);

        const data = await res.json();

        if (type === "artist") {
            console.log("artistId", data.artists.items);
            return data.artists.items;
        } else if (type === "track") {
            console.log("data.tracks.items", data.tracks.items);
            return data.tracks.items;
        }
    },

    getArtistDataById: async (id): Promise<{ generalData: any; albums: any; topTracks: any }> => {
        let url = "https://api.spotify.com/v1/artists/" + id;
        let searchParams = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + get().accessToken
            }
        }
        const res = await fetch(url, searchParams);
        if (!res.ok) throw new Error("Failed to fetch artist");

        const generalData = await res.json();
        console.log("general artistData", generalData);

        let url2 = "https://api.spotify.com/v1/artists/" + id + "/albums";
        const res2 = await fetch(url2, searchParams);
        if (!res2.ok) throw new Error("Failed to fetch artist albums");

        const albumsData = await res2.json();
        console.log("albumData", albumsData);

        let url3 = "https://api.spotify.com/v1/artists/" + id + "/top-tracks?market=US";
        const res3 = await fetch(url3, searchParams);
        if (!res3.ok) throw new Error("Failed to fetch artist top tracks");

        const topTracksData = await res3.json();
        console.log("topTracksData", topTracksData);

        const albums = albumsData.items;
        const topTracks = topTracksData.tracks;

        console.log("topTracks.tracks", topTracks);
        console.log("albums.items", albums);

        return { generalData, albums, topTracks };
    }
}))