import styles from '../styles/header.module.css';

export default function Header() {

    return (
        <header>
            <h1 className={styles.header_title}><a href="/">hugo matyla</a></h1>
        </header>
    );
}