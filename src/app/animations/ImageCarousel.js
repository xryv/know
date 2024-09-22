// src/app/animations/ImageCarousel.js

'use client';

import { useEffect, useState } from 'react';
import styles from './ImageCarousel.module.css';

const images = [
  '/assets/images/pexels-fabiano-rodrigues-794857-1662298.jpg',
  '/assets/images/pexels-gochrisgoxyz-1643409.jpg',
  '/assets/images/pexels-iriser-1379636.jpg',
  '/assets/images/pexels-jarodlovekamp-3791466.jpg',
  '/assets/images/pexels-katja-79053-592077.jpg',
  '/assets/images/pexels-marieke-schonfeld-1309710-2514035.jpg',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Carousel image ${index + 1}`}
          className={`${styles.image} ${index === currentIndex ? styles.active : ''}`}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
