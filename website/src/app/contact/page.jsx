'use client';
import React from 'react';
import styles from '@/styles/contactPage.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <motion.div 
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className={styles['contact-card']}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2>HUGO MATYLA</h2>
        <div className={styles.separator}></div>

        <div className={styles['contact-links']}>
          <motion.a 
            href="mailto:hugom2005@free.fr" 
            target="_blank"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="/images/mail.svg" alt="mail" width={50} height={50} unoptimized />
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/hugo-matyla/" 
            target="_blank"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="/images/linkedin.svg" alt="linkedin" width={50} height={50} />
          </motion.a>
          <motion.a 
            href="https://github.com/Fenerz07/" 
            target="_blank"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="/images/github.svg" alt="github" width={50} height={50} />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
