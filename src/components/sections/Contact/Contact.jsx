import { Container, Button, Icon, BookingForm } from '../../common';
import { useTranslation } from '../../../hooks/useTranslation';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.background}>
        <img src="/images/contact/team-photo.webp" alt="" />
        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2>{t('contact.title')}</h2>
            <p className={styles.description}>
              {t('contact.description')}
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <Icon name="checkCircle" size={20} />
                <span>{t('contact.freeSiteVisit')}</span>
              </div>
              <div className={styles.feature}>
                <Icon name="checkCircle" size={20} />
                <span>{t('contact.noHiddenCharges')}</span>
              </div>
              <div className={styles.feature}>
                <Icon name="checkCircle" size={20} />
                <span>{t('contact.warrantyAvailable')}</span>
              </div>
            </div>
          </div>

          <BookingForm />
        </div>
      </Container>
    </section>
  );
}
