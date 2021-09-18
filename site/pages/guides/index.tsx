import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react"
import ListingIndex from "../../stories/components/ListingIndex/ListingIndex";
import { Layout } from "../../_shared/Layout";

const Index = () => {

    return (
            <Layout>
              <ListingIndex folder="guides" />
            </Layout>
    )
}

export default Index;