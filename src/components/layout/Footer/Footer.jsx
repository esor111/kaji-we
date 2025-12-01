import { Container, Icon } from '../../common';
import locations from '../../../data/locations.json';
import styles from './Footer.module.css';

const footerNav = [
  {
    title: 'Plumbing',
    links: [
      { label: 'Plumbing Repair', href: '/plumbing-repair' },
      { label: 'Plumbing Installation', href: '/plumbing-installation' },
      { label: 'Water Softener', href: '/water-softener-replacement' }
    ]
  },
  {
    title: 'Sewer & Drain',
    links: [
      { label: 'Sewer Line Repair', href: '/sewer-line-repair' }
    ]
  },
  {
    title: 'Heating',
    links: [
      { label: 'Furnace Repair', href: '/furnace-repair' },
      { label: 'Furnace Maintenance', href: '/furnace-maintenance' },
      { label: 'Furnace Replacement', href: '/furnace-replacement' },
      { label: 'Heating Installation', href: '/heating-system-installation' }
    ]
  },
  {
    title: 'Air Conditioning',
    links: [
      { label: 'AC Repair', href: '/ac-repair' },
      { label: 'AC Maintenance', href: '/ac-maintenance' },
      { label: 'AC Replacement', href: '/ac-replacement' },
      { label: 'Ductless Systems', href: '/ductless-systems' }
    ]
  },
  {
    title: 'Additional',
    links: [
      { label: 'Controls & Thermostats', href: '/controls-thermostats' },
      { label: 'Additional Services', href: '/additional-services' }
    ]
  },
  {
    title: 'About',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Meet the Team', href: '/meet-the-team' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Partners', href: '/partners' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' }
    ]
  }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src="/images/lorenz-logo-white.svg" alt="Lorenz" className={styles.logo} />
            <span className={styles.emergency}>Emergency Services 24/7</span>
          </div>

          <div className={styles.locations}>
            {locations.offices.map((office) => (
              <div key={office.id} className={styles.location}>
                <h3>{office.name}</h3>
                <p>{office.address}</p>
                <a href={`tel:${office.phone}`}>
                  <Icon name="phone" size={14} />
                  {office.phone}
                </a>
                <a href={`mailto:${office.email}`}>
                  <Icon name="email" size={14} />
                  {office.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        <nav className={styles.megaNav}>
          {footerNav.map((column) => (
            <div key={column.title} className={styles.navColumn}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Lorenz Plumbing Heating & Air. All rights reserved.
          </p>
          <div className={styles.links}>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-conditions">Terms & Conditions</a>
            <a href="/accessibility">Accessibility</a>
          </div>
          <p className={styles.credit}>Site design by Hook Agency</p>
        </div>
      </Container>
    </footer>
  );
}
