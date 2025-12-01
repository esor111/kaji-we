import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  ...props 
}) {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}
