import { ReactNode, useEffect, useState } from "react";



export enum ButtonType {
    Primary,
    Link
}
export enum ButtonSize {
    Small,
    Normal,
    Large
}


export const Button = (props: { text?: string, children?:ReactNode, className?:string, title?:string, type?:ButtonType, size?:ButtonSize, onClick?: ()=>void }) => {

    const { text ,children, className="", title="", type= ButtonType.Primary, size=ButtonSize.Normal, onClick } = props;

    const [typeClass, setTypeClass] = useState("btn-primary");
    const [sizeClass, setSizeClass] = useState("");

    useEffect(() => {
        switch (type) {
            case ButtonType.Primary:
                setTypeClass("btn-primary");
                break;
            case ButtonType.Link:
                setTypeClass("btn-link");
                break;
        }

    }, [type])

    useEffect(() => {
        switch (size) {
            case ButtonSize.Small:
                setSizeClass("btn-sm");
                break;
            case ButtonSize.Normal:
                setSizeClass("");
                break;
            case ButtonSize.Large:
                setSizeClass("btn-lg");
                break;
            default:
                setSizeClass("");
                break;
        }

    }, [size])


    return (
        <button className={`btn ${typeClass} ${sizeClass} ${className}`} title={title} onClick={onClick}> 
            {text} {children}
        </button>
    )
}