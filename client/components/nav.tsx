import Link from 'next/link';
import styles from '../styles/Nav.module.css';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

const { nav, navUl, navItem, active } = styles;
const Nav = () => {
    const router = useRouter();
    const isActive = (link: string) => {
        return router.pathname === link ? active : '';
    };
    return (
        <nav className={nav}>
            <ul className={navUl}>
                <li className={navItem}>
                    <Link href={'/'}>
                        <a className={isActive('/')}>
                            Home(<small>this</small>)
                        </a>
                    </Link>
                </li>
                <li className={navItem}>
                    <Link href={'/blog'}>
                        <a className={isActive('/blog')}>
                            Blog(<small>[Js, React, stuff]</small>)
                        </a>
                    </Link>
                </li>
                <li className={navItem}>
                    <Link href={'/tips'}>
                        <a className={isActive('/tips')}>
                            HotTips(<small>Js</small>)
                        </a>
                    </Link>
                </li>
                <li className={navItem}>
                    <Link href={'/about'}>
                        <a className={isActive('/about')}>
                            About(<small>Me</small>)
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
