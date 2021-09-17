import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BannerVideo } from '../stories/components/BannerVideo/BannerVideo'
import { PageHeader } from '../stories/components/PageHeader/PageHeader'
import { Layout } from '../_shared/Layout'

const Home: NextPage = () => {
  return (
    <Layout >
      <BannerVideo videoImage={''} videoId={''} title={''} subTitle={''} />
    </Layout>
  )
}

export default Home
