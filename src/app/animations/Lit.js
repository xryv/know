"use client";

import { useEffect, useRef } from 'react';
import styles from './Lit.module.css';

const Lit = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      const letters = textRef.current.children;
      for (let i = 0; i < letters.length; i++) {
        const delay = i * 80; // Staggered animation
        setTimeout(() => {
          letters[i].style.transform = 'translateY(0) rotate(360deg)'; // Add rotation
          letters[i].style.opacity = '1';
          letters[i].style.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
        }, delay);
      }
    };
    requestAnimationFrame(animateText);
  }, []);

  const text = "Phonetic Ambiguity in Literature";
  const letters = text.split('').map((letter, index) => (
    <span key={index} className={styles.literatureText}>{letter}</span>
  ));

  return (
    <div className={styles.literatureAnimationContainer}>
      <h2 ref={textRef}>
        {letters}
      </h2>
    </div>
  );
};

export default Lit;
