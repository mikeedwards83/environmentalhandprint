import { ReactNode } from 'react';
import { ScreenSize } from '../../../hooks/useBootstrapSize';
import { Image } from "../../atoms/Image/Image";

export type Side = "left" | "right";

export const TextImage = (props:
    {
        children: ReactNode,
        imageUrl: string,
        imageText: string, side: Side, className?: string,
        fpy?: number,
        fpx?: number,
    }) => {


    const { children, imageText, imageUrl, side, className = "", fpy, fpx } = props;



    return (
        <div className={`row align-items-center  pt-3 TextImage ${className}`}>
            <div className={`col-12 col-lg-6 text-center pb-4 pb-lg-0 order-first ${side === "right" ? "order-lg-last" : ""}`}>
                <Image src={imageUrl} data-aos="fade-left" className="aos-init aos-animate rounded" alt={imageText} fpy={fpy} fpx={fpx}
                    imageScales={[
                        { size: ScreenSize.SM, width: 500, height: 300 }
                    ]} />
            </div>
            <div className="col-12 col-lg-6 ">
                {children}
            </div>
        </div>
    )

}