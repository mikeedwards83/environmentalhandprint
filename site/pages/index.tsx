import type { NextPage } from 'next'
import { BannerVideo } from '../stories/components/BannerVideo/BannerVideo'
import { PageHeader } from '../stories/components/PageHeader/PageHeader'
import videoThumb from '../public/images/bannerVideo/VideoThumb.jpg'
import React from 'react'
import Layout from '../stories/components/Layout/Layout'
import PageHead from '../stories/components/PageHead/PageHead'
import { TextImage } from '../stories/components/TextImage/TextImage'
import Arrow from '../stories/components/Arrow/Arrow'
import Section from '../stories/atoms/Section/Section'
import { IQuickLink, QuickLinks } from '../stories/components/QuickLinks/QuickLinks'
import { faCrow, faFrog, faKiwiBird, faOtter } from '@fortawesome/free-solid-svg-icons'
import CalloutHorizontal from '../stories/components/CalloutsHorizontal/CalloutsHorizontal'
import CalloutsHorizontal from '../stories/components/CalloutsHorizontal/CalloutsHorizontal'
import { ICallout } from '../stories/components/Callout/Callout'
import { Button } from '../stories/atoms/Button/Button'
import { ButtonLink } from '../stories/atoms/ButtonLink/ButtonLink'
import { BannerImage } from '../stories/components/BannerImage/BannerImage'
import { IImage } from '../ui/interfaces/IImage'

const Home: NextPage = () => {


  const banner = {
    videoId: "489517523",
    videoImage: videoThumb as any,
    subTitle: "Make a positive impact",
    title: "Environmental Handprint",

  }

  const quickLinks: IQuickLink[] = [
    {
      title: "Your individual handprint",
      text: "Find out how you can add to your unique handprint.",
      icon: faOtter
    },
    {
      title: "Your business handprint",
      text: "Grow the handprint of your company and customers.",

      icon: faKiwiBird
    },
    {
      title: "Your community handprint",
      text: "Bring your community together to make a difference.",

      icon: faCrow
    },
    {
      title: "Your NGO handprint",
      text: "How can your organisation help grow handprints.",

      icon: faFrog
    }

  ]


  const callouts: ICallout[] = [
    {
      title: "Growing Your Handprint",
      alt: "",
      src: "/images/home/grow.png",
      children: <p className="lead">
        Growing your handprint is easy, and can be done with everyday small actions and large challenging actions actions.
      </p>
    },
    {
      title: "Everyday Actions",
      alt: "",
      src: "/images/home/everyday.jpg",
      children: <p className="lead">
        Make small decisions everyday that help the planet, every small action you take grows your handprint.
      </p>
    },
    {
      title: "Grow Together",
      alt: "",
      src: "/images/home/community.jpg",
      children: <p className="lead">
        Bring your friends, family and local community together to grow your handprints
        and have fun. Organise a local litter pick, take part in car sharing.
      </p>
    }

  ]

  var image: IImage =  {
    src: "https://images.unsplash.com/photo-1622539336639-8a04cb5c3eeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80", 
    alt: "Man holding his hand up with 'How Big Is Your Handprint' written on it",
    fpy: 0.55,
    fpx: 0.2
  };

  return (
    <Layout >
      <PageHead title="Welcome" description="Having a positive conversation about saving the planet."
        image={image} />
      <BannerImage image={image} subTitle="Make a positive impact" title="Environmental Handprint" />
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
      </div>
      <Section color="dark">


        <div className="container">

          <CalloutsHorizontal callouts={callouts} title={""} />


        </div>
      </Section>
      <div className="container">

        <TextImage imageUrl={'/images/home/hands.jpg'} imageText={''} side={"right"} >
          <h3>What Colour Is Your Handprint?</h3>
          <p className="lead">
            Your handprint comes in a range of different colours. Find out which colour your action is and how it makes a difference.
          </p>
          <p><strong>Discover More - Coming Soon</strong></p>
        </TextImage>
      </div>
    </Layout >

  )
}

export default Home
