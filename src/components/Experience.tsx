'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    role: "Senior Kotlin Multiplatform Developer",
    company: "The Tuna Group",
    period: "Feb 2024 – present",
    description: "Spearheading multiplatform architecture and cross-platform feature delivery using Kotlin Multiplatform."
  },
  {
    role: "Associate Staff Engineer, Mobile",
    company: "Nagarro Inc.",
    period: "2022 – 2024",
    description: "Developed server-driven UI systems, migrated legacy RxJava to Kotlin Coroutines, and mentored teams on clean architecture."
  },
  {
    role: "Android Developer",
    company: "StartWith Basicx Pvt. Ltd.",
    period: "2019 – 2022",
    description: "Systematically rewrote flagship apps from Java to Kotlin, implementing MVVM architectures and enhancing code maintainability."
  },
  {
    role: "Android Developer",
    company: "Truworth Infotech Pvt. Ltd.",
    period: "2016 – 2018",
    description: "Developed and maintained Android applications, including complex internal chat systems via Socket and Video Calling over WebRTC."
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.heading}>Career Progression</h2>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className={styles.markerWrapper}>
                <div className={styles.marker}>
                  <Briefcase size={14} />
                </div>
                {idx !== experiences.length - 1 && <div className={styles.line} />}
              </div>
              
              <div className={styles.content}>
                <div className={styles.metadata}>
                  <span className={styles.period}>{exp.period}</span>
                  <span className={styles.company}>{exp.company}</span>
                </div>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
