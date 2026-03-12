import { Container, Button, Icon } from '../../common';
import { useTranslation } from '../../../hooks/useTranslation';
import styles from './HonestService.module.css';

export default function HonestService() {
  const { t } = useTranslation();
  
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img src="/images/honest/technician-van.webp" alt="Waterproofing Expert" />
          </div>

          <div className={styles.content}>
            <h2>{t('honestService.title')}</h2>
            <p>{t('honestService.description')}</p>
            <Button href="#contact" variant="primary" icon={<Icon name="arrowRight" size={16} />}>
              {t('honestService.button')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
