import Script from "next/script";
import React, { ReactNode } from "react"

const GoogleAnalytics = (props: {
  className?: string
}) => {

  const {
    className = ""
  } = props;

  return (
    <div className={`GoogleAnalytics ${className}`}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-L2QM5KP3SK" />
      <Script dangerouslySetInnerHTML={{
        __html:
          `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-L2QM5KP3SK');
          `
      }}>
      </Script>
    </div>
  )
}

export default GoogleAnalytics;