'use client';
import React from 'react';
import styles from '@/styles/experiencePage.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    name: 'Restos du Coeur',
    description: 'SaaS de gestion du stockage de dons matériaux pour les Restos du Coeur.',
    html_url: 'https://github.com/Sterbenfr/CRM',
    image: '/images/Restos_du_coeur_Logo.svg'
  }
];

export default function ExperiencePage() {
  return (
    <motion.div 
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.content}>
        {experiences.map((experience, index) => (
          <motion.a 
            key={experience.id}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: index * 0.2 }}
            className={styles.experience}
            href={experience.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.experienceContent}>
              <div className={styles.image}>
                <Image src={experience.image} id="rdc" alt="experience-icon" width={100} height={100} />
              </div>
              <div className={styles.logos}>
                <Image src="/images/react.svg" alt="react-icon" width={50} height={50} />
                <Image src="/images/nodejs.svg" alt="node-icon" width={50} height={50} />
                <Image src="/images/db.svg" alt="postgresql-icon" width={50} height={50} />
              </div>
              <div className={styles.text}>
                <h2>{experience.name}</h2>
                <p>{experience.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}