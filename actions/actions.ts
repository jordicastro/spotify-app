

export const getArtistsByItem = (data: any[]): string => {
    return data.map((artist: any) => artist.name).join(", ");
}

export const getGenresByItem = (data: any[]): string => {
    return data.slice(0, 2).map((genre: any) => genre).join(", ");
}

export const removeQuotesFromUrl = (url: string): string => {
    return url.replace(/"/g, "");
}