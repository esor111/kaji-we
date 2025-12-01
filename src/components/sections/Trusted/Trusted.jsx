import { Container, Button, Icon } from '../../common';
import styles from './Trusted.module.css';

export default function Trusted() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img src="/images/trusted/technician-work.webp" alt="Technician at work" />
          </div>

          <div className={styles.content}>
            <span className={styles.label}>Since 1978</span>
            <h2>Trusted Since 1978</h2>
            <p>
              For over four decades, Lorenz has been the trusted name in plumbing, heating, 
              and air conditioning services in Southwest Missouri. Our commitment to quality 
              workmanship and customer satisfaction has made us the go-to choice for 
              homeowners throughout the region.
            </p>
            <Button href="/contact" variant="outlineWhite" icon={<Icon name="arrowRight" size={16} />}>
              Get In Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
