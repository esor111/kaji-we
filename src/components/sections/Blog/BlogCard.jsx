import { Icon } from '../../common';
import styles from './BlogCard.module.css';

export default function BlogCard({ post }) {
  return (
    <a href={post.link} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={post.image} alt={post.title} />
        <span className={styles.badge}>{post.readTime}</span>
      </div>
      <div className={styles.content}>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className={styles.link}>
          Keep Reading
          <Icon name="arrowRight" size={16} />
        </span>
      </div>
    </a>
  );
}
