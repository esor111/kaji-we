import { Container } from '../../common';
import styles from './ProudMembers.module.css';

const members = [
  { name: 'Home Builders Association', logo: '/images/members/hba.webp' },
  { name: 'Springfield Chamber of Commerce', logo: '/images/members/chamber.webp' },
  { name: 'BBB A+ Rating', logo: '/images/members/bbb.webp' }
];

export default function ProudMembers() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>Proud Members Of</h2>
        <div className={styles.logos}>
          {members.map((member) => (
            <div key={member.name} className={styles.logo}>
              <img src={member.logo} alt={member.name} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
