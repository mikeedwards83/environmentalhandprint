import { ReactNode } from "react"
import { ScreenSize } from "../../../hooks/useBootstrapSize";
import { Image, ImageSrc } from "../../atoms/Image/Image";



export interface ICallout {
  src: ImageSrc,
  alt: string,
  title: string,
  children: ReactNode
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
          { height: "250px", width: "316px", size: ScreenSize.MD }
        ]
      } />

      <h3 className=" tt-fg-white pt-3">{callout.title}</h3>
      {callout.children}
    </div>
  )
}

export default Callout;