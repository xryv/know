"use client";

import { useEffect, useRef } from 'react';
import styles from './Embrace.module.css';

const Embrace = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animateLetters = () => {
      const letters = containerRef.current.children;
      for (let letter of letters) {
        const randomX = (Math.random() - 0.5) * 100; // Subtle movement
        const randomY = (Math.random() - 0.5) * 100; // Subtle movement
        const randomScale = 1 + Math.random(); // Scale for emphasis
        const randomDuration = 0.5 + Math.random(); // Random duration for variety
        letter.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale})`;
        letter.style.transition = `transform ${randomDuration}s ease`;
      }
      requestAnimationFrame(animateLetters);
    };
    requestAnimationFrame(animateLetters);
  }, []);

  return (
    <div className={styles.embraceAnimationContainer} ref={containerRef}>
      <div className={styles.letter}>E</div>
      <div className={styles.letter}>M</div>
      <div className={styles.letter}>B</div>
      <div className={styles.letter}>R</div>
      <div className={styles.letter}>A</div>
      <div className={styles.letter}>C</div>
      <div className={styles.letter}>E</div>
    </div>
  );
};

export default Embrace;
