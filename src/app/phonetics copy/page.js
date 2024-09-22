"use client"; // Mark this component as a Client Component

import { useEffect } from 'react';
import styles from './page.module.css'; // Adjust the path if necessary
import Link from 'next/link';

const AnimatedPage = () => {
  useEffect(() => {
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const numberOfParticles = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = 'rgba(0, 255, 0, 0.7)'; // Greenish for phonetics theme
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numberOfParticles; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <canvas id="backgroundCanvas" className={styles.canvas}></canvas>
      <div className={styles.content}>
        <h1>Welcome to Phonetics Exploration</h1>
        <p className={styles.lorem}>
          "In the realm of language, phonetics serves as the cornerstone. 
          It is the art and science of sounds, exploring how they are produced, transmitted, and perceived. 
          As we delve into the intricacies of phonetic structures, we unlock the pathways of communication, 
          understanding the rhythm and melody of speech that connects us all. 
          From articulatory nuances to auditory perceptions, this journey through phonetics reveals 
          the beauty of language as it dances upon our tongues."
        </p>
        <h2>Topics Covered</h2>
        <ul className={styles.topicsList}>
          <li><Link href="/phonetics/ambiguity">Phonetic Ambiguity</Link></li>
          <li><Link href="/phonetics/paronymy">Paronymy</Link></li>
          <li><Link href="/phonetics/phonosemantics">Phonosemantics</Link></li>
          <li><Link href="/phonetics/sound-symbolism">Sound Symbolism</Link></li>
          <li><Link href="/phonetics/psychoacoustics">Psychoacoustic Effect</Link></li>
        </ul>
        <Link href="/" className={styles.backButton}>Back</Link>
      </div>
    </div>
  );
};

export default AnimatedPage;
