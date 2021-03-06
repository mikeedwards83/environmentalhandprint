import { GetStaticPaths, GetStaticProps } from 'next';
import { IGuide } from '../../stories/components/GuideList/IGuide';
import { join } from 'path';
import { ListingGetStaticPaths, ListingGetStaticProps } from '../../_shared/Slug-Listing';
import React from 'react';
import { BannerImage } from '../../stories/components/BannerImage/BannerImage';
import { GuideList } from '../../stories/components/GuideList/GuideList';
import Layout from '../../stories/components/Layout/Layout';
import PageHead from '../../stories/components/PageHead/PageHead';


export const POSTS_PATH = join(process.cwd(), '/public/guides');
const postsPerPage = 5;


export const MapGuide = (name: string, data: any): IGuide => {
    var post: IGuide = {
        author: data.author.name,
        excerpt: data.excerpt,
        title: data.title,
        image: {
            src: data.image.src,
            alt: data.image.alt,
            fpx: data.image.fpx ? data.image.fpx : null,
            fpy: data.image.fpy ? data.image.fpy : null,
        },
        date: data.date,
        name: name
    }

    return post;
}


export const getStaticPaths: GetStaticPaths = ListingGetStaticPaths(POSTS_PATH, postsPerPage);


export const getStaticProps: GetStaticProps = ListingGetStaticProps(POSTS_PATH, postsPerPage, MapGuide)
const Page = (props: {
    pageCurrent: number, pagesTotal: number, pages: IGuide[]
}) => {

    const {
        pageCurrent,
        pagesTotal,
        pages
    } = props;

    var image ={
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
        alt: "Rocks organised into circles in a green valley"
    };
    

    return (
        <Layout>

            <PageHead title={`Guides - Page ${pageCurrent}`} description="Guides on how to make a positive impact on the environment." image={image} />

            <BannerImage
                title="Guides"
                subTitle={`Page ${pageCurrent}`}
                image={image}
            />

            <div className="container pt-5">

                <GuideList posts={pages} pageCurrent={pageCurrent} pagesTotal={pagesTotal} rootFolder="guides" postFolder="guide" />
            </div>
        </Layout>
    )

}

export default Page
