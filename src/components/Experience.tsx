'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import styles from './Experience.module.css';

const journey = [
  {
    year: '2024',
    role: "Technical Lead - Mobile",
    company: "The Tuna Group",
    period: "Feb 2024 - Present",
    summary: "Leading 7 mobile engineers across Android and iOS. Built a Kotlin Multiplatform foundation for shared business logic, reduced duplication, and aligned feature velocity across both platforms.",
    highlights: [
      "Owned architecture for high-traffic consumer products used by millions.",
      "Led MFO roadmap from API contracts to production-grade UX.",
      "Established quality gates through strong PR culture and mentorship."
    ],
    tags: ["KMP", "Compose", "SwiftUI"]
  },
  {
    year: '2022',
    role: "Associate Staff Engineer, Mobile",
    company: "Nagarro Inc.",
    period: "2022 - 2024",
    summary: "Led the Circles.Life mobile team and transformed a region-focused product into a scalable white-label platform for global markets.",
    highlights: [
      "Architected reusable modules for multi-market rollouts.",
      "Drove RxJava -> Coroutines migration and increased reliability.",
      "Standardized MVI patterns for faster onboarding and consistency."
    ],
    tags: ["Kotlin", "MVI", "White-label"]
  },
  {
    year: '2019',
    role: "Senior iOS & Android Developer",
    company: "StartWith Basicx Pvt. Ltd.",
    period: "2019 - 2022",
    summary: "Rebuilt a legacy Java Android codebase into modern Kotlin MVVM architecture, then delivered the iOS counterpart from scratch with SwiftUI.",
    highlights: [
      "Migrated Java MVC -> Kotlin MVVM with Coroutines and Hilt.",
      "Improved maintainability through modular structure and theming.",
      "Expanded to iOS and shipped feature parity with SwiftUI."
    ],
    tags: ["MVVM", "SwiftUI", "Material Design"]
  },
  {
    year: '2016',
    role: "Android Developer",
    company: "Truworth Infotech Pvt. Ltd.",
    period: "2016 - 2018",
    summary: "Built foundational Android experiences in Java MVC, focusing on high-impact real-time and hardware-integrated features.",
    highlights: [
      "Implemented WebRTC video consultation flows for healthcare use cases.",
      "Built socket-based in-app chat and low-latency communication features.",
      "Integrated BLE and activity tracking for wellness workflows."
    ],
    tags: ["Java", "WebRTC", "BLE"]
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
          <h2 className={styles.heading}>Journey By Year</h2>
          <p className={styles.subheading}>
            A timeline of how my role evolved from Android specialist to cross-platform technical leadership.
          </p>
        </motion.div>

        <div className={styles.journeyRail}>
          <motion.span
            className={styles.railProgress}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-140px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          {journey.map((item, idx) => (
            <motion.article
              key={`${item.year}-${item.company}`}
              className={styles.yearBlock}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <div className={styles.yearColumn}>
                <motion.span
                  className={styles.year}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 0.24, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                >
                  {item.year}
                </motion.span>
                <span className={styles.yearDot} />
              </div>

              <motion.div
                className={styles.storyCard}
                whileHover={{ y: -4, scale: 1.01, rotateX: 0.6, rotateY: idx % 2 === 0 ? -0.8 : 0.8 }}
                transition={{ type: 'spring', stiffness: 320, damping: 25 }}
              >
                <div className={styles.storyHead}>
                  <div className={styles.companyBadge}>
                    <BriefcaseBusiness size={14} />
                  </div>
                  <span className={styles.company}>{item.company}</span>
                  <span className={styles.period}>{item.period}</span>
                </div>

                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.summary}>{item.summary}</p>

                <ul className={styles.highlights}>
                  {item.highlights.map((line) => (
                    <li key={line}>
                      <ArrowUpRight size={14} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
