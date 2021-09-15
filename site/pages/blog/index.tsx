import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react"
import { Redirect } from "../../ui/components/Redirect/Redirect";
import { Layout } from "../_shared/Layout";

const Index = () => {

    const destination = "/blog/1";


    return (
        <>
            <Layout>
                <div className="container pt-5">
                    <Redirect url={destination} />
                </div>
            </Layout>
        </>
    )
}

export default Index;