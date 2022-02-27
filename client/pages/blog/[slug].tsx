import { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { SingleBlogPostProps } from '../../interfaces/blog';
import MarkDown from '../../components/MarkDown';
import styles from '../../styles/Blog.module.css';
const { imgContainer, header, container } = styles;
const BlogPost: NextPage<SingleBlogPostProps> = ({ post }) => {
    const {
        attributes: {
            date,
            content,
            createdAt,
            updatedAt,
            title,
            slug,
            publishedAt,
            postImage: {
                data: { attributes },
            },
        },
    } = post;

    return (
        <div className={container}>
            <h1 className={header}>{title}</h1>
            <div className={imgContainer}>
                <img src={attributes.url} alt="" style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
            </div>

            <MarkDown content={content} />
        </div>
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
