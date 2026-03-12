import { useState } from 'react';
import { Container, SectionHeader, Button, Icon } from '../../common';
import { useTranslation } from '../../../hooks/useTranslation';
import ReviewCard from './ReviewCard';
import reviews from '../../../data/reviews.json';
import styles from './Reviews.module.css';

export default function Reviews() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;
  const maxIndex = Math.max(0, reviews.length - reviewsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

  return (
    <section className={styles.reviews}>
      <div className={styles.background}>
        <img src="/images/reviews/van-bg.webp" alt="" />
        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.header}>
          <SectionHeader
            label={t('reviews.label')}
            title={t('reviews.title')}
            light
          />
          <div className={styles.buttons}>
            <Button href="#contact" variant="secondary">
              {t('reviews.writeReview')}
            </Button>
            <Button href="#reviews" variant="outlineWhite">
              {t('reviews.viewAll')}
            </Button>
          </div>
        </div>

        <div className={styles.carousel}>
          <div className={styles.track}>
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        <div className={styles.navigation}>
          <button 
            className={`${styles.navBtn} ${currentIndex === 0 ? styles.disabled : ''}`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            <Icon name="arrowRight" size={24} />
          </button>
          <button 
            className={`${styles.navBtn} ${currentIndex >= maxIndex ? styles.disabled : ''}`}
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next"
          >
            <Icon name="arrowRight" size={24} />
          </button>
        </div>
      </Container>
    </section>
  );
}
