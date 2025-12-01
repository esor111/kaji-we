import { Container, SectionHeader, Button, Icon } from '../../common';
import ReviewCard from './ReviewCard';
import reviews from '../../../data/reviews.json';
import styles from './Reviews.module.css';

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className={styles.background}>
        <img src="/images/reviews/van-bg.webp" alt="" />
        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.header}>
          <SectionHeader
            label="Reviews"
            title="Our Client Stories"
            light
          />
          <div className={styles.buttons}>
            <Button href="/reviews/leave" variant="secondary">
              Leave A Review
            </Button>
            <Button href="/reviews" variant="outlineWhite">
              See All Reviews
            </Button>
          </div>
        </div>

        <div className={styles.carousel}>
          <div className={styles.track}>
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        <div className={styles.navigation}>
          <button className={styles.navBtn} aria-label="Previous">
            <Icon name="arrowRight" size={24} />
          </button>
          <button className={styles.navBtn} aria-label="Next">
            <Icon name="arrowRight" size={24} />
          </button>
        </div>
      </Container>
    </section>
  );
}
