'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Download, Star } from 'lucide-react';
import { FaGithub, FaGooglePlay, FaApple } from 'react-icons/fa';
import styles from './Projects.module.css';

const projects = [
  {
    title: "SixFlags",
    description: "Early adopter of Kotlin Multiplatform technology bridging iOS and Android ecosystems.",
    tech: ["KMP", "Jetpack Compose", "SwiftUI", "Koin", "Ktor", "SQLDelight"],
    type: "KMP / 2024-2026",
    appStore: "https://apps.apple.com/us/app/six-flags/id988953433",
    playStore: "https://play.google.com/store/apps/details?id=com.sixflags.android",
    webLink: "https://www.sixflags.com",
    github: "#",
    isPersonal: false,
    downloads: "5M+"
  },
  {
    title: "Circles.Life",
    description: "Developed server-driven UI, mitigating frequent app releases. Migrated from RxJava to Coroutines, increasing test coverage by 70%.",
    tech: ["Android", "Kotlin Coroutines", "MVVM", "Koin", "jUnit"],
    type: "Android / 2022-2024",
    appStore: "#",
    playStore: "https://play.google.com/store/apps/details?id=com.circles.selfcare",
    webLink: "https://www.circles.life",
    github: "#",
    isPersonal: false,
    downloads: "600K+"
  },
  {
    title: "BASICX SPORT",
    description: "Systematically rewrote the entire 100% Java MVC app to a modern modular Kotlin MVVM architecture.",
    tech: ["Android", "Kotlin", "MVVM", "Theming"],
    type: "Android & iOS / 2019-2022",
    appStore: "https://apps.apple.com/us/app/basicx-sport",
    playStore: "https://play.google.com/store/apps/details?id=com.basicx.sportsx",
    webLink: "https://basicxsports.in",
    github: "#",
    isPersonal: false,
    downloads: "10K+"
  },
  {
    title: "Splitwise",
    description: "Started the orginal project of Splitwise in Java which later become a multi-million dollar company",
    tech: ["Android", "Java", "MVC", "Material design"],
    type: "Android / 2015-2016",
    appStore: "#",
    playStore: "https://play.google.com/store/apps/details?id=com.Splitwise.SplitwiseMobile",
    webLink: "https://www.splitwise.com/",
    github: "#",
    isPersonal: false,
    downloads: "10M+"
  },
  {
    title: "WorkXid",
    description: "Built from scratch using Clean Architecture. Managed entire lifecycle from design to release and testing.",
    tech: ["Kotlin", "Clean Architecture", "MVVM"],
    type: "Android / 2021-2022",
    appStore: "#",
    playStore: "https://play.google.com/store/apps/details?id=com.xidcorp.workxid",
    webLink: "https://www.workxid.com/",
    github: "#",
    isPersonal: false,
    downloads: "10K+"
  },
  {
    title: "The Wellness Corner",
    description: "led internal chat system using Socket and implemented fully functional Video Calling leveraging WebRTC.",
    tech: ["Android", "WebRTC", "Sockets"],
    type: "Android / 2016-2018",
    appStore: "#",
    playStore: "https://play.google.com/store/apps/details?id=com.truworth.wellnesscorner&hl=en_IN",
    webLink: "https://www.thewellnesscorner.com/",
    github: "",
    isPersonal: false,
    downloads: "700K+"
  },
  {
    title: "Flixplorer",
    description: "Open-source Jetpack Compose app powered by TMDB, built with Google's recommended architecture.",
    tech: ["Jetpack Compose", "Flow", "Hilt", "Paging 3", "DataStore", "Coil"],
    type: "Open Source / 2024-2026",
    link: "#",
    github: "https://github.com/TheSomeshKumar/Flixplorer",
    isPersonal: true,
    stars: "100+"
  },
  {
    title: "PokePedia",
    description: "Open-source app powered by PokeApi, built with Kotlin Multiplatform and Compose Multiplatform",
    tech: ["KMP", "Compose Multiplatform", "MVI", "Koin", "Ktor", "SQLDelight"],
    type: "Open Source / 2025-2026",
    link: "#",
    github: "https://github.com/TheSomeshKumar/PokePedia",
    isPersonal: true,
    stars: "5"
  },
  {
    title: "PermissionMadeEasy",
    description: "Open-source library to drastically simplify runtime permission handling for Android developers.",
    tech: ["Android", "Kotlin", "Open Source"],
    type: "Open Source / 2018-2021",
    link: "#",
    github: "https://github.com/TheSomeshKumar/PermissionMadeEasy",
    isPersonal: true,
    stars: "15"
  }
];

export default function Projects() {
  const companyProjects = projects.filter(p => !p.isPersonal);
  const personalProjects = projects.filter(p => p.isPersonal);

  const ProjectCard = ({ project, idx }: { project: any, idx: number }) => (
    <motion.div
      key={idx}
      className={styles.cardWrapper}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
    >
      <motion.div
        className={styles.card}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className={styles.cardHeader}>
          <div className={styles.iconWrapper}>
            <Smartphone size={20} />
          </div>
          <span className={styles.projectType}>{project.type}</span>
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>

        <div className={styles.techStack}>
          {project.tech.map((t: string) => (
            <span key={t} className={styles.techBadge}>{t}</span>
          ))}
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.metrics}>
            {project.downloads && (
              <span className={styles.metricBadge} title="App Downloads">
                <Download size={14} />
                {project.downloads}
              </span>
            )}
            {project.stars && (
              <span className={styles.metricBadge} title="GitHub Stars">
                <Star size={14} className={styles.starIcon} />
                {project.stars}
              </span>
            )}
          </div>

          <div className={styles.cardLinks}>
            {project.isPersonal ? (
              project.github && project.github !== "#" && (
                <a href={project.github} className={styles.linkIcon} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                </a>
              )
            ) : (
              <>
                {project.playStore && project.playStore !== "#" && (
                  <a href={project.playStore} className={styles.linkIcon} aria-label="Play Store" target="_blank" rel="noopener noreferrer">
                    <FaGooglePlay size={20} />
                  </a>
                )}
                {project.appStore && project.appStore !== "#" && (
                  <a href={project.appStore} className={styles.linkIcon} aria-label="App Store" target="_blank" rel="noopener noreferrer">
                    <FaApple size={20} />
                  </a>
                )}
                {project.webLink && project.webLink !== "#" && (
                  <a href={project.webLink} className={styles.linkIcon} aria-label="Website" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                  </a>
                )}
                {/* Fallback for projects that use the 'link' property instead */}
                {project.link && project.link !== "#" && !project.playStore && !project.appStore && !project.webLink && (
                  <a href={project.link} className={styles.linkIcon} aria-label="External Link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Works
        </motion.h2>

        <h3 className={styles.subHeading}>Company Owned</h3>
        <div className={styles.grid}>
          {companyProjects.map((project, idx) => <ProjectCard key={project.title} project={project} idx={idx} />)}
        </div>

        <h3 className={styles.subHeading} style={{ marginTop: 'var(--space-2xl)' }}>Personal & Open Source</h3>
        <div className={styles.grid}>
          {personalProjects.map((project, idx) => <ProjectCard key={project.title} project={project} idx={idx} />)}
        </div>
      </div>
    </section>
  );
}
