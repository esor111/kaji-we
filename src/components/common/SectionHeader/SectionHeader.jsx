import styles from './SectionHeader.module.css';

export default function SectionHeader({ 
  label, 
  title, 
  description,
  align = 'left',
  light = false,
  className = '' 
}) {
  return (
    <div className={`${styles.header} ${styles[align]} ${light ? styles.light : ''} ${className}`}>
      {label && <span className={styles.label}>{label}</span>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
