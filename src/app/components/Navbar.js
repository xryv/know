'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.brandContainer}>
        <h1 className={styles.brandText}>
          MACHINE<span className={styles.redX}>X</span>US
        </h1>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        <a href="/about" className={styles.navLink}>
          <i className="fas fa-rocket"></i> Explore Our Journey
        </a>
        <a href="/services" className={styles.navLink}>
          <i className="fas fa-lightbulb"></i> Innovative Solutions
        </a>
        <a href="/projects" className={styles.navLink}>
          <i className="fas fa-trophy"></i> Our Success Stories
        </a>
        <a href="/contact" className={styles.navLink}>
          <i className="fas fa-envelope"></i> Get in Touch
        </a>
      </nav>
      <button className={styles.burger} onClick={toggleMenu}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>
    </header>
  );
}
