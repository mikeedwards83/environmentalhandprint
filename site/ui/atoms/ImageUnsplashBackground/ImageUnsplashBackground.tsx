import { ReactNode, useEffect, useRef, useState } from "react";
import { Crop, Fit, unsplashUrl } from "../../../utils/unsplash";
import useDimension from "../../hooks/useDimension";

export const ImageUnsplashBackground = (props: {
    imageUrl: string,
    className?: string,
    children?: ReactNode,
    quality?: number,
    fit?: Fit,
    crop?: Crop,
    fpy?: number,
    fpx?: number,
}) => {

    const { imageUrl, className = "", children,  fit="Crop",  quality=60, crop="Unset", fpy, fpx } = props;
    const [url, setUrl] = useState<string>("");

    const divRef = useRef<HTMLDivElement>(null);

    const { height, width } = useDimension(divRef);

    useEffect(() => {
        if (imageUrl) {
            let url = unsplashUrl(imageUrl,  fit, crop, quality,width, height, fpy, fpx)
            setUrl(url)
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