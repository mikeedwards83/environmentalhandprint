import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { MapGuide, POSTS_PATH } from '../[slug]';
import { PageGetStaticPaths, PageGetStaticProps } from '../../../_shared/Slug-Page';
import { Guide } from '../../../stories/components/Guide/Guide';
import { IGuide } from '../../../stories/components/GuideList/IGuide';
import Layout from '../../../stories/components/Layout/Layout';
import PageHead from '../../../stories/components/PageHead/PageHead';

export const getStaticPaths: GetStaticPaths = PageGetStaticPaths(POSTS_PATH);

export const getStaticProps: GetStaticProps = PageGetStaticProps(POSTS_PATH, MapGuide);

const Article = (props: { page: IGuide, content: string }) => {

    const { page, content } = props;

    return (
        <Layout>

            <PageHead title={`${page.title} - Guide`} description={page.excerpt} />

            <Guide guide={page} content={content} />


        </Layout>
    );
}

export default Article