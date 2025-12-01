import { Container, SectionHeader, Button, Icon } from '../../common';
import ServiceCard from './ServiceCard';
import services from '../../../data/services.json';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.services}>
      <Container>
        <div className={styles.header}>
          <SectionHeader
            label="What We Do"
            title="Our Services"
            description="From plumbing repairs to HVAC installations, we've got you covered."
          />
          <Button href="/services" variant="outline" icon={<Icon name="arrowRight" size={16} />}>
            View All Services
          </Button>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
