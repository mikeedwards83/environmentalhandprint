import { GetStaticPaths, GetStaticProps } from "next";
import fs from 'fs';
import { convertToInt } from "../utils/int";
import { join } from 'path';
import matter from 'gray-matter';


export const ListingGetStaticPaths = (folder: string, postsPerPage: number): GetStaticPaths => {

    const func: GetStaticPaths = async () => {

        const folders = fs
            .readdirSync(folder, { withFileTypes: true })
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

    return func;
}



export const ListingGetStaticProps = (folder: string, postsPerPage: number, map: (name:string, data:any) =>any ): GetStaticProps => {
    const func: GetStaticProps = async ({ params }) => {

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
                .readdirSync(folder, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .map(dirent => dirent.name);

            const totalPages = Math.ceil(folders
                .length / postsPerPage);


            const start = (page - 1) * postsPerPage;
            const end = start + postsPerPage;
            const postNames = folders.slice(start, end);

            const pages = postNames.map(name => {
                const postFilePath = join(folder, `${name}/page.mdx`);
                const fileContents = fs.readFileSync(postFilePath);
                const { data, content } = matter(fileContents);

                return map(name, data);
            })


            return {
                props: {
                    pageCurrent: page,
                    pagesTotal: totalPages,
                    pages: pages
                }
            }
        }

        return {
            notFound: true,
        };
    }

    return func;
}