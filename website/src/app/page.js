'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/homePage.module.css';

export default function HomePage() {
    return (
        <div className={styles.homePage}>
            
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={styles.title}
            >
                Bienvenue sur mon portfolio
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className={styles.subtitle}
            >
                Découvrez moi et mes créations dans mon monde digital.
            </motion.p>

            <motion.p 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
                className={styles.description}
            >
                ( N&apos;hésitez pas à intéragir avec les éléments de la page )
            </motion.p>
        </div>
    );
}
