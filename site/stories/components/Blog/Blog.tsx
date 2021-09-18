import { faCalendarWeek, faChevronLeft, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink";
import { BannerImage } from "../BannerImage/BannerImage";
import { IBlog } from "../BlogList/IBlog";

export const Blog = (props: { blog: IBlog, content: string }) => {

  const { blog, content } = props;

  return (

    <div>
      <BannerImage
        imageUrl={blog.image.src}
        title={blog.title}
        fpy={blog.image.fpy}
        fpx={blog.image.fpx}
         className="col-md-8 offset-md-2"
      />
      <div className={`Blog row`}>
        <article className="Blog-Content container" >
          <div className="col-12 col-md-8 offset-md-2 pt-3">
            <ButtonLink url="/blog">
              <FontAwesomeIcon icon={faChevronLeft} />
              &nbsp; Blogs
            </ButtonLink>
            <div className="lead Blog-Stats pt-4"> 
              <FontAwesomeIcon icon={faCalendarWeek} /> {new Date(blog.date).toLocaleDateString()} <FontAwesomeIcon icon={faPaw} /> {blog.author}
            </div>
            <div className="pt-3">
              <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />,
            </div>
          </div>
        </article>
      </div>
    </div>

  )
}