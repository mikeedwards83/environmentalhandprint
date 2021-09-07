import { ReactNode } from 'react';
import './TextImage.scss'

export enum TextImageSide {
    ImageLeft,
    ImageRight
}
export const TextImage = (props:
    { title?: string, content: string | ReactNode, imageUrl: string, imageText: string, side: TextImageSide }) => {


    const { title, content, imageText, imageUrl, side } = props;



    const imageComponent =
        <div className="col-12 col-lg-6 text-center">
            <img src={imageUrl} data-aos="fade-left" className="aos-init aos-animate" alt={imageText} />
        </div>


    return (
        <div className="row align-items-center  pt-3 TextImage">
            
            {side === TextImageSide.ImageLeft && imageComponent}

            <div className="col-12 col-lg-6 ">
                {title &&
                    <h3 className="text-center-sm">
                        {title}
                    </h3>}

                <div>
                    {content}
                </div>
            </div>

            {side === TextImageSide.ImageRight && imageComponent}

        </div>
    )

}