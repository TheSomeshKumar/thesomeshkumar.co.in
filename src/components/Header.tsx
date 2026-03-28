'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={`${styles.navContainer} container`}>
        <a href="#" className={styles.logo}>
          Somesh Kumar<span className="text-gradient">.</span>
        </a>
        <nav className={styles.nav}>
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={styles.navLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
