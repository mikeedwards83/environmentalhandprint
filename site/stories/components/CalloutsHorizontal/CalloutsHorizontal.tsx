import { ReactNode } from "react"
import { ScreenSize } from "../../../hooks/useBootstrapSize";
import { Image } from "../../atoms/Image/Image";
import Callout, { ICallout } from "../Callout/Callout";


const CalloutsHorizontal = (props: {
  className?: string
  title?: string,
  callouts: ICallout[]
}) => {

  const {
    className = "",
    title,
    callouts
  } = props;

  let width = "col-lg-4";
  switch (callouts.length) {
    case 4:
      width = "col-lg-3";
      break;
    case 3:
      width = "col-lg-4";
      break;
  }

  return (
    <div className={`CalloutHorizontal ${className}`}>


      <div className="container process">
        <div className="row">
          <div className="col-12 text-center pb-3">
            {title && <h2 className="">{title}</h2>}
          </div>
        </div>
        <div className="row  callout-cards justify-content-center" style={{ fontSize: "1.2rem" }}>
          {callouts && callouts.map(callout => <Callout callout={callout} className={`col-12 ${width}`} />)}
        </div>
      </div>
    </div>
  )
}

export default CalloutsHorizontal;


