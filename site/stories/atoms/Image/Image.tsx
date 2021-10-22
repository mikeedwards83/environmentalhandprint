import { CSSProperties, useEffect, useState } from "react";
import { ScreenSize, useBootstrapSize } from "../../../hooks/useBootstrapSize";
import { ImageUnsplash } from "../ImageUnsplash/ImageUnsplash";
 
export interface IImageScale {
    size: ScreenSize;
    width: number;
    height: number;
}
export type ImageSrc = StaticImageData | string;

export const Image = (props: {
    src: ImageSrc,
    className?: string,
    alt?: string,
    imageScales?: IImageScale[],
    defaultMobile?: ScreenSize
    defaultDesktop?: ScreenSize,
    fpy?: number,
    fpx?: number,
}) => {

    const {
        src,
        className = "",
        alt,
        imageScales = [],
        defaultMobile = ScreenSize.XS,
        defaultDesktop = ScreenSize.MD,
        fpy,
        fpx

    } = props;


    const size = useBootstrapSize();
    const [mobileScale, setMobileScale] = useState<IImageScale>(getScaledImage(defaultMobile));
    const [desktopScale, setDesktopScale] = useState<IImageScale>(getScaledImage(defaultDesktop));
    const [url, setUrl] = useState(testType(src) ? (src as StaticImageData).src : src);


    function testType(tbd: any): tbd is StaticImageData {

        
        if (tbd && (tbd as StaticImageData).src) {
            return true
        }
        return false
    }

    function getScaledImage(size: ScreenSize) :IImageScale {
        

        if(!imageScales || imageScales.length === 0){
            return {
                size:ScreenSize.SM,
                width:-1,
                height:-1
            }
        }

        const imagescalesSorted = imageScales.sort((a, b) => a.size - b.size);

        //take the largest
        //then try to find the smallest for the screensize
        let imageScale = imagescalesSorted[imagescalesSorted.length - 1];

        for (let i = imagescalesSorted.length - 1; i >= 0; i--) {

            if (imagescalesSorted[i].size >= size) {
                imageScale = imagescalesSorted[i]
            }
        }

        return imageScale;
    }


    useEffect(() => {

        if (src) {

                const imageScale = getScaledImage(size);

                if (imageScale) {
                    
                    setMobileScale(imageScale);
                    setDesktopScale(imageScale);
                }

        }
    }, [src, size])


    return (
        <>

            <ImageRender className={`${className} d-md-none m-auto `} scale={mobileScale} url={url} alt={alt} fpy={fpy} fpx={fpx} />
            <ImageRender className={`${className} d-none d-md-block m-auto `} scale={desktopScale} url={url} alt={alt} fpy={fpy} fpx={fpx}  />
        </>
    )
}



const ImageRender = (props: {
    className: string,
    scale: IImageScale,
    url: string
    alt?: string,
    fpy?: number,
    fpx?: number,
}) => {

    const {
        className,
        scale,
        url,
        alt,
        fpx,
        fpy
    } = props;

    const style: CSSProperties = {
        width: scale.width,
        height: scale.height
    }

    const getMeasurement =(measurement: string|number|undefined) :string=>{

        if(Number.isFinite(measurement)){
            return `${measurement}px`;
        }
        return measurement as string;
    }

    return (
        <ImageUnsplash src={url}  className={`Image ${className}`}  alt={alt} width={scale.width} height={scale.height} style={style} fpy={fpy} fpx={fpx}  />
    )
}



