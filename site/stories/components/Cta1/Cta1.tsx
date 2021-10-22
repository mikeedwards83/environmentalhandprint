import { ReactNode } from "react"

const Cta1 = (props: { 
  className?:string
  title:string,
  description:string,
  children:string
}) => {

    const { 
      className=""
    } = props;

    return (
      <div className={`Cta1 ${className}`}>

        <h1></h1>
      </div>
    )
}

export default Cta1;