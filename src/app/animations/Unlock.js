"use client";

import { useEffect, useRef } from 'react';
import styles from './Unlock.module.css';

const Unlock = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animateKeys = () => {
      const keys = containerRef.current.children;
      for (let key of keys) {
        const randomX = (Math.random() - 0.5) * 50; // Subtle movement
        const randomY = (Math.random() - 0.5) * 50; // Subtle movement
        const randomRotation = (Math.random() - 0.5) * 15; // Random rotation for effect
        key.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
        key.style.transition = 'transform 0.3s ease'; // Smooth transitions
      }
      requestAnimationFrame(animateKeys);
    };
    requestAnimationFrame(animateKeys);
  }, []);

  return (
    <div className={styles.unlockAnimationContainer} ref={containerRef}>
      <div className={styles.key}>P</div>
      <div className={styles.key}>H</div>
      <div className={styles.key}>O</div>
      <div className={styles.key}>N</div>
      <div className={styles.key}>E</div>
      <div className={styles.key}>T</div>
      <div className={styles.key}>I</div>
      <div className={styles.key}>C</div>
      <div className={styles.key}> </div>
      <div className={styles.key}>A</div>
      <div className={styles.key}>M</div>
      <div className={styles.key}>B</div>
      <div className={styles.key}>I</div>
      <div className={styles.key}>G</div>
      <div className={styles.key}>U</div>
      <div className={styles.key}>I</div>
      <div className={styles.key}>T</div>
      <div className={styles.key}>Y</div>
    </div>
  );
};

export default Unlock;
