import { Container, SectionHeader, Button, Icon } from '../../common';
import styles from './Offers.module.css';

const benefits = [
  'Priority scheduling for members',
  'Annual system tune-ups included',
  '15% discount on repairs',
  'No overtime charges',
  'Extended equipment warranties'
];

export default function Offers() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeader
          label="Offers & Deals"
          title="Save Money, Stay Comfortable"
          align="center"
        />

        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img src="/images/offers/trane-unit.webp" alt="Trane HVAC unit" />
            <div className={styles.badge}>
              <img src="/images/partners/trane.webp" alt="Trane" />
            </div>
          </div>

          <div className={styles.card}>
            <h3>Performance Maintenance Agreement</h3>
            <p>Keep your systems running at peak efficiency with our comprehensive maintenance plan.</p>
            
            <ul className={styles.benefits}>
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <Icon name="checkCircle" size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button href="/maintenance" variant="secondary" icon={<Icon name="arrowRight" size={16} />}>
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
