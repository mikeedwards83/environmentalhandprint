import { ReactNode } from 'react';

export type Side = "left" | "right";

export const TextImage = (props:
    { children: ReactNode, imageUrl: string, imageText: string, side: Side }) => {


    const { children, imageText, imageUrl, side } = props;



    return (
        <div className="row align-items-center  pt-3 TextImage">
            <div className={`col-12 col-lg-6 text-center pb-4 pb-lg-0 order-first ${side ==="right" ? "order-lg-last":""}`}>
                <img src={imageUrl} data-aos="fade-left" className="aos-init aos-animate" alt={imageText} />
            </div>
            <div className="col-12 col-lg-6 ">
                {children}
            </div>
        </div>
    )

}