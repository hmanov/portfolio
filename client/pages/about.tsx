import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
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
        <div>
            {/* <ReactMarkdown
                children={content}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={nightOwl}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            /> */}
            ,
        </div>
    );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await axios.get(process.env.API_URL + '/about');

    return { props: { data: res.data } };
};
export default about;
