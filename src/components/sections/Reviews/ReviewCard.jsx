import { Icon } from '../../common';
import styles from './ReviewCard.module.css';

export default function ReviewCard({ review }) {
  return (
    <div className={styles.card}>
      <div className={styles.quote}>
        <p>"{review.text}"</p>
      </div>
      <div className={styles.footer}>
        <img src={review.avatar} alt={review.name} className={styles.avatar} />
        <div className={styles.info}>
          <span className={styles.name}>{review.name}</span>
          <div className={styles.rating}>
            {[...Array(review.rating)].map((_, i) => (
              <Icon key={i} name="star" size={14} />
            ))}
          </div>
        </div>
        <Icon name="google" size={24} className={styles.source} />
      </div>
    </div>
  );
}
