import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './LanguageToggle.module.css';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage}
      className={styles.toggle}
      aria-label="Toggle language"
    >
      <span className={language === 'ne' ? styles.active : ''}>ने</span>
      <span className={styles.divider}>/</span>
      <span className={language === 'en' ? styles.active : ''}>EN</span>
    </button>
  );
}
