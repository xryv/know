"use client";

import { useEffect, useRef } from 'react';
import styles from './Tpsl.module.css';

const PlayfulLanguage = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      const shapes = animationRef.current.children;
      for (let shape of shapes) {
        const randomX = (Math.random() - 0.5) * 80; // Adjusted for a more balanced bounce
        const randomY = (Math.random() - 0.5) * 80; // Adjusted for a more balanced bounce
        const randomRotation = Math.random() * 180; // Reduced rotation for less distraction
        shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
        shape.style.transition = 'transform 0.5s ease-in-out'; // Smooth transition
      }
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className={styles.playfulAnimationContainer} ref={animationRef}>
      <div className={`${styles.playfulShape} ${styles.playfulShape1}`}></div>
      <div className={`${styles.playfulShape} ${styles.playfulShape2}`}></div>
      <div className={`${styles.playfulShape} ${styles.playfulShape3}`}></div>
      <div className={`${styles.playfulShape} ${styles.playfulShape4}`}></div>
    </div>
  );
};

export default PlayfulLanguage;
