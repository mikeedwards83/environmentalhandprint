import React, { ReactNode } from "react"
import { Redirect } from "../Redirect/Redirect";

const ListingIndex = (props: {
  className?: string
  folder:string
}) => {

  const {
    className = "",
    folder
  } = props;

  const destination = `/${folder}/1`;

  return (
    <div className={`ListingIndex ${className}`}>
        <div className="container pt-5">
          <Redirect url={destination} />
        </div>
    </div>
  )
}

export default ListingIndex;