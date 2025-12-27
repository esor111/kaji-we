import { useRef, useEffect, useState } from 'react';
import { Container, Button, Icon } from '../../common';
import HeroCards from './HeroCards';
import styles from './Hero.module.css';

export default function Hero() {
  const iframeRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(true);

  useEffect(() => {
    // YouTube iframe is ready immediately
    setIsVideoLoaded(true);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img 
          src="/images/hero/hero-bg.webp" 
          alt="" 
          className={`${styles.bgImage} ${isVideoLoaded ? styles.hidden : ''}`}
        />
        
        <iframe
          ref={iframeRef}
          className={`${styles.bgVideo} ${isVideoLoaded ? styles.visible : ''}`}
          src="https://www.youtube.com/embed/x5u2DtirJT0?autoplay=1&mute=1&loop=1&playlist=x5u2DtirJT0&controls=0&modestbranding=1"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
        <div className={styles.overlay} />
        <div className={styles.vignette} />
      </div>

      <Container>
        <div className={styles.content}>
          <span className={styles.label}>
            <span className={styles.labelIcon}>★</span>
            Nepal को विश्वसनीय Waterproofing सेवा
          </span>
          <h1 className={styles.title}>
            तपाईंको घरलाई पानीबाट जोगाउनुहोस्
          </h1>
          <p className={styles.description}>
            Professional waterproofing solutions for your home and business. 
            Basement, roof, wall, र foundation - सबै प्रकारको waterproofing सेवा।
          </p>

          <ul className={styles.features}>
            <li>
              <span className={styles.checkIcon}>
                <Icon name="checkCircle" size={24} />
              </span>
              <span>१०+ वर्षको अनुभव</span>
            </li>
            <li>
              <span className={styles.checkIcon}>
                <Icon name="checkCircle" size={24} />
              </span>
              <span>Free Site Visit</span>
            </li>
            <li>
              <span className={styles.checkIcon}>
                <Icon name="checkCircle" size={24} />
              </span>
              <span>Warranty Available</span>
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
              <span>२००+ सन्तुष्ट ग्राहक</span>
            </div>
          </div>

          <div className={styles.ctaButtons}>
            <Button 
              href="#contact" 
              variant="secondary" 
              size="lg"
              icon={<Icon name="arrowRight" size={18} />}
            >
              Free Quote पाउनुहोस्
            </Button>
            <Button 
              href="tel:9864488561" 
              variant="outlineWhite" 
              size="lg"
              icon={<Icon name="phone" size={18} />}
            >
              986-448-8561
            </Button>
          </div>
        </div>
      </Container>

      <HeroCards />
    </section>
  );
}
