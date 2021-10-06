import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Blog } from '../../../stories/components/Blog/Blog';
import Layout from '../../../stories/components/Layout/Layout';
import PageHead from '../../../stories/components/PageHead/PageHead';
import { PageGetStaticPaths, PageGetStaticProps } from '../../../_shared/Slug-Page';
import PageError404 from '../../../stories/pages/PageError404/PageError404';
import { BlogService, POSTS_PATH } from '../../../services/Blogs/blogsService';
import { IBlog } from '../../../services/Blogs/IBlog';


export const getStaticPaths: GetStaticPaths = PageGetStaticPaths(POSTS_PATH);

export const getStaticProps: GetStaticProps = PageGetStaticProps(POSTS_PATH, new BlogService().mapBlog);

const Article = (props: { page: IBlog, content: string }) => {

    const { page, content } = props;


    return (
        <>
            {page && content &&
                <Layout>

                    <PageHead title={`${page.title} - Blog`} description={page.excerpt} image={page.image} />
                    <Blog blog={page} content={content} />
                </Layout>

            }
            {!page && <PageError404 />}
        </>
    );
}

export default Article