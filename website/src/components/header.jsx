'use client';

import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/header.module.css';

export default function Header() {
    const location = useLocation();

    const getTitle = (pathname) => {
        switch (pathname) {
            case '/':
                return 'HomePage';
            default:
                return '😅';
        }
    };

    return (
        <header>
            <h1 className={styles.header_title}><a href="/">{getTitle(location.pathname)}</a></h1>
        </header>
    );
}