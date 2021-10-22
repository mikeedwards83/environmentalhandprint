import React, { ReactNode } from "react"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw'

const Markdown = (props: {
  className?: string
  children:string
}) => {

  const {
    className = "",
    children
  } = props;

  console.log(children)

  return (
    <div className={`Markdown ${className}`}>
      <ReactMarkdown children={children} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}  />
    </div>
  )
}

export default Markdown;