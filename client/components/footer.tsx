import Link from 'next/link';
import styles from '../styles/Footer.module.css';
const { footer, container } = styles;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer className={footer}>
            <div>
                <div className={container}>
                    <a href="https://github.com/hmanov" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://twitter.com/manovhristo" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/manovkhristo" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
                <p>Created by me, {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
