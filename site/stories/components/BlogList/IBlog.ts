import { IImage } from "../../../ui/interfaces/IImage";

export interface IBlog {
    title: string,
    name: string,
    excerpt: string
    author: string
    image: IImage,
    date:Date
  }