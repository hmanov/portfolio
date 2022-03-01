import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

const { nav, navUl, navItem, active } = styles;
const Nav = () => {
    const router = useRouter();
    const isActive = (link: string) => {
        if (router.pathname.includes(link) && link !== '/') {
            return active;
        }
        return router.pathname === link ? active : '';
    };
    return (
        <nav className={nav}>
            <ul className={navUl}>
                <li className={navItem}>
                    <Link href={'/'}>
                        <a className={isActive('/')}>
                            <small>this</small>.Home()
                        </a>
                    </Link>
                </li>
                <li className={navItem}>
                    <Link href={'/blog'}>
                        <a className={isActive('/blog')}>
                            <small>[js, react, stuff]</small>.Blog()
                        </a>
                    </Link>
                </li>

                <li className={navItem}>
                    <Link href={'/about'}>
                        <a className={isActive('/about')}>
                            <small>me</small>.About()
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
