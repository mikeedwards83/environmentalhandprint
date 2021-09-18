import React, { useEffect } from "react"
import Layout from "../../stories/components/Layout/Layout";
import ListingIndex from "../../stories/components/ListingIndex/ListingIndex";
import PageHead from "../../stories/components/PageHead/PageHead";

const Index = () => {
    return (
        <Layout>
            <PageHead title={`Blogs`} description="Read out latest blog posts." />
            <ListingIndex folder="blogs" />
        </Layout>
    )
}

export default Index;