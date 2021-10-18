
import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import matter from 'gray-matter';


export const PageGetStaticPaths = (folder: string, nameFormat: (name:string)=>string  = name=>name): GetStaticPaths => {

    const func: GetStaticPaths = async () => {

        const folders = fs
            .readdirSync(folder, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name)
            .map(name => nameFormat(name))
            .map((slug) => ({ params: { slug } }));

        return {
            paths: folders,
            fallback: false,
        };
    };


    return func;

}

export const PageGetStaticProps = (rootFolder: string, map: (name: string, data: any) => any, folderFilter: ( slug:string,name:string)=> boolean = (slug, name )=> name===slug): GetStaticProps => {

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

            const folders = fs
                .readdirSync(rootFolder, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory())
                .filter(dirent => folderFilter( slug,dirent.name));

            if (folders.length > 0) {

                const folder = folders[0];

                const postFilePath = join(rootFolder, `${folder.name}/page.mdx`);

                if (fs.existsSync(postFilePath)) {
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
            }


            return {
                props: {
                    page: null,
                    content: null
                },
            };

        }

        return {
            notFound: true,
        };

    };

    return func;
}