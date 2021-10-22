import { ReactNode } from "react"
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { Image } from "../../atoms/Image/Image";
import { ScreenSize } from "../../../hooks/useBootstrapSize";

const CtaSocial = (props: {
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
    <div className={`CtaSocial ${className}`}>
      <div className="row">
        <div className={`col-12 col-lg-6 text-center pb-4 pb-lg-0 order-first order-lg-last d-flex`}>
          <Image src={imageUrl} data-aos="fade-left" className="aos-init aos-animate rounded" alt={imageText} fpy={fpy} fpx={fpx}
            imageScales={[
              { size: ScreenSize.SM, width: 500, height: 300 }
            ]} />
        </div>
        <div className="col-lg-6 align-center ">
          {children}
          <SocialMediaIcons className={"text-center mt-5"} />
        </div>
      </div>

    </div>
  )
}

export default CtaSocial;