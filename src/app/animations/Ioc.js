"use client";

import { useEffect, useRef } from 'react';
import styles from './Ioc.module.css';

const Ioc = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      const shapes = animationRef.current.children;
      for (let shape of shapes) {
        const randomX = (Math.random() - 0.5) * 20; // Subtle movement
        const randomY = (Math.random() - 0.5) * 20; // Subtle movement
        const randomScale = 0.9 + Math.random() * 0.2; // Scale for emphasis
        shape.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale})`;
        shape.style.transition = 'transform 0.3s ease-in-out'; // Smooth transitions
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className={styles.contextAnimationContainer} ref={animationRef}>
      <div className={`${styles.contextShape} ${styles.contextShape1}`}></div>
      <div className={`${styles.contextShape} ${styles.contextShape2}`}></div>
      <div className={`${styles.contextShape} ${styles.contextShape3}`}></div>
      <div className={`${styles.contextShape} ${styles.contextShape4}`}></div>
    </div>
  );
};

export default Ioc;
