import { motion } from 'framer-motion';
import styles from './GalleryCard.module.css';

export default function GalleryCard({ item, language, onClick }) {
  const title = language === 'ne'
    ? (item.title_ne || item.title || '')
    : (item.title_en || item.title || '');

  const hasBeforeAfter = Boolean(item.before_url);

  return (
    <motion.button
      type="button"
      className={styles.card}
      onClick={onClick}
      aria-label={title}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      layoutId={`gallery-card-${item.id}`}
    >
      <div className={styles.imageWrap}>
        <motion.img
          src={item.image_url}
          alt={title}
          loading="lazy"
          className={styles.image}
          layoutId={`gallery-image-${item.id}`}
        />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <span className={styles.location}>{item.location}</span>
            <h3 className={styles.title}>{title}</h3>
          </div>
          <div className={styles.zoomHint} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
        </div>

        <div className={styles.badges}>
          {item.featured && (
            <span className={`${styles.badge} ${styles.badgeFeatured}`}>
              {language === 'ne' ? 'विशेष' : 'Featured'}
            </span>
          )}
          {hasBeforeAfter && (
            <span className={`${styles.badge} ${styles.badgeBeforeAfter}`}>
              {language === 'ne' ? 'पहिले / पछि' : 'Before / After'}
            </span>
          )}
          <span className={styles.badge}>{item.project_type}</span>
        </div>
      </div>
    </motion.button>
  );
}
