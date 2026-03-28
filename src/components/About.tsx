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
            I started my career as an Android developer writing Java. Today, as a Tech Lead, I build apps for both Android and iOS using Kotlin Multiplatform.
          </p>
          <p className={styles.paragraph}>
            Over the years, I've built products from scratch, rewritten older legacy code into modern MVVM and Jetpack Compose architectures, and mentored junior developers. I have a Master's in Computer Applications from Jaipur National University, and I really enjoy contributing to open-source projects when I can.
          </p>

          <h2 className={styles.heading}>Beyond the Screen</h2>
          <p className={styles.paragraph}>
            I'm based in Jaipur. I'm naturally a bit of an introvert, so while my day job involves a lot of leading and collaborating, I do my best work when I can just put on my headphones, put on some Eminem or hip-hop, and get completely into the zone.
          </p>
          <p className={styles.paragraph}>
            When I'm not coding, I'm usually spending time with my kids, messing around with photography and photo editing, or reading up on astrology. I also really like traveling and the idea of hiking—taking my bike up to Rishikesh recently was a great way to unplug. I also love playing video games, though it's hard to find much free time for that these days!
          </p>

          <div className={styles.skills}>
            {["Kotlin", "Java", "Jetpack Compose", "SwiftUI", "Kotlin Multiplatform"].map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
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
              alt="Somesh Desk Setup 2013"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className={styles.imgCaption}>2019: The 3-laptop grind & debug naps</div>
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
            <div className={styles.imgCaption}>Somesh Kumar</div>
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
            <div className={styles.imgCaption}>Travels & Unplugging</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
