import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { BlogList } from '../../stories/components/BlogList/BlogList';
import { BannerImage } from '../../stories/components/BannerImage/BannerImage';
import { ListingGetStaticPaths, ListingGetStaticProps } from '../../_shared/Slug-Listing';
import Layout from '../../stories/components/Layout/Layout';
import PageHead from '../../stories/components/PageHead/PageHead';
import { Redirect } from '../../stories/components/Redirect/Redirect';
import { BlogService, POSTS_PATH } from '../../services/Blogs/blogsService';
import { IBlog } from '../../services/Blogs/IBlog';

import fs from 'fs';


const postsPerPage = 5;



export const getStaticPaths: GetStaticPaths = ListingGetStaticPaths(POSTS_PATH, postsPerPage);


export const getStaticProps: GetStaticProps = ListingGetStaticProps(POSTS_PATH, postsPerPage, new BlogService().mapBlog)


var image ={
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    alt: "A green valley with stones"
};

const List = (props: { pageCurrent: number, pagesTotal: number, pages?: IBlog[] }) => {

    const { pagesTotal, pageCurrent, pages } = props;

    return (
        <Layout>

            <PageHead title={`Blogs - Page ${pageCurrent}`} description="Read out latest blog posts." image={image} />

            <BannerImage
                title="Blogs"
                image={image}
                subTitle={`Page ${pageCurrent}`}
            />
            <div className="container pt-5">

                {pages && pages.length > 0 && <BlogList posts={pages} pageCurrent={pageCurrent} pagesTotal={pagesTotal} rootFolder="blogs" postFolder="article" />}
                
                {(pageCurrent === undefined || pageCurrent === null) && <Redirect url={'/blogs'}  />}
            </div>
        </Layout>
    );
}

export default List


