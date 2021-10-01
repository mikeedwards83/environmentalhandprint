import React, { ReactNode } from "react"
import { BannerImage } from "../../components/BannerImage/BannerImage";
import Layout from "../../components/Layout/Layout";
import PageError from "../../components/PageError/PageError";
import PageHead from "../../components/PageHead/PageHead";

const PageError404 = (props: {
  className?: string
}) => {

  const {
    className = ""
  } = props;

  var image = {
    src: "https://images.unsplash.com/photo-1599302924278-019673ab95d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hemV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "A hedge maze"
  }



  return (
    <Layout>
      <PageHead title={`404 Not Found`} description="We couldn't find the page you were looking for." image={image} />
      <BannerImage
        image={image}
        title={"Page Not Found"}
        className="col-md-8 offset-md-2"
      />
      <PageError title="404 Page Not Found" description="We couldn't find the page you were looking for." ></PageError>

    </Layout>
  )
}

export default PageError404;