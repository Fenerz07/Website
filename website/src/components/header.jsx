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
                return 'HomePage';
            case '/about':
                return 'AboutPage';
            case '/contact':
                return 'ContactPage';
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
