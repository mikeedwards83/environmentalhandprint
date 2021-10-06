import Head from "next/head";
import Script from "next/script";
import React, { ReactNode } from "react"
import { PageFooter } from "../PageFooter/PageFooter";
import { PageHeader } from "../PageHeader/PageHeader";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import ShareThis from "../ShareThis/ShareThis";
import CookieBanner from "../CookieBanner/CookieBanner";
import GoogleAnalytics from "../GoogleAnalytics/GoogleAnalytics";
import { ILink } from "../../../ui/interfaces/ILink";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

export const Layout = (props: { children?: ReactNode }) => {

  const { children } = props;

  const linkBlog: ILink =
  {
    text: "Blogs",
    url: "/blogs/1",
    icon: faTree
  };
  const linkPrivacyPolicy: ILink =
  {
    text: "Privacy Policy",
    url: "/pages/privacypolicy",
    icon: faTree
  };


  const footer = {
    links1: [
      linkBlog
    ],
    links2: [
      linkPrivacyPolicy
    ],
    copyRight: "© 2021 - Environmental Handprint, All Rights Reserved",
  
    twitter: {
      url: "https://twitter.com/handprintearth"
    },
    instagram:{
      url: "https://www.instagram.com/handprintearth/"
    }
  };

  const headerLinks = [
    linkBlog
  ]

  const socialLinks:ILink[] =[
    {
      url:"https://www.instagram.com/handprintearth/",
      icon: faInstagram,
      text:"Instagram"
    },
    {
      url:"https://twitter.com/handprintearth",
      icon: faTwitter,
      text:"Twitter"
    }
  ]


  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/png" href="/images/logo-icon.png" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&family=Poppins&display=swap" rel="stylesheet" />
        <style>{dom.css()}</style>
      </Head>
      <div className="Layout">
        <div className="Layout-Page">
          <PageHeader
            title="Environmental Handprint"
            logo="/images/logo-horizontal.svg"
            links1={headerLinks}
            links2={socialLinks}
          />
          <div className="Layout-Content">
            {children}
          </div>

          <PageFooter className="Layout-Footer"  {...footer} />
        </div>

      </div>

      <Script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></Script>
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></Script>

      <Script src="/scripts/aos.js"></Script>
      <ShareThis />

      <CookieBanner>
        <GoogleAnalytics />
      </CookieBanner>
    </>
  )
}
export default Layout;