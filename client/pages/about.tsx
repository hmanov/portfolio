import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import MarkDown from '../components/MarkDown';
import styles from '../styles/About.module.css';
const { container } = styles;
interface AboutData {
    data: {
        data: {
            id: number;
            attributes: {
                profilePicture: { data: { attributes: { url: string } } };
                content: string;
                linkedin: string;
                github: string;
            };
        };
        meta: {};
    };
}
const about: NextPage<AboutData> = ({
    data: {
        data: { attributes },
    },
}) => {
    const { content, profilePicture } = attributes;

    return (
        <>
            <Head>
                <title>About</title>
                <meta name="title" content="About" />
                <meta name="author" content="Hristo Manov" />
                <meta
                    name="keywords"
                    content="programing coding react javascript nextjs about uses hardware software"
                />
                <meta name="description" content="about programing with javascript react nextjs and lifestyle" />
                <meta property="og:title" content="about" />
                <meta property="og:url" content="https://manov.dev/about" />
                <meta property="og:image" content={profilePicture.data.attributes.url} />
            </Head>
            <div className={container}>
                <MarkDown content={content} />
            </div>
        </>
    );
};
export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get(process.env.API_URL + '/about?populate=*');

    return { props: { data: res.data } };
};
export default about;
