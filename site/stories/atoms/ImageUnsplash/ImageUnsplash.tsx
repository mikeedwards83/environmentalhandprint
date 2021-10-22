import { CSSProperties, ReactNode, useEffect, useState } from "react"
import { Crop, Fit, unsplashUrl } from "../../../utils/unsplash";

export const ImageUnsplash = (props: {
  src: string,
  alt?: string,
  width: number,
  height?: number,
  className?: string,
  quality?: number,
  fit?: Fit,
  crop?: Crop,
  fpy?: number,
  fpx?: number,
  style?: CSSProperties
}) => {

  const { src, width, height, className = "", fit = "Crop", quality = 60, crop = "Unset", fpy, fpx, alt, style } = props;


  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    if (src) {
      let url = unsplashUrl(src, fit, crop, quality, width, height, fpy, fpx)
      setUrl(url)
    }
    else {
      setUrl("")
    }
  }, [src, width, fit, height, quality, crop, fpy, fpx])


  return (
    <>
      {url && <img className={`ImageUnsplash ${className}`} src={url} alt={alt} style={style} />}
    </>
  )
}