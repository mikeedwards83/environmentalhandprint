import { ReactNode } from "react"
import Section from "../../atoms/Section/Section";

const Logo = (props: {
  className?: string
}) => {

  const {
    className = ""
  } = props;

  return (
    <>
      <div className="row">
        <div className={`Logo ${className} col-4`}>
          <h1 className="pb-5">Horizontal</h1>
          <img src="/images/logo-horizontal.svg" />
        </div>
      </div>
      <div className="row px-5 pt-5">
        <div className={`Logo ${className} col-4`}>
          <h1 className="pb-5">Icon 150</h1>
          <img src="/images/Logo-Icon-150.jpg" />
        </div>
        <div className={`Logo ${className} col-4`}>
          <h1 className="pb-5">Icon 300</h1>
          <img src="/images/Logo-Icon-300.jpg" />
        </div>
      </div>
      <Section color="dark">
        <div className="row px-5">

          <div className={`Logo ${className} col-4`}>
            <h1 className="pb-5">Icon 150</h1>
            <img src="/images/Logo-Icon-150-white.png" />
          </div>
          <div className={`Logo ${className} col-4`}>
            <h1 className="pb-5">Icon 300</h1>
            <img src="/images/Logo-Icon-300-white.png" />
          </div>
        </div>
      </Section>
    </>
  )
}

export default Logo;