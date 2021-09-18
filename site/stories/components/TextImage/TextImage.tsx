import { ReactNode } from 'react';

export type Side = "left" | "right";

export const TextImage = (props:
    { children: ReactNode, imageUrl: string, imageText: string, side: Side }) => {


    const { title, children, imageText, imageUrl, side } = props;



    const imageComponent =
        <div className="col-12 col-lg-6 text-center">
            <img src={imageUrl} data-aos="fade-left" className="aos-init aos-animate" alt={imageText} />
        </div>


    return (
        <div className="row align-items-center  pt-3 TextImage">

            {side === "left" && imageComponent}

            <div className="col-12 col-lg-6 ">
                {children}
            </div>

            {side === "right" && imageComponent}

        </div>
    )

}