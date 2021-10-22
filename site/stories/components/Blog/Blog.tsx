import { faCalendarWeek, faChevronLeft, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react"
import { IBlog } from "../../../services/Blogs/IBlog";

import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink";
import { BannerImage } from "../BannerImage/BannerImage";
import Markdown from "../Markdown/Markdown";

export const Blog = (props: { blog: IBlog, content: string }) => {

  const { blog, content } = props;

  return (

    <div>
      <BannerImage
        image={blog.image}
        title={blog.title}
         className="col-md-8 offset-md-2"
      />
      <div className={`Blog row`}>
        <article className="Blog-Content container" >
          <div className="col-12 col-md-8 offset-md-2 pt-3">
            <ButtonLink url="/blogs/1">
              <FontAwesomeIcon icon={faChevronLeft} />
              &nbsp; Blogs
            </ButtonLink>
            <div className="lead Blog-Stats pt-4"> 
              <FontAwesomeIcon icon={faCalendarWeek} /> {new Date(blog.date).toLocaleDateString()} <FontAwesomeIcon icon={faPaw} /> {blog.author}
            </div>
            <div className="pt-3">
              <Markdown children={content} />
            </div>
          </div>
        </article>
      </div>
    </div>

  )
}