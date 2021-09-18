import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react"
import Layout from "../../stories/components/Layout/Layout";
import ListingIndex from "../../stories/components/ListingIndex/ListingIndex";
import PageHead from "../../stories/components/PageHead/PageHead";

const Index = () => {

  return (
    <Layout>
      <PageHead title="Guides" description="Guides on how to make a positive impact on the environment." />
      <ListingIndex folder="guides" />
    </Layout>
  )
}

export default Index;