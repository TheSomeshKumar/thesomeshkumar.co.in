'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section id="about" className={styles.aboutSection} ref={sectionRef}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.heading}>Behind the Code</h2>
          <p className={styles.paragraph}>
            As a Technical Lead & Staff Engineer, my journey started from laying bricks with Java in Android to bridging ecosystems natively across iOS and Android with KMP.
          </p>
          <p className={styles.paragraph}>
            Over the years, I've had the privilege of architecting products from the ground up, rewriting monolithic codebases, and migrating robust systems to sophisticated Modern MVVM, Jetpack Compose, and Clean Architecture standards.
          </p>
          <p className={styles.paragraph}>
            I hold a Master's degree in Computer Applications from Jaipur National University, and a deep passion for open-source development and sharing knowledge within the mobile engineering community.
          </p>
          <div className={styles.skills}>
            {["Kotlin", "Java", "Jetpack Compose", "SwiftUI", "Kotlin Multiplatform"].map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>

          <div className={styles.educationBlock}>
            <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', fontWeight: 600 }}>Education</h3>
            <ul style={{ listStyleType: 'none', padding: 0, color: 'var(--text-secondary)' }}>
              <li style={{ marginBottom: '0.5rem' }}>• <b>Master of Computer Application</b> - Jaipur National University (2013-2015)</li>
              <li>• <b>Bachelor of Computer Application</b> - Arya College of Engineering & IT (2010-2013)</li>
            </ul>
          </div>

          <motion.div
            className={styles.easterEgg}
            whileHover={{ scale: 1.02, x: 10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className={styles.quoteIcon}>&ldquo;</span>
            <p className={styles.songQuote}>&apos;Cause I&apos;m Slim Shady, yes, I&apos;m the real Shady... All you other Slim Shadys are just imitating</p>
            <span className={styles.artist}>— Eminem (The Real Slim Shady)</span>
          </motion.div>
        </motion.div>

        <div className={styles.imagesGrid}>
          {/* Photo 1: Work / Desk (Left) */}
          <motion.div style={{ y: y1 }} className={`${styles.imgWrapper} ${styles.imgPos1}`}>
            <Image 
              src="/somesh_2019.png" 
              alt="Somesh Desk Setup 2019" 
              fill 
              style={{ objectFit: 'cover' }} 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          
          {/* Photo 2: Face / Portrait (Top Right) */}
          <motion.div style={{ y: y2 }} className={`${styles.imgWrapper} ${styles.imgPos2}`}>
            <Image 
              src="/somesh_photo.jpg" 
              alt="Somesh Portrait" 
              fill 
              style={{ objectFit: 'cover' }} 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>

          {/* Photo 3: Travel / Personal (Bottom Right) */}
          <motion.div style={{ y: y3 }} className={`${styles.imgWrapper} ${styles.imgPos3}`}>
            <Image 
              src="/somesh_travel.jpg" 
              alt="Somesh Travel" 
              fill 
              style={{ objectFit: 'cover' }} 
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
