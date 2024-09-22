"use client"; // Mark this component as a Client Component

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(null);
  const [isSubSubmenuOpen, setIsSubSubmenuOpen] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (index) => {
    setIsSubmenuOpen(isSubmenuOpen === index ? null : index);
    setIsSubSubmenuOpen(null); // Close all sub-submenus when opening a new submenu
  };
  const toggleSubSubmenu = (index) => {
    setIsSubSubmenuOpen(isSubSubmenuOpen === index ? null : index);
  };

  return (
    <div className={styles.overlay}>
      <nav className={styles.navbar}>
        <div className={styles.navbarHeader}>
          <button className={styles.navbarToggle} onClick={toggleMenu} aria-label="Toggle navigation">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={`${styles.navItems} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <button
              className={styles.submenuToggle}
              onClick={() => toggleSubmenu(0)}
              aria-expanded={isSubmenuOpen === 0}
              aria-label="Topics"
            >
              TOPICS
            </button>
            <ul className={`${styles.subMenu} ${isSubmenuOpen === 0 ? styles.active : ''}`}>
              <li className={styles.subItem}>
                <button
                  className={styles.subSubmenuToggle}
                  onClick={() => toggleSubSubmenu(0)}
                  aria-expanded={isSubSubmenuOpen === 0}
                >
                  Phonetics & Sound Influence
                </button>
                <ul className={`${styles.subSubMenu} ${isSubSubmenuOpen === 0 ? styles.active : ''}`}>
                  <li><Link href="/phonetics/ambiguity">Phonetic Ambiguity</Link></li>
                  <li><Link href="/phonetics/paronymy">Paronymy</Link></li>
                  <li><Link href="/phonetics/phonosemantics">Phonosemantics</Link></li>
                  <li><Link href="/phonetics/sound-symbolism">Sound Symbolism</Link></li>
                  <li><Link href="/phonetics/psychoacoustics">Psychoacoustic Effect</Link></li>
                </ul>
              </li>
              {/* Add more subtopics similarly */}
              <li className={styles.subItem}>
                <button
                  className={styles.subSubmenuToggle}
                  onClick={() => toggleSubSubmenu(1)}
                  aria-expanded={isSubSubmenuOpen === 1}
                >
                  Subliminal Messaging & Cognitive Influence
                </button>
                <ul className={`${styles.subSubMenu} ${isSubSubmenuOpen === 1 ? styles.active : ''}`}>
                  <li><Link href="/subliminal/suggestion">Subliminal Suggestion</Link></li>
                  <li><Link href="/subliminal/priming">Linguistic Priming</Link></li>
                  <li><Link href="/subliminal/satiation">Semantic Satiation</Link></li>
                  <li><Link href="/subliminal/commands">Embedded Commands</Link></li>
                  <li><Link href="/subliminal/presuppositions">Presuppositions</Link></li>
                </ul>
              </li>
              <li className={styles.subItem}>
                <button
                  className={styles.subSubmenuToggle}
                  onClick={() => toggleSubSubmenu(2)}
                  aria-expanded={isSubSubmenuOpen === 2}
                >
                  Psychological Framing & Persuasion
                </button>
                <ul className={`${styles.subSubMenu} ${isSubSubmenuOpen === 2 ? styles.active : ''}`}>
                  <li><Link href="/framing/double-entendre">Double Entendre</Link></li>
                  <li><Link href="/framing/framing">Framing</Link></li>
                  <li><Link href="/framing/pacing">Pacing & Leading</Link></li>
                  <li><Link href="/framing/consent">Implied Consent</Link></li>
                  <li><Link href="/framing/chunking">Chunking</Link></li>
                </ul>
              </li>
              <li className={styles.subItem}>
                <button
                  className={styles.subSubmenuToggle}
                  onClick={() => toggleSubSubmenu(3)}
                  aria-expanded={isSubSubmenuOpen === 3}
                >
                  Storytelling & Analogies
                </button>
                <ul className={`${styles.subSubMenu} ${isSubSubmenuOpen === 3 ? styles.active : ''}`}>
                  <li><Link href="/storytelling/metaphors">Metaphors & Analogies</Link></li>
                  <li><Link href="/storytelling/sensory-language">Sensory Language</Link></li>
                  <li><Link href="/storytelling/conversational-hypnosis">Conversational Hypnosis</Link></li>
                </ul>
              </li>
              <li className={styles.subItem}>
                <button
                  className={styles.subSubmenuToggle}
                  onClick={() => toggleSubSubmenu(4)}
                  aria-expanded={isSubSubmenuOpen === 4}
                >
                  Repetition & Reinforcement
                </button>
                <ul className={`${styles.subSubMenu} ${isSubSubmenuOpen === 4 ? styles.active : ''}`}>
                  <li><Link href="/repetition">Repetition</Link></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link href="/privacy" className={styles.navLink}>Privacy Policy</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/terms" className={styles.navLink}>Terms of Service</Link>
          </li>
        </ul>
      </nav>
      <div className={`${styles.content} ${isOpen ? styles.contentShifted : ''}`}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Navbar;