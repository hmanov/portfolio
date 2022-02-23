import { NextPage } from 'next';
import Link from 'next/link';
import { SingleBlogPostProps } from '../interfaces/blog';
import styles from '../styles/BlogPost.module.css';
import Date from './Date';
const { dateContainer, cat, container, moreBtn, imgContainer, contentContainer } = styles;
const blogPost: NextPage<SingleBlogPostProps> = ({ post }) => {
    const {
        id,
        attributes: { date, content, createdAt, updatedAt, title, slug, publishedAt, postImage, category },
    } = post;

    const {
        data: {
            attributes: { url },
        },
    } = postImage;
    const sliceContent = (str: string, length: number = 130) => {
        const sliced = str.slice(0, length);
        const lastSpace = sliced.lastIndexOf(' ');
        return sliced.slice(0, lastSpace).replaceAll(/[^a-zA-Z0-9,.!@ \s\r\n]/g, '') + '...';
    };
    return (
        <div className={container}>
            <div className={imgContainer}>
                <Link href={'/blog/' + encodeURIComponent(slug)}>
                    <img
                        src={url}
                        alt=""
                        style={{ objectFit: 'contain', width: '100%', height: '100%', borderRadius: '5px' }}
                    />
                </Link>
                <div className={dateContainer}>
                    <small>
                        <Date>{date}</Date>
                    </small>
                    <p className={cat}>{category}</p>
                </div>
            </div>

            <div className={contentContainer}>
                <Link href={'/blog/' + encodeURIComponent(slug)}>
                    <h2>{title}</h2>
                </Link>

                <h5>{sliceContent(content)}</h5>
                <Link href={'/blog/' + encodeURIComponent(slug)}>
                    <button className={moreBtn}>Read more</button>
                </Link>
            </div>
        </div>
    );
};

export default blogPost;
