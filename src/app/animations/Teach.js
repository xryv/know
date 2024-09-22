"use client";

import { useEffect, useRef } from 'react';
import styles from './Teach.module.css';

const Teach = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animateShapes = () => {
      const shapes = containerRef.current.children;
      for (let shape of shapes) {
        const randomX = (Math.random() - 0.5) * 200; // Wider movement
        const randomY = (Math.random() - 0.5) * 200; // Wider movement
        const randomScale = 0.5 + Math.random(); // Scale for emphasis
        const randomDuration = 0.5 + Math.random(); // Random duration for variety
        shape.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale})`;
        shape.style.transition = `transform ${randomDuration}s ease`;
      }
      requestAnimationFrame(animateShapes);
    };
    requestAnimationFrame(animateShapes);
  }, []);

  return (
    <div className={styles.teachAnimationContainer} ref={containerRef}>
      <div className={`${styles.teachShape} ${styles.shape1}`}></div>
      <div className={`${styles.teachShape} ${styles.shape2}`}></div>
      <div className={`${styles.teachShape} ${styles.shape3}`}></div>
      <div className={`${styles.teachShape} ${styles.shape4}`}></div>
    </div>
  );
};

export default Teach;
