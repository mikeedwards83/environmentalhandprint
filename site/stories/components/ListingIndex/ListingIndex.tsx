import React, { ReactNode } from "react"
import { Redirect } from "../Redirect/Redirect";

const ListingIndex = (props: {
  className?: string,
  redirect?:boolean 
  folder:string
}) => {

  const {
    className = "",
    redirect=true,
    folder
  } = props;

  const destination = `/${folder}/1`;

  return (
    <div className={`ListingIndex ${className}`}>
        <div className="container pt-5">
          <Redirect url={destination} redirect={redirect}/>
        </div>
    </div>
  )
}

export default ListingIndex;