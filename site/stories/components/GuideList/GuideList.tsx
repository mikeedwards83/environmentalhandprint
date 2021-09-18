import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react"
import { Button } from "../../atoms/Button/Button";
import { ImageUnsplash } from "../../atoms/ImageUnsplash/ImageUnsplash";
import { Link } from "../../atoms/Link/Link";
import { Pagination } from "../../atoms/Pagination/Pagination";
import { IGuide } from "./IGuide";

export const GuideList = (props: {
  posts: IGuide[],
  pageCurrent: number,
  pagesTotal: number,
  rootFolder: string
  postFolder: string
}) => {

  const { pageCurrent, pagesTotal, posts, rootFolder, postFolder } = props;

  return (
    <div className={`GuideList `}>
      <div className="row">
        {posts.map(post => <GuideListItem key={post.name} folder={`${rootFolder}/${postFolder}`} Guide={post} />)}
      </div>

      <Pagination pageCurrent={pageCurrent} pagesTotal={pagesTotal} url={`/${rootFolder}`} className="pt-3" />
    </div>
  )
}

const GuideListItem = (props: { folder: string, Guide: IGuide }) => {

  const {
    Guide,
    folder
  } = props;

  return (
    <Link url={`/${folder}/${Guide.name}`} className="GuideList-Item col-md-6 col-lg-4 " noDecoration>
      <div className="pb-3 text-center">
        <ImageUnsplash src={Guide.image.src} alt={Guide.image.alt} width={348} height={250} fpy={Guide.image.fpy} fpx={Guide.image.fpx} />
      </div>
      <div className="flex-grow-1 ">
        <h3>{Guide.title}</h3>
        <p>
          {Guide.excerpt}
        </p>
        <Button className="w-100">
          Read <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </div>

    </Link>
  )

}