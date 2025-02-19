'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/homePage.module.css';

export default function HomePage() {
    const texts = ["Bienvenue", "Welcome", "Witaj"];
    const [currentText, setCurrentText] = useState(texts[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText(prevText => {
                const currentIndex = texts.indexOf(prevText);
                const nextIndex = (currentIndex + 1) % texts.length;
                return texts[nextIndex];
            });
        }, 2950);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.homePage}>
            <h1 className={styles.rotatingText}>{currentText}</h1>
            <p>Vous êtes sur la page principal de mon portfolio
                <br/>
                Vous pouvez naviguer sur les différentes pages en cliquant sur [à remplir]
                <br/>
                Bonne visite à vous!
            </p>
        </div>
    );
}