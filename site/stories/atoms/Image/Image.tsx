import { CSSProperties, useEffect, useState } from "react";
import { ScreenSize, useBootstrapSize } from "../../../hooks/useBootstrapSize";
 
export interface IImageScale {
    size: ScreenSize;
    width?: string|number;
    height?: string|number;
}
export type ImageSrc = StaticImageData | string;

export const Image = (props: {
    src: ImageSrc,
    className?: string,
    alt?: string,
    imageScales?: IImageScale[],
    defaultMobile?: ScreenSize
    defaultDesktop?: ScreenSize
}) => {

    const {
        src,
        className = "",
        alt,
        imageScales = [],
        defaultMobile = ScreenSize.XS,
        defaultDesktop = ScreenSize.MD,
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
                size:ScreenSize.SM
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

            <ImageRender className={`${className} d-md-none m-auto `} scale={mobileScale} url={url} alt={alt} />
            <ImageRender className={`${className} d-none d-md-block m-auto `} scale={desktopScale} url={url} alt={alt} />
        </>
    )
}



const ImageRender = (props: {
    className: string,
    scale: IImageScale,
    url: string
    alt?: string
}) => {

    const {
        className,
        scale,
        url,
        alt
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
        <img src={url} className={`Image ${className}`} alt={alt} width={getMeasurement(scale?.width)} height={getMeasurement(scale?.height)} style={style} />
    )
}



