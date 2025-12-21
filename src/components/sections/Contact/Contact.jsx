import { Container, Button, Icon, BookingForm } from '../../common';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.background}>
        <img src="/images/contact/team-photo.webp" alt="" />
        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2>तपाईंको घरको Waterproofing विशेषज्ञ</h2>
            <p className={styles.description}>
              Free consultation को लागि आज नै सम्पर्क गर्नुहोस्। 
              हामी तपाईंको समस्या बुझ्छौं र उत्तम समाधान दिन्छौं।
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <Icon name="checkCircle" size={20} />
                <span>Free Site Visit</span>
              </div>
              <div className={styles.feature}>
                <Icon name="checkCircle" size={20} />
                <span>No Hidden Charges</span>
              </div>
              <div className={styles.feature}>
                <Icon name="checkCircle" size={20} />
                <span>Warranty Available</span>
              </div>
            </div>
          </div>

          <BookingForm />
        </div>
      </Container>
    </section>
  );
}
