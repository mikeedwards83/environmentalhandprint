import Head from "next/head";
import React, { ReactNode } from "react"
import { IImage } from "../../../ui/interfaces/IImage";
import { unsplashUrl } from "../../../utils/unsplash";

const PageHead = (props: {
  title: string,
  description: string,
  image:IImage
  children?: string
}) => {

  const {
    title,
    description,
    children,
    image

  } = props;



  let imgUrl = unsplashUrl(image.src, "Crop", "FocalPoint", 0.6, 1200, 630, image.fpy, image.fpx)
  let fullTitle = `${title} - Environmental Handprint`;



  return (
    <Head>
      <title key="title">{fullTitle}</title>
      <meta key="description" name="description" content={description} />

      <meta key="og:title" property="og:title" content={fullTitle} />
      <meta key="og:image" property="og:image" content={imgUrl} />
      <meta key="og:image:width" property="og:image:width" content="1200" />
      <meta key="og:image:height" property="og:image:height" content="630" />
      {image.alt && <meta key="og:image:alt" property="og:image:alt" content={image.alt} />}

      {children}
    </Head>
  )
}

export default PageHead;