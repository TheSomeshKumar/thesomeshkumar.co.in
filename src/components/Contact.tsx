'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { FaGithub, FaMedium, FaLinkedinIn } from 'react-icons/fa';
import styles from './Contact.module.css';

const socials = [
  { Icon: FaGithub, href: "https://github.com/TheSomeshKumar", label: "GitHub" },
  { Icon: FaLinkedinIn, href: "https://linkedin.com/in/thesomeshkumar", label: "LinkedIn" },
  { Icon: FaMedium, href: "https://medium.com/@thesomeshkumar", label: "Medium" },
  { Icon: Phone, href: "tel:+917737767735", label: "Phone" }
];

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.contactSection}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let&apos;s Build Together
          </motion.h2>
          <motion.p
            className={styles.subtext}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you&apos;re looking to architect a new mobile solution or scale an existing Android, iOS, or KMP project, I&apos;m always open to discussing new opportunities.
          </motion.p>

          <motion.a
            href="mailto:thatsomeshkumar@gmail.com"
            className={styles.emailLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            thatsomeshkumar@gmail.com
          </motion.a>

          <div className={styles.socials}>
            {socials.map((social, idx) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={styles.socialIcon}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.4 + idx * 0.1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={{ y: -6, scale: 1.15, borderColor: 'var(--color-kmp)' }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} Somesh Kumar. All rights reserved.
          </p>
          <div className={styles.builtWith}>
            Built with Next.js, Framer Motion & Vanilla CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
