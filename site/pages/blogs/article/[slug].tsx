import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import matter from 'gray-matter';
import React from 'react';
import { Blog } from '../../../stories/components/Blog/Blog';
import { MapBlog, POSTS_PATH } from '../[slug]';
import { IBlog } from '../../../stories/components/BlogList/IBlog';
import Layout from '../../../stories/components/Layout/Layout';
import PageHead from '../../../stories/components/PageHead/PageHead';
import { PageGetStaticPaths, PageGetStaticProps } from '../../../_shared/Slug-Page';


export const getStaticPaths: GetStaticPaths = PageGetStaticPaths(POSTS_PATH);

export const getStaticProps: GetStaticProps = PageGetStaticProps(POSTS_PATH, MapBlog);

const Article = (props: { page: IBlog, content: string }) => {

    const { page, content } = props;

    return (
        <Layout>
            <PageHead title={`${page.title} - Blog`} description={page.excerpt} />
            <Blog blog={page} content={content} />
        </Layout>
    );
}

export default Article