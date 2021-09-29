import Script from "next/script";
import React, { ReactNode } from "react"

const ShareThis = (props: { 
  className?:string
}) => {

    const { 
      className=""
    } = props;

    return (

      <div className={`ShareThis ${className}`}>
            <Script  src="https://platform-api.sharethis.com/js/sharethis.js#property=615426591dc9b90019870fa6&product=sticky-share-buttons" async />
            <div className="sharethis-sticky-share-buttons"></div>
      </div>
    )
}

export default ShareThis;