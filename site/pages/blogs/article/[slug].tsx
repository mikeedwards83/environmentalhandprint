import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import matter from 'gray-matter';
import { Layout } from '../../../_shared/Layout';
import React from 'react';
import { Blog } from '../../../stories/components/Blog/Blog';
import { MapBlog, POSTS_PATH } from '../[slug]';
import { IBlog } from '../../../stories/components/BlogList/IBlog';



export const getStaticPaths: GetStaticPaths = async () => {

    const folders = fs
        .readdirSync(POSTS_PATH, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .map((slug) => ({ params: { slug } }));

    console.log(folders);
    return {
        paths: folders,
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // read markdown file into content and frontmatter

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
    }
    if (slug) {
        const postFilePath = join(POSTS_PATH, `${slug}/page.mdx`);
        const fileContents = fs.readFileSync(postFilePath);
        const { data, content } = matter(fileContents);

        const post: IBlog = MapBlog( slug, data);

        
        return {
            props: {
                blog: post,
                content: content
            },
        };
    }

    return {
        notFound: true,
    };

    // generate HTML

};

export interface FrontMatter {
    [prop: string]: string;
}

const Article = (props: { blog: IBlog, content: string }) => {

    const { blog, content } = props;

    return (
        <Layout>
            <Blog blog={blog} content={content} />
        </Layout>
    );
}

export default Article