import { ReactNode } from "react"
import { ColourOptions } from "../../materials/Colours/Colours";
import Highlight, { IHighlight } from "../Highlight/Highlight";

const HighlightsThreeColumn = (props: {
  className?: string,
  highlights: IHighlight[]
  colour?: ColourOptions

}) => {

  const {
    className = "",
    highlights,
    colour="lightGreen"
  } = props;

  return (
    <div className={`HighlightsThreeColumn ${className}`}>
      <div className="row">
        {highlights.map(x =>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <Highlight highlight={x} colour={colour} />
          </div>)}
      </div>
    </div>
  )
}

export default HighlightsThreeColumn;