import React, { useEffect } from "react"
import ListingIndex from "../../stories/components/ListingIndex/ListingIndex";
import { Layout } from "../../_shared/Layout";

const Index = () => {
    return (
        <Layout>
            <ListingIndex folder="blogs" />
        </Layout>
    )
}

export default Index;