import Link from 'next/link';
import Nav from './nav';
import styles from '../styles/Header.module.css';
const { header, logoContainer } = styles;
const Header = () => {
    return (
        <header className={header}>
            <div>
                <Link href="/">
                    <div className={logoContainer}>
                        {' '}
                        <a href="">M.dev()</a>{' '}
                    </div>
                </Link>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
