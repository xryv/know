"use client";

import { useEffect, useRef } from 'react';
import styles from './Epa.module.css';

const Epa = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      const shapes = animationRef.current.children;
      for (let shape of shapes) {
        // Generating random movement and fading effects
        const randomX = (Math.random() - 0.5) * 60; // Moderate movement
        const randomY = (Math.random() - 0.5) * 60; // Moderate movement
        const opacity = Math.random(); // Random opacity for fading effect
        shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
        shape.style.opacity = opacity; // Changing opacity
        shape.style.transition = 'transform 0.5s ease, opacity 0.5s ease'; // Smooth transitions
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className={styles.phoneticAnimationContainer} ref={animationRef}>
      <div className={`${styles.phoneticShape} ${styles.phoneticShape1}`}></div>
      <div className={`${styles.phoneticShape} ${styles.phoneticShape2}`}></div>
      <div className={`${styles.phoneticShape} ${styles.phoneticShape3}`}></div>
      <div className={`${styles.phoneticShape} ${styles.phoneticShape4}`}></div>
    </div>
  );
};

export default Epa;
