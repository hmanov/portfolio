import Link from 'next/link';
import Nav from './nav';
import styles from '../styles/Header.module.css';
const { header, logoContainer } = styles;
const Header = () => {
    return (
        <header className={header}>
            <div>
                <div className={logoContainer}> {'manov.dev'} </div>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
