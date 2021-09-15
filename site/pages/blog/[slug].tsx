import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { BlogList, IBlog } from '../../ui/components/BlogList/BlogList';
import { convertToInt } from '../../utils/int';
import { Layout } from '../_shared/Layout';
import { join } from 'path';
import matter from 'gray-matter';
import { BannerImage } from '../../ui/components/BannerImage/BannerImage';

export const POSTS_PATH = join(process.cwd(), '/public/articles');
const postsPerPage = 5;

export const getStaticPaths: GetStaticPaths = async () => {


    const folders = fs
        .readdirSync(POSTS_PATH, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    const totalPages = folders.length / postsPerPage;


    let pages = new Array();

    for (let i = 0; i < totalPages; i++) {
        pages.push({ params: { slug: `${i + 1}` } })
    }

    return {
        paths: pages,
        fallback: 'blocking',
    };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {

    let slug = '';



    if (params && params.slug) {
        if (Array.isArray(params.slug) && params.slug.length > 0) {

            const pop = params.slug.pop();
            if (pop) {
                slug = pop?.toLowerCase();
            }
        } else if (params.slug) {
            slug = (params.slug as any).toLowerCase();
        }

        const page = convertToInt(slug);


        if (page === NaN) {
            return {
                notFound: true,
            };
        }



        const folders = fs
            .readdirSync(POSTS_PATH, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        const totalPages = Math.ceil(folders
            .length /postsPerPage);


        const start = (page - 1) * postsPerPage;
        const end = start + postsPerPage;
        const postNames = folders.slice(start, end);

        const posts: IBlog[] = postNames.map(name => {
            const postFilePath = join(POSTS_PATH, `${name}/post.mdx`);
            const fileContents = fs.readFileSync(postFilePath);
            const { data, content } = matter(fileContents);

            return MapBlog(data, name);
        })


        return {
            props: {
                pageCurrent: page,
                pagesTotal: totalPages,
                posts: posts
            }
        }
    }

    return {
        notFound: true,
    };
}


const List = (props: { pageCurrent: number, pagesTotal: number, posts: IBlog[] }) => {

    const { pagesTotal, pageCurrent, posts } = props;

    return (
        <Layout>
            <BannerImage
                title="Blogs"
                imageUrl="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                subTitle={`Page ${pageCurrent}`}
            />
            <div className="container pt-5">

                <BlogList posts={posts} pageCurrent={pageCurrent} pagesTotal={pagesTotal} />
            </div>
        </Layout>
    );
}

export default List


export const MapBlog = (data: any, name: string): IBlog => {
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