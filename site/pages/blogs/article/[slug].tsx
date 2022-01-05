import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { Blog } from '../../../stories/components/Blog/Blog';
import Layout from '../../../stories/components/Layout/Layout';
import PageHead from '../../../stories/components/PageHead/PageHead';
import { PageGetStaticPaths, PageGetStaticProps } from '../../../_shared/Slug-Page';
import PageError404 from '../../../stories/pages/PageError404/PageError404';
import { BlogService, POSTS_PATH } from '../../../services/Blogs/blogsService';
import { IBlog } from '../../../services/Blogs/IBlog';
import CtaSocial2 from '../../../stories/components/CtaSocial2/CtaSocial2';


export const getStaticPaths: GetStaticPaths = PageGetStaticPaths(POSTS_PATH, new BlogService().formatName);

export const getStaticProps: GetStaticProps = PageGetStaticProps(POSTS_PATH, new BlogService().mapBlog, (slug, name) => name.endsWith(slug));

const Article = (props: { page: IBlog, content: string }) => {

    const { page, content } = props;


    return (
        <>
            {page && content &&
                <Layout>

                    <PageHead title={`${page.title} - Blog`} description={page.excerpt} image={page.image} />
                    <Blog blog={page} content={content} />

                    <CtaSocial2
                        imageUrl="/images/social-cta-2_1.svg"
                        imageText="Mobile phone and a man holding a megaphone"
                    >
                        <div className="row">
                            <div className=" col-10 offset-1">
                                <h3>Follow Us!</h3>
                                <p className="lead">
                                    Join the 🖐 Handprint movement and follow us on social media.
                                </p>
                            </div>
                        </div>
                    </CtaSocial2>


                </Layout>

            }
            {!page && <PageError404 />}
        </>
    );
}

export default Article