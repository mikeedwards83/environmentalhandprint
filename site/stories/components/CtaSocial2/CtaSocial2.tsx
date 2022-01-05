import React, { ReactNode } from "react"
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { Image } from "../../atoms/Image/Image";
import { ScreenSize } from "../../../hooks/useBootstrapSize";
import Section from "../../atoms/Section/Section";


const CtaSocial2 = (props: {
  className?: string
  children: ReactNode
  fpy?: number,
  fpx?: number,
  imageUrl: string,
  imageText: string,
}) => {

  const {
    className = "",
    children,
    imageText, imageUrl,
    fpy, fpx
  } = props;

  return (
    <div className={`CtaSocial2 ${className}`}>
      <Section color="dark">
        <div className="container mx-auto">
          <div className="row">
            <div className={`col-12 col-lg-6 text-center pb-4 pb-lg-0 order-first order-lg-last d-flex`}>
              <Image src={imageUrl} data-aos="fade-left" className="aos-init aos-animate rounded" alt={imageText} fpy={fpy} fpx={fpx}
                imageScales={[
                  { size: ScreenSize.SM, width: 500, height: 300 }
                ]} />
            </div>
            <div className="col-lg-6 d-flex align-items-center ">
              <div>
                {children}
                <SocialMediaIcons className={"text-center mt-5"} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}


export default CtaSocial2;