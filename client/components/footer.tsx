import Link from 'next/link';
import styles from '../styles/Footer.module.css';
const { footer, container } = styles;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <footer className={footer}>
            <div className={container}>
                <a href="">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
            </div>
            <p>Created by me ® {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
