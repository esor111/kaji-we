import { Container, SectionHeader, Button, Icon } from '../../common';
import locations from '../../../data/locations.json';
import styles from './ServiceAreas.module.css';

export default function ServiceAreas() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <SectionHeader
            label="Service Areas"
            title="Missouri-Made Service You Can Trust"
            description="We proudly serve Springfield, Branson, and surrounding communities."
            centered
          />

          <div className={styles.cities}>
            {locations.serviceAreas.map((city) => (
              <span key={city} className={styles.city}>{city}</span>
            ))}
          </div>

          <Button href="/contact" variant="primary" icon={<Icon name="arrowRight" size={16} />}>
            Get In Touch
          </Button>
        </div>
      </Container>
    </section>
  );
}
