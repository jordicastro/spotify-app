

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

export const convertMStoMinutes = (ms: number, colon: boolean = true): string => {
    let minutes = Math.floor(ms / 60000);
    let seconds = ((ms % 60000) / 1000).toFixed(0);
    return colon ? (
        minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds
    ) : (
        minutes + " min " + (parseInt(seconds) < 10 ? '0' : '') + seconds + " sec"
    );
}

export const getYearFromReleaseDate = (date: string): string => {
    if (!date) return "";
    return date.split("-")[0];
}

export const getAlbumDuration = (data: any[]): string => {
    let totalDuration = 0;
    data.forEach( (track: any) => {
        totalDuration += track.duration_ms;

    })

    return convertMStoMinutes(totalDuration, false);
}