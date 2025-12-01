import { Icon } from '../../common';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ service, index }) {
  return (
    <a 
      href={service.link} 
      className={styles.card}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.imageWrapper}>
        <img src={service.image} alt={service.title} />
        <div className={styles.iconBadge}>
          <Icon name={service.icon} size={24} />
        </div>
      </div>
      <div className={styles.content}>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <span className={styles.link}>
          View Service
          <Icon name="arrowRight" size={16} />
        </span>
      </div>
    </a>
  );
}
