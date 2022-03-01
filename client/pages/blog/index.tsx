import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import BlogCard from '../../components/blogCard';
import styles from '../../styles/Blog.module.css';
import { BlogPostProps } from '../../interfaces/blog';
import Head from 'next/head';

const { container } = styles;
const Blog: NextPage<BlogPostProps> = ({ post: { data, meta } }) => {
    const {
        attributes: {
            title,

            postImage: {
                data: { attributes },
            },
        },
    } = data[0];

    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="title" content={title} />
                <meta name="author" content="Hristo Manov" />
                <meta name="keywords" content="blog programing coding react javascript nextjs" />
                <meta name="description" content="blog about programing with javascript react nextjs and lifestyle" />
                <meta property="og:title" content="blog" />
                <meta property="og:url" content="https://manov.dev/blog" />
                <meta property="og:image" content={attributes.url} />
                <meta property="og:description" content="blog for programing and lifestyle" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="manov.dev" />
                <meta property="twitter:url" content={'https://manov.dev/blog'} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content="blog for programing and lifestyle" />
                <meta name="twitter:image" content={attributes.url} />
            </Head>
            <div className={container}>
                {data.map((post) => (
                    <BlogCard key={post.id} post={post} meta={meta} />
                ))}
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await axios.get(process.env.API_URL + '/blogposts?sort=date:desc&populate=*');

    return { props: { post: res.data } };
};
export default Blog;
