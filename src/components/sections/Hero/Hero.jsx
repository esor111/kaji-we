import { useRef, useEffect, useState } from 'react';
import { Container, Button, Icon } from '../../common';
import HeroCards from './HeroCards';
import styles from './Hero.module.css';

export default function Hero() {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay failed, fallback to image
        setIsVideoLoaded(false);
      });
    }
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        {/* Fallback Image */}
        <img 
          src="/images/hero/hero-bg.webp" 
          alt="" 
          className={`${styles.bgImage} ${isVideoLoaded ? styles.hidden : ''}`}
        />
        
        {/* Video Background */}
        <video
          ref={videoRef}
          className={`${styles.bgVideo} ${isVideoLoaded ? styles.visible : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoaded}
          poster="/images/hero/hero-bg.webp"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className={styles.overlay} />
        
        {/* Subtle Vignette Effect */}
        <div className={styles.vignette} />
      </div>

      <Container>
        <div className={styles.content}>
          <span className={styles.label}>
            <span className={styles.labelIcon}>★</span>
            Your FRIENDS in Plumbing Heating & Air
          </span>
          <h1 className={styles.title}>
            Plumbing, Heating, and Air Conditioning Services in Springfield, MO & Beyond
          </h1>
          <p className={styles.description}>
            Family-owned and operated since 1978, Lorenz provides reliable plumbing, 
            heating, and air conditioning services to Springfield and surrounding areas.
          </p>

          <ul className={styles.features}>
            <li>
              <span className={styles.checkIcon}>
                <Icon name="checkCircle" size={24} />
              </span>
              <span>45+ Years of Experience</span>
            </li>
            <li>
              <span className={styles.checkIcon}>
                <Icon name="checkCircle" size={24} />
              </span>
              <span>Free Estimates</span>
            </li>
            <li>
              <span className={styles.checkIcon}>
                <Icon name="checkCircle" size={24} />
              </span>
              <span>Financing Available</span>
            </li>
          </ul>

          <div className={styles.reviews}>
            <div className={styles.avatars}>
              <img src="/images/reviews/avatar-1.webp" alt="" />
              <img src="/images/reviews/avatar-2.webp" alt="" />
              <img src="/images/reviews/avatar-3.webp" alt="" />
              <span className={styles.avatarMore}>+</span>
            </div>
            <div className={styles.reviewInfo}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="star" size={18} />
                ))}
              </div>
              <span>200+ Google Reviews</span>
            </div>
          </div>

          <div className={styles.ctaButtons}>
            <Button 
              href="/contact" 
              variant="secondary" 
              size="lg"
              icon={<Icon name="arrowRight" size={18} />}
            >
              Get Free Estimate
            </Button>
            <Button 
              href="tel:4174413517" 
              variant="outlineWhite" 
              size="lg"
              icon={<Icon name="phone" size={18} />}
            >
              (417) 441-3517
            </Button>
          </div>
        </div>
      </Container>

      <HeroCards />
    </section>
  );
}
