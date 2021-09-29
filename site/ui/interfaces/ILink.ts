import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { ReactNode } from "react";

export interface ILink{
    text?:string|ReactNode,
    url:string
    icon?:IconDefinition
} 