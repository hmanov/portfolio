import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Footer from '../components/footer';
import Header from '../components/header';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import Head from 'next/head';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    rel="icon"
                    href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/man-technologist_1f468-200d-1f4bb.png"
                />
            </Head>
            <div style={{ minHeight: '100vh', position: 'relative' }}>
                <Header />
                <div
                    style={{
                        maxWidth: '1200px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingBottom: '200px',
                        paddingTop: '20px',
                        minHeight: 'calc(100vh - px)',
                    }}
                >
                    <Component {...pageProps} />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
