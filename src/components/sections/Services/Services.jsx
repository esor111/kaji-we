import { Container, SectionHeader, Button, Icon } from '../../common';
import ServiceCard from './ServiceCard';
import services from '../../../data/services.json';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <Container>
        <div className={styles.header}>
          <SectionHeader
            label="हाम्रो सेवाहरू"
            title="Waterproofing Services"
            description="तपाईंको घरलाई पानीबाट जोगाउन हामीसँग सबै प्रकारको waterproofing सेवा उपलब्ध छ।"
          />
          <Button href="#contact" variant="outline" icon={<Icon name="arrowRight" size={16} />}>
            सम्पर्क गर्नुहोस्
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
