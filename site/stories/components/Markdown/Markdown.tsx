import React, { ReactNode } from "react"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw'

const Markdown = (props: {
  className?: string
  content:string
}) => {

  const {
    className = "",
    content
  } = props;

  console.log(content)

  return (
    <div className={`Markdown ${className}`}>
      <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}  />
    </div>
  )
}

export default Markdown;