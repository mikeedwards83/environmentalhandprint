
export type Fit = "Unset" | "Crop"
export type Crop = "Unset" | "FocalPoint"

export const unsplashUrl = (imageUrl: string,  fit: Fit, crop: Crop, quality: number,width: number, height?: number, fpy?: number, fpx?: number, ) => {
    let img = imageUrl.split("?")[0];

    console.log(img)
    img += "?";

    switch (fit) {
        case "Unset":
            break;
        case "Crop":
            img += "fit=crop&";
            break;

    }

    if (width) {
        img += `width=${width}&`;
    }
    if (height) {
        img += `height=${height}&`;
    }
    if (quality) {
        img += `q=${quality}&`;
    }

    switch (crop) {
        case "Unset":
            break;
        case "FocalPoint":
            img += "crop=focalpoint&";
            break;
    }

    if (fpy) {
        img += `fp-y=${fpy}&`;
    }
    if (fpx) {
        img += `fp-x=${fpx}&`;
    }

    return img;
}