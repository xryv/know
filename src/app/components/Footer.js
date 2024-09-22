import React from 'react';
import styles from './Footer.module.css'; // Adjust the path as needed

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>© {new Date().getFullYear()} Aethereal Nexus All Rights Reserved.</p>
        <nav className={styles.nav}>
          <ul>
            <li><a href="/join-the-adventure">Join the Adventure</a></li>
            <li><a href="/trailblazer">Trailblazer</a></li>
            <li><a href="/unveil-the-secrets">Unveil the Secrets</a></li>
            <li><a href="/discover-the-path">Discover the Path</a></li>
            <li><a href="/your-journey">Your Journey</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
