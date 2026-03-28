'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaMedium } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.contactSection}>
      <div className="container">
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.heading}>Let&apos;s Build Together</h2>
          <p className={styles.subtext}>
            Whether you&apos;re looking to architect a new mobile solution or scale an existing Android, iOS, or KMP project, I&apos;m always open to discussing new opportunities.
          </p>

          <a href="mailto:thatsomeshkumar@gmail.com" className={styles.emailLink}>
            thatsomeshkumar@gmail.com
          </a>

          <div className={styles.socials}>
            {[
              { Icon: FaGithub, href: "https://github.com/TheSomeshKumar", label: "GitHub" },
              { Icon: FaMedium, href: "https://medium.com/@thesomeshkumar", label: "Medium" },
              { Icon: Phone, href: "tel:+917737767735", label: "Phone" }
            ].map((social, idx) => (
              <motion.a
                key={social.label}
                href={social.href}
                className={styles.socialIcon}
                whileHover={{ y: -5, scale: 1.1, color: "var(--accent)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label={social.label}
              >
                <social.Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Somesh Kumar. All rights reserved.
          </p>
          <div className={styles.builtWith}>
            Built with Next.js, Framer Motion & Vanilla CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
