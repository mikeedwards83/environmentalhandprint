import type { NextPage } from 'next'
import { BannerVideo } from '../stories/components/BannerVideo/BannerVideo'
import { PageHeader } from '../stories/components/PageHeader/PageHeader'
import image from '../public/images/bannerVideo/VideoThumb.jpg'
import React from 'react'
import Layout from '../stories/components/Layout/Layout'
import PageHead from '../stories/components/PageHead/PageHead'
import { TextImage } from '../stories/components/TextImage/TextImage'
import Arrow from '../stories/components/Arrow/Arrow'
import Section from '../stories/atoms/Section/Section'
import { IQuickLink, QuickLinks } from '../stories/components/QuickLinks/QuickLinks'
import { faCrow, faFrog, faKiwiBird, faOtter } from '@fortawesome/free-solid-svg-icons'

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

  const quickLinks: IQuickLink[] = [
    {
      title: "Your individual handprint",
      text: "Find out how you can add to your unique handprint.",
      link: {
        url: "/pages/individual",
        text: "Learn More"
      },
      icon: faOtter
    },
    {
      title: "Your business handprint",
      text: "Grow the handprint of your company and customers.",
      link: {
        url: "/pages/business",
        text: "Learn More"
      },
      icon: faKiwiBird
    },
    {
      title: "Your community handprint",
      text: "Bring your community together to make a difference.",
      link: {
        url: "/pages/business",
        text: "Learn More"
      },
      icon: faCrow
    },
    {
      title: "Your NGO handprint",
      text: "How can your organisation help grow handprints.",
      link: {
        url: "/pages/business",
        text: "Learn More"
      },
      icon: faFrog
    }

  ]




  return (
    <Layout >
      <PageHead title="Welcome" description="Having a positive conversation about saving the planet." />
      <BannerVideo {...banner} />
      <QuickLinks links={quickLinks} />
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
        <Arrow arrow={2}>
          <TextImage imageUrl={'/images/home/home-projects.jpg'} imageText={''} side={"left"} >
            <h3>Why?</h3>
            <p className="lead">
              We want you to be proud and celebrate the contribution you are making to planet and to have <strong>positive conversations</strong> about
              the changes we can all make.
            </p>
            <p className="lead">
              We have many negative metaphors around the environment, carbon footprint, global warming, land grabbing; So lets start a <strong>positive metaphor</strong>, one that
              recognises our efforts and points us in the direction we want to go.
            </p>
          </TextImage>
        </Arrow>
      </div>
      <Section color="dark">
        <div className="container">
          <TextImage imageUrl={'/images/home/home-projects.jpg'} imageText={''} side={"left"} >
            <h3>Growing Your Handprint</h3>
            <p className="lead">
              Growing your handprint is easy, and can be done with everyday small actions and large challenging actions actions.
            </p>
          </TextImage>
          <TextImage imageUrl={'/images/home/home-projects.jpg'} imageText={''} side={"right"} >
            <h3>Everyday Actions</h3>
            <p className="lead">
              Start adding to your handprint by making small conscience decisions that help the planet. For example reusing
              old jars, buying food not wrapped in plastic and walking to work. These little actions each day will increase
              the size of handprint each day.
            </p>
          </TextImage>
          <TextImage imageUrl={'/images/home/home-projects.jpg'} imageText={''} side={"left"} >
            <h3>Large Actions</h3>
            <p className="lead">
              Looking to grow your handprint in a big way? Make the biggest positive impact  your can,
              raise money for an environmental charity, volunteer to plant trees for the day and switching to
              an electric car. There are many ways that your can make a huge difference.
            </p>
          </TextImage>
          <TextImage imageUrl={'/images/home/home-projects.jpg'} imageText={''} side={"right"} >
            <h3>Community Actions</h3>
            <p className="lead">
              Bring your friends, family and local community together to grow your communites environmental handprint and have fun. 
              Organise a local litter pick, take part in car sharing,
            </p>
          </TextImage>
        </div>
      </Section>
    </Layout >

  )
}

export default Home
