import styles from './Container.module.css';

export default function Container({ children, className = '', size = 'default' }) {
  return (
    <div className={`${styles.container} ${styles[size]} ${className}`}>
      {children}
    </div>
  );
}
