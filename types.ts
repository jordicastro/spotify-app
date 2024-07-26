

export interface Song {
    id: string;
    title: string;
    artist: string;
    album_cover_url: string;
}

export interface MediaItem {
    album_type: "album" | "single";
    // TO DO: Add more properties
}