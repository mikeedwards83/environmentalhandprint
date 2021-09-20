import type { NextPage } from 'next'
import { BannerVideo } from '../stories/components/BannerVideo/BannerVideo'
import { PageHeader } from '../stories/components/PageHeader/PageHeader'
import image from '../public/images/bannerVideo/VideoThumb.jpg'
import React from 'react'
import Layout from '../stories/components/Layout/Layout'
import PageHead from '../stories/components/PageHead/PageHead'
import { TextImage } from '../stories/components/TextImage/TextImage'

const Home: NextPage = () => {


  const banner = {
    videoId: "489517523",
    videoImage: image as any,
    subTitle: "Make a positive impact",
    title: "Environmental Handprint",
    button: {
      text: "Findout More",
      url: "http://test.com"
    }
  }


  return (
    <Layout >
      <PageHead title="Welcome" description="Having a positive conversation about saving the planet." />
      <BannerVideo {...banner} />

      <div className="container">
        <TextImage  imageUrl={'/images/home/PeopleWithHandprint.jpg'} imageText={''} side={"right"} >
          <h3>What is your handprint?</h3>

        </TextImage>

        <TextImage  imageUrl={'/images/home/home-projects.jpg'} imageText={''} side={"left"} >
          <h3>Why?</h3>

        </TextImage>
      </div>

    </Layout >

  )
}

export default Home
