import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Footer from '../components/footer';
import Header from '../components/header';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <div style={{ minHeight: '100vh' }}>
                <Header />
                <div
                    style={{
                        maxWidth: '1200px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        paddingBottom: '250px',
                        paddingTop: '20px',
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
