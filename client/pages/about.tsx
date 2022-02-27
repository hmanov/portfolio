import type { NextPage } from 'next';

import { GetServerSideProps } from 'next';
import axios from 'axios';
import MarkDown from '../components/MarkDown';
import styles from '../styles/About.module.css';
const { container } = styles;
interface AboutData {
    data: {
        data: {
            id: number;
            attributes: { profilePicture: string; content: string; linkedin: string; github: string };
        };
        meta: {};
    };
}
const about: NextPage<AboutData> = ({
    data: {
        data: { attributes },
    },
}) => {
    const { content } = attributes;
    return (
        <div className={container}>
            <MarkDown content={content} />
        </div>
    );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await axios.get(process.env.API_URL + '/about');

    return { props: { data: res.data } };
};
export default about;
