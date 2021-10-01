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
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {image.alt && <meta property="og:image:alt" content={image.alt} />}

      {children}
    </Head>
  )
}

export default PageHead;