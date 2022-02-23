import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import { SingleBlogPostProps } from '../../interfaces/blog';
import MarkDown from '../../components/MarkDown';
import styles from '../../styles/Blog.module.css';
const { imgContainer, header, container } = styles;
const BlogPost: NextPage<SingleBlogPostProps> = ({ post: { data } }) => {
    const {
        id,
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
    } = data;

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
export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await axios.get(process.env.API_URL + '/blogposts/' + context.query.slug + '?populate=*');

    return { props: { post: res.data } };
};
export default BlogPost;
