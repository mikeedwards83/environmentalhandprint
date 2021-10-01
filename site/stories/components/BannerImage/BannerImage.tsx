import { ReactNode } from "react"
import { IImage } from "../../../ui/interfaces/IImage";
import { ImageUnsplashBackground } from "../../atoms/ImageUnsplashBackground/ImageUnsplashBackground";

export const BannerImage = (props: { title: string | ReactNode, image: IImage, subTitle?: string, className?:string }) => {

    const { title, image, subTitle,className=""} = props;

    return (
        <ImageUnsplashBackground
            imageUrl={image.src}
            crop="FocalPoint"
            fpx={image.fpx}
            fpy={image.fpy}
            className="BannerImage d-flex flex-column justify-content-center align-items-center"
        >
            <div className="container">
                <div className="row">
                    <div className={`BannerImage-Container offset-1 ${className}`}>
                        <h1 className="">
                            {title}
                        </h1>
                        {subTitle && <h3>
                            {subTitle}
                        </h3>}
                    </div>
                </div>
            </div>
        </ImageUnsplashBackground >

    )
}