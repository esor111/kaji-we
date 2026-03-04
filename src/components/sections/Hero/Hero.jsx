import { useRef, useEffect, useState } from 'react';
import { Container, Button, Icon } from '../../common';
import { useTranslation } from '../../../hooks/useTranslation';
import HeroCards from './HeroCards';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enhanced video playback with smooth loop
    const playVideo = async () => {
      try {
        // Set playback rate for smoother motion (optional)
        video.playbackRate = 1.0;
        
        await video.play();
        setIsVideoPlaying(true);
      } catch (error) {
        console.log('Video autoplay prevented:', error);
        setIsVideoLoaded(false);
      }
    };

    // Handle video loaded
    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      playVideo();
    };

    // Seamless loop - restart slightly before end for smooth transition
    const handleTimeUpdate = () => {
      // Restart 0.3 seconds before end for seamless loop
      if (video.duration - video.currentTime < 0.3) {
        video.currentTime = 0;
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);

    // Preload and start
    video.load();

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        {/* Fallback image */}
        <img 
          src="/images/hero/hero-bg.webp" 
          alt="" 
          className={`${styles.bgImage} ${isVideoLoaded ? styles.hidden : ''}`}
        />
        
        {/* Main video with smooth loop */}
        <video
          ref={videoRef}
          className={`${styles.bgVideo} ${isVideoLoaded ? styles.visible : ''}`}
          muted
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoaded}
          poster="/images/hero/hero-bg.webp"
        >
          <source src="/video/grok-video.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced overlays for better text readability */}
        <div className={styles.colorGrade} />
        <div className={styles.overlay} />
        <div className={styles.vignette} />
      </div>

      <Container>
        <div className={styles.content}>
          <span className={styles.label}>
            <span className={styles.labelIcon}>★</span>
            {t('hero.label')}
          </span>
          <h1 className={styles.title}>
            {t('hero.title')}
          </h1>
          <p className={styles.description}>
            {t('hero.description')}
          </p>

          <ul className={styles.features}>
            <li>
              <span className={styles.checkIcon}>
                <Icon name="checkCircle" size={24} />
              </span>
              <span>{t('hero.experience')}</span>
            </li>
            <li>
              <span className={styles.checkIcon}>
                <Icon name="checkCircle" size={24} />
              </span>
              <span>{t('hero.freeSiteVisit')}</span>
            </li>
            <li>
              <span className={styles.checkIcon}>
                <Icon name="checkCircle" size={24} />
              </span>
              <span>{t('hero.warranty')}</span>
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
              <span>{t('hero.customers')}</span>
            </div>
          </div>

          <div className={styles.ctaButtons}>
            <Button 
              href="#contact" 
              variant="secondary" 
              size="lg"
              icon={<Icon name="arrowRight" size={18} />}
            >
              {t('hero.getQuote')}
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
