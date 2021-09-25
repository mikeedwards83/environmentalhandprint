import React, { ReactNode } from "react"
import { BannerVideo } from "../../components/BannerVideo/BannerVideo";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import videoImage from './../../components/BannerVideo/Assets/VideoThumb.jpg'

const BlogPage = (props: {
  className?: string
}) => {

  const {
    className = ""
  } = props;

  return (
    <div className={`BlogPage ${className}`}>
      <PageHeader
        title="Environmental Handprint"
        logo="https://media.istockphoto.com/vectors/hand-print-vector-id165761878?k=20&m=165761878&s=612x612&w=0&h=vWMybbPjcI32m3w2Qaiyx1NnMk1COtL1FpaX5_3SJxM="
      />
      <BannerVideo
                videoId="489517523"
                videoImage={videoImage as any}
                subTitle="Make a positive impact"
                title="Environmental Handprint"
                button={{
                    text: "Findout More",
                    url: "http://test.com"
                }}
            />
    </div>
  )
}

export default BlogPage;