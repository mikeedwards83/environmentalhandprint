import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react"
import { BannerImage } from "../stories/components/BannerImage/BannerImage";
import Layout from "../stories/components/Layout/Layout";
import PageError from "../stories/components/PageError/PageError";
import PageHead from "../stories/components/PageHead/PageHead";
import PageError404 from "../stories/pages/PageError404/PageError404";


const Index = () => {

    return (
       <PageError404 />
    )
}

export default Index;