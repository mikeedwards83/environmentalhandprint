import { ReactNode } from "react"
import { ScreenSize } from "../../../hooks/useBootstrapSize";
import { Image } from "../../atoms/Image/Image";
import Callout, { ICallout } from "../Callout/Callout";


const CalloutsHorizontal = (props: {
  className?: string
  title?:string,
  callouts:ICallout []
}) => {

  const {
    className = "",
    title,
    callouts
  } = props;

  return (
    <div className={`CalloutHorizontal ${className}`}>


      <div className="container process">
        <div className="row">
          <div className="col-12 text-center pb-3">
            {title && <h2 className="tt-fg-white">{title}</h2>}
          </div>
        </div>
        <div className="row  tt-fg-white callout-cards justify-content-center" style={{ fontSize: "1.2rem" }}>
          {callouts && callouts.map(callout => <Callout callout={callout} className="col-12 col-lg-4" />)}
        </div>
      </div>
    </div>
  )
}

export default CalloutsHorizontal;


