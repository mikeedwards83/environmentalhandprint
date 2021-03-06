import { ReactNode, useEffect, useState } from "react"
import { ILink } from "../../../ui/interfaces/ILink";




export const ButtonLink = (
    props: {
        url?: string,
        type?: "Primary" | "PrimaryWhite" | "Secondary",
        size?: "Small" | "Normal" | "Large",
        children: ReactNode,
        className?: string

    }) => {

    const { url, children, type = "Primary", size = "Normal", className = "" } = props;
    const [typeClass, setTypeClass] = useState("btn-primary");
    const [sizeClass, setSizeClass] = useState("");

    useEffect(() => {
        switch (type) {
            case "Primary":
                setTypeClass("btn-primary");
                break;
            case "PrimaryWhite":
                setTypeClass("btn-primary-white");
                break;
            case "Secondary":
                setTypeClass("btn-secondary");
                break;
            default:
                setTypeClass("btn-primary");
                break;
        }

    }, [type])

    useEffect(() => {
        switch (size) {
            case "Small":
                setSizeClass("btn-sm");
                break;
            case "Normal":
                setSizeClass("");
                break;
            case "Large":
                setSizeClass("btn-lg");
                break;
            default:
                setSizeClass("");
                break;
        }

    }, [size])

    return (
        <>
            {url && <a href={url} className={`btn ${typeClass} ${sizeClass} ${className}`}> {children}</a>}
            {!url && <span className={`btn ${typeClass} ${sizeClass} ${className} btn-disabled`} > {children}</span>}
        </>

    )

}