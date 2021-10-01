
import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import matter from 'gray-matter';


export const PageGetStaticPaths = (folder: string): GetStaticPaths => {

    const func: GetStaticPaths = async () => {

        const folders = fs
            .readdirSync(folder, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name)
            .map((slug) => ({ params: { slug } }));

        return {
            paths: folders,
            fallback: 'blocking',
        };
    };


    return func;

}

export const PageGetStaticProps = (folder: string, map: (name: string, data: any) => any): GetStaticProps => {

    const func: GetStaticProps = async ({ params }) => {
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
            const postFilePath = join(folder, `${slug}/page.mdx`);

            if (fs.existsSync(postFilePath)){
                const fileContents = fs.readFileSync(postFilePath);
                const { data, content } = matter(fileContents);

                const page = map(slug, data);
                return {
                    props: {
                        page: page,
                        content: content
                    },
                };
            }
            else{
                return {
                    props: {
                        page: null,
                        content: null
                    },
                };
            }

        }

        return {
            notFound: true,
        };

    };

    return func;
}