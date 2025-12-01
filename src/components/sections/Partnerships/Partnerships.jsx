import { Container, SectionHeader, Button } from '../../common';
import styles from './Partnerships.module.css';

const partners = [
  { name: 'Diamond Contractor Elite', logo: '/images/partners/diamond.webp' },
  { name: 'Trane Comfort Specialist', logo: '/images/partners/trane.webp' },
  { name: 'Generac', logo: '/images/partners/generac.webp' }
];

export default function Partnerships() {
  return (
    <section className={styles.partnerships}>
      <Container>
        <SectionHeader
          label="Partners"
          title="Our Proud Partnerships"
          description="We partner with industry leaders to bring you the best products and services."
          align="center"
        />

        <div className={styles.logos}>
          {partners.map((partner) => (
            <div key={partner.name} className={styles.logo}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Button href="/partners" variant="outline">Learn More</Button>
        </div>
      </Container>
    </section>
  );
}
