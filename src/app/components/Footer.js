import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.footerLinks}>
          <li><Link href="/privacy-policy">PRIVE A SEA POLL ICEY</Link></li>
          <li><Link href="/terms-of-service">T. HERMES OF SIR VICE</Link></li>
          <li><Link href="/contact">SEE ON TACTICAL U.S.</Link></li>
        </ul>
      </div>
      <div className={styles.additionalLinks}>
        <h3>XP LOREM TO EPIC</h3>
        <ul className={styles.footerLinks}>
          {/* Phonetics & Sound Influence */}
          <li><Link href="/phonetics/ambiguity">Phonetic Ambiguity</Link></li>
          <li><Link href="/phonetics/paronymy">Paronymy</Link></li>
          <li><Link href="/phonetics/phonosemantics">Phonosemantics</Link></li>
          <li><Link href="/phonetics/sound-symbolism">Sound Symbolism</Link></li>
          <li><Link href="/phonetics/psychoacoustics">Psychoacoustic Effect</Link></li>
          
          {/* Subliminal Messaging & Cognitive Influence */}
          <li><Link href="/subliminal/suggestion">Subliminal Suggestion</Link></li>
          <li><Link href="/subliminal/priming">Linguistic Priming</Link></li>
          <li><Link href="/subliminal/satiation">Semantic Satiation</Link></li>
          <li><Link href="/subliminal/commands">Embedded Commands</Link></li>
          <li><Link href="/subliminal/presuppositions">Presuppositions</Link></li>

          {/* Psychological Framing & Persuasion */}
          <li><Link href="/framing/double-entendre">Double Entendre</Link></li>
          <li><Link href="/framing/framing">Framing</Link></li>
          <li><Link href="/framing/pacing">Pacing & Leading</Link></li>
          <li><Link href="/framing/consent">Implied Consent</Link></li>
          <li><Link href="/framing/chunking">Chunking</Link></li>

          {/* Storytelling & Analogies */}
          <li><Link href="/storytelling/metaphors">Metaphors & Analogies</Link></li>
          <li><Link href="/storytelling/sensory-language">Sensory Language</Link></li>
          <li><Link href="/storytelling/conversational-hypnosis">Conversational Hypnosis</Link></li>

          {/* Repetition & Reinforcement */}
          <li><Link href="/repetition">Repetition</Link></li>

          {/* Additional Links */}
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/terms-of-service">Terms of Service</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
