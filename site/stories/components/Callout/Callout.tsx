import { ReactNode } from "react"
import { ScreenSize } from "../../../hooks/useBootstrapSize";
import { ILink } from "../../../ui/interfaces/ILink";
import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink";
import { Image, ImageSrc } from "../../atoms/Image/Image";
import { Link } from "../../atoms/Link/Link";



export interface ICallout {
  src: ImageSrc,
  alt: string,
  title: string,
  children: ReactNode,
  link?: ILink
}

const Callout = (props: {
  className?: string
  callout: ICallout
}) => {

  const {
    className = "",
    callout

  } = props;

  return (
    <div className={`Callout callout-card ${className} `}>
      <Image src={callout.src} alt={callout.alt} className="m-auto" imageScales={
        [
          { height: 250, width: 316, size: ScreenSize.MD }
        ]
      } />

      <h3 className=" tt-fg-white pt-3">{callout.title}</h3>
      {callout.children}


      {callout.link &&  <ButtonLink url={callout.link.url} className="btn-primary-white">
        {callout.link.text}
      </ButtonLink>    }
    </div>
  )
}

export default Callout;