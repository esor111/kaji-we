import { useState, useEffect } from 'react';
import styles from './MobileBottomBar.module.css';

export default function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.bar} ${isVisible ? styles.visible : ''}`}>
      {/* TikTok */}
      <a 
        href="https://tiktok.com/@lorenzphac" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.item}
        aria-label="Follow us on TikTok"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
        <span>TikTok</span>
      </a>

      {/* Call - Center prominent button */}
      <a 
        href="tel:9864488561" 
        className={styles.callButton}
        aria-label="Call us"
      >
        <div className={styles.callInner}>
          <svg viewBox="0 0 24 24" fill="currentColor" className={styles.callIcon}>
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </div>
      </a>

      {/* Contact Us */}
      <a 
        href="#contact" 
        className={styles.item}
        aria-label="Contact us"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
        <span>Contact</span>
      </a>
    </div>
  );
}
