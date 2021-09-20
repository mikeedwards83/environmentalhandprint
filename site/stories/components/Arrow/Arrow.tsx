import { ReactNode } from "react"


export type Arrow = 1|2|3|4;

const Arrow = (props: { 
  className?:string
  arrow?:Arrow,
  children:ReactNode
}) => {

    const { 
      className="",
      arrow = 1,
      children
    } = props;

    return (
      <div className={`Arrow ${className}`}>

        {children}
        <div className="Arrow-Container">
          <img src={`/images/arrows/arrow${arrow}.svg`} alt="arrow" />
        </div>
      </div>
    )
}

export default Arrow;