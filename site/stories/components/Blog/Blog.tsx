import React, { ReactNode } from "react"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FrontMatter } from "../../../pages/blog/articles/[slug]";
import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink";
import { BannerImage } from "../BannerImage/BannerImage";
import { IBlog } from "../BlogList/BlogList";

export const Blog = (props: { blog: IBlog, content: string }) => {

  const { blog, content } = props;

  console.log("fd", blog)
  return (

    <div>
      <BannerImage
        imageUrl={blog.image.src}
        title={blog.title}
        fpy={blog.image.fpy}
        fpx={blog.image.fpx}
      />
      <div className={`Blog row`}>
        <article className="Blog-Content container" >
          <div className="col-12 col-md-8 offset-md-2 pt-3">
            <ButtonLink url="/blog"> <i className="fas fa-chevron-left"></i> Blogs </ButtonLink>
            <div className="pt-3">
              <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />,
            </div>
          </div>
        </article>
      </div>
    </div>

  )
}