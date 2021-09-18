import React, { ReactNode, useEffect, useState } from "react"
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { Link } from "../Link/Link";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Pagination = (props: {
  pageCurrent: number,
  pagesTotal: number,
  url: string,
  nextPrev?: boolean,
  className?: string
}) => {

  const { pagesTotal, pageCurrent, url, nextPrev = true, className = "" } = props;

  const [pages, setPages] = useState<Page[] | undefined>(undefined);


  const createUrl = (url: string, page: number): string => {
    return `${url}/${page}`;
  }

  useEffect(() => {

    let pages = new Array<Page>();

    for (let page = 1; page <= pagesTotal; page++) {
      pages.push({
        label: `${(page)}`,
        current: page === pageCurrent,
        url: createUrl(url, page)
      })
    }

    setPages(pages);


  }, [pagesTotal, pageCurrent, url])

  return (
    <div className={`Pagination ${className}`}>
      {pages &&
        <ol>
          {nextPrev && pageCurrent > 1 &&
            <li>
              <ButtonLink url={createUrl(url, pageCurrent - 1)} >
                <FontAwesomeIcon icon={faChevronLeft} />
              </ButtonLink>
            </li>
          }
          {pages.map(page => <li key={page.label} className={`${page.current ? "Pagination-Current" : ""}`}>


            <ButtonLink url={page.url} type={page.current ? "Secondary" : "Primary"}>{page.label}</ButtonLink>
          </li>)}

          {nextPrev && pageCurrent < pagesTotal &&
            <li>
              <ButtonLink url={createUrl(url, pageCurrent + 1)} >
                <FontAwesomeIcon icon={faChevronRight} />
              </ButtonLink>
            </li>
          }
        </ol>
      }
    </div>
  )
}

interface Page {
  label: string,
  current: boolean
  url: string
}