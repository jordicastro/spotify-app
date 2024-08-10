const ColorThief = require('colorthief');

export const getDominantColor = async (imageUrl: string): Promise<string> => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const imageBitMap = await createImageBitmap(blob);
    const colorThief = new ColorThief();
    const dominantColor = colorThief.getColor(imageBitMap);
    const rgb = `rgb(${dominantColor.join(",")})`;
    const hex = rgbToHex(rgb);
    return hex;
}

export const rgbToHex = (rgb: string): string => {
    const [r, g, b] = rgb.match(/\d+/g)!.map(Number);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}