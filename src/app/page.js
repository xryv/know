'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from './components/Footer';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const storySectionRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // GSAP for fade-in effects
    if (storySectionRef.current) {
      import('gsap').then(({ default: gsap }) => {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);
          gsap.fromTo(
            storySectionRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: storySectionRef.current,
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      });
    }
  }, [isOpen]);

  return (
    <div className={styles.container}>
      {/* Navbar Section */}
      <nav className={styles.navbar}>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <span>Language</span>
            <ul className={styles.subMenu}>
              <li><Link href="/language/english">English</Link></li>
              <li><Link href="/language/french">French</Link></li>
              <li><Link href="/language/spanish">Spanish</Link></li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <span>Terms</span>
            <ul className={styles.subMenu}>
              <li><Link href="/terms/general">General Terms</Link></li>
              <li><Link href="/terms/payment">Payment Terms</Link></li>
              <li><Link href="/terms/user">User Agreement</Link></li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <span>Privacy Policy</span>
            <ul className={styles.subMenu}>
              <li><Link href="/privacy/data">Data Privacy</Link></li>
              <li><Link href="/privacy/cookies">Cookie Policy</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Welcome to the Aethereal Nexus
        </h1>
        <p className={styles.heroText}>
          Explore the interconnectedness of reality, where art and technology meet.
        </p>
        <button className="btn btn-dark" onClick={handleToggle}>
          {isOpen ? "Hide Topics" : "Explore Topics"}
        </button>
      </section>

      {/* Topics Section */}
      {isOpen && (
        <section className={styles.topicsSection} ref={storySectionRef}>
          <h2 className={styles.sectionTitle}>Key Topics</h2>
          <ul className={styles.topicsList}>
            <li>
              <Link href="/topic1">
                <a className={styles.topicLink}>Introduction to Quantum Computing</a>
              </Link>
            </li>
            <li>
              <Link href="/topic2">
                <a className={styles.topicLink}>The Mysteries of Black Holes</a>
              </Link>
            </li>
            <li>
              <Link href="/topic3">
                <a className={styles.topicLink}>Artificial Intelligence & Ethics</a>
              </Link>
            </li>
            <li>
              <Link href="/topic4">
                <a className={styles.topicLink}>Exploring the Human Brain</a>
              </Link>
            </li>
            <li>
              <Link href="/topic5">
                <a className={styles.topicLink}>Future of Renewable Energy</a>
              </Link>
            </li>
          </ul>
        </section>
      )}

      {/* Call to Action Section */}
      <section className={styles.callToAction}>
        <h2>Start Your Journey Today</h2>
        <p>Uncover deeper insights and expand your horizons with Aethereal Nexus.</p>
        <Link href="/join">
          <button className="btn btn-primary">Expand even more the Nexus (...) </button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
