import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import matter from 'gray-matter';
import React from 'react';
import { PageGetStaticPaths, PageGetStaticProps } from '../../_shared/Slug-Page';
import { IPage } from '../../ui/interfaces/IPage';
import Layout from '../../stories/components/Layout/Layout';
import PageHead from '../../stories/components/PageHead/PageHead';
import Markdown from '../../stories/components/Markdown/Markdown';
import { BannerImage } from '../../stories/components/BannerImage/BannerImage';


export const POSTS_PATH = join(process.cwd(), '/public/pages');


export const MapPage = (name: string, data: any): IPage => {

    console.log(typeof data.date);
    var post: IPage = {
        excerpt: data.excerpt,
        title: data.title,
        image: {
            src: data.image.src,
            alt: data.image.alt,
            fpx: data.image.fpx ? data.image.fpx : null,
            fpy: data.image.fpy ? data.image.fpy : null,
        },
        name: name
    }

    return post;
}

export const getStaticPaths: GetStaticPaths = PageGetStaticPaths(POSTS_PATH);

export const getStaticProps: GetStaticProps = PageGetStaticProps(POSTS_PATH, MapPage);

const Article = (props: { page: IPage, content: string }) => {

    const { page, content } = props;

    return (
        <Layout>
            <PageHead title={`${page.title} - Blog`} description={page.excerpt} 
                image={page.image}
            />
            <BannerImage
                imageUrl={page.image.src}
                title={page.title}
                fpy={page.image.fpy}
                fpx={page.image.fpx}
                className="col-md-8 offset-md-2"
            />
            <div className="container pt-5">
                <Markdown content={content} />
            </div>
        </Layout>
    );
}

export default Article