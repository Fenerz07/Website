'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from '../styles/switchButton.module.css';

const SwitchButton = ({ pages }) => {
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState('');
    const pathname = usePathname();

        useEffect(() => {
            setCurrentPath(pathname);
    }, [pathname]);

    const handleSwitch = () => {
        const currentIndex = pages.indexOf(pathname);
        const nextIndex = (currentIndex + 1) % pages.length;
        router.push(pages[nextIndex]);
    };

    const getNextTitle = () => {
        const currentIndex = pages.indexOf(pathname);
        const nextIndex = (currentIndex + 1) % pages.length;
        switch (pages[nextIndex]) {
            case '/':
                return 'Accueil';
            case '/about':
                return 'À propos';
            case '/project':
                return 'Projets';
            case '/contact':
                return 'Contact';
            default:
                return '😅 Page inconnue';
        }
    };

    return (
        <div className={styles.animatedArrow} onClick={handleSwitch}>
            <div className={styles.arrowContainer}>
                <div className={styles.arrow}></div>
            </div>
            <div className={styles.lineContainer}>
                <div className={`${styles.line} ${styles.left}`}></div>
                <div className={styles.text}>
                    <h1>{getNextTitle()}</h1>
                </div>
                <div className={`${styles.line} ${styles.right}`}></div>
            </div>
        </div>
    );
};

export default SwitchButton;
