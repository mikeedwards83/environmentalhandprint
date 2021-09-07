import { ReactNode, useEffect, useRef, useState } from "react";
import useDimension from "../../hooks/useDimension";
import './ImageUnsplashBackground.scss'


export enum UnsplashFit {
    Unset,
    Crop,
}
export enum UnsplashCrop {
    Unset,
    FocalPoint,
}
export const ImageUnsplashBackground = (props: {
    imageUrl: string,
    className?: string,
    children?: ReactNode,
    quality?: number,
    fit?: UnsplashFit,
    crop?: UnsplashCrop,
    fpy?: number,
    fpx?: number,
}) => {

    const { imageUrl, className = "", children,  fit,  quality, crop, fpy, fpx } = props;
    const [url, setUrl] = useState<string>("");

    const divRef = useRef<HTMLDivElement>(null);

    const { height, width } = useDimension(divRef);

    useEffect(() => {

        console.log(imageUrl);

        if (imageUrl) {
            let img = imageUrl.split("?")[0];

            console.log(img)
            img += "?";

            switch (fit) {
                case UnsplashFit.Unset:
                    break;
                case UnsplashFit.Crop:
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

            switch (fit) {
                case UnsplashFit.Unset:
                    break;
                case UnsplashFit.Crop:
                    img += "fit=crop&";
                    break;
            }

            switch (crop) {
                case UnsplashCrop.Unset:
                    break;
                case UnsplashCrop.FocalPoint:
                    img += "crop=focalpoint&";
                    break;
            }

            if (height) {
                img += `fp-y=${fpy}&`;
            }
            if (quality) {
                img += `fp-x=${fpx}&`;
            }

            setUrl(img)
        }
        else {
            setUrl("")
        }
    }, [imageUrl, className, children, width, fit, height, quality, crop, fpy, fpx])


    return (
        <div className={`ImageUnsplashBackground ${className}`} style={{ backgroundImage: `url('${url}')` }} ref={divRef}>
            {children}
        </div>
    )

}