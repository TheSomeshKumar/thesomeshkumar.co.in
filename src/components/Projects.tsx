'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Download, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import styles from './Projects.module.css';

const projects = [
  {
    title: "SixFlags",
    description: "Early adopter of Kotlin Multiplatform technology bridging iOS and Android ecosystems.",
    tech: ["KMP", "Jetpack Compose", "SwiftUI", "Koin", "Ktor", "SQLDelight"],
    type: "KMP / 2024",
    link: "#",
    github: "#",
    isPersonal: false,
    downloads: "5M+"
  },
  {
    title: "Circles.Life",
    description: "Developed server-driven UI, mitigating frequent app releases. Migrated from RxJava to Coroutines, increasing test coverage by 70%.",
    tech: ["Android", "Kotlin Coroutines", "MVVM", "Koin", "jUnit"],
    type: "Android / 2022-2024",
    link: "#",
    github: "#",
    isPersonal: false,
    downloads: "1M+"
  },
  {
    title: "BASICX SPORT",
    description: "Systematically rewrote the entire 100% Java MVC app to a modern modular Kotlin MVVM architecture.",
    tech: ["Android", "Kotlin", "MVVM", "Theming"],
    type: "Android / 2019-2022",
    link: "#",
    github: "#",
    isPersonal: false,
    downloads: "500K+"
  },
  {
    title: "WorkXid OnSite",
    description: "Built from scratch using Clean Architecture. Managed entire lifecycle from design to release and testing.",
    tech: ["Kotlin", "Clean Architecture", "Unit Testing"],
    type: "Android / 2021-2022",
    link: "#",
    github: "#",
    isPersonal: false,
    downloads: "100K+"
  },
  {
    title: "The Wellness Corner",
    description: "Spearheaded internal chat system using Socket and implemented fully functional Video Calling leveraging WebRTC.",
    tech: ["Android", "WebRTC", "Sockets"],
    type: "Android / 2016-2018",
    link: "#",
    github: "#",
    isPersonal: false,
    downloads: "1M+"
  },
  {
    title: "Flixplorer",
    description: "Open-source Jetpack Compose app powered by TMDB, built with Google's recommended architecture.",
    tech: ["Jetpack Compose", "Flow", "Hilt", "Paging 3", "DataStore", "Coil"],
    type: "Open Source / 2023",
    link: "#",
    github: "https://github.com/TheSomeshKumar",
    isPersonal: true,
    stars: "125"
  },
  {
    title: "PermissionMadeEasy",
    description: "Open-source library to drastically simplify runtime permission handling for Android developers.",
    tech: ["Android", "Kotlin", "Open Source"],
    type: "Open Source / 2018-2021",
    link: "#",
    github: "https://github.com/TheSomeshKumar",
    isPersonal: true,
    stars: "80"
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
            <a href={project.github} className={styles.linkIcon} aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href={project.link} className={styles.linkIcon} aria-label="External Link">
              <ExternalLink size={20} />
            </a>
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
