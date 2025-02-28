'use client';
import React from 'react';
import styles from '@/styles/projectPage.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SEO from "../../components/SEO";

const projects = [
  {
    id: 1,
    name: 'MovieTracker',
    description: 'Site web permettant de rechercher des films grâce à TMDB API et développé en NextJS.',
    html_url: 'https://github.com/Fenerz07/MovieTracker',
    image: '/images/camera.svg'
  },
  {
    id: 2,
    name: 'SocialNetwork',
    description: 'Un réseau social basé sur PHP et MySQL.',
    html_url: 'https://github.com/Fenerz07/phpSocialNetwork-',
    image: '/images/network.svg'
  },
  {
    id: 3,
    name: 'PythonGames',
    description: 'Jeux développés en Python.',
    html_url: 'https://github.com/Fenerz07/Python',
    image: '/images/game.svg'
  },
  {
    id: 4,
    name: 'TicTacToe',
    description: 'Jeu du morpion développé en JavaScript.',
    html_url: 'https://github.com/Fenerz07/TicTacToeJS',
    image: '/images/circlex.svg'
  },
  {
    id: 5,
    name: 'PokemonFight',
    description: 'Tournoi Pokémon développé en Java.',
    html_url: 'https://github.com/Fenerz07/Tournoi-Pokemon-Java',
    image: '/images/bandage.svg'
  },
  {
    id: 6,
    name: 'ViteNews',
    description: 'Site web d\'actualités développé avec Vite et HackerAPI.',
    html_url: 'https://github.com/Fenerz07/viteNews',
    image: '/images/news.svg'
}
];

export default function ProjectPage() {
return (
  <>
    <SEO title="Projets - Hugo MATYLA" description="Page des projets" />
      <motion.div 
          className={styles.page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
      >
          <div className={styles.content}>
              {projects.map((project, index) => (
                  <motion.a 
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={styles.project}
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <Image src={project.image} alt="project-icon" width={100} height={100} />
                      <h2>{project.name}</h2>
                      <p>{project.description}</p>
                  </motion.a>
              ))}
          </div>
      </motion.div>
    </>
  );
}