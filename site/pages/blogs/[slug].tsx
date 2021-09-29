import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { BlogList } from '../../stories/components/BlogList/BlogList';
import { convertToInt } from '../../utils/int';
import { join } from 'path';
import matter from 'gray-matter';
import { BannerImage } from '../../stories/components/BannerImage/BannerImage';
import { ListingGetStaticPaths, ListingGetStaticProps } from '../../_shared/Slug-Listing';
import { IBlog } from '../../stories/components/BlogList/IBlog';
import Layout from '../../stories/components/Layout/Layout';
import PageHead from '../../stories/components/PageHead/PageHead';

export const POSTS_PATH = join(process.cwd(), '/public/blogs');
const postsPerPage = 5;


export const MapBlog = (name: string, data: any): IBlog => {

    console.log(typeof data.date);
    var post: IBlog = {
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


export const getStaticProps: GetStaticProps = ListingGetStaticProps(POSTS_PATH, postsPerPage, MapBlog)




const List = (props: { pageCurrent: number, pagesTotal: number, pages: IBlog[] }) => {

    const { pagesTotal, pageCurrent, pages } = props;

    return (
        <Layout>

            <PageHead title={`Blogs - Page ${pageCurrent}`} description="Read out latest blog posts." />

            <BannerImage
                title="Blogs"
                imageUrl="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                subTitle={`Page ${pageCurrent}`}
            />
            <div className="container pt-5">

                <BlogList posts={pages} pageCurrent={pageCurrent} pagesTotal={pagesTotal} rootFolder="blogs" postFolder="article" />
            </div>
        </Layout>
    );
}

export default List


