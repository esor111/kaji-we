import { Container, Button, Icon } from '../../common';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <img src="/images/contact/team-photo.webp" alt="" />
        <div className={styles.overlay} />
      </div>

      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2>Lorenz: Your Friends in Heating Plumbing & Air</h2>
            <Button 
              href="/contact" 
              variant="secondary" 
              size="lg"
              icon={<Icon name="arrowRight" size={18} />}
            >
              Schedule Your Appointment
            </Button>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
