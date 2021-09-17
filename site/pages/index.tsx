import type { NextPage } from 'next'
import { BannerVideo } from '../stories/components/BannerVideo/BannerVideo'
import { PageHeader } from '../stories/components/PageHeader/PageHeader'
import { Layout } from '../_shared/Layout'
import image from '../public/images/bannerVideo/VideoThumb.jpg'

const Home: NextPage = () => {


  const banner = {
    videoId: "489517523",
    videoImage: image as any ,
    subTitle: "Make a positive impact",
    title: "Environmental Handprint",
    button: {
      text: "Findout More",
      url: "http://test.com"
    }
  }


  return (
    <Layout >
      <BannerVideo {...banner} />
    </Layout >
  )
}

export default Home
