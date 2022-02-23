import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Footer from '../components/footer';
import Header from '../components/header';

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
                        paddingBottom: '100px',
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
