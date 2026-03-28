'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Code2 } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className={styles.heroSection}>
      <motion.div 
        className={`${styles.content} container`}
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.badge}
        >
          <Code2 size={16} className={styles.badgeIcon} />
          <span>Technical Lead • Mobile & KMP</span>
        </motion.div>

        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Hi, I&apos;m <span className="text-gradient">Somesh Kumar</span><br />
          Architecting robust mobile experiences.
        </motion.h1>

        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I specialize in building world-class distributed applications natively on <span className="text-gradient-android" style={{fontWeight: 600}}>Android</span>, <span className="text-gradient-ios" style={{fontWeight: 600}}>iOS</span>, and unified through <span className="text-gradient" style={{fontWeight: 600}}>Kotlin Multiplatform</span>.
        </motion.p>

        <motion.div 
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#projects" className={styles.primaryBtn}>
            View My Work
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} className={styles.scrollIcon} />
      </motion.div>
    </section>
  );
}
