import React, { ReactNode } from "react"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ButtonLink } from "../../atoms/ButtonLink/ButtonLink";
import { BannerImage } from "../BannerImage/BannerImage";
import { IGuide } from "../GuideList/IGuide";

export const Guide = (props: { guide: IGuide, content: string }) => {

  const { guide, content } = props;

  console.log("fd", Guide)
  return (

    <div>
      <BannerImage
        imageUrl={guide.image.src}
        title={guide.title}
        fpy={guide.image.fpy}
        fpx={guide.image.fpx}
      />
      <div className={`Guide row`}>
        <article className="Guide-Content container" >
          <div className="col-12 col-md-8 offset-md-2 pt-3">
            <ButtonLink url="/guides"> <i className="fas fa-chevron-left"></i> Guides </ButtonLink>
            <div className="pt-3">
              <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />,
            </div>
          </div>
        </article>
      </div>
    </div>

  )
}