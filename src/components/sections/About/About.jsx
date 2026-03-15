import { useTranslation } from '../../../hooks/useTranslation';
import styles from './About.module.css';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className={styles.heroSection}>
      {/* Full Width Content */}
      <div className={styles.contentBox}>
        <div className={styles.subHeader}>{t('about.label')}</div>
        <h2 className={styles.title}>{t('about.title')}</h2>
        <p className={styles.description}>
          {t('about.description')}
        </p>
        <div className={styles.signOff}>{t('about.signOff')}</div>

        <div className={styles.actionRow}>
          <a href="#contact" className={styles.btn}>
            {t('about.contact')}
            <span className={styles.btnArrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
