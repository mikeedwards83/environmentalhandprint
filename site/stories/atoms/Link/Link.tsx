import { ReactNode, useEffect, useState } from "react"
import { ILink } from "../../../ui/interfaces/ILink";



export const Link = (
    props: { url?: string, className?: string, children?:ReactNode, target?:string, noDecoration?:boolean}) => {
    const { url, className = "", children ,noDecoration} = props;

    const target = url?.startsWith("http") ? "_blank":"none";

    return (
        <a href={url} className={` Link ${className} ${noDecoration? "Link-NoDecor" :""}`} target={target} >  {children}</a>
    )
}

