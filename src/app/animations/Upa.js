"use client";

import { useEffect, useRef } from 'react';
import styles from './Upa.module.css';

const Upa = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      const shapes = animationRef.current.children;
      for (let shape of shapes) {
        // Generate smooth movement values
        const randomX = (Math.random() - 0.5) * 15; // Slightly larger for more movement
        const randomY = (Math.random() - 0.5) * 15; // Slightly larger for more movement
        shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
        shape.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className={styles.upAnimationContainer} ref={animationRef}>
      <div className={`${styles.upShape} ${styles.upShape1}`}></div>
      <div className={`${styles.upShape} ${styles.upShape2}`}></div>
      <div className={`${styles.upShape} ${styles.upShape3}`}></div>
      <div className={`${styles.upShape} ${styles.upShape4}`}></div>
    </div>
  );
};

export default Upa;
