import { faCalendarWeek, faChevronRight, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react"
import { IBlog } from "../../../services/Blogs/IBlog";
import { Button } from "../../atoms/Button/Button";
import { ImageUnsplash } from "../../atoms/ImageUnsplash/ImageUnsplash";
import { Link } from "../../atoms/Link/Link";
import { Pagination } from "../../atoms/Pagination/Pagination";


export const BlogList = (props: {
  posts: IBlog[],
  pageCurrent: number,
  pagesTotal: number,
  rootFolder: string
}) => {

  const { pageCurrent, pagesTotal, posts, rootFolder } = props;

  return (
    <div className={`BlogList`}>

      {posts.map(post => <BlogListItem key={post.name} blog={post} />)}

      <Pagination pageCurrent={pageCurrent} pagesTotal={pagesTotal} url={`/${rootFolder}`} className="pt-3" />
    </div>
  )
}

const BlogListItem = (props: {  blog: IBlog }) => {

  const {
    blog,
  } = props;

  return (
    <Link url={blog.url} className="BlogList-Item d-flex flex-row" noDecoration>
      <div className="">
        <ImageUnsplash src={blog.image.src} alt={blog.image.alt} width={150} height={150} fpy={blog.image.fpy} fpx={blog.image.fpx} />
      </div>
      <div className="flex-grow-1 pl-3">
        <h3>{blog.title}</h3>
        <p>
          {blog.excerpt}
        </p>
        <div className="pb-3">
        <FontAwesomeIcon icon={faCalendarWeek} /> {new Date(blog.date).toLocaleDateString()} <FontAwesomeIcon icon={faPaw} /> {blog.author}
        </div>
        <Button>
          Read <FontAwesomeIcon icon={faChevronRight} />

        </Button>
      </div>

    </Link>
  )

}