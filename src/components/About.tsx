'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
            As a Technical Lead and Senior Kotlin Multiplatform Developer, my journey started from laying bricks with Java in Android to bridging ecosystems natively across iOS and Android with KMP.
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
             <h3 style={{marginTop: '2rem', marginBottom: '0.5rem', fontWeight: 600}}>Education</h3>
             <ul style={{listStyleType: 'none', padding: 0, color: 'var(--text-secondary)'}}>
               <li style={{marginBottom: '0.5rem'}}>• <b>Master of Computer Application</b> - Jaipur National University (2013-2015)</li>
               <li>• <b>Bachelor of Computer Application</b> - Arya College of Engineering & IT (2010-2013)</li>
             </ul>
          </div>
        </motion.div>

        <div className={styles.imagesGrid}>
          <motion.div style={{ y: y1 }} className={styles.imgWrapper1}>
            <div className={styles.placeholderImg}>
              <span>[Photo 1]</span>
              <p>Work/Desk Setup</p>
            </div>
          </motion.div>
          <motion.div style={{ y: y2 }} className={styles.imgWrapper2}>
            <div className={styles.placeholderImg}>
              <span>[Photo 2]</span>
              <p>Personal/Travel</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
