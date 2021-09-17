import { useEffect, useState } from "react";

export const Image = (props: { src: StaticImageData|string, className?: string, alt?:string }) => {

    const { src, className = "", alt } = props;


    const [url, setUrl] = useState("");

    useEffect(() => {

        if (src) {
            var sti = src as StaticImageData
            if (sti.src) {
                setUrl(sti.src);
            }
            else {
                setUrl(src as any);
            }
        }

    }, [src])


    return (

        <img src={url} className={className} alt={alt} />
    )
}