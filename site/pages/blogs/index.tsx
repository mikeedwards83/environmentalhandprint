import React, { useEffect } from "react"
import Layout from "../../stories/components/Layout/Layout";
import ListingIndex from "../../stories/components/ListingIndex/ListingIndex";
import PageHead from "../../stories/components/PageHead/PageHead";

const Index = () => {
    return (
        <Layout>
            <PageHead title={`Blogs`} description="Read out latest blog posts." image={{
                src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
                alt: "A green valley with stones"
            }}
            />
            <ListingIndex folder="blogs" />
        </Layout>
    )
}

export default Index;