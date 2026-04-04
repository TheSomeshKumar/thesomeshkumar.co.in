'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
  {
    role: "Technical Lead - Mobile",
    company: "The Tuna Group",
    period: "Feb 2024 – present",
    description: "I currently lead a team of 7 mobile engineers across both Android and iOS. We manage the architecture for a high-traffic consumer app used by millions of people visiting major attraction parks. My main focus is building a scalable Kotlin Multiplatform (KMP) foundation to share business logic between platforms, which has massively reduced code duplication and kept our features in sync. Beyond the code, I bridge the gap between high-level product ideas and actual technical execution. I recently led the technical roadmap for complex modules like Mobile Food Ordering (MFO), turning API specs into smooth UI. I'm also a big believer in engineering excellence and spend a lot of my time in PR reviews and mentoring the team on modern patterns like Compose and SwiftUI.",
    tags: ["KMP", "Compose", "SwiftUI"]
  },
  {
    role: "Associate Staff Engineer, Mobile",
    company: "Nagarro Inc.",
    period: "2022 – 2024",
    description: "Led the mobile team for the Circles.Life app, adapting a region-specific product into a scalable, white-label application for global markets in Kotlin with MVI architecture.",
    tags: ["Kotlin", "MVI", "White-label"]
  },
  {
    role: "Senior iOS & Android Developer",
    company: "StartWith Basicx Pvt. Ltd.",
    period: "2019 – 2022",
    description: "Completely overhauling our mobile architecture. Systematically rewrote our legacy Java Android app into modern Kotlin , bringing in MVVM, Coroutines, and Dagger Hilt. After optimizing the Android UI with Material Design, I took the opportunity to learn iOS development and ultimately building a parallel version of that exact same app from scratch using SwiftUI.",
    tags: ["MVVM", "SwiftUI", "Material Design"]
  },
  {
    role: "Android Developer",
    company: "Truworth Infotech Pvt. Ltd.",
    period: "2016 – 2018",
    description: "I helped build the Wellness Corner app in Java using MVC, leaning into Material Design and smooth animations. While I worked on the core architecture using tools like Dagger and Retrofit, I took ownership of the more complex, interactive features. I built out a cross-platform video calling system using WebRTC so patients could consult doctors, build an internal chat system using Sockets, and integrated hardware features like step tracking and BLE.",
    tags: ["Java", "WebRTC", "BLE"]
  }
];

const cardVariants = {
  hidden: (idx: number) => ({
    opacity: 0,
    x: idx % 2 === 0 ? -60 : 60,
    y: 30,
    scale: 0.95,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
      mass: 0.8,
    },
  },
};

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
          <div className={styles.timelineTrack} />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className={styles.timelineItem}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className={styles.markerWrapper}>
                <motion.div
                  className={styles.marker}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Briefcase size={14} />
                </motion.div>
              </div>

              <motion.div
                className={styles.notificationCard}
                whileHover={{ x: 8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div className={styles.notifHeader}>
                  <div className={styles.notifAppIcon}>
                    <Briefcase size={12} />
                  </div>
                  <span className={styles.notifCompany}>{exp.company}</span>
                  <span className={styles.notifTime}>{exp.period}</span>
                </div>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.notifTags}>
                  {exp.tags.map(tag => (
                    <span key={tag} className={styles.notifTag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
