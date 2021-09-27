import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react"
import Layout from "../stories/components/Layout/Layout";
import PageError from "../stories/components/PageError/PageError";
import PageHead from "../stories/components/PageHead/PageHead";
            

const Index = () => {

    return (
            <Layout>
                <PageHead title={`404 Not Found`} description="We couldn't find the page you were looking for." />              
                <PageError title="404 Page Not Found" description="We couldn't find the page you were looking for." ></PageError>
            </Layout>
    )
}

export default Index;