
import { join } from 'path';
import { IBlog } from './IBlog';
import matter from 'gray-matter';
import fs from 'fs';



export const POSTS_PATH = join(process.cwd(), '/public/blogs');
export const BLOG_URL = "/blogs";
export const BLOG_ARTICLE_URL = "/blogs/article";

const nameRegex = /^\d{6}-/


export class BlogService {

    formatName = (name:string):string=>{
        return name.replace(nameRegex, "")
    }


    getLatest(number: number): IBlog[] {
        const folders = fs
            .readdirSync(POSTS_PATH, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .filter(dirent => !dirent.name.startsWith("draft"))
            .map(dirent => dirent.name)
            .reverse();

        var posts = new Array<IBlog>();

        for (var i = 0; i < number && i < folders.length; i++) {
            const name = folders[i];
            const postFilePath = join(POSTS_PATH, `${name}/page.mdx`);
            const fileContents = fs.readFileSync(postFilePath);
            const { data, content } = matter(fileContents);

            var post = this.mapBlog(name, data);
            posts.push(post)
        }

        return posts;
    }

    mapBlog = (name: string, data: any): IBlog => {

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
            name: name,
            url: `${BLOG_ARTICLE_URL}/${this.formatName(name)}`
        }


        return post;
    }

}


