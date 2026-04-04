'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Code2, Wifi, Battery, Signal } from 'lucide-react';
import { FaAndroid, FaApple } from 'react-icons/fa';
import { SiKotlin } from 'react-icons/si';
import styles from './Hero.module.css';

const roles = [
  'Technical Lead',
  'Mobile Architect',
  'KMP Expert',
  'Staff Engineer',
];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

const codeLines = [
  { indent: 0, text: 'class App : ComponentActivity() {', color: 'var(--color-kmp)' },
  { indent: 1, text: 'override fun onCreate(', color: '#e6db74' },
  { indent: 2, text: 'savedInstanceState: Bundle?', color: 'var(--text-secondary)' },
  { indent: 1, text: ') {', color: '#e6db74' },
  { indent: 2, text: 'super.onCreate(savedInstanceState)', color: 'var(--text-muted)' },
  { indent: 2, text: 'setContent {', color: '#66d9ef' },
  { indent: 3, text: 'MaterialTheme {', color: '#a6e22e' },
  { indent: 4, text: 'Surface(', color: '#fd971f' },
  { indent: 5, text: 'modifier = Modifier', color: 'var(--text-secondary)' },
  { indent: 6, text: '.fillMaxSize()', color: '#66d9ef' },
  { indent: 4, text: ') {', color: '#fd971f' },
  { indent: 5, text: 'HomeScreen()', color: '#a6e22e' },
  { indent: 4, text: '}', color: '#fd971f' },
  { indent: 3, text: '}', color: '#a6e22e' },
  { indent: 2, text: '}', color: '#66d9ef' },
  { indent: 1, text: '}', color: '#e6db74' },
  { indent: 0, text: '}', color: 'var(--color-kmp)' },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const typedRole = useTypewriter(roles);

  const phoneY = useTransform(scrollY, [0, 600], [0, -80]);
  const phoneRotateX = useTransform(scrollY, [0, 600], [8, -5]);
  const phoneRotateY = useTransform(scrollY, [0, 600], [-12, 5]);

  return (
    <section className={styles.heroSection}>
      <motion.div
        className={`${styles.heroGrid} container`}
        style={{ opacity }}
      >
        <motion.div className={styles.content} style={{ y }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.badge}
          >
            <span className={styles.badgeBorder} />
            <Code2 size={16} className={styles.badgeIcon} />
            <span className={styles.badgeText}>
              {typedRole}
              <span className={styles.cursor}>|</span>
            </span>
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I&apos;m <span className="text-gradient">Somesh Kumar</span><br />
            Architecting the future of mobile.
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Mobile Tech Lead from India with deep expertise in native{' '}
            <span className="text-gradient-android" style={{ fontWeight: 600 }}>Android</span>,{' '}
            <span className="text-gradient-ios" style={{ fontWeight: 600 }}>iOS</span>, and{' '}
            <span className="text-gradient" style={{ fontWeight: 600 }}>Kotlin Multiplatform</span>.
            {' '}Obsessed with pixel-perfect UI and flawless architecture.
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
          className={styles.phoneContainer}
          style={{ y: phoneY }}
          initial={{ opacity: 0, x: 60, rotateY: -20 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
        >
          <motion.div
            className={styles.phoneMockup}
            style={{ rotateX: phoneRotateX, rotateY: phoneRotateY }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className={styles.phoneNotch} />
            <div className={styles.phoneStatusBar}>
              <span className={styles.statusTime}>9:41</span>
              <div className={styles.statusIcons}>
                <Signal size={12} />
                <Wifi size={12} />
                <Battery size={12} />
              </div>
            </div>
            <div className={styles.phoneScreen}>
              <div className={styles.codeEditor}>
                <div className={styles.editorTabs}>
                  <span className={styles.editorTabActive}>MainActivity.kt</span>
                  <span className={styles.editorTab}>AppModule.kt</span>
                </div>
                <div className={styles.codeContent}>
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      className={styles.codeLine}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 + i * 0.08, duration: 0.3 }}
                    >
                      <span className={styles.lineNumber}>{i + 1}</span>
                      <span style={{ marginLeft: `${line.indent * 14}px`, color: line.color }}>
                        {line.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.phoneHomeBar} />

            <motion.div
              className={`${styles.floatingIcon} ${styles.floatingAndroid}`}
              animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaAndroid size={28} />
            </motion.div>
            <motion.div
              className={`${styles.floatingIcon} ${styles.floatingApple}`}
              animate={{ y: [0, 8, 0], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <FaApple size={26} />
            </motion.div>
            <motion.div
              className={`${styles.floatingIcon} ${styles.floatingKotlin}`}
              animate={{ y: [0, -6, 0], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <SiKotlin size={22} />
            </motion.div>
          </motion.div>
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
