import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink";
import { BannerImage } from "../BannerImage/BannerImage";
import { IGuide } from "../GuideList/IGuide";

export const Guide = (props: { guide: IGuide, content: string }) => {

  const { guide, content } = props;

  return (

    <div>
      <BannerImage
        image={guide.image}
        title={guide.title}
      />
      <div className={`Guide row`}>
        <article className="Guide-Content container" >
          <div className="col-12 col-md-8 offset-md-2 pt-3">
            <ButtonLink url="/guides"> <FontAwesomeIcon icon={faChevronLeft} /> Guides </ButtonLink>
            <div className="pt-3">
              <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />,
            </div>
          </div>
        </article>
      </div>
    </div>

  )
}