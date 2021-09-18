import React, { ReactNode } from "react"
import { Button } from "../../atoms/Button/Button";
import { ImageUnsplash } from "../../atoms/ImageUnsplash/ImageUnsplash";
import { Link } from "../../atoms/Link/Link";
import { Pagination } from "../../atoms/Pagination/Pagination";
import { IBlog } from "./IBlog";


export const BlogList = (props: {
  posts: IBlog[],
  pageCurrent: number,
  pagesTotal: number,
  rootFolder:string
  postFolder:string
}) => {

  const { pageCurrent, pagesTotal, posts,rootFolder, postFolder } = props;

  return (
    <div className={`BlogList`}>

      {posts.map(post => <BlogListItem key={post.name} folder={`${rootFolder}/${postFolder}`} blog={post} />)}

      <Pagination pageCurrent={pageCurrent} pagesTotal={pagesTotal} url={`/${rootFolder}`} className="pt-3"  />
    </div>
  )
}

const BlogListItem = (props: {folder:string, blog: IBlog }) => {

  const { 
    blog,
    folder
  } = props;

  return (
    <Link url={`/${folder}/${blog.name}`} className="BlogList-Item d-flex flex-row" noDecoration>
      <div className="">
        <ImageUnsplash src={blog.image.src} alt={blog.image.alt} width={150} height={150} fpy={blog.image.fpy} fpx={blog.image.fpx} />
      </div>
      <div className="flex-grow-1 pl-3">
        <h3>{blog.title}</h3>
        <p>
          {blog.excerpt}
        </p>
        <Button>
          Read <i className="fas fa-chevron-right"></i>
        </Button>
      </div>

    </Link>
  )

}