import { ReactNode } from "react"

const Colours = (props: {
  className?: string
}) => {

  const {
    className = ""
  } = props;

  return (
    <div className={`Colours ${className}`}>

      <div className="row">
        <div className="Color brand-lg">
          <span className="Color-Code">#93c13e</span>
        </div>
        <div className="Color brand-dg">
          <span className="Color-Code">#235d2f</span>
        </div>
        <div className="Color brand-grey">
          <span className="Color-Code">#111111</span>
        </div>

        <div className="Color brand-red">
          <span className="Color-Code">#ff3f0b</span>
        </div>

        <div className="Color brand-yellow">
          <span className="Color-Code">#f9dd05</span>
        </div>

        <div className="Color brand-orange">
          <span className="Color-Code">#fd6a02</span>
        </div>

      </div>
    </div>
  )
}

export default Colours;