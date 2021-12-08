import React, { ReactNode } from "react"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw'
import remarkYoutube from '../../../extensions/markdown/remark-youtube'

const Markdown = (props: {
  className?: string
  children:string
}) => {

  const {
    className = "",
    children
  } = props;


  return (
    <div className={`Markdown ${className}`}>
      <ReactMarkdown children={children} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm,remarkYoutube]}  />
    </div>
  )
}

export default Markdown;