import { ReactNode } from "react"
import { ColourOptions } from "../../materials/Colours/Colours";


export interface IHighlight {
  title: string,
  description?: string
  features: string[] | ReactNode[],
  footer?: string
}
const Highlight = (props: {
  className?: string,
  highlight: IHighlight
  colour?: ColourOptions
}) => {

  const {
    className,
    highlight,
    colour = "lightGreen"
  } = props;

  return (
    <div className={`Highlight p-3 ${className} ${colour}`}>
      <h3 className={`${colour}`}>
        {highlight.title}
      </h3>
      {highlight.description && <p >
        {highlight.description}
      </p>}
      <ul>
        {highlight.features.map((x, idx) => <li key={idx}>{x}</li>)}
      </ul>
      {highlight.footer && <p className="Highlight-Footer small">
        {highlight.footer}
      </p>}
    </div>
  )
}

export default Highlight;