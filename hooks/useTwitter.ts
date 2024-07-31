import { create } from "zustand";

type TwitterStore = {
    getUserData: (screenName: string) => Promise<any>;
}

export const useTwitter = create<TwitterStore>( (set, get) => ({
    getUserData: async (screenName) => {
        const url = `https://api.twitter.com/1.1/users/show.json?screen_name=${screenName}`;
        const searchParams = {
            method: "GET",
            headers: {

                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
                
            }
        }

        const res = await fetch(url, searchParams)

        if (!res.ok) throw new Error("Failed to fetch user data");

        const data = await res.json();

        console.log("data", data);
    }
}))