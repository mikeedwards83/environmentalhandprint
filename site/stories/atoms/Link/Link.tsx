import { ReactNode, useEffect, useState } from "react"
import { ILink } from "../../../ui/interfaces/ILink";



export const Link = (
    props: { url: string, className?: string, children?:ReactNode, target?:string, noDecoration?:boolean}) => {
    const { url, className = "", children ,noDecoration} = props;

    return (
        <a href={url} className={` Link ${className} ${noDecoration? "Link-NoDecor" :""}`}>  {children}</a>
    )
}

