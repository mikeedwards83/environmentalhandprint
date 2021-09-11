import { ReactNode, useEffect, useState } from "react"
import { ILink } from "../../interfaces/ILink";
import './Link.scss'



export const Link = (
    props: { link: ILink, className?: string, children?:ReactNode, target?:string }) => {

    const { link, className = "", children } = props;

    return (
        <a href={link.url} className={`${className}`}> {link.text} {children}</a>
    )
}