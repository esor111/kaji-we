import { Container, Button, Icon } from '../../common';
import styles from './HonestService.module.css';

export default function HonestService() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img src="/images/honest/technician-van.webp" alt="Lorenz technician" />
          </div>

          <div className={styles.content}>
            <h2>Your Source for Honest Heating, Air Conditioning, and Plumbing</h2>
            <p>
              At Lorenz, we believe in doing things the right way. That means honest pricing, 
              quality workmanship, and treating your home like our own. Our team of certified 
              technicians is dedicated to providing you with the best service possible.
            </p>
            <Button href="/contact" variant="primary" icon={<Icon name="arrowRight" size={16} />}>
              Book Your Appointment
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
