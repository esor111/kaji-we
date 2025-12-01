import { Container, Icon } from '../../common';
import styles from './HeroCards.module.css';

const cards = [
  {
    icon: 'calendar',
    title: 'Schedule Free Estimate',
    description: 'Get a no-obligation quote for your project',
    link: '/contact'
  },
  {
    icon: 'check',
    title: 'Performance Maintenance',
    description: 'Keep your systems running efficiently',
    link: '/maintenance'
  },
  {
    icon: 'heating',
    title: 'Free Water Heater Estimate',
    description: 'Upgrade your water heater today',
    link: '/water-heater'
  }
];

export default function HeroCards() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <a key={index} href={card.link} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Icon name={card.icon} size={28} />
              </div>
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <Icon name="arrowRight" size={20} className={styles.arrow} />
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
