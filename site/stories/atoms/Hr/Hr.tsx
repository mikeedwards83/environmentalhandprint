import { ReactNode } from "react"

const Hr = (props: { 
  className?:string
}) => {

    const { 
      className=""
    } = props;

    return (
      <hr className={`Hr ${className}`} />
    )
}

export default Hr;