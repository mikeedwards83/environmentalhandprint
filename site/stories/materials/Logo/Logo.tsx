import { ReactNode } from "react"

const Logo = (props: { 
  className?:string
}) => {

    const { 
      className=""
    } = props;

    return (
      <div className={`Logo ${className}`}>
        <h1 className="pb-5">Horizontal</h1>
        <img src="/images/logo-horizontal.svg"  />
      </div>
    )
}

export default Logo;