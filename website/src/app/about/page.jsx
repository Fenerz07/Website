'use client';

import React from 'react';
import Head from 'next/head';
import styles from '@/styles/aboutPage.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SEO from "../../components/SEO";

export default function AboutPage() {
  return (
    <>
      <SEO title="A propos - Hugo MATYLA" description="Page à Propos" />
      <motion.div 
        className={styles.page}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
          >
            <Image src="/images/smile.svg" alt="smile" width={100} height={100} />
            <p>
              Je m'appelle <strong>Hugo</strong>, je suis un développeur de 19 ans passionné par le sport, la rétromobile et évidemment les jeux vidéo.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image src="/images/compas.svg" alt="compas" width={100} height={100} />
            <p>
              Je suis en <strong>2ème année d'études supérieures</strong> en Informatique. Cela fait donc plus de 4 ans que je suis dans le développement grâce aux jeux vidéo.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Image src="/images/up-arrow.svg" alt="up-arrow" width={100} height={100} />
            <p>
              Tout au long de mes études et de mon temps libre, j'ai pu découvrir certains langages comme : <strong>JavaScript, Python, C, React, SQL, C++, NodeJS, C#</strong> et d'autres encore.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}