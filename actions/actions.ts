

export const getArtistsByItem = (data: any[]): string => {
    if (data.length === 0) return "";
    return data.map((artist: any) => artist.name).join(", ");
}

export const getGenresByItem = (data: any[]): string => {
    return data.slice(0, 2).map((genre: any) => genre).join(", ");
}

export const removeQuotesFromUrl = (url: string): string => {
    return url.replace(/"/g, "");
}

export const convertMStoMinutes = (ms: number): string => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds;
}

export const getYearFromReleaseDate = (date: string): string => {
    return date.split("-")[0];
}