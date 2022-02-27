/* eslint-disable react/no-children-prop */
import React, { FunctionComponent, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/default-highlight';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import emoji from 'emoji-dictionary';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import rehypeRaw from 'rehype-raw';
interface Props {
    content: string;
}
const MarkDown: FunctionComponent<Props> = ({ content }) => {
    const emojiSupport = (text: string) => text.replace(/:\w+:/gi, (name) => emoji.getUnicode(name));
    return (
        <>
            <style>
                {`
           .markdown {
            position: relative;
            max-widht: 100%;
           }
            `}
            </style>
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                children={emojiSupport(content)}
                className="markdown"
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');

                        return !inline && match ? (
                            <div
                                style={{
                                    position: 'relative',
                                    boxShadow: '5px 5px 15px 5px #000000',
                                    marginTop: '20px',
                                    marginBottom: '20px',
                                }}
                            >
                                <CopyToClipboard text={String(children).replace(/\n$/, '')}>
                                    <button
                                        style={{
                                            position: 'absolute',
                                            right: '10px',
                                            top: '10px',
                                            padding: '5px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Copy
                                    </button>
                                </CopyToClipboard>
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={nightOwl}
                                    language={match[1]}
                                    PreTag="div"
                                    showLineNumbers={true}
                                    {...props}
                                    customStyle={{
                                        width: '100%',
                                        fontSize: '1rem',
                                        background: 'var(--secondary-color)',
                                    }}
                                />
                            </div>
                        ) : (
                            <>{children}</>
                        );
                    },
                }}
            />
        </>
    );
};

export default MarkDown;
