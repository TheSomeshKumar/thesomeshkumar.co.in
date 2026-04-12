'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, Medal, Trophy } from 'lucide-react';
import styles from './Awards.module.css';

type AwardItem = {
  title: string;
  subtitle: string;
  description: string;
  year: string;
  image?: string;
};

const awards: AwardItem[] = [
  {
    title: 'PM Rally Medal (NCC)',
    subtitle: 'Presented by Prime Minister Dr. Manmohan Singh',
    description:
      'Received PM Rally Medal on January 27, 2009 at the NCC PM Rally. This remains one of the proudest national recognitions in my journey.',
    year: '2009',
    // Optional image path, e.g. "/awards/pm-rally-medal.jpg"
  },
  {
    title: 'Rajpath Parade Participation',
    subtitle: 'NCC Air Wing (JD)',
    description:
      'Participated in the 2009 Rajpath Parade as NCC Air Wing (JD), representing discipline, commitment, and national-level achievement.',
    year: '2009',
    // Optional image path, e.g. "/awards/rajpath-parade.jpg"
  },
  {
    title: "Master's Final Year Top Rank",
    subtitle: 'Highest score across multiple programs',
    description:
      "Scored highest in my master's final year, with the top score across courses including MBA, M.Tech, MCA, and B.Tech.",
    year: 'Academic',
    // Optional image path, e.g. "/awards/masters-top-rank.jpg"
  },
  {
    title: 'HackerRank Java Certificate',
    subtitle: 'Java proficiency certification',
    description:
      'Earned HackerRank Java certification to validate problem-solving and language fundamentals in Java.',
    year: 'Certification',
    // Optional image path, e.g. "/awards/hackerrank-java.jpg"
  },
  {
    title: 'Employee of the Month',
    subtitle: 'Multiple recognitions across career',
    description:
      'Received Employee of the Month recognition several times throughout my professional journey for delivery quality and ownership.',
    year: 'Career',
    // Optional image path, e.g. "/awards/employee-of-the-month.jpg"
  }
];

const icons = [Medal, Award, Trophy, BadgeCheck, Award];

export default function Awards() {
  return (
    <section id="awards" className={styles.awardsSection}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.heading}>Awards & Recognition</h2>
          <p className={styles.subheading}>
            Milestones beyond code that shaped my discipline, leadership, and commitment.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {awards.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.article
                key={`${item.title}-${idx}`}
                className={styles.card}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className={styles.topRow}>
                  <span className={styles.iconBadge}>
                    <Icon size={15} />
                  </span>
                  <span className={styles.yearTag}>{item.year}</span>
                </div>

                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.subtitle}>{item.subtitle}</p>
                <p className={styles.description}>{item.description}</p>

                {item.image ? (
                  <div className={styles.mediaWrap}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
