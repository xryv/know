'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './page.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BeldaranBot from './components/BeldaranBot';
import Link from 'next/link';
import Footer from './components/Footer'; 

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const storySectionRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
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
  }, [isOpen]);

  return (
    <div className={styles.container}>
      
      {/* Main Hero Section */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h1
          className={styles.heroTitle}
          whileHover={{ scale: 1.1, color: '#00FF00' }}
        >
          Welcome to the World of <span className={styles.beldaran}>Beldaran</span>
        </motion.h1>
        <motion.p
          className={styles.heroText}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Where Words Work Wonders!
        </motion.p>

        <motion.button
          className="btn btn-dark"
          whileHover={{ scale: 1.1 }}
          onClick={handleToggle}
        >
          {isOpen ? "Hide" : "Tell me more"}
        </motion.button>

        <Link href="/unveil-the-secrets">
          <motion.button
            className="btn btn-success"
            whileHover={{ scale: 1.1 }}
          >
            Join the Adventure
          </motion.button>
        </Link>
      </motion.section>

      {/* Dynamic storytelling section */}
      {isOpen && (
        <motion.section
          className={styles.storySection}
          ref={storySectionRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className={styles.sectionTitle}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            The Sublime Science of Sound
          </motion.h2>
          <p className={styles.sectionText}>
            Let’s talk about <span className={styles.highlight}>phonetic ambiguity</span>. It’s that magical moment when <span className={styles.highlight}>“fire”</span> sounds like <span className={styles.highlight}>“buyer”</span>. Suddenly, you’re contemplating whether your dreams are on sale. Beldaran thrives on this delightful chaos.
          </p>
          <p className={styles.sectionText}>
            Who knew that saying <span className={styles.highlight}>“I want freedom”</span> could conjure visions of a <span className={styles.highlight}>“fridge”</span> full of dreams?
          </p>
        </motion.section>
      )}

      {/* Further Sections */}
      <motion.section
        className={styles.storySection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h2
          className={styles.sectionTitle}
          whileHover={{ scale: 1.05, color: '#ff007f' }}
        >
          The Genius of Unintentional Suggestion
        </motion.h2>
        <p className={styles.sectionText}>
          Why communicate clearly when you can sprinkle in irony? Beldaran invites the unexpected to dance in your mind.
        </p>
      </motion.section>

      <motion.section
        className={styles.storySection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h2
          className={styles.sectionTitle}
          whileHover={{ scale: 1.05, color: '#ff007f' }}
        >
          The Art of Confusing Clarity
        </motion.h2>
        <p className={styles.sectionText}>
          Want your dreams to manifest? Just utter <span className={styles.highlight}>“cheese”</span>. Because nothing screams creativity like dairy.
        </p>
      </motion.section>

      <BeldaranBot />

      {/* Call to Action Section */}
      <motion.section className={styles.callToAction}>
        <h2>Ready to Trailblaze Your Experience?</h2>
        <p>Don't miss out on the chance to reshape your reality with Beldaran. Join now and unlock the secrets waiting for you!</p>
        <Link href="/become-a-trailblazer">
          <motion.button className="btn btn-primary" whileHover={{ scale: 1.1 }}>
            Join the Experience
          </motion.button>
        </Link>
      </motion.section>

      <Footer />  
    </div>
  );
}
