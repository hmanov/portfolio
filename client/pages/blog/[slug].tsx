import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { SingleBlogPostProps } from '../../interfaces/blog';
import MarkDown from '../../components/MarkDown';
import styles from '../../styles/BlogPost.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

const { imgContainer, header, container, cat, dateContainer } = styles;
const BlogPost: NextPage<SingleBlogPostProps> = ({ post }) => {
    const router = useRouter();
    const {
        attributes: {
            date,
            content,
            category,
            title,
            slug,
            publishedAt,
            Seo,
            postImage: {
                data: { attributes },
            },
        },
    } = post;
    const { metaTitle, metaDescription, metaKeywords } = Seo[0];
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" content={metaTitle} />
                <meta name="author" content="Hristo Manov" />
                <meta name="keywords" content={metaKeywords} />
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={'https://manov.dev' + router.asPath} />
                <meta property="og:image" content={attributes.url} />
                <meta property="og:description" content={metaDescription} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="manov.dev" />
                <meta property="twitter:url" content={'https://manov.dev' + router.asPath} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={attributes.url} />
            </Head>
            <div className={container}>
                <h1 className={header}>{title}</h1>

                <div className={imgContainer}>
                    <img src={attributes.url} alt="" />
                </div>
                <div className={dateContainer}>
                    <p>{date.split('-').reverse().join('.')}</p> <p className={cat}>{category}</p>
                </div>
                <MarkDown content={content} />
            </div>
        </>
    );
};
export async function getStaticPaths() {
    const res = await axios.get(process.env.API_URL + '/blogposts?populate=*');
    const paths = res.data.data.map((post: any) => {
        return {
            params: { slug: post.attributes.slug },
        };
    });

    return { paths, fallback: 'blocking' };
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await axios.get(process.env.API_URL + '/blogposts/' + params!.slug + '?populate=*');

    return { props: { post: res.data.data }, revalidate: 10 };
};
// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const res = await axios.get(process.env.API_URL + '/blogposts/' + context.query.slug + '?populate=*');

//     return { props: { post: res.data.data } };
// };
export default BlogPost;
