import { ReactNode } from "react"

export  type Color = "dark"|"light";

const Section = (props: { 
  className?:string
  color?:Color
  children:ReactNode
}) => {

    const { 
      className="",
      color="white",
      children
    } = props;

    return (
      <div className={`Section ${className} ${color}`}>
        {children}
      </div>
    )
}

export default Section;