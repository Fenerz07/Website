'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/header.module.css';

export default function Header() {
    const pathname = usePathname();

    const getTitle = () => {
        switch (pathname) {
            case '/':
                return 'Accueil';
            case '/about':
                return 'À propos';
            case '/project':
                return 'Projets';
            case '/experience':
                return 'Expérience';
            case '/contact':
                return 'Me Contacter';  
            default:
                return '😅 Page inconnue';
        }
    };

    return (
        <header className={styles.header}>
            <h1 className={styles.header_title}>
                <Link href="/">{getTitle()}</Link>
            </h1>
        </header>
    );
}
