import { useEffect, useState } from "react"
import './ButtonLink.scss'

export enum ButtonLinkType {
    Primary,
    PrimaryWhite
}
export enum ButtonLinkSize {
    Small,
    Normal,
    Large
}

export const ButtonLink = (
    props: { text: string, url: string, type?: ButtonLinkType, size?: ButtonLinkSize }) => {

    const { text, url, type= ButtonLinkType.Primary, size=ButtonLinkSize.Normal } = props;
    const [typeClass, setTypeClass] = useState("btn-primary");
    const [sizeClass, setSizeClass] = useState("");

    useEffect(() => {
        switch (type) {
            case ButtonLinkType.Primary:
                setTypeClass("btn-primary");
                break;
            case ButtonLinkType.PrimaryWhite:
                setTypeClass("btn-primary-white");
                break;
            default:
                setTypeClass("btn-primary");
                break;
        }

    }, [type])

    useEffect(() => {
        switch (size) {
            case ButtonLinkSize.Small:
                setSizeClass("btn-sm");
                break;
            case ButtonLinkSize.Normal:
                setSizeClass("");
                break;
            case ButtonLinkSize.Large:
                setSizeClass("btn-lg");
                break;
            default:
                setSizeClass("");
                break;
        }

    }, [size])

    return (
        <a href={url} className={`btn ${typeClass} ${sizeClass}`}> {text}</a>
    )

}