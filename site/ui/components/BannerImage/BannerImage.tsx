import { ReactNode } from "react"
import { ImageUnsplashBackground } from "../../atoms/ImageUnsplashBackground/ImageUnsplashBackground";

export const BannerImage = (props: { title: string | ReactNode, imageUrl: string, subTitle?: string, fpx?:number, fpy?:number }) => {

    const { title, imageUrl, subTitle, fpx, fpy} = props;

    return (
        <ImageUnsplashBackground
            imageUrl={imageUrl}
            crop="FocalPoint"
            fpx={fpx}
            fpy={fpy}
            className="BannerImage d-flex flex-column justify-content-center align-items-center"
        >
            <div className="container">
                <div className="BannerImage-Container">
                    <h1 className="">
                        {title}
                    </h1>
                    {subTitle && <h3>
                        {subTitle}
                    </h3>}
                </div>
            </div>
        </ImageUnsplashBackground >

    )
}