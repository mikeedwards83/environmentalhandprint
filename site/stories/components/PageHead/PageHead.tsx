import Head from "next/head";
import React, { ReactNode } from "react"

const PageHead = (props: { 
  title:string,
  description:string,
  children?:string
}) => {

    const { 
      title,
      description,
      children
    } = props;

    return (
      <Head>
        <title>{title} - Environmental Handprint</title>
        <meta name="description" content={description} />
        {children}
      </Head>
    )
}

export default PageHead;