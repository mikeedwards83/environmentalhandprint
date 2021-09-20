import type { NextPage } from 'next'
import { BannerVideo } from '../stories/components/BannerVideo/BannerVideo'
import { PageHeader } from '../stories/components/PageHeader/PageHeader'
import image from '../public/images/bannerVideo/VideoThumb.jpg'
import React from 'react'
import Layout from '../stories/components/Layout/Layout'
import PageHead from '../stories/components/PageHead/PageHead'
import { TextImage } from '../stories/components/TextImage/TextImage'
import Arrow from '../stories/components/Arrow/Arrow'

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
        <Arrow>
          <TextImage imageUrl={'/images/home/PeopleWithHandprint.jpg'} imageText={''} side={"right"} >
            <h3>What is your handprint?</h3>
            <p className="lead">
              Your <strong>Environmental Handprint</strong> represents <u>all</u> the positive actions you have take to help our planet.

            </p>
            <p className="lead">
              From everyday small actions like turning lights off and picking up litter to huge actions like getting out and planting trees or by an electric car.
            </p>

          </TextImage>
        </Arrow>

        <TextImage imageUrl={'/images/home/home-projects.jpg'} imageText={''} side={"left"} >
          <h3>Why?</h3>
          <p className="lead">
            We want people to be proud and celebrate the contribution they are making to planet and have a positive conversation about
            the change we can make.
          </p>
          <p className="lead">
            We have many negative metaphors around the environment, carbon footprint, global warming, land grabbing. So lets start a positive metaphor, one that
            recognises our efforts and points us in the direction we want to go.
          </p>
        </TextImage>
      </div>

    </Layout >

  )
}

export default Home
