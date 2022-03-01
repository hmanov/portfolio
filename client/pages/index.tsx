import type { NextPage } from 'next';
import Head from 'next/head';

import Link from 'next/link';

import styles from '../styles/Home.module.css';
const { home, info, more } = styles;
const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>M.dev()</title>
                <meta name="title" content="Home" />
                <meta name="author" content="Hristo Manov" />
                <meta name="keywords" content=" programing coding react javascript nextjs" />
                <meta name="description" content=" about programing with javascript react nextjs and lifestyle" />
                <meta property="og:title" content="Home" />
                <meta property="og:url" content="https://manov.dev" />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/hmanov/image/upload/v1645987402/small_800px_Unofficial_Java_Script_logo_2_svg_0ba97b334a.png"
                />
            </Head>
            <div className={home}>
                <div className={info}>
                    <h1>
                        {' '}
                        Hey, <br /> I am Hristo Manov, <br /> Fullstack Web Developer.
                    </h1>
                    <p>
                        With a passion for designing, creating and developing full stack web applications. I love
                        technological challenges and  <strong style={{ color: 'var(--primary-color)' }}> CODING</strong>{' '}
                        the heck out of them 😀. Located in Sliven, Bulgaria, working remotely.
                    </p>

                    <p>
                        Problem solver, organized person, interested in both hardware and software trends. Fan of Power
                        lifting, volleyball and recently hiking. Love reading books! Thanks to my wife, we have two
                        beautiful daughters.
                    </p>
                    <p>
                        Wanted to create this blog, so I can share my knowledge and passion about{' '}
                        <strong style={{ color: 'var(--primary-color)' }}> JavaScript/TypeScript</strong> and its
                        frameworks/runtimes.
                    </p>
                    <p>
                        Enjoying a good company and cold{' '}
                        <strong style={{ color: 'var(--primary-color)' }}> CRAFT</strong> 🍺.
                    </p>

                    <Link href={'/about'}>
                        <a href="" className={more}>
                            <small>More about me here 👈</small>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
