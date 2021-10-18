import type { NextPage } from 'next'
import videoThumb from '../public/images/bannerVideo/VideoThumb.jpg'
import React, { useEffect, useState } from 'react'
import Layout from '../stories/components/Layout/Layout'
import PageHead from '../stories/components/PageHead/PageHead'
import { TextImage } from '../stories/components/TextImage/TextImage'
import Arrow from '../stories/components/Arrow/Arrow'
import Section from '../stories/atoms/Section/Section'
import { IQuickLink, QuickLinks } from '../stories/components/QuickLinks/QuickLinks'
import { faChevronRight, faCrow, faFrog, faKiwiBird, faOtter } from '@fortawesome/free-solid-svg-icons'
import CalloutsHorizontal from '../stories/components/CalloutsHorizontal/CalloutsHorizontal'
import { ICallout } from '../stories/components/Callout/Callout'
import { BannerImage } from '../stories/components/BannerImage/BannerImage'
import { IImage } from '../ui/interfaces/IImage'
import { BlogService } from '../services/Blogs/blogsService'
import { unsplashUrl } from '../utils/unsplash'
import { ButtonLink } from '../stories/atoms/ButtonLink/ButtonLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IBlog } from '../services/Blogs/IBlog'



export async function getStaticProps() {

  const blogsService = new BlogService();

  const posts = blogsService.getLatest(3)

  return {
    props: {
      posts
    }
  }

}

const Home = (props: { posts: IBlog[] }) => {

  const {
    posts
  } = props;


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
        Growing your handprint is easy, and can be done with everyday small actions and large challenging actions.
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

  var image: IImage = {
    src: "https://images.unsplash.com/photo-1622539336639-8a04cb5c3eeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80",
    alt: "Man holding his hand up with 'How Big Is Your Handprint' written on it",
    fpy: 0.55,
    fpx: 0.2
  };


  const mapBlogToCallout = (post: IBlog): ICallout => {
    return {
      src: unsplashUrl(post.image.src, "Crop", "FocalPoint", 60, 300),
      alt: post.image.alt,
      title: post.title,
      children: <>
        <p>
          {post.excerpt}
        </p>
        <ButtonLink url={post.url} type="PrimaryWhite" className="w-100">Read <FontAwesomeIcon icon={faChevronRight} /></ButtonLink>
      </>
    };
  };


  return (
    <Layout >
      <PageHead title="Welcome" description="Having a positive conversation about saving the planet."
        image={image} />
      <BannerImage image={image} subTitle="Make a positive impact" title="Environmental Handprint" />
      <QuickLinks links={quickLinks} />
      <div className="container">
        <Arrow>

          <TextImage imageUrl={'/images/home/PeopleWithHandprint.jpg'} imageText={'People doing environmentally positive actions like cycling and recycling'} side={"right"} className="mt-3" >
            <h3>What is your handprint?</h3>
            <p className="lead">
              The <strong>Environmental Handprint</strong> represents the positive actions we take to make our world a little better.
            </p>
            <p className="lead">
              From small, everyday actions like turning the lights off and picking up litter to huge actions such as planting trees or switching to a renewable energy supplier.
            </p>
            <p className="lead">
              We want to celebrate these actions and encourage change through positive conversations.
            </p>

          </TextImage>
        </Arrow>
        <TextImage imageUrl={'/images/home/home-projects.jpg'} imageText={'Selection of photographs showing people helping the planet'} side={"left"} >
          <h3>Why?</h3>
          <p className="lead">
            We want everyone to be proud and celebrate the contributions they are making.
          </p>
          <p className="lead">
            Most of all, we want you to <strong>enjoy</strong> helping our planet and have <strong>fun</strong>.
          </p>
          <p className="lead">
            So let&#39;s start a <strong>positive metaphor</strong> and a <strong>positive conversation</strong> about what we can do, 
            and where we want to go.
          </p>
        </TextImage>

      </div>


      <Section color="dark">
        <div className="container">
          <CalloutsHorizontal callouts={posts.map(post => mapBlogToCallout(post))} title={"Our latest blogs"} />
        </div>
      </Section>
      <div className="container">

        <TextImage imageUrl={'/images/home/atwork.jpg'} imageText={'Man sitting working on a laptop'} side={"right"} >

          <h3>Work in progess</h3>
          <p className="lead">
            The Environmental Handprint is run by a small team of environmentally minded individuals in our spare time. We love to hear your suggestions and feedback.
          </p>
          <p className="lead">
            Most of all we want <strong>you</strong> to <strong>enjoy</strong> making our world a better and cleaner place to live.
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
