import { Container, SectionHeader, Button, Icon } from '../../common';
import { useTranslation } from '../../../hooks/useTranslation';
import ServiceCard from './ServiceCard';
import services from '../../../data/services.json';
import styles from './Services.module.css';

export default function Services() {
  const { t } = useTranslation();
  
  return (
    <section id="services" className={styles.services}>
      <Container>
        <div className={styles.header}>
          <SectionHeader
            label={t('services.label')}
            title={t('services.title')}
            description={t('services.description')}
          />
          <Button href="#contact" variant="outline" icon={<Icon name="arrowRight" size={16} />}>
            {t('services.contact')}
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
