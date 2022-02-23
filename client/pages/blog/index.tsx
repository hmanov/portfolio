import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import Blogpost from '../../components/blogPost';
import styles from '../../styles/Blog.module.css';
import { BlogPostProps } from '../../interfaces/blog';

const { container } = styles;
const Blog: NextPage<BlogPostProps> = ({ post: { data, meta } }) => {
    return (
        <div className={container}>
            {data.map((post) => (
                <Blogpost key={post.id} post={post} meta={meta} />
            ))}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await axios.get(process.env.API_URL + '/blogposts?populate=*');
    return { props: { post: res.data } };
};
export default Blog;
