

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

export const getThemeClass = (
    type: "background" | "gradient" | "text" | "border" = "background",
    theme: string, weight: string = "500"
) => {
    if (type === "background" ) {
        switch (theme) {
            case "indigo":
                return `bg-indigo-${weight}`;
            case "red":
                return `bg-red-${weight}`;
            case "green":
                return `bg-green-${weight}`;
            case "blue":
                return `bg-blue-${weight}`;
            // Add more cases as needed
            default:
                return "bg-indigo-500";
        }
    } else if (type === "gradient" && weight) {
        switch (theme) {
            case "indigo":
                return `bg-gradient-to-b from-indigo-${weight}`;
            case "red":
                return `bg-gradient-to-b from-red-${weight}`;
            case "green":
                return `bg-gradient-to-b from-green-${weight}`;
            case "blue":
                return `bg-gradient-to-b from-blue-${weight}`;
            default:
                return "bg-gradient-to-b from-indigo-500";
        }
    } else if (type === "border" && weight) {
        switch (theme) {
            case "indigo":
                return `border-indigo-${weight}`;
            case "red":
                return `border-red-${weight}`;
            case "green":
                return `border-green-${weight}`;
            case "blue":
                return `border-blue-${weight}`;
            // Add more cases as needed
            default:
                return "";
        }
    } else if (type === "text" ) {
        switch (theme) {
            case "indigo":
                return `text-indigo-${weight}`;
            case "red":
                return `text-red-${weight}`;
            case "green":
                return `text-green-${weight}`;
            case "blue":
                return `text-blue-${weight}`;
            // Add more cases as needed
            default:
                return "";
        }
    }
    return "border border-slate-500"
};