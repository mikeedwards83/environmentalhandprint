import { ReactNode } from "react"
import { ImageUnsplashBackground } from "../../atoms/ImageUnsplashBackground/ImageUnsplashBackground";

export const BannerImage = (props: { title: string | ReactNode, imageUrl: string, subTitle?: string, fpx?: number, fpy?: number, className?:string }) => {

    const { title, imageUrl, subTitle, fpx, fpy,className=""} = props;

    return (
        <ImageUnsplashBackground
            imageUrl={imageUrl}
            crop="FocalPoint"
            fpx={fpx}
            fpy={fpy}
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