import { useTranslation } from '../../../hooks/useTranslation';
import styles from './About.module.css';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className={styles.heroSection}>
      {/* Left Side - Blue Content */}
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

      {/* Right Side - Image Area */}
      <div className={styles.imageArea}>
        <div className={styles.circleWrapper}>
          <img 
            src="/images/about/guy.jpg" 
            alt="Founder" 
            className={styles.photo} 
          />

          {/* Ratings Card */}
          <div className={styles.ratingsCard}>
            <div className={styles.rItem}>
              <img src="/images/icons/Google-logo.svg" alt="Google" className={styles.rLogo} />
              <div className={styles.rText}>
                <div className={styles.stars}>★★★★★</div>
                <span className={styles.score}>4.9 RATING</span>
              </div>
            </div>
            <div className={styles.rItem}>
              <img src="/images/icons/facebook-logo.svg" alt="Facebook" className={styles.rLogo} />
              <div className={styles.rText}>
                <div className={styles.stars}>★★★★★</div>
                <span className={styles.score}>90% RCMD</span>
              </div>
            </div>
            <div className={styles.rItem}>
              <img src="/images/icons/angie-logo.svg" alt="Angi" className={styles.rLogo} />
              <div className={styles.rText}>
                <div className={styles.stars}>★★★★★</div>
                <span className={styles.score}>4.5 RATING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
